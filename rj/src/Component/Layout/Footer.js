import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="Footer-bgclr">
        <div className="row  ">
          <div className="col-md-4">
            <h1>Rj Solutions</h1>
            <p>We are the best world Information Technology Company. Providing the highest quality in hardware & Network solutions.</p>
            <div >
            <button className="Footer-icons"><a href=""><i class="bi bi-facebook "></i></a></button>
           <button className="Footer-icons"> <a href=""><i class="bi bi-twitter"></i></a></button>
           <button className="Footer-icons"> <a href=""><i class="bi bi-linkedin"></i></a></button>
            </div>
           
          </div>
          <div className="col-md-4 text-center footer-li">
            <li>
              <a href="" className="footer-li-clr">Home</a>
            </li>
            <li>
              <a href="" className="footer-li-clr">About</a>
            </li>
            <li>
              <a href="" className="footer-li-clr">Services</a>
            </li>
            <li>
              <a href="" className="footer-li-clr">Contact</a>
            </li>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>You can trust us. Please Share Your Email id</p>
            <input type={"email"} placeholder='Enter Email id'></input><button className="Footer-ml-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
