import {styled} from "@mui/material/styles";
import {Button, Container, Typography} from "@mui/material";


export const NoPaddingContainer = styled(Container)({
    padding: '0',
    margin: '0',
    height: '60vh',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '100%',
})

export const TextContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '60%',
    padding: '0',
    textAlign: 'center',
})

export const HomepageButton = styled(Button)({
    backgroundColor: '#ffffff',
    color: '#038a79',
    margin: '10px',
    '&:hover': {
        backgroundColor: '#038a79',
        color: '#ffffff',
    }
})


// responsive typography for h1 variant
export const ResponsiveHeader = styled(Typography)(({theme}) => ({
    fontFamily: 'vazir',
    [theme.breakpoints.down('sm')]: {
        fontSize: '2.3rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3.5rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '4.5rem',
    }
}));

export const ResponsiveBody = styled(Typography)(({theme}) => ({
    fontFamily: 'vazir',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.3rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.6rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.9rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.2rem',
    },
}));