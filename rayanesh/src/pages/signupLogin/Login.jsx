import React from 'react';
import {useFormik} from "formik";
import {
    Avatar,
    Box,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel, Grid,
    InputAdornment,
    Typography
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import displayToast from "../../toast/customToast";
import useSignup from "../../hooks/useSignup";
import {Field, FormLogo, PasswordField, SubmitButton} from "../../components/general/FormComponent";
import {images} from "../../constants";
import {signInSchema, signUpSchema} from "../../validationSchema/allSchemas";
import {Link, Router} from "react-router-dom";


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


function Login() {

    const {sendSignInInfo} = useSignup();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            rememberMe: false
        },
        validationSchema: signInSchema,
        onSubmit: (values) => {
            displayToast('به رایانش خوش آمدید')
            sendSignInInfo(values)
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
                        <LoginIcon sx={{fontSize: 40}}/>
                    </Avatar>
                    <Typography component="h1" variant="h6">
                        به رایانش خوش آمدید!
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <Field id={'username'} name={'username'} label={'نام کاربری'} formik={formik}/>
                        <PasswordField id={'password'} name={'password'} label={'رمز عبور'} formik={formik}/>
                        <FormControlLabel
                            sx={{marginTop: '0.3rem'}}
                            control={<Checkbox
                                value="remember"
                                id="rememberMe"
                                checked={formik.values.rememberMe}
                                onChange={formik.handleChange}
                            />}
                            label="مرا به خاطر بسپار"
                        />
                        <SubmitButton text={'ورود'}/>
                    </form>
                    <Grid container>
                        <Grid item xs>
                            <Link to='..'>
                                <Typography variant="caption">
                                    {'رمز عبور خود را فراموش کرده اید؟'}
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to='/signup' >
                                <Typography variant="caption">
                                    {"عضو نیستید؟ ثبت نام کنید"}
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Container>
    )
}

export default Login;