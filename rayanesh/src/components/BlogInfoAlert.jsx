import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

export default function BlogInfoAlert() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: "100%", marginTop: 2 }}>
      <Collapse in={open}>
        <Alert
          severity={"info"}
          action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
          }
          sx={{ mb: 2, "& .MuiAlert-action": {marginRight: 'auto', marginLeft: 0} }}
        >
          <Typography sx={{direction: 'rtl', marginRight: 2}}>
            اگه برای نوشتن بلاگ کمک میخوای یه سر به اینجا بزن.
          </Typography>
        </Alert>
      </Collapse>
    </Box>
  );
}
