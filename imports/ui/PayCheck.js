import React from "react";
import * as taxCalc from "./taxCalculator";

export default function PayCheck() {
  return (
    <div>
      <h1>PayCheck</h1>
      <div className="date">1/10</div>
      <div className="gross">$5000.00</div>
      <div className="401k">$0.00</div>
      <div className="taxes">$1741.00</div>
      <div className="net">$3259.00</div>
      <div className="net-exp">$1389.00</div>
      <div className="projected-savings">$1389.00</div>
    </div>
  );
}
