import {
  colors,
  animals,
  starWars,
  countries,
  adjectives,
  uniqueNamesGenerator,
} from "unique-names-generator";

import { useEffect, useState } from "react";

import { Chips } from "primereact/chips";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { InputSwitch } from "primereact/inputswitch";

const NewAppCard = ({ visible, setVisible }) => {
  const [urls, seturls] = useState([]);
  const [randomName, setRandomName] = useState(null);

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
    console.log(e.target);
  };

  return (
    <div>
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
                
              </div>
            </div>
          </form>
        </div>
      </Sidebar>
    </div>
  );
};

export default NewAppCard;
