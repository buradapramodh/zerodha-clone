import React from "react";
function Hero() {
  return (
    <div className="container">
      <div
        className="row p-5  mb-5 border-botttom "
        style={{ textAlign: "center" }}
      >
        <h1>pricing</h1>
        <h3 className='"text-muted mt-3 fs-5'>
          Free equity investements and flat 20r traday and F&O trades
        </h3>
        <div className="col-4 p-5">
          <img src="media\images\pricingEquity.svg" />
          <h1>Free equity delivery</h1>
          <p className="p-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media\images\intradayTrades.svg" />
          <h1>Intraday and F&O trades</h1>
          <p className="p-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media\images\pricingEquity.svg" />
          <h1>Free direct MF</h1>
          <p className="p-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
