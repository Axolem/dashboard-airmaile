import moment from "moment/moment";

const DashContentWrapper = (props) => {
  return (
    <div className="min-h-full px-5" style={{ background: "#F5F5F7" }}>
      <div
        role="header"
        className="flex justify-content-between align-items-center align-content-center mb-5"
      >
        <div>
          <h1 className="mb-1">{props.routeName}</h1>
          <p className="text-gray-500 m-0">{props.text}</p>
        </div>
        <div className="flex">
          <i
            className="pi pi-fw pi-calendar mr-2"
            style={{ fontSize: "1.2rem" }}
          />
          {moment().format("DD MMMM YYYY, HH:MM:ss")}
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default DashContentWrapper;
