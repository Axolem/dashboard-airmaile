import { useRef, useState } from "react";

import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Password } from "primereact/password";

const ResetPassword = ({ token }) => {
  const toast = useRef(null);

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = () => {
    setLoading(true);
    if (password !== confirmPassword) {
      showError("Passwords do not match!");
      setLoading(false);
      return;
    }

    //timeout for demo purposes
    setTimeout(() => {
      showSuccess();
      setLoading(false);
    }, 3000);
  };

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Password reset successful",
      life: 3000,
    });
  };

  const showError = (massage) => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: massage,
      life: 3000,
    });
  };

  return (
    <div className="flex flex-column w-20rem mb-7">
      <Toast ref={toast} />
      <div className="mb-5">
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="password" className="">
              New Password:
            </label>
            <Password
              id="password"
              type="password"
              size="small"
              className="p-password-input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>
      </div>

      <div className="mb-5">
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="password" className="">
              Confirm New Password:
            </label>
            <Password
              id="password"
              type="password"
              size="small"
              className="p-password-input"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
        </div>
      </div>
      <div>
        <Button
          label="Update"
          size="small"
          onClick={handleReset}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ResetPassword;