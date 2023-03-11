import { useAppSelector } from "./store/store";


function RedusTestDisplay() {
    const users = useAppSelector((state) => state.user.users);

    const displayUsers = (users?.length > 0) ? users[0] : undefined;

    return (
        <div>
            <p>User name: {displayUsers ? displayUsers.first_name : "not set"}</p>
        </div>
    );
}

export default RedusTestDisplay;
