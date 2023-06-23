import moment from "moment/moment";
import Link from "./Link";

const DashContentWrapper = ({routeName, children, text}) => {
  return (
    <div className="min-h-full px-5" style={{ background: "#F5F5F7" }}>
      <div
        role="header"
        className="flex justify-content-between align-items-center align-content-center mb-5"
      >
        <div>
          <h1 className="mb-1">{routeName}</h1>
          <p className="text-gray-500 m-0">{text}</p>
        </div>
        <div className="flex">
          <i
            className="pi pi-fw pi-calendar mr-2"
            style={{ fontSize: "1.2rem" }}
          />
          {moment().format("DD MMMM YYYY, HH:MM:ss")}
        </div>
      </div>
      {children}
      <div
        className="border-top-1 border-bluegray-200 mt-5 text-center mb-2"
        role="footer"
      >
        <div className="flex justify-content-between mb-4 px-8">
          <div>
            <h4 className="text-gray-800">Help links</h4>
            <div className="flex">
              <Link
                to="https://github.com/airmailer/airmailer-sdk"
                icon="pi-github"
                name="Github"
              />
              <Link
                to="https://discord.gg/FYCFCT6Y"
                icon="pi-discord"
                name="Discord"
              />
              <Link
                to="https://airmailer.co.za/pages/docs/"
                icon="pi-book"
                name="Docs"
              />
              <Link
                to="https://github.com/airmailer/airmailer-doc"
                icon="pi-box"
                name="NPM"
              />
            </div>
          </div>
          <div>
            <h4 className="text-gray-800">Links</h4>
            <div className="flex">
              <Link
                to="https://airmailer.co.za/pages/docs/about/legals/"
                icon="pi-key"
                name="Legal"
              />
              <Link
                to="https://airmailer.co.za"
                icon="pi-globe"
                name="Website"
              />
              <Link
                to="https://airmailer.co.za/pages/docs/about/contact/"
                icon="pi-ticket"
                name="Contact us"
              />{" "}
            </div>
          </div>
        </div>
        <p className="text-gray-500 m-0">
          © {moment().year()} - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default DashContentWrapper;
