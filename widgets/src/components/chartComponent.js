import React, { useState, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "chartjs-adapter-date-fns";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import { Box, Button, Grid, IconButton } from "@mui/material";
import TextField from '@mui/material/TextField';
import {
  GetApp as DownloadIcon,
  FilterAlt as FilterIcon,
  RotateLeft as ResetIcon,
} from "@mui/icons-material";

const ChartComponent = () => {
  const items = [
    {
      date: "2021-11-01",
      category: "widget_table_refresh_status",
      RefreshDuration: 100,
    },
    {
      date: "2021-11-01",
      category: "widget_table_refresh_status",
      AgeOfData: 100,
    },
    {
      date: "2021-11-02",
      category: "widget_table_refresh_errors",
      RefreshDuration: 300,
    },
    {
      date: "2021-11-02",
      category: "widget_table_refresh_errors",
      AgeOfData: 200,
    },
    {
      date: "2021-11-03",
      category: "widget_reachability_campaigns_partners",
      RefreshDuration: 6,
    },
    {
      date: "2021-11-09",
      category: "widget_reachability_campaigns_partners",
      RefreshDuration: 35,
    },
    {
      date: "2021-11-03",
      category: "widget_reachability_campaigns_partners",
      AgeOfData: 32,
    },
    {
      date: "2021-11-09",
      category: "widget_reachability_campaigns_partners",
      AgeOfData: 1074,
    },
    {
      date: "2021-11-04",
      category: "widget_errors_user_roles_consistency",
      RefreshDuration: 1,
    },
    {
      date: "2021-11-04",
      category: "widget_errors_user_roles_consistency",
      AgeOfData: 158,
    },
    {
      date: "2021-11-05",
      category: "widget_quality_campaigns",
      RefreshDuration: 12,
    },
    {
      date: "2021-12-05",
      category: "widget_quality_campaigns",
      RefreshDuration: 185,
    },
    { date: "2021-11-05", category: "widget_quality_campaigns", AgeOfData: 98 },
    {
      date: "2021-12-05",
      category: "widget_quality_campaigns",
      AgeOfData: 590,
    },
    {
      date: "2021-11-06",
      category: "widget_quality_agents",
      RefreshDuration: 8,
    },
    { date: "2021-11-16", category: "widget_quality_agents", AgeOfData: 274 },
    {
      date: "2021-11-06",
      category: "widget_quality_agents",
      RefreshDuration: 98,
    },
    { date: "2021-11-16", category: "widget_quality_agents", AgeOfData: 345 },
    { date: "2021-11-07", category: "widget_cost", RefreshDuration: 82 },
    { date: "2021-11-07", category: "widget_cost", AgeOfData: 148 },
    {
      date: "2021-11-07",
      category: "widget_files_status",
      RefreshDuration: 31,
    },
    { date: "2021-11-07", category: "widget_files_status", AgeOfData: 1075 },
    {
      date: "2021-11-07",
      category: "trends_productivity_campaigns",
      RefreshDuration: 19,
    },
    {
      date: "2021-11-17",
      category: "trends_productivity_campaigns",
      RefreshDuration: 38,
    },
    {
      date: "2021-12-07",
      category: "trends_productivity_campaigns",
      RefreshDuration: 129,
    },
    {
      date: "2021-11-07",
      category: "trends_productivity_campaigns",
      AgeOfData: 47,
    },
    {
      date: "2021-11-17",
      category: "trends_productivity_campaigns",
      AgeOfData: 340,
    },
    {
      date: "2021-12-07",
      category: "trends_productivity_campaigns",
      AgeOfData: 341,
    },
    {
      date: "2021-11-07",
      category: "trends_productivity_partners",
      RefreshDuration: 9,
    },
    {
      date: "2021-11-17",
      category: "trends_productivity_partners",
      RefreshDuration: 18,
    },
    {
      date: "2021-12-07",
      category: "trends_productivity_partners",
      RefreshDuration: 65,
    },
    {
      date: "2021-11-07",
      category: "trends_productivity_partners",
      AgeOfData: 54,
    },
    {
      date: "2021-11-17",
      category: "trends_productivity_partners",
      AgeOfData: 341,
    },
    {
      date: "2021-12-07",
      category: "trends_productivity_partners",
      AgeOfData: 343,
    },
    { date: "2021-11-07", category: "widget_orders", RefreshDuration: 1 },
    { date: "2021-11-17", category: "widget_orders", RefreshDuration: 1 },
    { date: "2021-12-07", category: "widget_orders", RefreshDuration: 1 },
    { date: "2022-2-07", category: "widget_orders_all", RefreshDuration: 1 },
    { date: "2021-11-07", category: "widget_orders", AgeOfData: 130867 },
    { date: "2021-11-17", category: "widget_orders", AgeOfData: 130876 },
    { date: "2021-12-07", category: "widget_orders", AgeOfData: 130876 },
    { date: "2022-2-07", category: "widget_orders_all", AgeOfData: 130895 },
  ];
  const [chartData, setChartData] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const chartRef = useRef(null);

  const initialChartData = {
    labels: [
      "Table_refresh_status",
      "Table_refresh_errors",
      "Reachability_campaigns_partners",
      "Errors_user_roles_consistency",
      "Quality_campaigns",
      "Quality_agents",
      "Cost",
      "Files_status",
      "Trends_productivity_campaigns",
      "Trends_productivity_partners",
      "Orders",
      "Orders_all",
    ],
    datasets: [
      {
        label: "Refresh Duration(seconds)",
        data: items
          .filter((item) => item.RefreshDuration !== undefined)
          .map((item) => item.RefreshDuration),
        backgroundColor: ["rgba(255, 26, 104, 0.2)"],
        borderColor: ["rgba(255, 26, 104, 1)"],
        borderWidth: 1,
        type: "bar",
      },
      {
        label: "Age Of Date ",
        data: items
          .filter((item) => item.AgeOfData !== undefined)
          .map((item) => item.AgeOfData),
        backgroundColor: ["rgba(54, 162, 235, 0.7)"],
        borderColor: ["rgba(54, 162, 235, 0.7)"],
        borderWidth: 1,
        type: "line",
      },
    ],
  };
  const options = {
    scales: {
      x: {},
      y: {
        display: true,

        min: 0, // minimum value
        // You might want to adjust the max value based on your actual data
        max: 1500,
      },
    },
  };

  const resetDate = () => {
    setStartDate("");
    setEndDate("");
    setChartData(initialChartData);
  };

  const filterDate = () => {
    const filteredData = items.filter(
      (item) =>
        item.date >= startDate &&
        item.date <= endDate && // Filter by date range
        (item.RefreshDuration !== undefined || item.AgeOfData !== undefined) // Ensure either RefreshDuration or AgeOfData is present
    );

    const filteredChartData = {
      labels: initialChartData.labels,
      datasets: [
        {
          label: "Refresh Duration(seconds)",
          data: filteredData
            .filter((item) => item.RefreshDuration !== undefined)
            .map((item) => item.RefreshDuration),
          backgroundColor: ["rgba(255, 26, 104, 0.2)"],
          borderColor: ["rgba(255, 26, 104, 1)"],
          borderWidth: 1,
          type: "bar",
        },
        {
          label: "Age Of Date",
          data: filteredData
            .filter((item) => item.AgeOfData !== undefined)
            .map((item) => item.AgeOfData),
          backgroundColor: ["rgba(255, 20, 104, 0.5)"],
          borderColor: ["#51C3E5"],
          type: "line",
        },
      ],
    };

    setChartData(filteredChartData);
  };
  // download data
  const downloadPdf = () => {
    // Access canvas using Ref
    const canvas = chartRef.current.chartInstance.canvas;

    // Check if canvas is available
    if (canvas) {
      // Get data URL from the canvas
      const dataURL = canvas.toDataURL("image/png");

      // Create a Blob from the data URL
      const blob = dataURLtoBlob(dataURL);

      // Save the Blob as a file using file-saver
      saveAs(blob, "chart.png");
    } else {
      console.error("Canvas not available");
    }
  };
  // Function to convert data URL to Blob
  function dataURLtoBlob(dataURL) {
    const parts = dataURL.split(";base64,");
    const contentType = parts[0].split(":")[1];
    const raw = window.atob(parts[1]);
    const array = new Uint8Array(new ArrayBuffer(raw.length));

    for (let i = 0; i < raw.length; i++) {
      array[i] = raw.charCodeAt(i);
    }

    return new Blob([array], { type: contentType });
  }

  return (
    <Box>
      <Box
        className="chartMenu"
        sx={{ display: "flex", justifyContent: "end" }}
      >
        <Box>
          <p>Table Refresh Status</p>
        </Box>
        <Box sx={{ justifyContent: "end" }}>

          <TextField
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            size="small"
            InputProps={{
              inputProps: {
                lang: 'en-US',
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
            helperText="Select a date"
            label="Start"
          />
          To:{" "}
          <TextField
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            size="small"
          />
          <IconButton onClick={filterDate} color="primary">
            <FilterIcon />
          </IconButton>
          <IconButton onClick={resetDate} color="primary">
            <ResetIcon />
          </IconButton>
          <IconButton onClick={downloadPdf} size="small">
            <DownloadIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        className="chartCard"
        sx={{ width: "100%", justifyContent: "center", alignContent: "center" }}
      >
        <Box className="chartBox">
          <Bar
            data={chartData ? chartData : initialChartData}
            options={options}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ChartComponent;
