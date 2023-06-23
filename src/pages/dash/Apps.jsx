import { useState } from "react";
import AppCard from "../../components/AppCard";
import DashContentWrapper from "../../components/DashContentWrapper";

import Dashboard from "../Dashboard";
import NewAppCard from "../../components/NewAppCard";

const Apps = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Dashboard>
      <DashContentWrapper
        routeName="Apps"
        text="Create new apps or manage existing"
      >
        <NewAppCard visible={visible} setVisible={setVisible} />
        <div className="grid">
          <div className="my-shadow bg-white border-round py-3 px-4 m-5  w-18rem h-16rem col-6 flex align-items-center justify-content-center">
            <div
              className="flex flex-column align-items-center justify-content-center new-app-card cursor-pointer"
              onClick={() => setVisible(!visible)}
            >
              <div className="flex flex-column align-items-center justify-content-center">
                <i className="pi pi-plus-circle text-6xl text-primary" />
                <p className="text-primary">Create new app</p>
              </div>
            </div>
          </div>

          <AppCard
            icon={"pi pi-user"}
            description={"Manage users and roles"}
            id={1}
            name={"App 1"}
          />
        </div>
      </DashContentWrapper>
    </Dashboard>
  );
};

export default Apps;
