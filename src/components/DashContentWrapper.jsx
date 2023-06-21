import moment, { months } from "moment/moment";

const DashContentWrapper = (props) => {
  return (
    <div className="min-h-full px-5" style={{ background: "#F5F5F7" }}>
      <div
        role="header"
        className="flex justify-content-between align-items-center align-content-center"
      >
        <div>
          <h1>{props.routeName}</h1>
        </div>
        <div>{moment().format("DD MMMM YYYY, HH:MM:SS")}</div>
      </div>
      {props.children}
    </div>
  );
};

export default DashContentWrapper;
