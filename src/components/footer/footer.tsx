import React from 'react';
import "./styles.css";
import { Typography } from '@mui/material';
import {
    BsFacebook,
    BsInstagram,
    BsLinkedin
} from "react-icons/bs"

const Footer = () => {
    const email = "nina1971@outlook.com"; //TODO: make email and phone global constants
    const phone = "(604) 653-3965";

    return (
        <div className="footer">
            <div>
                <Typography variant="h6">Contact</Typography>
                <Typography variant= 'subtitle1'> Email: {email}</Typography>
                <Typography variant = 'subtitle1'> Phone: {phone}</Typography>
            </div>
            <div>
                <Typography variant="h6"> Follow me </Typography>
                <a href="https://www.instagram.com/ninayogbhava/" target="black">
                    <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/in/hriday-buddhdev-127a74202/" target="black">
                    <BsLinkedin />
                </a>
                <a href="https://www.facebook.com/groups/bandishnetwork/" target="black">
                    <BsFacebook />
                </a>
            </div>
        </div>
    )
}

export default Footer
