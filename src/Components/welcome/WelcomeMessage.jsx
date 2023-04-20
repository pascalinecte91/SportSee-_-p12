import React from "react";



/**
 * Component React for display user's name with a welcoming message
 * @component
 */
const WelcomeMessage = ({firstName}) => {
    return (
        <section className='header'>
          <h1>Bonjour <span className='header__name'>{firstName}</span></h1>
          <p>Félicitations! Vous avez explosé vos objectifs hier 👏 </p>
        </section>
    );
};


export default WelcomeMessage;
