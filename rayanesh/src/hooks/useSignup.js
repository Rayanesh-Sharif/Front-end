import {useMutation} from "@tanstack/react-query";
import {postUser} from "../api/users";
import displayToast from "../toast/customToast";
import {useNavigate} from "react-router-dom";

export default function useSignup() {
    const navigate = useNavigate();
    const mutation = useMutation(
         postUser,
        {
            onSuccess: () => {
                navigate("/login");
            },
            onError: (data) => {
                displayToast(data);
            },
        });
    return {mutation};
}