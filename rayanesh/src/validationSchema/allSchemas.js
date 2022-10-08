import * as yup from "yup";

export const signUpSchema = yup.object({
    username: yup
        .string('نام کاربری را وارد کنید')
        .max(20, 'نام کاربری نباید بیشتر از 20 کاراکتر باشد')
        .required('نام کاربری الزامی است!')
    ,
    password: yup
        .string('رمز عبور را وارد کنید')
        .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد')
        .required('رمز عبور الزامی است!')
    ,
    confirmPassword: yup
        .string('تکرار رمز عبور را وارد کنید').required('تکرار رمز عبور الزامی است!')
        .oneOf([yup.ref('password'), null], 'رمز عبور و تکرار آن باید یکسان باشند')
    ,
    email: yup
        .string('ایمیل خود را وارد کنید')
        .email('ایمیل خود را وارد کنید')
        .required('وارد کردن ایمیل اجباری است!')
    ,
})


export const signInSchema = yup.object({
    username: yup
        .string('نام کاربری را وارد کنید')
        .max(20, 'نام کاربری نباید بیشتر از 20 کاراکتر باشد')
        .required('نام کاربری الزامی است!')
    ,
    password: yup
        .string('رمز عبور را وارد کنید')
        .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد')
        .required('رمز عبور الزامی است!')
    ,
})