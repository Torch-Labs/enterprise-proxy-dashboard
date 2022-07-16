import React from "react";
import Paper from "../componenets/Paper";

const home = () => {
  return (
    <div className="flex-col">
      <Paper title="Account Overview" />
      <div className="flex flex-row justify-evenly gap-3 mt-3">
        <Paper title="Earnings" />

        <Paper title="Bandwidth Consumption" />
      </div>
    </div>
  );
};

export default home;
