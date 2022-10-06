import React from 'react';
import * as yup from 'yup';
import {useFormik} from "formik";
import {images} from "../../constants";
import {
    Avatar,
    Box,
    Button, Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid, Link,
    TextField,
    Typography
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const formContainer = {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '3%',
    width: '30%',
    height: '60%'
}

const fieldStyle = {
    mb: '2%',
    mt: '2%'
}


const validationSchema = yup.object({
    username: yup
        .string()
        .max(20)
    ,
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required')
    ,
    email: yup
        .string('ایمیل خود را وارد کنید')
        .email('ایمیل خود را وارد کنید')
        .required('وارد کردن ایمیل اجباری است!')

})


function SignUp() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Container maxWidth="100%" sx={{backgroundImage: `url(${images.Curve})`, height: '100vh', backgroundSize: 'cover', display: 'flex'}}>
            <Container sx={{backgroundColor: 'white'}} component="main"
                       maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Container>
    )

}


/*
*    <div id={'someShit'}
             style={{
                 backgroundImage: `url(${images.Curve})`,
                 width: '100vw',
                 height: '100vh',
                 backgroundSize: 'cover',
                 alignItems: 'center',
                 display: 'flex'
             }}>
            <Container sx={formContainer}>
                <h1>
                    فرم ثبت نام
                </h1>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        sx={fieldStyle}
                        fullWidth
                        variant= 'standard'
                        id="username"
                        name="username"
                        label="نام کاربری"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                    />
                    <TextField
                        sx={fieldStyle}
                        fullWidth
                        variant= 'standard'
                        id="email"
                        name="email"
                        label="آدرس ایمیل"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        sx={{marginBottom: '100px'}}
                        fullWidth
                        variant= 'standard'
                        id="password"
                        name="password"
                        label="رمز"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button color="primary" variant="contained" fullWidth type="submit"    sx={fieldStyle}>
                        Submit
                    </Button>
                </form>
            </Container >
        </div>*/

export default SignUp;