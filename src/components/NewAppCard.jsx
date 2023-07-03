import {
  colors,
  animals,
  starWars,
  countries,
  adjectives,
  uniqueNamesGenerator,
} from "unique-names-generator";

import { useDispatch } from "react-redux";
import { checkPropTypes } from "prop-types";
import { useEffect, useRef, useState } from "react";

import { Chips } from "primereact/chips";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { InputSwitch } from "primereact/inputswitch";

import { addApp } from "../state/actions/app";

const NewAppCard = ({ visible, setVisible }) => {
  const toast = useRef(null);
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);
  const [urls, seturls] = useState([]);
  const [randomName, setRandomName] = useState(null);
  const [checked, setChecked] = useState({
    logemails: false,
    verify: false,
  });

  const generatorName = () => {
    const customConfig = {
      dictionaries: [adjectives, colors, animals, countries, starWars],
      separator: "-",
      length: 3,
    };

    setRandomName(uniqueNamesGenerator(customConfig));
  };

  useEffect(() => {
    generatorName();
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleCreate = () => {
    setLoad(true);
    dispatch(addApp({ name: randomName, urls, settings: checked }))
    setTimeout(() => {
      setLoad(false);
      showSuccess("App created successfully");
      setVisible(false);
    }, 2000);

  };

  const showSuccess = (massage) => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: massage,
      life: 3000,
    });
  };

  // const showWarn = (massage) => {
  //   toast.current.show({
  //     severity: "warn",
  //     summary: "Warning",
  //     detail: massage,
  //     life: 3000,
  //   });
  // };

  // const showError = (massage) => {
  //   toast.current.show({
  //     severity: "error",
  //     summary: "Error",
  //     detail: massage,
  //     life: 3000,
  //   });
  // };

  return (
    <div>
      <Toast ref={toast} />
      <Sidebar
        visible={visible}
        baseZIndex={1_000_000}
        dismissable
        onHide={() => setVisible(false)}
        position="right"
        className="w-full md:w-20rem lg:w-30rem"
      >
        <h1 className="mt-0">Create new app</h1>

        <div>
          <form onSubmit={handleForm}>
            <div>
              {/* User ID */}
              <div className="flex flex-column gap-2">
                <label htmlFor="userid">User ID:</label>
                <InputText
                  disabled
                  placeholder="Disabled"
                  value="ujgd5yr6y5r3"
                  className="p-inputtext-sm"
                  name="userid"
                  id="userid"
                />
              </div>

              {/* Name */}
              <div className="flex mt-5 w-full">
                <div className="flex flex-column gap-2 w-9">
                  <label htmlFor="appname">App Name:</label>
                  <InputText
                    placeholder="Disabled"
                    className="p-inputtext-sm w-full"
                    id="appname"
                    name="appname"
                    value={randomName}
                    onChange={(e) => setRandomName(e.target.value)}
                  />
                </div>
                <Button
                  label="Generate"
                  className="mt-4 ml-2 w-3"
                  onClick={generatorName}
                  size="small"
                />
              </div>

              {/* Accepted URLs */}
              <div className="flex flex-column gap-2 mt-5 w-full">
                <label htmlFor="acceptedUrls">Accepted URLs:</label>
                <Chips
                  size="small"
                  separator=","
                  placeholder="airmailer.co.za"
                  className="p-inputchips-sm w-9"
                  name="acceptedUrls"
                  id="acceptedUrls"
                  value={urls}
                  onChange={(e) => seturls(e.value)}
                />
              </div>

              {/*Settings */}
              <div>
                <div className="flex flex-column gap-2 mt-5 w-full">
                  <label htmlFor="acceptedUrls">Log emails:</label>
                  <InputSwitch
                    className="p-inputswitch-sm ml-5 "
                    checked={checked.logemails}
                    onChange={(e) =>
                      setChecked((prev) => ({ ...prev, logemails: e.value }))
                    }
                  />
                </div>
                <div className="flex flex-column gap-2 mt-5 w-full">
                  <label htmlFor="acceptedUrls">Validate emails:</label>
                  <InputSwitch
                    className="p-inputswitch-sm ml-5 "
                    checked={checked.verify}
                    onChange={(e) =>
                      setChecked((prev) => ({ ...prev, verify: e.value }))
                    }
                  />
                </div>
              </div>
              <Button
                label="Create App"
                className="mt-6 ml-2 w-3"
                size="small"
                value="submit"
                loading={load}
                onClick={handleCreate}
              />
            </div>
          </form>
        </div>
      </Sidebar>
    </div>
  );
};

NewAppCard.propTypes = {
  visible: checkPropTypes("bool", [true, false]),
  setVisible: checkPropTypes("func")
}

export default NewAppCard;
