import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function Demo() {
    return (
        <Card class="fancy-iconic-box-new mt-30" sx={{ minWidth: 175 }}>
            <div class="icon">
                <img height="70" style={{ margin: "auto" }} src="assets/img/icon/merchantonboarding.svg" />
            </div>
            <h4 class="title"><a href="services">Merchant Onboarding</a></h4>
            <p style={{ marginBottom: "25px" }}>Quis autem reprehenderit quiinea volup tate Quis autem reprehenderit quiinea volup tat sahbhj ahjsbdhjas</p>

            <ul>
                <li style={{ display: "flex", width: "90%", margin: "10px auto" }}>
                    <img height="24px" src="assets/img/icon/tick.svg" />
                    <span>&nbsp; kjn skjnsd sd nkbs sdb</span>
                </li>
                <li style={{ display: "flex", width: "90%", margin: "10px auto" }}>
                    <img height="24px" src="assets/img/icon/tick.svg" />
                    <span>&nbsp; kjn skjnsd sd nkbs sdb</span>
                </li>
                <li style={{ display: "flex", width: "90%", margin: "10px auto" }}>
                    <img height="24px" src="assets/img/icon/tick.svg" />
                    <span>&nbsp; kjn skjnsd sd nkbs sdb</span>
                </li>
            </ul>
            <a style={{ cursor: "pointer" }} class="template-btn1 template-btn">
                Read More
                <i class="far fa-long-arrow-right"></i>
            </a>



            {/* 
            <div>
                <div class="fancy-iconic-box mt-30">
                    <div class="icon">
                        <img height="70" style={{ margin: "auto" }} src="assets/img/icon/merchantonboarding.svg" />
                    </div>
                    <h4 class="title"><a href="services">Merchant Onboarding</a></h4>
                    <p style={{ marginBottom: "25px" }}>Quis autem reprehenderit quiinea volup tate Quis autem reprehenderit quiinea volup tat sahbhj ahjsbdhjas</p>

                    <ul>
                        <li style={{ display: "flex", width: "90%", margin: "10px auto" }}>
                            <img height="24px" src="assets/img/icon/tick.svg" />
                            <span>&nbsp; kjn skjnsd sd nkbs sdb</span>
                        </li>
                        <li style={{ display: "flex", width: "90%", margin: "10px auto" }}>
                            <img height="24px" src="assets/img/icon/tick.svg" />
                            <span>&nbsp; kjn skjnsd sd nkbs sdb</span>
                        </li>
                        <li style={{ display: "flex", width: "90%", margin: "10px auto" }}>
                            <img height="24px" src="assets/img/icon/tick.svg" />
                            <span>&nbsp; kjn skjnsd sd nkbs sdb</span>
                        </li>
                    </ul>
                    <a style={{ cursor: "pointer" }} class="template-btn1 template-btn">
                        Read More
                        <i class="far fa-long-arrow-right"></i>
                    </a>
                </div>
            </div> */}



        </Card >
    );
}
