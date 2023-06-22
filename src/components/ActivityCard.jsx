import moment from "moment";

import { Avatar } from "primereact/avatar";
import { Tooltip } from "primereact/tooltip";

const ActivityCard = ({ name, massage, time }) => {
  return (
    <div
      className="flex flex-row justify-content-between  mb-2 p-2 border-round"
      style={{ background: "#F5F5F7" }}
    >
      <div className="w-2">
        <Avatar
          label={name.substring(0, 1).toUpperCase()}
          size="normal"
          style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
          shape="circle"
        />
      </div>
      <div className="ml-2 w-10">
        <p className="m-0 font-light">{name}</p>
        <p className="text-sm my-2">{massage}</p>

        <Tooltip target=".custom-target-icon" position="top">
          <p className="m-0 font-italic text-xs">{time}</p>
        </Tooltip>
        <p className="custom-target-icon m-0 font-italic text-xs">
          {moment(time, "MMMM Do YYYY, h:mm:ss").fromNow()}
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;
