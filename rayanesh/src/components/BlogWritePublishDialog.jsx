import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    TextField, Typography
} from "@mui/material";


export default function BlogWritePublishDialog({open, setOpen}) {
    const handleClose = () => setOpen(false)
    return (
        <Dialog sx={{direction: 'rtl'}} open={open} onClose={handleClose}>
            <DialogTitle>انتشار مطلب</DialogTitle>
            <DialogContent>
                <DialogContentText mb={'5%'}>
                    مطلب شما در حال حاضر در حالت پیش‌نویس قرار دارد. برای انتشار مطلب، لطفا عنوان و توضیحات مطلب را وارد
                    کنید.
                </DialogContentText>
                <Grid container spacing={2}>
                    <Grid sx={{direction: 'rtl'}} item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="title"
                            label="عنوان مطلب"
                            name="title"
                            autoComplete="title"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="description"
                            label="توضیحات مطلب"
                            name="description"
                            autoComplete="description"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <input
                            accept="image/*"
                            type="file"
                            id="select-image"
                            style={{ display: 'none' }}
                        />
                        <label htmlFor="select-image">
                            <Button variant="contained" color="primary" component="span">
                                Upload Image
                            </Button>
                        </label>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button color={'error'} onClick={handleClose}>انصراف</Button>
                <Button color={'success'} onClick={handleClose}>انتشار</Button>
            </DialogActions>
        </Dialog>
    )
}