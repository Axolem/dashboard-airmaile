import DashContentWrapper from "../../components/DashContentWrapper";
import Dashboard from "../Dashboard";

const Invite = () => {
    return (
        <Dashboard >
            <DashContentWrapper routeName={"Invites"} text="See who you have invited and get a link to invite friend.">
                <h1>Invite</h1>
            </DashContentWrapper>
        </Dashboard>
    );
}

export default Invite;