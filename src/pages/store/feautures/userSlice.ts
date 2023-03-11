import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../models";

interface UserState{
    users: User[];
}

const initialState : UserState = {
    users: []
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action : PayloadAction<User>) => {
            state.users.push({
                id: action.payload.id,
                first_name: action.payload.first_name,
                email: action.payload.email,
                last_name: action.payload.last_name
            })
        },
    }
});

export default userSlice.reducer;
export const {addUser} = userSlice.actions;