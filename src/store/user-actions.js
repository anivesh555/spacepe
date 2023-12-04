import { userActions } from "./userslice";
import axios from "axios";


export const getAllUserData = (pageNo = 1, limit = 10) => {
    return async (dispatch) => {
        try {
            console.log("ghitting get all user data ")
            const headers = { "Content-Type": "application/json" }
            const axiosInstance = axios.create({
                baseURL: "http://localhost:5050/",
                timeout: 100000,
                headers,
            });
            const data = await axiosInstance.get('user');
            console.log(data, "====")
            await dispatch(userActions.getAllUserData(data.data));
        } catch (error) {
            console.log("error", error)
        } finally {
            console.log("in finnallly ")
        }
    };
};
