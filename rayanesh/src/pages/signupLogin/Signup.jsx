import React, {useState} from 'react';
import {useFormik} from "formik";
import {
    Avatar,
    Box,
    Container,
    CssBaseline,
    Typography
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import displayToast from "../../toast/customToast";
import useSignup from "../../hooks/useSignup";
import {Field, FormLogo, PasswordField, SubmitButton} from "../../components/general/FormComponent";
import {images} from "../../constants";
import {signUpSchema} from "../../validationSchema/allSchemas";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";


const mainContainerStyle = {
    backgroundImage: `url(${images.Curve})`,
    height: '100vh',
    backgroundSize: 'cover',
    display: 'flex'
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    borderRadius: '1rem',
    backgroundColor: 'white'
}


function Signup() {
    const {mutation} = useSignup();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            email: '',
            confirmPassword: ''
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            displayToast('ثبت نام با موفقیت انجام شد')
            const user = {
                username: values.username,
                password: values.password,
                email: values.email
            }
            console.log(mutation)
            mutation.mutate(user)
        },
    });

    return (
        <Container maxWidth="100%" sx={mainContainerStyle}>
            <Container sx={{backgroundColor: 'inherit'}} component="main"
                       maxWidth="xs">
                <FormLogo/>
                <CssBaseline/>
                <Box sx={formStyle}>
                    <Avatar sx={{width: 56, height: 56, bgcolor: '#038373'}}>
                        <PersonIcon sx={{fontSize: 50}}/>
                    </Avatar>
                    <Typography component="h1" variant="h6">
                        به جمع ما بپیوندید
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <Field id={'username'} name={'username'} label={'نام کاربری'} formik={formik}/>
                        <Field id={'email'} name={'email'} label={'آدرس ایمیل'} formik={formik}/>
                        <PasswordField id={'password'} name={'password'} label={'رمز عبور'} formik={formik}/>
                        <Field id={'confirmPassword'} name={'confirmPassword'} label={'تکرار رمز'} formik={formik}/>
                        <SubmitButton text={'ثبت نام'}/>
                    </form>

                    <Container sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                            <Link to='/login'>
                                <Typography variant='caption'>
                                    قبلا حساب کاربری ساخته اید؟
                                </Typography>
                            </Link>
                    </Container>
                </Box>
            </Container>
        </Container>
    )
}

export default Signup;