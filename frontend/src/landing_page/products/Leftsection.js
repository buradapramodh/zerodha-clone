import React from "react";
function Leftsection({
  imageURL,
  ProductName,
  ProductDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageURL} />
        </div>
       
        <div className="col-6 p-5 mt-5">
          <h1>{ProductName}</h1>
          <p>{ProductDesription}</p>
          <div>
            <a href={tryDemo}>tryDemo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              learnMore
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Leftsection;
