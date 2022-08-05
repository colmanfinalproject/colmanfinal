import React from 'react';
import './Home.css'
import marketVideo from './Market.mp4'
import {Button} from '@mui/material';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
    <div className="container">
        <video
            autoPlay
            muted
            loop
            className="background"
        >
        <source src={marketVideo} type="video/mp4" />
        </video>
        <div className="content">
            <Button className='letsStart' onClick={() => navigate('/marketplace')}>
                Lets Start
            </Button>
        </div>
    </div>
    );
}
export default Home;