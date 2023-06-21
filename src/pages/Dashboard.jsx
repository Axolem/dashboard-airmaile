import { useState } from "react";

import { Menu } from "primereact/menu";
import { Link } from "react-router-dom";
import { Image } from "primereact/image";

import IconText from "../components/IconText";

const Dashboard = (props) => {
  const [activeTab, setActiveTab] = useState(
    window.location.pathname.split("/")[1] || "home"
  );

  const LinkItem = ({ link, icon }) => {
    return (
      <Link
        to={`/${link.toLowerCase()}`}
        className={`p-menuitem-link my-3 ${
          activeTab.toLowerCase() === link.toLowerCase() ? "bg-primary-50" : ""
        }`}
        onClick={() => {
          setActiveTab(link.toLowerCase());
        }}
        style={{ borderRadius: "30px" }}
      >
        <IconText
          icon={icon}
          text={link}
          isActive={activeTab.toLowerCase() === link.toLowerCase()}
        />
      </Link>
    );
  };

  const items = [
    {
      template: (item) => {
        return (
          <Link
            to={"/"}
            className={`p-menuitem-link my-3 ${
              activeTab === item.label.toLowerCase() ? "bg-primary-50" : ""
            }`}
            onClick={() => setActiveTab(item.label.toLowerCase())}
            style={{ borderRadius: "30px" }}
          >
            <IconText
              icon={item.icon}
              text={item.label}
              isActive={activeTab === item.label.toLowerCase()}
            />
          </Link>
        );
      },
      label: "Home",
      icon: "pi pi-fw pi-desktop",
    },
    {
      template: (item) => (
        <LinkItem
          key={item.label.toLowerCase()}
          link={item.label}
          icon={item.icon}
        />
      ),
      label: "Apps",
      icon: "pi pi-fw pi-th-large",
    },
    {
      template: (item) => (
        <LinkItem
          key={item.label.toLowerCase()}
          link={item.label}
          icon={item.icon}
        />
      ),
      label: "Templates",
      icon: "pi pi-fw pi-book",
    },
    {
      template: (item) => (
        <LinkItem
          key={item.label.toLowerCase()}
          link={item.label}
          icon={item.icon}
        />
      ),
      label: "History",
      icon: "pi pi-fw pi-history",
      iconPlacement: "right",
    },
    {
      template: (item) => (
        <LinkItem
          key={item.label.toLowerCase()}
          link={item.label}
          icon={item.icon}
        />
      ),
      label: "Profile",
      icon: "pi pi-fw pi-user",
    },
    {
      template: (item) => (
        <LinkItem
          key={item.label.toLowerCase()}
          link={item.label}
          icon={item.icon}
        />
      ),
      label: "Invite",
      icon: "pi pi-fw pi-share-alt",
    },
    {
      template: (item) => (
        <Link
          to={"/"}
          className={`p-menuitem-link my-3 ${
            activeTab === item.label.toLowerCase() ? "bg-primary-50" : ""
          }`}
          onClick={() => {
            //doLogout();
            setActiveTab(item.label.toLowerCase());
            console.log("Logged out");
          }}
          style={{ borderRadius: "30px" }}
        >
          <IconText
            icon={item.icon}
            text={item.label}
            isActive={activeTab === item.label.toLowerCase()}
          />
        </Link>
      ),
      label: "Logout",
      icon: "pi pi-fw pi-sign-out",
    },
  ];

  return (
    <div className="flex flex-row">
      <div className="flex flex-column w-2 flex-wrap border-right-1 border-200 h-screen fixed">
        <div className="text-center justify-content-center align-items-center flex">
          <Image
            src="https://cdn-newg.sirv.com/airmailer/dash/logo.png"
            alt="babylon-layout"
            width="80"
            className="pt-4"
          />
        </div>
        <Menu model={items} className="w-full mt-1 px-4 border-none" />
      </div>
      <div className="flex flex-column w-full min-h-screen w-10 absolute right-0">
        {props.children}
      </div>
    </div>
  );
};

export default Dashboard;
