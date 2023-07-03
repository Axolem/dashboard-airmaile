import { useState } from "react";
import { useSelector } from "react-redux";

import Dashboard from "../Dashboard";
import AppCard from "../../components/AppCard";
import NewAppCard from "../../components/NewAppCard";
import DashContentWrapper from "../../components/DashContentWrapper";

const Apps = () => {
  const [visible, setVisible] = useState(false);

  const { apps } = useSelector((state) => state);

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

          {apps.map((app) => (
            <AppCard
              key={app.id}
              icon={"pi pi-user"}
              data={app}
              id={app.id}
              name={app.name}
            />
          ))}
        </div>
      </DashContentWrapper>
    </Dashboard>
  );
};

export default Apps;
