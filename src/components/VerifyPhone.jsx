import { useEffect, useRef, useState } from "react";

import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

const VerifyPhone = ({ visible, setVisible, phone, verifyPhone }) => {
  const toast = useRef(null);

  const [resend, setResend] = useState(true);
  const [seconds, setSeconds] = useState(120);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");
  const [formatCode, setFormatCode] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds === 0) {
        setResend(true);
        return;
      }
      setSeconds((prevSeconds) => prevSeconds - 1);
      setTimeLeft(formatTime(seconds));
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    if (seconds === "00") {
      setResend(false);
    }
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (!visible) {
      return;
    }
    setFormatCode("");
    setSeconds(120);
    setTimeLeft(formatTime(seconds));
  }, [visible]);

  const formatInput = (input) => {
    const digitsOnly = input.replace(/\D/g, "");

    const a = digitsOnly.slice(0, 2);
    const b = digitsOnly.slice(2, 4);
    const c = digitsOnly.slice(4, 6);
    return `${a}-${b}-${c}`;
  };

  const doCodeVerifyAuto = (code) => {
    setLoading(true);

    //time out to simulate server response
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Phone number verified" + code,
        life: 3000,
      });
    }, 3000);
  };

  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast} />
      <Dialog
        header="Verify Phone Number"
        visible={visible}
        style={{ width: "30vw" }}
        onHide={() => setVisible(false)}
        className="p-fluid text-600"
      >
        <p className="mt-0 text-600">
          We have sent a verification code to {phone} enter it below:
        </p>

        <div className="flex flex-column justify-content-center">
          <InputText
            keyfilter="num"
            className="w-100 text-center p-inputtext-sm text-600"
            placeholder="00-00-00"
            value={formatCode}
            onChange={(e) => {
              const strCode = formatInput(e.target.value);
              setFormatCode(strCode);

              if (strCode.length === 8) {
                const digitsOnly = strCode.replace(/\D/g, "");
                doCodeVerifyAuto(digitsOnly);
              }
            }}
            disabled={loading}
          />
          <Button
            label={`Resend code in ${timeLeft}`}
            className="mt-4"
            size="small"
            severity="secondary"
            link
            disabled={resend}
            onClick={() => verifyPhone(phone)}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default VerifyPhone;
