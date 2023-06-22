import Dashboard from "../Dashboard";
import Separator from "../../components/Separator";
import DataField from "../../components/DataField";
import CardHeader from "../../components/CardHeader";
import ActivityCard from "../../components/ActivityCard";
import LatestCall from "../../components/RecentActivityCard";
import DashContentWrapper from "../../components/DashContentWrapper";

import { Chart } from "primereact/chart";
import { ProgressBar } from "primereact/progressbar";

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
              <CardHeader text="API Calls in last 6 hours" />
              <div style={{ minHeight: "250px" }}>
                <Chart type="line" data={data} options={options} />
              </div>
            </div>

            <div className="flex flex-row justify-content-center align-items-center w-full my-3">
              {/* Total usage */}
              <div className="my-shadow mr-3 flex flex-column bg-white py-3 px-4 w-full border-round h-23rem">
                <CardHeader text="All time usage" />
                <div>
                  <Chart
                    type="doughnut"
                    data={donutData}
                    options={donutOptions}
                  />
                </div>
              </div>

              {/* Avarages */}
              <div className="my-shadow ml-3 flex flex-column bg-white py-3 px-4 w-full border-round h-23rem">
                <CardHeader text="Daily avarages" />
                <div className="">
                  <div>
                    <p className="mt-0">API calls:</p>
                    <ProgressBar
                      value={50}
                      pt={{
                        value: {
                          style: {
                            background:
                              "linear-gradient(to right, #8e2de2, #4a00e0)",
                          },
                        },
                      }}
                      className="border-round"
                      style={{ height: "20px" }}
                    />
                  </div>
                  <div>
                    <p>Email Validations:</p>
                    <ProgressBar
                      value={90}
                      pt={{
                        value: {
                          style: {
                            background:
                              "linear-gradient(to right, #8e2de2, #4a00e0)",
                          },
                        },
                      }}
                      style={{ height: "20px" }}
                      className="border-round"
                    />
                  </div>
                  <div>
                    <p className="mb-0">Most used template:</p>
                    <p className="text-sm mt-0">User welcome</p>
                    <ProgressBar
                      value={70}
                      pt={{
                        value: {
                          style: {
                            background:
                              "linear-gradient(to right, #8e2de2, #4a00e0)",
                          },
                        },
                      }}
                      className="border-round"
                      style={{ height: "20px" }}
                    />
                  </div>
                  <div>
                    <p>Other</p>
                    <ProgressBar
                      mode="indeterminate"
                      className="border-round"
                      style={{ height: "10px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-3 w-4 ">
            {/* Massages */}
            <div className="my-shadow bg-white border-round py-3 px-4 mb-5">
              <CardHeader text="Massages" />
              <div
                className="flex flex-column overflow-scroll hide-scrollbar border-round"
                style={{ height: "430px" }}
              >
                <ActivityCard
                  name="System"
                  key={1}
                  time={"June 22nd 2023, 10:33"}
                  massage={"This is a test massage nothing hectic"}
                />
              </div>
            </div>

            {/* Activity */}
            <div className="my-shadow bg-white border-round py-3 px-4 mt-5">
              <CardHeader text="Recent activity" />
              <div
                className="flex flex-column overflow-scroll hide-scrollbar"
                style={{ height: "300px" }}
              >
                {latestCalls.map((call) => (
                  <LatestCall data={call} />
                ))}
              </div>
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
      tension: 0.4,
    },
    {
      label: "Verified emails",
      data: [100, 200, 30, 500, 20, 30],
      fill: false,
      backgroundColor: "#EAF9FF",
      borderColor: "#00B7FE",
      tension: 0.4,
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

// Donut chart data
const donutData = {
  labels: ["Sent", "Verified", "Failed"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#F5315D", "#00B7FE", "#FF6A00"],
      hoverBackgroundColor: ["#FFEBEF", "#EAF9FF", "#FFF3E0"],
    },
  ],
};

// Doughnut chart options
const donutOptions = {
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
  maintainAspectRatio: true,
  responsive: true,
  cutout: "50%",
};

//Dumy data for lastest calls
const latestCalls = [
  { call: "/verify/code", status: 200, time: "June 22nd 2023, 10:31" },
  { call: "/email/send", status: 404, time: "June 22nd 2023, 10:30" },
  { call: "/verify/", status: 201, time: "June 22nd 2023, 10:28" },
  { call: "/verify/code", status: 200, time: "June 22nd 2023, 10:31" },
  { call: "/email/send", status: 404, time: "June 22nd 2023, 10:30" },
  { call: "/verify/", status: 201, time: "June 22nd 2023, 10:28" },
  { call: "/verify/code", status: 200, time: "June 22nd 2023, 10:31" },
  { call: "/email/send", status: 404, time: "June 22nd 2023, 10:30" },
  { call: "/verify/", status: 201, time: "June 22nd 2023, 10:28" },
  { call: "/verify/code", status: 200, time: "June 22nd 2023, 10:31" },
  { call: "/email/send", status: 404, time: "June 22nd 2023, 10:30" },
  { call: "/verify/", status: 201, time: "June 22nd 2023, 10:28" },
];
