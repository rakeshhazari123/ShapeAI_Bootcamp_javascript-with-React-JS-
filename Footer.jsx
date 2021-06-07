import React from "React"

function Footer(){
    var currYear=new Date().getFullYear();
    return(
      <footer>
          <p>copyright @ {currYea}</p>

      </footer>

    );
}
export default Footer;