import DashContentWrapper from "../../components/DashContentWrapper";
import Dashboard from "../Dashboard";

const Templates = () => {
  return (
    <Dashboard>
      <DashContentWrapper routeName="Templates" active={false}>
        <h1>Templates</h1>
      </DashContentWrapper>
    </Dashboard>
  );
};

export default Templates;
