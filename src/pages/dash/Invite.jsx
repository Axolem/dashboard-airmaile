import { useRef, useState } from "react";

import {
  IconLink,
  InviteForm,
  timeLineItems,
  CustomizedMarker,
  CustomizedContent,
} from "../../components/InviteInfo";
import Dashboard from "../Dashboard";
import DataField from "../../components/DataField";
import CardHeader from "../../components/CardHeader";
import DashContentWrapper from "../../components/DashContentWrapper";
import InvitedFriendsTable from "../../components/InvitedFriendsTable";

import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { Timeline } from "primereact/timeline";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { DeferredContent } from "primereact/deferredcontent";

const Invite = () => {
  const toast = useRef();
  const userid = "1234567890";

  const [selectedApps, setSelectedApps] = useState([]);
  const [Apps, setApps] = useState([{ name: "App", id: "123456" }]);
  const [loading, setLoading] = useState(false);

  const claimCredits = () => {
    setLoading(true);

    if (selectedApps === null || selectedApps.length === 0) {
      toastShow("Please select at least one app", "error", "Error");
      setLoading(false);
      return;
    }
    const ids = selectedApps.map((item) => item.id);
    // wait 3 seconds
    setTimeout(() => {
      setLoading(false);
      setSelectedApps(null);
      toastShow("Credits claimed successfully", "success", "Success");
    }, 1000);
  };

  const toastShow = (massage, success, summary) => {
    toast.current.show({
      severity: success,
      summary,
      detail: massage,
      life: 3000,
    });
  };

  return (
    <Dashboard>
      <DashContentWrapper
        routeName={"Invites"}
        text="See who you have invited and get a link to invite friend."
      >
        <Toast ref={toast} />

        {/* Info and where you are */}
        <div className="my-shadow bg-white w-full py-3 px-4 my-3 border-round">
          <CardHeader text="Info and where you are" hide />
          <div className="">
            <Timeline
              value={timeLineItems}
              layout="horizontal"
              align="top"
              content={CustomizedContent}
              className="customized-timeline"
              marker={CustomizedMarker}
            />
          </div>
        </div>

        {/* Invite friends */}
        <div className="my-shadow bg-white w-full py-3 px-4 my-3 border-round">
          <CardHeader text="Invite friends" hide />
          <InviteForm
            head={"Invite by email"}
            text={
              "Insert you friend's email address and send them invitations to use Airmailer."
            }
          >
            <div className="p-inputgroup">
              <InputText
                type="email"
                placeholder="myfriend@mail.com"
                className="border-round p-inputtext-sm py-3 px-3 mr-2"
              />
              <span className="border-round">
                <Button
                  icon="pi pi-send"
                  className="p-button-sm border-round p-3 ml-2"
                />
              </span>
            </div>
          </InviteForm>
          <div className="m-3 h-1rem" />
          <InviteForm
            head={"Share the referral link"}
            text={
              "You can also share your referral link by coping it or sharing it on social media."
            }
          >
            <div className="grid">
              <div className="col-9">
                <span className="p-input-icon-right w-full">
                  <i
                    className="pi pi-copy icon-link text-md icon-link-text border-round"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `Send emails from your front-end. 
                            Start sending emails from your code today, 
                            with our no-server required Email Service.", 
                            https://airmailer.co.za/${userid}
                        `
                      );
                    }}
                  />
                  <InputText
                    placeholder="https://airmailer.co.za/:user_id"
                    className="w-full border-round p-inputtext-sm py-3 px-3"
                    value={`https://airmailer.co.za/${userid}`}
                    contentEditable={false}
                  />
                </span>
              </div>
              <IconLink icon={"pi pi-facebook"} userid={userid} />
              <IconLink icon={"pi pi-linkedin"} userid={userid} />
              <IconLink icon={"pi pi-twitter"} userid={userid} />
            </div>
          </InviteForm>
        </div>

        {/* Metricts */}
        <div className="my-shadow bg-white w-full py-3 px-4 my-3 border-round">
          <CardHeader text="Invite metrics" hide />
          <div>
            <div className="grid">
              <div className="col">
                <DataField
                  color={"#FF6A00"}
                  bg={"#FFF3E0"}
                  icon={"gift"}
                  label={"Invites clicks"}
                  value={"0"}
                />
              </div>
              <div className="col">
                <DataField
                  color={"#551FFF"}
                  bg={"#E8E0FF"}
                  icon={"user-plus"}
                  label={"Invite registered"}
                  value={"0"}
                />
              </div>
              <div className="col">
                <DataField
                  color={"#00B7FE"}
                  bg={"#EAF9FF"}
                  icon={"bolt"}
                  label={"Invites Active"}
                  value={"0"}
                />
              </div>
              <div className="col">
                <DataField
                  color={"#F5315D"}
                  bg={"#FFEBEF"}
                  icon={"shopping-bag"}
                  label={"Total credits"}
                  value={"0"}
                />
              </div>
            </div>
            <div className="grid mt-3">
              <div className="col">
                <div className="flex flex align-items-center bg-indigo-300 px-3 py-3 border-round max-w-max">
                  <i className="pi pi-credit-card text-5xl text-indigo-100" />
                  <span className="pl-3">
                    <p className="m-0 text-800">New Credits:</p>
                    <p className="m-0 text-800 text-2xl text-center">0</p>
                  </span>
                </div>
                <div className="mt-3 flex flex-column">
                  <p className="flex align-items-center">
                    Select app to claim credits to.
                    <Tooltip
                      target=".custom-target-icon"
                      position="top"
                      showDelay={500}
                    />
                    <i
                      className="pi pi-info-circle ml-1 custom-target-icon cursor-pointer"
                      data-pr-tooltip="Credits will be automatically distributed equally and added to the selected app(s). Note: 1 credit = 1 API call."
                      data-pr-position="top"
                    />
                  </p>
                  <MultiSelect
                    value={selectedApps}
                    onChange={(e) => setSelectedApps(e.value)}
                    options={Apps}
                    size="small"
                    optionLabel="name"
                    placeholder="Select Apps"
                    className="w-full md:w-20rem p-0"
                    maxSelectedLabels={3}
                    display="chip"
                  />
                  <Button
                    label="Claim credits"
                    onClick={claimCredits}
                    className="mt-3"
                    loading={loading}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Invited friends */}
        <div className="my-shadow bg-white w-full py-3 px-4 my-3 border-round">
          <CardHeader text="Invited friends" hide />
          <DeferredContent>
            <InvitedFriendsTable id={userid} />
          </DeferredContent>
        </div>
      </DashContentWrapper>
    </Dashboard>
  );
};

export default Invite;
