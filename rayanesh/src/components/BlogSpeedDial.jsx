import {Box, SpeedDial, SpeedDialAction, SpeedDialIcon, AppBar} from "@mui/material";

import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function BlogSpeedDial({setOpen}) {
    const actions = [
        {
            icon: <FileCopyIcon/>,
            name: 'کپی',
            action: () => {

            }
        },
        {
            icon: <CloudUploadIcon/>,
            name: 'ذخیره',
            action: () => {
                setOpen(true)
            }
        }
    ];
    return (
        <AppBar position={'fixed'} elevation={0} sx={{top: 'auto', bottom: 0, backgroundColor: 'white'}}>
            <Box  sx={{height: 100, transform: 'translateZ(0px)', flexGrow: 1}}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{position: 'absolute', bottom: 16, right: 16, mb: '2%', mr: '2%'}}
                    icon={<SpeedDialIcon/>}
                    FabProps={{
                        sx: {
                            bgcolor: '#14937e',
                            '&:hover': {
                                bgcolor: '#14937e',
                            }
                        }
                    }}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={action.action}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </AppBar>
    );
}