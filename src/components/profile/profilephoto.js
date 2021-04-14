import React from 'react';
import FR from '../../images/friends.jpg'
const App = () => {
 return (
   <>
      <section className="about-me">
      <h1>
      if we talk about the 90's shows we can't forget to mention  'Friends' one of 
        <span className='rotate text-important'> </span>,the high watching and favourite <br></br> 
        tv show in america 
      </h1>
       <h2>if you agree you can vote here !!</h2>
      <img className='fr' src={FR} alt='friends' /> 
      <button className="bt"> yes</button> 
      <button className="bt">no</button> 
      </section>
   </>
 );
};
export default App;
 