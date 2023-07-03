import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";

import pickRandomItem from "../helpers/random";

import { useNavigate } from "react-router";
import { checkPropTypes } from "prop-types";

const AppCard = ({ name = "", id = "non_existance", data }) => {
  const navigate = useNavigate();

  const colorsArr = ["#1F9DE7", "#F9A52B", "#9e0e86", "#57a801", "#5700a1"];
  const color = pickRandomItem(colorsArr);

  return (
    <div className="my-shadow bg-white border-round py-3 px-4 m-5  w-18rem h-16rem col-6">
      <div className="flex flex-column align-items-center justify-content-center">
        <Avatar
          label={name.charAt(0).toUpperCase()}
          size="xlarge"
          style={{ backgroundColor: color }}
          className="text-white"
        />

        <div className="text-center mt-3">
          <h3 className="m-0">{name}</h3>
        </div>
      </div>

      <div>
        <p className="text-muted">
          Plan: <span>{data.plan}</span>
        </p>
        <p className="text-muted">
          Usage: <span>{`${data.usage.used}/${data.usage.limit}`}</span>
        </p>
      </div>
      <div className="flex justify-content-between align-items-center">
        <ProgressBar
          value={(data.usage.used / data.usage.limit) * 100}
          showValue={true}
          className="h-1rem w-8 mr-1 border-round text-center text-xs"
          color={color}
        />
        <Button
          label="Manage"
          text
          className="p-button-rounded ml-1"
          link
          size="small"
          onClick={() => {
            navigate(id.toString());
          }}
        />
      </div>
    </div>
  );
};

AppCard.propTypes = {
  name: checkPropTypes("string", ""),
  id: checkPropTypes("string", ""),
  data: checkPropTypes("object", {}),
};

export default AppCard;
