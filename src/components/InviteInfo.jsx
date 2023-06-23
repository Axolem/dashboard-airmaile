import { Link } from "react-router-dom";

// Path: src\components\InviteInfo.jsx
const CustomizedContent = (item) => {
  return (
    <div className="w-11rem text-500 text-center">
      <h5>{item.status}</h5>
      <p>{item.discription}</p>
    </div>
  );
};

const CustomizedMarker = (item) => {
  return (
    <span
      className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1 p-4"
      style={{ backgroundColor: item.color }}
    >
      <i className={item.icon} />
    </span>
  );
};

const InviteForm = ({ children, head, text }) => {
  return (
    <div className="">
      <h4 className="text-900">{head}</h4>
      <p className="text-900">{text}</p>
      <div className="px-3">{children}</div>
    </div>
  );
};

const IconLink = ({ icon, userid }) => {
  const share = () => {
    navigator.share({
      title: "Airmailer",
      text: "Send emails from your front-end. Start sending emails from your code today, with our no-server required Email Service.",
      url: `https://airmailer.co.za/${userid}`,
    });
  };

  return (
    <div className="col flex align-items-center justify-content-center">
      <Link
        onClick={share}
        target="_blank"
        className="icon-link border-round h-2rem w-2rem flex align-items-center no-underline justify-content-center p-2"
      >
        <i className={` text-xl ${icon}`} />
      </Link>
    </div>
  );
};

const timeLineItems = [
  {
    status: "1. Share link",
    icon: "pi pi-share-alt",
    color: "#9C27B0",
    discription: "Share your referral link with your friends.",
  },
  {
    status: "2. Friends sign up",
    icon: "pi pi-user-plus",
    color: "#673AB7",
    discription:
      "Your friends sign up using your referral link and get 1000 credits.",
  },
  {
    status: "3. Earn credits",
    icon: "pi pi-dollar",
    color: "#FF9800",
    discription:
      "You earn 1000 credits for every friend that signs up and you earn 5000 credits for an app that have 5000 API calls. You earn 10 000 credits for an when friends upgrade any of their apps to any paid plan.",
  },
  {
    status: "4. Claim credits",
    icon: "pi pi-check",
    color: "#607D8B",
    discription: "Claim credits to any of your apps.",
  },
];

export {
  CustomizedContent,
  CustomizedMarker,
  timeLineItems,
  InviteForm,
  IconLink,
};
