import React from 'react';

const Location = () => {
  return (
    <div>
       <iframe 
          title ="Rmit Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0637512361454!2d106.69158151494153!3d10.729566462990542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fbea5fe3db1%3A0xfae94aca5709003f!2zUk1JVOuMgO2Vmeq1kA!5e0!3m2!1sko!2skr!4v1575880896234!5m2!1sko!2skr" 
          width="100%" 
          height="500px" 
          frameborder="0" 
          allowfullscreen
          style={{margin: 0, padding:0}}
          ></iframe>
          
        <div className="location_tag">
        </div>
    </div>
  );
}

export default Location;
