import React from 'react'
import {images} from "../constants";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Box, Typography} from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';
// import copy right icon


export default function Footer() {
    return (
        <footer>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: '#14937e',
                    justifyContent: 'space-between',
                    paddingRight: '2rem',
                    paddingLeft: '2rem',
                    paddingTop: '0.2rem',
                }
                }
            >
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    {/*    add logo*/}
                    <img src={images.Logo} alt={'logo'} style={{width: '6rem'}}/>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row'
                    //     only display on medium and bigger screen
                    , '@media (max-width:960px)': {display: 'none'}
                    }}

                >
                    {/*    add about us icon which on click hover to about us section in landing page*/}
                    <Typography
                        variant={'h6'}
                        sx={{color: 'white', fontSize: '1.2rem', cursor: 'pointer', margin: '1rem'}}>
                        درباره ما
                    </Typography>

                    {/*    add contact us icon which on click hover to contact us section in landing page*/}
                    <Typography
                        variant={'h6'}
                        sx={{color: 'white', fontSize: '1.2rem', cursor: 'pointer', margin: '1rem'}}>
                        تماس با ما
                    </Typography>

                    {/*    add faq icon which on click hover to faq section in landing page*/}
                    <Typography
                        variant={'h6'}
                        sx={{color: 'white', fontSize: '1.2rem', cursor: 'pointer', margin: '1rem'}}>
                        سوالات متداول
                    </Typography>


                </Box>

                {/*social media icons*/}
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '1rem'}}>
                    <a href={'https://www.instagram.com/rayaneshmagazine/'} target={'_blank'} rel={'noreferrer'}>
                        <InstagramIcon sx={{fontSize: 40, color: 'white', marginRight: '1rem'}}/>
                    </a>
                    <a href={'https://t.me/rayaneshmagazine'} target={'_blank'} rel={'noreferrer'}>
                        <TelegramIcon sx={{fontSize: 40, color: 'white', marginRight: '1rem'}}/>
                    </a>
                    <a href={'https://www.linkedin.com/company/rayaneshmagazine/'} target={'_blank'} rel={'noreferrer'}>
                        <LinkedInIcon sx={{fontSize: 40, color: 'white', marginRight: '1rem'}}/>
                    </a>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: '#038373',
                    justifyContent: 'center',
                    padding: '1rem',
                }
                }
            >
                <Typography sx={{color: 'white', fontSize: '1rem'}}>
                    <CopyrightIcon sx={{fontSize: 20, color: 'white', marginRight: '1rem'}}/>
                    تمامی حقوق این سایت متعلق به مجله رایانش می باشد
                </Typography>
            </Box>

        </footer>
    )
}