import { useContext } from "react";
import { loginContext } from '../context/LoginContextProvider';
export function useLogin() {
    const context = useContext(loginContext);

    if (context === undefined) {
        throw new Error("useForm must be used within a FormContextProvider");
    }
    return context;
}