import { useState, useRef } from "react";
import { Toast } from "primereact/toast";
import { useUser } from "@clerk/clerk-react";
import { InputSwitch } from "primereact/inputswitch";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../state/actions/profile";

const Notifications = () => {
  const toast = useRef(null);
  const { user } = useUser();
  const dispatch = useDispatch();

  const { profile } = useSelector((state) => state);

  const [loading, setLoading] = useState(false);
  const [checked3, setChecked3] = useState(profile?.status);
  const [checked4, setChecked4] = useState(profile?.marketing);
  const [checked2, setChecked2] = useState(profile?.newsletter);
  const [checked1, setChecked1] = useState(profile?.usageEmails);

  const onInputChange = (e, name) => {
    setLoading(true);

    const id = user.id;
    //do fetch here

    dispatch(updateProfile(name, e));

    setTimeout(() => {
      setLoading(false);
      sucess(name, "Success");
    }, 500);
  };

  const sucess = (name = "", state) => {
    toast.current.show({
      severity: state.toLowerCase(),
      summary: state,
      detail: `${name.split("_")[1]} notifications updated successfully.`,
      life: 3000,
    });
  };

  return (
    <div>
      <Toast ref={toast} />
      {/* Usage */}
      <div className="pl-3">
        <div className="flex flex-column">
          <div className="p-fluid">
            <div className="p-field">
              <label htmlFor="phone" className="">
                Usage Emails:
              </label>
              <InputSwitch
                id="phone"
                size="small"
                className="p-inputtext-sm ml-3"
                checked={checked1}
                onChange={(e) => {
                  setChecked1(e.value);
                  onInputChange(e.value, "UPDATE_USAGE");
                }}
                disabled={loading}
              />
            </div>
          </div>
        </div>
        {/* Newsletter */}
        <div className="flex flex-column mt-4">
          <div className="p-fluid">
            <div className="p-field">
              <label htmlFor="phone" className="">
                Newsletter Emails:
              </label>
              <InputSwitch
                id="phone"
                size="small"
                className="p-inputtext-sm ml-3"
                checked={checked2}
                onChange={(e) => {
                  setChecked2(e.value);
                  onInputChange(e.value, "UPDATE_NEWSLETTER");
                }}
                disabled={loading}
              />
            </div>
          </div>
        </div>
        {/* System status */}
        <div className="flex flex-column mt-4">
          <div className="p-fluid">
            <div className="p-field">
              <label htmlFor="phone" className="">
                System status Emails:
              </label>
              <InputSwitch
                id="phone"
                size="small"
                className="p-inputtext-sm ml-3"
                checked={checked3}
                onChange={(e) => {
                  setChecked3(e.value);
                  onInputChange(e.value, "UPDATE_STATUS");
                }}
                disabled={loading}
              />
            </div>
          </div>
        </div>
        {/* Marketing */}
        <div className="flex flex-column mt-4">
          <div className="p-fluid">
            <div className="p-field">
              <label htmlFor="phone" className="">
                Marketing Emails:
              </label>
              <InputSwitch
                id="phone"
                size="small"
                className="p-inputtext-sm ml-3"
                checked={checked4}
                onChange={(e) => {
                  setChecked4(e.value);
                  onInputChange(e.value, "UPDATE_MARKETING");
                }}
                disabled={loading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
