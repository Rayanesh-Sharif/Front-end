import {styled} from "@mui/material/styles";
import {Button, Container, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {images} from "../../constants";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useNavigate} from "react-router-dom";


const FormTextField = styled(TextField)(
    {
        marginTop: '0.3rem',
        '& .MuiInput-underline:before': {borderBottomColor: '#038373'},
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {borderBottomColor: '#038373'},
        '& label': {
            color: '#038373',
        },
    }
)
const FormButton = styled(Button)(
    {
        background: 'linear-gradient(323deg, #038373, #00cc8e)',
        marginTop: '1rem',
        marginBottom: '1rem',
    }
)

const LogoContainer = styled(Container)(
    {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '0.6rem',
        marginBottom: '0.6rem'
    }
)

export function Field({id, name, label, formik, inputProps}) {
    return (
        <FormTextField
            fullWidth
            variant='standard'
            id={id}
            name={name}
            label={label}
            value={formik.values[id]}
            onChange={formik.handleChange}
            error={formik.touched[id] && Boolean(formik.errors[id])}
            helperText={formik.touched[id] && formik.errors[id]}
            InputProps={inputProps}
        />
    )
}

export function PasswordField({id, name, label, formik, inputProps}) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <FormTextField
            fullWidth
            variant='standard'
            id={id}
            name={name}
            label={label}
            value={formik.values[id]}
            onChange={formik.handleChange}
            error={formik.touched[id] && Boolean(formik.errors[id])}
            helperText={formik.touched[id] && formik.errors[id]}
            InputProps={{
                ...inputProps,
                type: showPassword ? 'text' : 'password',
                endAdornment: (
                    <IconButton
                        aria-label='toggle password visibility'
                        onClick={() => setShowPassword(!showPassword)}
                        edge='end'
                    >
                        {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                    </IconButton>
                ),
            }}
        />
    )
}

export function SubmitButton({text}) {
    return (
        <FormButton
            type="submit"
            fullWidth
            variant="contained"
        >
            <Typography>
                {text}
            </Typography>
        </FormButton>
    )
}


export function FormLogo() {
    const navigate = useNavigate();
    return (
        <LogoContainer>
            <Button onClick={
                () => navigate('/')
            }>
                <img
                    width='150'
                    height='90'
                    src={images.Logo}
                    alt={'رایانش'}
                    style={{marginLeft: '1rem'}}
                />
            </Button>

        </LogoContainer>
    )
}
