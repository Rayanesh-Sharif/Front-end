import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {images} from "../constants";
import {styled} from "@mui/material/styles";
import {useNavigate} from "react-router-dom";
import {useSetUserLoginStatus} from "../hooks/useSetUserLoginStatus";

const pages = [
    {
        title: 'صفحه اصلی',
        path: '/',
    },
    {
        title: 'درباره ما',
        path: '/about',
    },
    {
        title: 'رایان نامه',
        path: '/mail',
    },
    {
        title: 'بلاگ ها',
        path: '/blogs',
    }
];

const ColorAppBar = styled(AppBar)(({theme}) => ({
    backgroundColor: '#14937e'
}));


const SignUpLoginButton = styled(Button)(
    {
        color: '#14937e',
        backgroundColor: 'white',
        borderColor: 'white',
        '&:hover': {
            backgroundColor: 'white',
            borderColor: 'white'
        }
    }
)

const NavbarSection = () => {

    const {isRegistered} = useSetUserLoginStatus();


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <ColorAppBar dir={'rtl'} position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img
                        width='50'
                        height='30'
                        src={images.Logo}
                        alt={'رایانش'}
                        style={{marginLeft: '1rem'}}
                    />

                    {/* for extra-small size screens*/}
                    <Box sx={{marginRight: 1, flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {
                                pages?.map((item) => (
                                    <MenuItem key={item.title} onClick={
                                        () => {
                                            navigate(item.path);
                                        }
                                    }>
                                        <Typography textAlign="center">{item.title}</Typography>
                                    </MenuItem>
                                ))}
                        </Menu>
                    </Box>


                    {/* for md and bigger size screens*/}
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages?.map((item) => (
                            <Button
                                key={item.title}
                                onClick={
                                    () => {
                                        navigate(item.path);
                                    }
                                }
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {item.title}
                            </Button>
                        ))}
                    </Box>

                    <Box>
                        {!isRegistered && <SignUpLoginButton color={'success'} variant='contained' onClick={
                            () => {
                                navigate('/signup');
                            }
                        }>
                            <Typography variant={'body1'}>
                                ثبت نام/ورود
                            </Typography>
                        </SignUpLoginButton>}
                        {isRegistered &&
                            <Avatar
                                alt="something shit"
                                src="/static/images/avatar/2.jpg"
                            />
                        }
                    </Box>
                </Toolbar>
            </Container>
        </ColorAppBar>
    );
};
export default NavbarSection;
