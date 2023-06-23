import { useRef } from "react";

import Dashboard from "../Dashboard";
import CardHeader from "../../components/CardHeader";
import DashContentWrapper from "../../components/DashContentWrapper";

import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Inplace, InplaceDisplay, InplaceContent } from "primereact/inplace";
import ResetPassword from "../../components/ResetPassword";

const Profile = () => {
  const toast = useRef(null);

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

  return (
    <Dashboard>
      <DashContentWrapper
        routeName="Profile"
        text="Manage your profile and settings"
      >
        <Toast ref={toast} />

        {/* Profile */}
        <div className="my-shadow bg-white w-full py-3 px-4 my-3 border-round">
          <CardHeader text="Personal Details" hide />
          <div></div>
        </div>

        {/* Contact */}
        <div className="my-shadow bg-white w-full py-3 px-4 my-3 border-round">
          <CardHeader text="Contact Details" hide />
          <div></div>
        </div>

        {/* Security */}
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
                <Button label="Enable 2FA" size="small" severity="info" />{" "}
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
                <Button label="Delete Account" size="small" severity="danger" />
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
                          able to recover your account or any of the content or
                          information you have added.
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
                      onClick={confirm}
                      icon="pi pi-times"
                      label="Delete my account"
                      severity="danger"
                    />
                  </div>
                </div>
              </InplaceContent>
            </Inplace>
          </div>
        </div>
      </DashContentWrapper>
    </Dashboard>
  );
};

export default Profile;
