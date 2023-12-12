import React,{useState} from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Box, Button, Grid, TextField, IconButton    } from '@mui/material';
import { GetApp as DownloadIcon,FilterAlt as FilterIcon, RotateLeft as ResetIcon } from '@mui/icons-material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DoughnutChart = () => {
  const [doughnutData, setDoughnutData] = useState(null)  
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
    // Sample data for the doughnut chart

    const costData = [
        {
          category:  "Contact Attempt (not connected)",
          data: [
            {date: "2022-03", value: 10228.0 },
            {date: "2022-03", value: 2000.0 },
            {date: "2022-04", value: 7598.0 },
            {date: "2022-05", value: 26790.0 },
            { date: "2022-06", value: 43443.0 },
            { date: "2022-07", value: 72892.0 },
            { date: "2022-08", value: 75671.0 },
            { date: "2022-09", value: 96896.0 },
            { date: "2022-10", value: 161662.0 },
            { date: "2022-11", value: 148141.0 },
            { date: "2022-12", value: 153002.0 },
            { date: "2023-01", value: 160935.0 },
            { date: "2023-02", value: 152843.0 },
            { date: "2023-03", value: 171314.0 },
            { date: "2023-04", value: 102947.0 },
            { date: "2023-05", value: 119497.0 },
            { date: "2023-06", value: 144561.0 },
            { date: "2023-07", value: 113472.0 },
            { date: "2023-08", value: 125235.0 },
            { date: "2023-09", value: 103821.0 },
            { date: "2023-10", value: 72492.0 },
            { date: "2023-11", value: 123402.0 },
            { date: "2023-12", value: 3220.0 },
          ],
        },
        {
          category:"Contact Handled (<20 seconds)",
          data: [
            { date: "2022-03", value: 1212.0 },
            { date: "2022-04", value: 1024.0 },
            { date: "2022-05", value: 4501.0 },
            { date: "2022-06", value: 7650.0 },
            { date: "2022-07", value: 10933.0 },
            { date: "2022-08", value: 10576.0 },
            { date: "2022-09", value: 14417.0 },
            { date: "2022-10", value: 16731.0 },
            { date: "2022-11", value: 12095.0 },
            { date: "2022-12", value: 14236.0 },
            { date: "2023-01", value: 16552.0 },
            { date: "2023-02", value: 16287.0 },
            { date: "2023-03", value: 16023.0 },
            { date: "2023-04", value: 9024.0 },
            { date: "2023-05", value: 10184.0 },
            { date: "2023-06", value: 11515.0 },
            { date: "2023-07", value: 11447.0 },
            { date: "2023-08", value: 12386.0 },
            { date: "2023-09", value: 36529.0 },
            { date: "2023-10", value: 93994.0 },
            { date: "2023-11", value: 132499.0 },
            { date: "2023-12", value: 3632.0 },
          ],
        },
        {
          category: " Contact Argumented (>20 seconds)",
          data: [
            { date: "2022-03", value: 764.0 },
            { date: "2022-04", value: 712.0 },
            { date: "2022-05", value: 2734.0 },
            { date: "2022-06", value: 4651.0 },
            { date: "2022-07", value: 7924.0 },
            { date: "2022-08", value: 9192.0 },
            { date: "2022-09", value: 11549.0 },
            { date: "2022-10", value: 15251.0 },
            { date: "2022-11", value: 16394.0 },
            { date: "2022-12", value: 15316.0 },
            { date: "2023-01", value: 17431.0 },
            { date: "2023-02", value: 16140.0 },
            { date: "2023-03", value: 15335.0 },
            { date: "2023-04", value: 10554.0 },
            { date: "2023-05", value: 11282.0 },
            { date: "2023-06", value: 14821.0 },
            { date: "2023-07", value: 14232.0 },
            { date: "2023-08", value: 16062.0 },
            { date: "2023-09", value: 18725.0 },
            { date: "2023-10", value: 24333.0 },
            { date: "2023-11", value: 35699.0 },
            { date: "2023-12", value: 864.0 },
          ],
        },
        {
          category:  " Contact Engaged (>3 minutes)",
          data: [
            { date: "2022-03", value: 206.0 },
            { date: "2022-04", value: 152.0 },
            { date: "2022-05", value: 300.0 },
            { date: "2022-06", value: 561.0 },
            { date: "2022-07", value: 1114.0 },
            { date: "2022-08", value: 1363.0 },
            { date: "2022-09", value: 1677.0 },
            { date: "2022-10", value: 1818.0 },
            { date: "2022-11", value: 2989.0 },
            { date: "2022-12", value: 1983.0 },
            { date: "2023-01", value: 2153.0 },
            { date: "2023-02", value: 1935.0 },
            { date: "2023-03", value: 2183.0 },
            { date: "2023-04", value: 1582.0 },
            { date: "2023-05", value: 1745.0 },
            { date: "2023-06", value: 2446.0 },
            { date: "2023-07", value: 1924.0 },
            { date: "2023-08", value: 2470.0 },
            { date: "2023-09", value: 2765.0 },
            { date: "2023-10", value: 3400.0 },
            { date: "2023-11", value: 5475.0 },
            { date: "2023-12", value: 109.0 },
          ],
        },
      ];
    const durationData=[
        {
          "category": "Contact Attempt (not connected)",
          "data": [
            {"date": "2022-03", "value": 11041.0},
            {"date": "2022-03", "value": 11041.0},
            {"date": "2022-04", "value": 7553.0},
            {"date": "2022-05", "value": 27880.0},
            {"date": "2022-06", "value": 44538.0},
            {"date": "2022-07", "value": 75709.0},
            {"date": "2022-08", "value": 83353.0},
            {"date": "2022-09", "value": 100163.0},
            {"date": "2022-10", "value": 98026.0},
            {"date": "2022-11", "value": 108137.0},
            {"date": "2022-12", "value": 109703.0},
            {"date": "2023-01", "value": 107611.0},
            {"date": "2023-02", "value": 97113.0},
            {"date": "2023-03", "value": 105677.0},
            {"date": "2023-04", "value": 65612.0},
            {"date": "2023-05", "value": 76035.0},
            {"date": "2023-06", "value": 95283.0},
            {"date": "2023-07", "value": 74985.0},
            {"date": "2023-08", "value": 91001.0},
            {"date": "2023-09", "value": 129333.0},
            {"date": "2023-10", "value": 228741.0},
            {"date": "2023-11", "value": 353466.0},
            {"date": "2023-12", "value": 75350.0}
          ]
        },
        {
          "category": "Contact Handled (<20 seconds)",
          "data": [
            {"date": "2022-03", "value": 202.641},
            {"date": "2022-04", "value": 168.218},
            {"date": "2022-05", "value": 726.536},
            {"date": "2022-06", "value": 1025.57},
            {"date": "2022-07", "value": 1468.441},
            {"date": "2022-08", "value": 1413.064},
            {"date": "2022-09", "value": 1547.124},
            {"date": "2022-10", "value": 1746.239},
            {"date": "2022-11", "value": 1393.481},
            {"date": "2022-12", "value": 1694.493},
            {"date": "2023-01", "value": 1916.274},
            {"date": "2023-02", "value": 1918.3},
            {"date": "2023-03", "value": 1467.376},
            {"date": "2023-04", "value": 786.91},
            {"date": "2023-05", "value": 718.38},
            {"date": "2023-06", "value": 819.652},
            {"date": "2023-07", "value": 985.462},
            {"date": "2023-08", "value": 1024.356},
            {"date": "2023-09", "value": 2441.478},
            {"date": "2023-10", "value": 2657.515},
            {"date": "2023-11", "value": 3738.035},
            {"date": "2023-12", "value": 1146.494}
          ]
        },
        {
          "category": "Contact Argumented (>20 seconds)",
          "data": [
            {"date": "2022-03", "value": 233.084},
            {"date": "2022-04", "value": 199.102},
            {"date": "2022-05", "value": 670.171},
            {"date": "2022-06", "value": 970.819},
            {"date": "2022-07", "value": 1666.098},
            {"date": "2022-08", "value": 1995.704},
            {"date": "2022-09", "value": 2243.156},
            {"date": "2022-10", "value": 2851.144},
            {"date": "2022-11", "value": 3225.121},
            {"date": "2022-12", "value": 2984.192},
            {"date": "2023-01", "value": 3264.37},
            {"date": "2023-02", "value": 3050.306},
            {"date": "2023-03", "value": 2185.382},
            {"date": "2023-04", "value": 1431.195},
            {"date": "2023-05", "value": 1282.714},
            {"date": "2023-06", "value": 1713.906},
            {"date": "2023-07", "value": 1659.514},
            {"date": "2023-08", "value": 1724.233},
            {"date": "2023-09", "value": 1791.272},
            {"date": "2023-10", "value": 2569.412},
            {"date": "2023-11", "value": 3888.009},
            {"date": "2023-12", "value": 891.553}
          ]
        },
        {
          "category": " Contact Engaged (>3 minutes)",
          "data": [
            {"date": "2022-03", "value": 313.317},
            {"date": "2022-04", "value": 222.227},
            {"date": "2022-05", "value": 478.07},
            {"date": "2022-06", "value": 660.569},
            {"date": "2022-07", "value": 1358.665},
            {"date": "2022-08", "value": 1548.146},
            {"date": "2022-09", "value": 1723.886},
            {"date": "2022-10", "value": 1787.563},
            {"date": "2022-11", "value": 3116.742},
            {"date": "2022-12", "value": 2026.696},
            {"date": "2023-01", "value": 2248.201},
            {"date": "2023-02", "value": 2087.584},
            {"date": "2023-03", "value": 1840.128},
            {"date": "2023-04", "value": 1229.24},
            {"date": "2023-05", "value": 1047.626},
            {"date": "2023-06", "value": 1511.315},
            {"date": "2023-07", "value": 1169.479},
            {"date": "2023-08", "value": 1321.662},
            {"date": "2023-09", "value": 1357.24},
            {"date": "2023-10", "value": 2082.156},
            {"date": "2023-11", "value": 3582.844},
            {"date": "2023-12", "value": 605.725}
          ]
        }
      ]
      
    
    const data = {
        labels: costData.map((item)=> item.category),
        datasets: [{
            label:  "Costs (USD)",
            data: costData.flatMap(categoryItem => categoryItem.data.map(item =>item.value)),
            backgroundColor: ['rgba(153, 102, 255, 0.7)',
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 205, 86, 0.7)',]
        },
       
        // {
        //     label:"Total Duration (minutes)",
        //     data: durationData
        //     .filter((item)=> item.data[0].value !== undefined)
        //     .map((item) => item.data[0].value),
        //     backgroundColor: ['rgba(153, 102, 255, 0.7)',
        //     'rgba(255, 99, 132, 0.7)',
        //     'rgba(54, 162, 235, 0.7)',
        //     'rgba(255, 205, 86, 0.7)',],
        // }
      ]
    };
console.log(data);

    // Options for the chart
    const options = {
        plugins: {
          legend: {
            display: true,
            position: "bottom",
          },
        },
      };
    const resetDate = () => {
        setStartDate("");
        setEndDate("");
        setDoughnutData(data);
      };
    
    const filterDate = () => {
    // Function to format date to YYYY-MM
    const formatDate = (date) => {
        if (!date) return '';
        const year = date.getFullYear();
        let month = (date.getMonth() + 1).toString();
        month = month.length < 2 ? '0' + month : month;
        return year + '-' + month;
    };

    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);

    const filteredCostData = costData.map((callCategory) => ({
        ...callCategory,
        data: callCategory.data.filter(
            (callData) => callData.date >= formattedStartDate && callData.date <= formattedEndDate
        ),
    }));  

    const formattedData = filteredCostData.flatMap(category => category.data.map(item => ({
        date: formatDate(new Date(item.date)),  // Format the date for display
        value: item.value,
    })));

    const filteredDoughnutData = {
        labels: formattedData.map(item => item.date),  // Use the formatted dates as labels
        datasets: [
            {
                label: "Costs (USD)",
                data: formattedData.map(item => item.value),
                backgroundColor: [
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 205, 86, 0.7)',
                ],
                borderWidth: 1,
                type: "doughnut"
            },
            // You can add duration data here if needed
        ]
    };

    setDoughnutData(filteredDoughnutData);
    console.log('After filtering:', filteredCostData);
};
    return (
        <div>
            <h2>Costs Overview [Monthly]</h2>
            <Box  sx={{ justifyContent:'end'}}>
           
             
      <DatePicker
        label="Start"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
       
      />
      {/* ... other code */}
      
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        width="20px"
      />
    
        <IconButton onClick={filterDate} color="primary">
          <FilterIcon />
        </IconButton>
        <IconButton onClick={resetDate} color="primary">
          <ResetIcon />
        </IconButton>
        {/* <IconButton onClick={downloadPdf} size="small">
        <DownloadIcon />
      </IconButton> */}
      </Box>
            <Doughnut data={ doughnutData ? doughnutData : data } options={options} />
      
        </div>
    );
};

export default DoughnutChart;
