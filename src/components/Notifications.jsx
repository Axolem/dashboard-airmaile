import { useState, useRef } from "react";

import { Toast } from "primereact/toast";
import { InputSwitch } from "primereact/inputswitch";

const Notifications = () => {
  const toast = useRef(null);

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [loading, setLoading] = useState(false);

  const onInputChange = (e, name) => {
    setLoading(true);
    console.log(e.value, name);
    setTimeout(() => {
      setLoading(false);
      sucess(name, "Success");
    }, 1000);
  };

  const sucess = (name, state) => {
    toast.current.show({
      severity: state.toLowerCase(),
      summary: state,
      detail: `${name} notifications updated successfully.`,
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
                  onInputChange(e, "usage");
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
                  onInputChange(e, "newsletter");
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
                  onInputChange(e, "status");
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
                  onInputChange(e, "marketing");
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
