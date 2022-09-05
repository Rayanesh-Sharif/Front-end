// component get blog return a grid with avatar and relative time of blog and reading time
import {Avatar, Grid, Typography} from "@mui/material";
import {BsCalendar2Event} from 'react-icons/bs';
import {BiTime} from 'react-icons/bi';
import {relativeDate} from "../helpers/relativeDate";

const BlogMeta = ({blog}) => {
    return (
        <Grid dir={'rtl'} container alignItems="center" spacing={1}>
            <Grid item columns={4}>
                <Avatar src={blog.user.image}/>
            </Grid>
            <Grid item columns={8}>
                <Typography variant={'body2'}>{blog.user.name}</Typography>
                <Typography variant={'caption'}>
                    <BsCalendar2Event/>
                    {
                        `\t${relativeDate(new Date(blog.date))}`
                    }
                    <BiTime/>
                    {
                        `\t${blog.read_time}`
                    }
                </Typography>
            </Grid>
        </Grid>
    )
}

export default BlogMeta