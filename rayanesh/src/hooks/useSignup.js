import {useMutation} from "@tanstack/react-query";
import {postUser} from "../api/users";
import displayToast from "../toast/customToast";
import {useNavigate} from "react-router-dom";
import {useSetUserLoginStatus} from "./useSetUserLoginStatus";

export default function useSignup() {
    const navigate = useNavigate();
    const {setIsRegistered} = useSetUserLoginStatus()
    const mutation = useMutation(
         postUser,
        {
            onSuccess: () => {
                setIsRegistered(true);
                navigate("/blogs");
            },
            onError: (data) => {
                displayToast(data);
            },
        });
    return {mutation};
}