import axios from 'axios'
import JobItems from './JobItems';
import styles from "./Jobs.module.css";
import { Container } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import {Button} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import SummarizeIcon from '@mui/icons-material/Summarize';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LaunchIcon from '@mui/icons-material/Launch';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Icon from '@mui/material/Icon';
import resume from './images/resume.gif';
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    root:{
        height: '100%',
        overflow: 'hidden',
        width: '100%',
        display:"flex"
    },
    buttonBox: {
        width:"90%",
        fontSize: "3rem",
        textAlign: "left",
        
    },
    // buttonIcon: {
    //     // padding:"1.5rem", 
    //     // backgroundColor:"pink"
    // }

        // root:{
        //     height: '100%',
        //     overflow: 'hidden',
        //     width: '100%',
        //     m:0, 
        //     p:0, 
        //     justifyContent:"center", 
        //     background:"rgb(243,242,239)", 
        //     display:"flex"
        // },
    })

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      });
    

export default function Jobs(){
    const [data, setData] = useState([]);
    const classes = useStyles();

    useEffect(()=>{
        axios.get("http://localhost:3000/jobs")
        .then(res => {
            // console.log("data=", res)
            const dataItem = res.data.reverse();
            setData(dataItem);
          })
          .catch(error=>console.log(error))
    },[])
    // console.log("print",data)

    return (
        <div style={{"width":"100%", "margin": "0px", "padding": "0px", "justifyContent":"center", "background":"rgb(243,242,239)", "display":"flex"}}>
            <Container style={{"width":"100%", "padding": "0px", "justifyContent":"center", "background":"rgb(243,242,239)", "display":"flex"}}>
                <Box sx={{width:"23%", mt:"1rem", position:"sticky", top:"1rem", height:"600px"}}>
                    <Box sx={{width:'93%', height:"500px", padding:"1rem", border:'1px solid gray', borderRadius:'10px', background:"white"}}>
                        <Button style={{"margin":"1rem 0 1rem", "fontSize":"17px", "color":"rgb(25,25,25)", "text-transform": "initial"}} color="inherit" startIcon={<BookmarkIcon style={{"fontSize":"28px", "color":"rgb(102,102,102)"}}/>}>My Jobs</Button>
                        <Button style={{"marginBottom":"1rem", "fontSize":"17px", "color":"rgb(25,25,25)", "text-transform": "initial"}} color="inherit" startIcon={<NotificationsIcon style={{"fontSize":"28px", "color":"rgb(102,102,102)"}}/>}>Job Alerts</Button>
                        <Button style={{"marginBottom":"1rem", "fontSize":"17px", "color":"rgb(25,25,25)", "text-transform": "initial"}} color="inherit" startIcon={<CurrencyRupeeIcon style={{"fontSize":"28px", "color":"rgb(102,102,102)"}}/>}>Salary</Button>
                        <Button style={{"marginBottom":"1rem", "fontSize":"17px", "color":"rgb(25,25,25)", "text-transform": "initial"}} color="inherit" startIcon={<AssignmentTurnedInIcon style={{"fontSize":"28px", "color":"rgb(102,102,102)"}}/>}>Skill Assessments</Button>
                        <Button style={{"marginBottom":"1rem", "fontSize":"17px", "color":"rgb(25,25,25)", "text-transform": "initial"}} color="inherit" startIcon={<StickyNote2Icon style={{"fontSize":"28px", "color":"rgb(102,102,102)"}}/>}>Interview Prep</Button>
                        <Button style={{"marginBottom":"1rem", "fontSize":"17px", "color":"rgb(25,25,25)", "text-transform": "initial"}} color="inherit" startIcon={<SummarizeIcon style={{"fontSize":"28px", "color":"rgb(102,102,102)"}}/>}>Resume Builder</Button>
                        <Button style={{"marginBottom":"1rem", "fontSize":"17px", "color":"rgb(25,25,25)", "text-transform": "initial"}} color="inherit" startIcon={<OndemandVideoIcon style={{"fontSize":"28px", "color":"rgb(102,102,102)"}}/>}>Job Seeker Guidance</Button>
                        <Button style={{"marginBottom":"1rem", "fontSize":"17px", "color":"rgb(25,25,25)", "text-transform": "initial"}} color="inherit" startIcon={<SettingsIcon style={{"fontSize":"28px", "color":"rgb(102,102,102)"}}/>}>Application Settings</Button>
                    </Box>
                    <button className={styles.postJobBtn}><Link to="/header"><IconButton color="primary" >
                        <LaunchIcon /></IconButton>Post a free job</Link></button>
                    {/* <i class="fas fa-edit"></i> */}
                </Box>
                <Box sx={{width:'50%',margin:"1rem 0 0 2rem", padding:"1rem 2rem", border:'1px solid gray', borderRadius:'10px', background:"white"}}>
                    <Box>
                        <h1 style={{"fontSize":"21px", "color":"rgb(25,25,25)", "marginBottom":0}}>Recommended for you</h1>
                        <p style={{"fontSize":"18px", "margin":0}}>Based on your profile and search history</p>
                    </Box>
                    <Box style={{"marginTop":"1rem"}}>
                        {data.map((item, i) => <JobItems data={item} key={i}/>)}
                    </Box>
                </Box>
                <Box sx={{width:'30%',margin:"1rem 0 0 1rem", height:"210px", p:1, border:'1px solid gray', borderRadius:'10px', background:"white"}}>
                    <h2 style={{"fontSize":"21px", "color":"rgb(25,25,25)", "marginBottom":0}}>Job seeker guidance</h2>
                    <p style={{"fontSize":"18px", "margin":0}}>Recommended based on your activity</p>
                    <Grid container direction="row" spacing={1} style={{ "margin": "10px 0 5px"}} className={styles.jobGuidance}>
                        <Grid item xs={6} style={{"marginTop":"10px"}}>
                            <ButtonBase >
                                <Typography style={{"textAlign":"left", "fontWeight":"bold", "fontSize":"18px"}}>I want to improve my resume</Typography>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={2}>
                            <ButtonBase sx={{ width: 128, height: 75 }}>
                                <Img alt="complex" src={resume} />
                            </ButtonBase>
                        </Grid>
                    </Grid>
                    <Button style={{"fontSize":"19px","color":"rgb(25,25,25)","textTransform": "initial"}} className={styles.jobGuidanceMore} endIcon={<ArrowForwardIcon/>}>Show more</Button>
                </Box>
            </Container>

        </div>
    )
}