import React from "react";

const Home = () => {
  return (
    <div>
        {/* Main Image */}
      <div className="row Home-main-bgimg mr-0">
        <div className="col-md-6">
          <p className="home-main-ptag">IT services Agency</p>
          <h1 className="text-center">Awesome IT Services for Your Business</h1>
        </div>
        <div className="col-md-6"></div>
      </div>
      {/* Discover Our Company */}
      <div className="container">
      <div className="row ">
        <div className="col-md-6 p-5 mt-5">
            <p>Discover Our Company</p>
            <h2>Bringing New IT Business Solutions And Ideas</h2>
            <p>There are many variations of passages of Lorem Ipsum <br></br>available</p>
            <p>but the majority have suffered alteration in some form,<br></br> by injecte</p>
            <button>Learn More</button>
        </div>
        <div className="col-md-6 p-5">
            <img className="Dis-img" src="https://img.freepik.com/free-vector/business-strategy-isometric-concept-with-ideas-symbols-violet-illustration_1284-28706.jpg?w=740&t=st=1677840581~exp=1677841181~hmac=6dd7536f282eb8f325f9fd99859ac9a0510319d0e91c9d3ff0df7517b7480133 " ></img>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Home;
