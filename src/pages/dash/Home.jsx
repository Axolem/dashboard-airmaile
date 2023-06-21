import Dashboard from "../Dashboard";
import Separator from "../../components/Separator";
import DataField from "../../components/DataField";
import DashContentWrapper from "../../components/DashContentWrapper";

import { Chart } from "primereact/chart";

const Home = () => {
  return (
    <Dashboard>
      <DashContentWrapper
        routeName="Dashboad"
        text="Information about your current plan and usages"
      >
        <div className="flex flex-row justify-content-between">
          <div className="flex flex-column align-items-center w-8 mr-3">
            {/* Apps count */}
            <div className="my-shadow flex flex-row justify-content-between align-items-center bg-white w-full h-5rem py-3 px-4 border-round mb-3">
              <DataField
                color={"#FF6A00"}
                bg={"#FFF3E0"}
                icon={"th-large"}
                label={"Apps"}
                value={"8"}
              />
              <Separator />
              <DataField
                color={"#551FFF"}
                bg={"#E8E0FF"}
                icon={"sort-alt"}
                label={"Requests"}
                value={"8588"}
              />
              <Separator />
              <DataField
                color={"#00B7FE"}
                bg={"#EAF9FF"}
                icon={"check-square"}
                label={"Verified"}
                value={"82"}
              />
              <Separator />
              <DataField
                color={"#F5315D"}
                bg={"#FFEBEF"}
                icon={"send"}
                label={"Sent"}
                value={"5889"}
              />
            </div>

            {/* API calls */}
            <div className="my-shadow bg-white w-full py-3 px-4 my-3 border-round">
              <div className="flex flex-row justify-content-between">
                <h3 className="mt-0">API Calls in last 6 hours</h3>
                <i className="pi pi-refresh" />
              </div>
              <div>
                <Chart type="line" data={data} options={options} />
              </div>
            </div>

            <div className="flex flex-row justify-content-center align-items-center w-full my-3">
              {/* Total usage */}
              <div className="my-shadow mr-3 flex flex-column justify-content-center align-items-center bg-white py-3 px-4 w-full border-round"></div>

              {/* Current plan */}
              <div className="my-shadow ml-3 flex flex-column justify-content-center align-items-center bg-white py-3 px-4 w-full border-round"></div>
            </div>
          </div>

          {/* Activity */}
          <div className="my-shadow w-4 bg-white ml-3 border-round py-3 px-4">
            <div className="flex flex-row justify-content-between ">
              <h3 className="mt-0">Activity</h3>
              <i className="pi pi-refresh" />
            </div>
          </div>
        </div>
      </DashContentWrapper>
    </Dashboard>
  );
};

export default Home;

// dummy data for chart component from PrimeReact
const data = {
  labels: ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00"],
  datasets: [
    {
      label: "Sent emails",
      data: [102, 390, 3, 150, 400, 300],
      fill: false,
      backgroundColor: "#E8E0FF",
      borderColor: "#551FFF",
      tension: 0.4
    },
    {
      label: "Verified emails",
      data: [100, 200, 30, 500, 20, 30],
      fill: false,
      backgroundColor: "#EAF9FF",
      borderColor: "#00B7FE",
      tension: 0.4
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          stepSize: 5,
        },
      },
    ],
  },
};
