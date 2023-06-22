import { useState } from "react";

import { Tag } from "primereact/tag";

const CardHeader = ({ text, refeshHandeler, coming }) => {
  const [refesh, setRefesh] = useState();

  //make a refesh handeler function to run 3 seconds
  const clickHandeler = () => {
    setRefesh("pi-spin");
    //refeshHandeler()

    //wait 3 seconds
    setTimeout(() => {
      //set refesh to empty string
      setRefesh("");
    }, 3000);
  };

  return (
    <div className="flex flex-row justify-content-between ">
      <h3 className="mt-0">
        {text} {coming && <Tag severity="info" value={coming} rounded />}
      </h3>
      <div onClick={clickHandeler} className="cursor-pointer hovered-refresh">
        <i className={`pi pi-refresh ${refesh}`} />
      </div>
    </div>
  );
};

export default CardHeader;
