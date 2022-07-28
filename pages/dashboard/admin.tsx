import React from "react";
import Paper from "../../src/componenets/Paper";
import DashboardLayout from "../../src/layouts/DashboardLayout";

const admin = () => {
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

admin.getLayout = (page: React.ReactNode, Auth: typeof React.Component) => (
  <Auth>
    <DashboardLayout>{page}</DashboardLayout>
  </Auth>
);

export default admin;
