// component get blog return a grid with avatar and relative time of blog and reading time
import {Avatar, createTheme, Grid, Typography} from "@mui/material";
import {BsCalendar2Event} from 'react-icons/bs';
import {BiTime} from 'react-icons/bi';
import {relativeDate} from "../../helpers/relativeDate";
import FarsiNumber from "./FarsiNumber";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Vazir',
            'IRANSans'
        ].join(','),
    },
});

const BlogMeta = ({blog}) => {
    return (
            <Grid dir={'rtl'} container alignItems="center" spacing={1}>
                <Grid item columns={4}>
                    <Avatar src={blog.user.image}/>
                </Grid>
                <Grid item columns={8}>
                    <Typography display={'flex'} variant={'caption'} fontWeight={'bold'} >{blog.user.username}</Typography>
                    <Typography color={'textSecondary'} variant={'caption'}>
                        <BsCalendar2Event/> <FarsiNumber number={relativeDate(new Date(blog.date))}/>
                        <BiTime/> <FarsiNumber number={blog.read_time}/>
                    </Typography>
                </Grid>
            </Grid>
    )
}

export default BlogMeta