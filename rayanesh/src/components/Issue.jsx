import useGetIssuePreview from "../hooks/useGetIssuePreview";
import {Container, Divider, Grid, Typography, List, ListItem, Button} from "@mui/material";
import {images} from "../constants";
import {styled} from "@mui/material/styles";
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';

import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Issue.css'

const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
}

const smallImageStyle = {}


// create classname css for active

const IssueContainer = styled(Container)(({theme}) => ({
        marginTop: '2rem',
        marginBottom: '2rem',
        padding: '1rem',
    }
));

const issueTitleStyle = {
    fontWeight: 'bold',
    fontSize: '26px'
}


const JustifiedTypography = styled(Typography)(({theme}) => ({
    textAlign: 'justify',
    textJustify: 'inter-word',
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '1rem',
    padding: '1rem',
    marginTop: '1rem',
    //     add white right border

    borderLeft: '1px solid #e0e0e0',
}));


const ColorButton = styled(Button)(({}) => ({
    margin: '0.5rem',
    color: 'white',
    border: '1px solid #14937e',
    backgroundColor: '#14937e',
    '&:hover': {
        borderColor: '#14937e',
        color: '#14937e'
    }
}));

export default function Issue({issueId}) {

    //const issue = useGetIssuePreview(issueId);
    const issueDummy = {
        id: 1,
        title: 'ویژه‌نامه ورودی‌های دانشکده ۱۴۰۱',
        thumbnailImages: [
            images.IssueTestCover,
            images.AboutUs,
            images.Magazine,
        ],
        description: 'در این شماره شما می‌توانید از مقالات و مطالب مرتبط با دانشکده ۱۴۰۱ مطلع شوید. چند کلمه دیگر برای تشکیل خط بعد',
        dataOfRelease: '۱۳۹۹/۰۷/۰۱',
        nameOfWriters: [
            'نام اول نویسنده',
            'نام دوم نویسنده',
            'نام سوم نویسنده',
            'نام چهارم نویسنده',
            'نام پنجم نویسنده',
            'نام ششم نویسنده',
            'نام هفتم نویسنده',
            'نام هشتم نویسنده',
            'نام پانزدهم نویسنده',
        ],
        nameOfEditors: [
            'نام اول ویراستار',
            'نام دوم ویراستار',
            'نام سوم ویراستار',
        ],

        nameOfDesigners: [
            'نام اول طراح',
            'نام دوم طراح',
        ],

        nameOfPhotographers: [
            'نام اول عکاس',
            'نام دوم عکاس',
        ],

        chiefClerk: 'نام مسئول امور',
        // name of مدیر مسئول
        nameOfChiefEditor: 'نام مدیر مسئول',
        //name of صاحب امتیاز
        Concessionaire: 'انجمن شاعران مرده',
    }

    const mainImage = issueDummy.thumbnailImages[0];
    return (
        <IssueContainer>
            <Grid container spacing={4} style={{direction: 'ltr'}}>

                <Grid item md={7} xs={12} style={{direction: 'rtl'}}>
                    {/* big image for main selection*/}
                    <div id={'mainImage'}>
                        {
                            issueDummy.thumbnailImages.map((image, index) => {
                                return (
                                    <img key={index} src={image} style={imageStyle} alt={'issue thumbnail'} className={
                                        index === 0 ? '' : 'inactive'
                                    }/>
                                )
                            })

                        }
                    </div>
                    {/*small images for selection*/}
                    <div id={'smallImages'}>
                        {
                            issueDummy.thumbnailImages.map((image, index) => {
                                return (
                                    <img key={index} src={image} style={smallImageStyle} alt={'issue thumbnail'}
                                         onClick={(event) => {
                                             // toggle all images to inactive
                                             const allImages = document.querySelectorAll('#smallImages img');
                                             allImages.forEach((image) => {
                                                 image.classList.add('inactive');
                                             });

                                             // find the clicked image from mainImage img and toggle it to active
                                             const mainImage = document.querySelector('#mainImage img');
                                             mainImage.src = event.target.src;
                                             event.target.classList.remove('inactive');
                                         }
                                         }

                                    />
                                )
                            })}
                    </div>
                </Grid>

                <Grid item md={5} xs={12} style={{direction: 'rtl'}}>
                    <Typography component="h1" fontWeight="bold" gutterBottom sx={issueTitleStyle}>
                        {issueDummy.title}
                    </Typography>


                    {/*add publish date */}
                    <Typography variant="subtitle1" component="p" fontWeight="bold" gutterBottom>
                        تاریخ انتشار: {issueDummy.dataOfRelease}
                    </Typography>

                    {/*add divider line*/}
                    <Divider sx={{marginTop: '1rem', marginBottom: '1rem'}}/>

                    {/*add description of issue*/}
                    <Typography variant="body1" component="p" fontWeight="bold" gutterBottom
                                sx={
                                    {
                                        marginBottom: '4rem',
                                    }
                                }

                    >
                        {issueDummy.description}
                    </Typography>


                    {/*block for concessionaire and chief editor and chief clerk*/}
                    <List>
                        <ListItem>
                            <Typography variant="body2" component="span" color="text.primary" display={'block'}>
                                صاحب امتیاز: {issueDummy.Concessionaire}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body2" component="span" color="text.primary" display={'block'}>
                                مدیر مسئول: {issueDummy.nameOfChiefEditor}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body2" component="span" color="text.primary" display={'block'}>
                                دبیر: {issueDummy.chiefClerk}
                            </Typography>
                        </ListItem>
                    </List>

                    {/*    name of the writers in gray color with , as separator*/}
                    <JustifiedTypography variant="body2" component="span" color="text.secondary" display={'block'}>
                        نویسندگان: {issueDummy.nameOfWriters.join(', ')}

                    </JustifiedTypography>

                    {/*    name of the editors in gray color with , as separator*/}
                    <JustifiedTypography variant="body2" component="span" color="text.secondary" display={'block'}>
                        ویراستاران: {issueDummy.nameOfEditors.join(', ')}
                    </JustifiedTypography>

                    {/*    download button  with download icon */}
                    <ColorButton sx={{marginTop: '1rem', marginLeft: '1rem'}}>
                        <DownloadIcon sx={{marginRight: '0.5rem'}}/>
                        دانلود
                    </ColorButton>

                    {/*    share this page button with share icon */}
                    <ColorButton sx={{marginTop: '1rem', marginLeft: '1rem'}}>
                        <ShareIcon sx={{marginRight: '0.5rem'}}/>
                        اشتراک گذاری
                    </ColorButton>


                    <Divider sx={{marginTop: '1rem', marginButton: '1rem'}}/>

                    {/*    social media section with icons*/}

                    <Grid container sx={{marginTop: '1rem'}}>
                        <Grid item xs={6}>
                            <Typography variant={'subtitle1'} component="p" fontWeight="bold" sx={{paddingRight:'1rem', color:'#14937e'}}>
                                ما را دنبال کنید
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>

                            <Container sx={{justifyContent: 'space-between', display:'flex'}} className={'iconContainer'}>
                                <button>
                                    <FacebookIcon sx={{color: '#3b5998'}}/>
                                </button>

                                <button>
                                    <InstagramIcon sx={{color: '#e1306c'}}/>
                                </button>

                                <button>
                                <TwitterIcon sx={{color: '#1da1f2'}}/>
                                </button>

                                <button>
                                    <TelegramIcon sx={{color: '#0088cc'}}/>
                                </button>

                                <button>
                                    <WhatsAppIcon sx={{color: '#25d366'}}/>
                                </button>

                            </Container>
                        </Grid>
                    </Grid>


                </Grid>

                {/*grid item for thumbnail image*/}


            </Grid>
        </IssueContainer>
    )
        ;
}