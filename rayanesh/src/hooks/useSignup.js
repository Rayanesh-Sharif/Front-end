import {useMutation} from "@tanstack/react-query";
import {postUser} from "../api/users";
import successToast from "../toast/customToast";
import {useNavigate} from "react-router-dom";
import {useSetUserLoginStatus} from "./useSetUserLoginStatus";

export default function useSignup() {
    const navigate = useNavigate();
    const mutation = useMutation(
         postUser,
        {
            onSuccess: () => {
                successToast('ثبت نام با موفقیت انجام شد')
                navigate("/login");
            },
            onError: (data) => {
                successToast(data);
            },
        });
    return {mutation};
}