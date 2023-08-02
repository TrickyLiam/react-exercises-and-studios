//import React from 'react';
import classes from './ChoresList.module.css';

export default function ChoresList () {
   let choresTitle = "Chore List: ";
   const choresList = ["Sweep", "Vacuum", "Clean Dishes"]


   return (
      <div> 
         <h1 className={classes.choresHeading}>{choresTitle}</h1>
         <ul>  
            <li className={classes.choresText}>{choresList[0]}</li>
            <li className={classes.choresText}>{choresList[1]}</li>
            <li className={classes.choresText}>{choresList[2]}</li>
         </ul>
      </div>
   )
}