import DashContentWrapper from "../../components/DashContentWrapper";
import Dashboard from "../Dashboard";

const Home = () => {
  return (
    <Dashboard>
      <DashContentWrapper routeName='Dashbord'>
        <h1>Home</h1>
      </DashContentWrapper>
    </Dashboard>
  );
};

export default Home;
