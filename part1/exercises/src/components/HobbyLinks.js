//import React from 'react';
import classes from './HobbyLinks.module.css';

export default function HobbyLinks () {
    const hobbyLinks = ["https://www.youtube.com/", "https://www.google.com/"]

    return (
        <><a href={hobbyLinks[0]} className={classes.hobbyList}>Youtube</a>
        <a href={hobbyLinks[1]} className={classes.hobbyList}>Google</a></>
    );
}