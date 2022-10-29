import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';

import M from 'materialize-css';
import Spinner from '../components/Spinner/Spinner';
import firebase from '../components/firebase';
import { AuthContext } from '../components/Auth/Auth';
import './Website.css'

import Footer from '../components/Footer';

import section1 from '../assets/section1.json'
import carouselData from '../assets/CarouselData.json'

import SectionCards from '../components/SectionCards'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Grid
} from '@material-ui/core';


import AmplitudeEvent from '../components/AmplitudeEvent'

const Website = () => {
    const section1Data = section1.slice(0, 3);

    AmplitudeEvent("/website-landingpageloaded");

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const { currentUser } = useContext(AuthContext);
    const history = useHistory();

    if (currentUser) {
        return <Redirect to="/" />;
    }




    let display = (
        <Card >

        </Card>

    );

    if (loading) display = <Spinner />;


    return (
        <>
        <Carousel
                showStatus={false}
                showThumbs={false}
                showArrows={false}
                infiniteLoop={true}
                transitionTime={200}
                useKeyboardArrows
                autoPlay={true}>

                {
                    carouselData.map((obj) => (
                        <div>
                            <img src={obj.image} alt="image" />
                        </div>

                    ))
                }
            </Carousel>


            <div class="section1-grid">
                <div class="website-section-heading">
                    <Typography variant="h3" >
                        Have a great expat experience!
                    </Typography>
                    <p> A place to meet the needs of your expat journey in Germany. </p>

                </div>
            </div>


            <div class="section1-grid">
                <div class="website-section-heading">
                    <Typography variant="h4" >
                    Meet the needs of your expat journey.
                    </Typography>
                </div>

                <Grid
                    container
                    spacing={2}
                >
                    {
                        section1Data.map((obj) => (
                            <Grid item md={3} class="grid-card">
                                <Link to={obj.link}> <SectionCards cardData={obj} /> </Link>
                            </Grid>

                        ))
                    }

                </Grid>

            </div>
            <Footer />
        </>

    )
};

export default Website;