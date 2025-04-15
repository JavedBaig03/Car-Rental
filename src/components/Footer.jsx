import React from "react";



const Footer = () => {
  return (
    <footer>
      <p><marquee behavior="scroll" direction="right">
  &copy; {new Date().getFullYear()} Car Rental. All rights reserved.
</marquee>
</p>

    </footer>
  );
};

export default Footer;
