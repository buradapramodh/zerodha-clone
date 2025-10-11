import React from "react";
function Rightsection({imageURL,ProductName,ProductDesription,learnMore}) {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{ProductName}</h1>
          <p>{ProductDesription}</p>
          <div>
          <a href={learnMore} style={{ marginLeft: "50px" }}>
              learnMore
            </a>
            </div>
        </div>
        <div className="col-6 p-5">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default Rightsection;
