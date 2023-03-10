import {useMutation} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {postUser} from "../api/users";
import successToast from "../toast/customToast";

export default function useCreatePost() {
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