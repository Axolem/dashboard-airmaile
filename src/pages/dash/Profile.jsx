import { useRef, useState } from "react";

import isEmail from "validator/lib/isEmail";

import Dashboard from "../Dashboard";
import CardHeader from "../../components/CardHeader";
//import VerifyPhone from "../../components/VerifyPhone";
import ResetPassword from "../../components/ResetPassword";
import Notifications from "../../components/Notifications";
import DashContentWrapper from "../../components/DashContentWrapper";

import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Inplace, InplaceDisplay, InplaceContent } from "primereact/inplace";

import { useDispatch, useSelector } from "react-redux";
import { UserProfile, useUser } from "@clerk/clerk-react";
import { updateProfile } from "../../state/actions/profile";


const Profile = () => {
  const toast = useRef(null);
  const { user } = useUser();
  const dispatch = useDispatch();

  const { profile } = useSelector((state) => state);

  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(user.primaryEmailAddress.emailAddress);
  // const [visible, setVisible] = useState(false);
  // const [changed, setChanged] = useState(true);

  const accept = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Your account will be permanently deleted in 7 days.",
      life: 3000,
    });
  };

  const confirm = () => {
    confirmDialog({
      message:
        "This action can't be undone. Do you want to delete your account?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept,
    });
  };

  const updateContactEmail = () => {
    setLoading(true);
    if (!isEmail(email)) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Please enter valid email.",
        life: 3000,
      });
      setLoading(false);
      return;
    }

    dispatch(updateProfile("UPDATE_EMAIL", email));
    setTimeout(() => {
      setLoading(false);
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Contact email updated successfully.",
        life: 3000,
      });
    }, 3000);
  };

  // const updatePersonalDetails = () => {
  //   setLoading(true);

  //   if (name === "" || phone === "") {
  //     toast.current.show({
  //       severity: "error",
  //       summary: "Error",
  //       detail: "Please enter your name and phone number.",
  //       life: 3000,
  //     });
  //     setLoading(false);
  //     return;
  //   }

  //   setTimeout(() => {
  //     setLoading(false);
  //     toast.current.show({
  //       severity: "success",
  //       summary: "Success",
  //       detail: "Personal details updated successfully.",
  //       life: 3000,
  //     });
  //   }, 3000);
  // };

  // const verifyPhone = (phone) => {
  //   setLoading(true);
  //   if (phone === "") {
  //     toast.current.show({
  //       severity: "error",
  //       summary: "Error",
  //       detail: "Please enter your phone number.",
  //       life: 3000,
  //     });
  //     setLoading(false);
  //     return;
  //   }

  //   setTimeout(() => {
  //     setLoading(false);
  //     setVisible(true);
  //   }, 3000);
  // };

  return (
    <Dashboard>
      <DashContentWrapper
        routeName="Profile"
        text="Manage your profile and settings"
      >
        <Toast ref={toast} />

        {/* ----------------------- Profile -------------------------------- */}
        <div className=" w-full pb-3 px-0 my-3">
          <UserProfile />
          {/* <CardHeader text="Personal Details" hide />
          <div className="w-20rem">
            <div className="p-fluid">
              <div className="p-field">
                <label htmlFor="name">Name:</label>
                <div className="p-inputgroup flex-1">
                  <span className="p-inputgroup-addon p-2">
                    <i className="pi pi-user " />
                  </span>
                  <InputText
                    id="name"
                    type="text"
                    size="small"
                    className="p-inputtext-sm p-1"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="p-fluid mt-3">
              <div className="p-field">
                <label htmlFor="email-user">Email:</label>
                <div className="p-inputgroup flex-1">
                  <span className="p-inputgroup-addon p-2">
                    <i className="pi pi-at" />
                  </span>
                  <InputText
                    id="email-user"
                    type="email"
                    size="small"
                    className="p-inputtext-sm p-2"
                    placeholder="Email"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="p-fluid mt-3">
              <VerifyPhone
                visible={visible}
                setVisible={setVisible}
                phone={phone}
                verifyPhone={verifyPhone}
              />
              <div className="p-field ">
                <label htmlFor="phone">Phone:</label>
                <div className="p-inputgroup flex-1">
                  <span className="p-inputgroup-addon p-2">
                    <i className="pi pi-phone " />
                  </span>
                  <InputText
                    id="phone"
                    type="text"
                    size="small"
                    className="p-inputtext-sm p-2"
                    placeholder="+27 125 9895"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if ((e.target.value).trim().length > 7) {
                        setChanged(false);
                      } else {
                        setChanged(true);
                      }
                    }}
                  />
                  <Button
                    loading={loading}
                    label="Verify"
                    className="mt-0"
                    icon="pi pi-check"
                    size="small"
                    severity="info"
                    disabled={changed}
                    onClick={() => verifyPhone(phone)}
                  />
                </div>
              </div>
            </div>
            <div>
              <Button
                loading={loading}
                label="Update"
                className="mt-5  mb-2"
                icon="pi pi-check"
                size="small"
                onClick={updatePersonalDetails}
              />
            </div>
          </div>*/}
        </div>

        {/* ------------------------- Contact ------------------------------ */}
        <div className="my-shadow bg-white w-full py-3 px-4 my-3 border-round">
          <CardHeader text="Contact Details" hide />
          <div className="w-20rem">
            <h5 className="text-600 mb-3 mt-0 ">Notifications Email:</h5>

            <div className="p-fluid pl-3">
              <div className="p-field">
                <label htmlFor="email">Email:</label>
                <InputText
                  id="email"
                  type="email"
                  size="small"
                  className="p-inputtext-sm p-2 mt-2"
                  placeholder="Email"
                  value={profile.email || email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <h5 className="text-600 mb-3">Notifications:</h5>
            <Notifications />

            <div className="mb-2">
              <Button
                loading={loading}
                label="Update"
                className="mt-5"
                icon="pi pi-check"
                size="small"
                onClick={updateContactEmail}
              />
            </div>
          </div>
        </div>

        {/* --------------------------- Security ----------------------------*/}

        {false && (
          <div className="my-shadow bg-white w-full py-3 px-4 my-3 border-round">
            <CardHeader text="Security Details" hide />
            {/*  Password Reset */}
            <div className="my-3 border-bottom-1 border-400 pb-3">
              <h5 className="text-700 mt-0">Update password</h5>
              <ResetPassword token={"df4d564ger45y445"} />
            </div>

            {/*  Manage 2FA */}
            <div className="my-3 border-bottom-1 border-400 pb-3">
              <Inplace>
                <InplaceDisplay>
                  <Button
                    loading={loading}
                    label="Enable 2FA"
                    size="small"
                    severity="info"
                    icon="pi pi-shield"
                  />{" "}
                </InplaceDisplay>
                <InplaceContent>
                  <h5 className="text-700">Manage 2FA</h5>
                  <div className="pl-3 pb-5">
                    <CardHeader text="" hide coming={"Comming soon"} />
                  </div>
                </InplaceContent>
              </Inplace>
            </div>

            {/* Delete account */}
            <div className="my-3">
              <Inplace>
                <InplaceDisplay>
                  <Button
                    loading={loading}
                    label="Delete Account"
                    size="small"
                    severity="danger"
                    icon="pi pi-trash"
                  />
                </InplaceDisplay>
                <InplaceContent>
                  <h5 className="text-700">Delete Account</h5>
                  <div className="pl-3  pb-5">
                    <div>
                      <ConfirmDialog />
                      <div className="text-gray-600">
                        <p>Having issues with:</p>
                        <ul>
                          <li>Integration (SDK)</li>
                          <li>API</li>
                          <li>Billing</li>
                          <li>Customisation</li>
                        </ul>
                        <p>
                          Feel free to contact us at{" "}
                          <a
                            href="https://airmailer.co.za/pages/docs/about/contact/"
                            className="text-blue-500"
                            target="_blank"
                            rel="noreferrer"
                          >
                            @help
                          </a>
                        </p>
                        <p className="pt-3">
                          Before you delete your account, please note:
                        </p>

                        <ul>
                          <li>
                            Deleting your account is permanent. You will not be
                            able to recover your account or any of the content
                            or information you have added.
                          </li>
                          <li>
                            We delay deletion a few days after it's requested. A
                            deletion request is cancelled if you log back into
                            your account during this time.
                          </li>
                          <li>
                            It may take up to 90 days to delete data stored in
                            backup systems. Your information isn't accessible on
                            during this time.
                          </li>
                          <li>
                            Copies of some material (example: log records) may
                            remain in our database but are disassociated from
                            personal identifiers.
                          </li>
                        </ul>
                      </div>
                      <Button
                        loading={loading}
                        onClick={confirm}
                        icon="pi pi pi-times"
                        label="Delete my account"
                        severity="danger"
                      />
                    </div>
                  </div>
                </InplaceContent>
              </Inplace>
            </div>
          </div>
        )}
      </DashContentWrapper>
    </Dashboard>
  );
};

export default Profile;
