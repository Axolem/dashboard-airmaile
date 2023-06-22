import moment from "moment";

import { Tag } from "primereact/tag";

const LatestCall = ({ data }) => {
  let icon = "";
  let color = "";

  if (data.status === 200) {
    icon = "pi pi-check";
    color = "success";
  } else if (data.status === 404) {
    icon = "pi pi-times";
    color = "danger";
  } else if (data.status === 201) {
    icon = "pi pi-exclamation-triangle";
    color = "warning";
  }

  return (
    <div className="my-1 flex align-items-center">
      <Tag className="mr-2" icon={icon} severity={color} value={data.status} />
      <span>{data.call}</span>
      <span className="m-0 ml-2 font-italic text-xs">{moment(data.time, "MMMM Do YYYY, h:mm:ss").fromNow()}</span>
    </div>
  );
};

export default LatestCall;
