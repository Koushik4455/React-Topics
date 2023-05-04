import React, { useEffect, useState } from "react";

const Tofind = () => {
  const [flag, setFlag] = useState([]);
  const [Search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json"
    )
      .then((res) => res.json())
      .then((json) => setFlag(json));
  }, []);


     
  return (
    <div>
      <h1>Tupes Of Flages</h1>
      <input type="Search" onChange={(e) => setSearch(e.target.value)}></input>
    
          <div className="container">
            <div className="row">
           { flag.filter(({ name }) => {
      return name.toLowerCase().indexOf(Search.toLowerCase()) >= 0;
    }).map((item) => {
return(
  <div className="col-md-3 mb-3 mt-3">
              <div className="card">
                <img src={item.image} />
                <h5>{item.name}</h5>
                <h5>{item.code}</h5>
                <h5>{item.unicode}</h5>
              </div>
            </div>
)
    })}
            
          {/* // </div> */}
          </div>
    </div>
    </div>
  );
};

export default Tofind;
