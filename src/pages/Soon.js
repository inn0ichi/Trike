import React from "react";
import {
    Box,
    Typography
} from "@mui/material";
import logo from '../assets/TrikeLogoText.png';
import './Soon.css';

function Soon() {

    return (
        <Box className="bg">
            <Box className="imgContainer">
                <img src={logo} className='logo' />
            </Box>
            <Box className="textContainer">
                <Typography variant="h3" className="line-1 anim-typewriter">Coming Soon...</Typography>
            </Box>

        </Box>
    );
}

export default Soon;
