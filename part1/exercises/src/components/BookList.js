import React from 'react';
import classes from './BookList.module.css';

export default function BookList() {
   let pageTitle = "Books";
   let book1 = "https://m.media-amazon.com/images/I/91qXDU9TXvL.jpg";
   let book2 = "https://m.media-amazon.com/images/I/71LeGp9zFRL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/5179Q0So5NL.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Nothing here!" className={classes.bookImg} />
         <img src={book2} alt="Nothing here!" className={classes.bookImg}/>
         <img src={book3} alt="Nothing here!" className={classes.bookImg}/>
      </div>      
   );
}