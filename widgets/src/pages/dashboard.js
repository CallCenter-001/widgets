import React from "react";
import Grid from "@mui/material/Grid";
import Layout from "../components/layouts/Layout";
import Chartcomponent from "../components/chartComponent";
import DoughnutCalls from "../components/doughnutCalls";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import DoughnutCost from '../components/DoughnutCost';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Navbar */}
      <Grid item xs={12}>
        <Layout />
      </Grid>

      {/* Main Content */}
      <Grid container spacing={1} pl={'250px'} mt={'70px'}>
  <Grid item xs={8}>
    <Item><Chartcomponent/></Item>
  </Grid>
  <Grid item xs={4}>
    <Item><DoughnutCalls/></Item>
  </Grid>
  <Grid item xs={4}>
    <Item><DoughnutCost/></Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs:8</Item>
  </Grid>
</Grid>
    </Grid>
  );
};

export default Home;
