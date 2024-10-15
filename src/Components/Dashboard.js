import React from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Dashboard = () => {
  const user = useSelector((state) => state.user);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Dashboard</Typography>
      {user.name && <Typography variant="h6">Name: {user.name}</Typography>}
      <Typography variant="h6">Email: {user.email}</Typography>
      <Typography variant="h6">Password: {user.password}</Typography>
    </Box>
  );
};

export default Dashboard;
