import React,{useState} from 'react';
import { Pie } from 'react-chartjs-2';
import { Box, Button, Grid, TextField, IconButton    } from '@mui/material';
import { GetApp as DownloadIcon,FilterAlt as FilterIcon, RotateLeft as ResetIcon } from '@mui/icons-material';

const DoughnutCalls = () => {
  const [doughnutData, setDoughnutData] = useState(null)  
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
    // Sample data for the doughnut chart

    const callsData = [
        {
          category:  "Contact Attempt (not connected)",
          data: [
            { date: "2022-03", value: 10228.0 },
            { date: "2022-04", value: 7598.0 },
            { date: "2022-05", value: 26790.0 },
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
      const dates = callsData
      .filter((item)=> item.data[0].date !== undefined)
      .map((item) => item.data[0].date);

    const data = {
        labels: callsData.map((item)=> item.category),
        datasets: [{
            label: dates,
            data: callsData
            .filter((item)=> item.data[0].value !== undefined)
            .map((item) => item.data[0].value),
            backgroundColor: ['rgba(153, 102, 255, 0.7)',
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 205, 86, 0.7)',]
        }]
    };


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
        const filteredData = callsData.map((callCategory) => ({
            ...callCategory,
            data: callCategory.data.filter(
              (callData) => callData.date >= startDate && callData.date <= endDate
            ),
          }));
    
      
    const filteredDoughnutData = {
        labels: data.labels,
        datasets:[
            {
                label: dates ,
                data: filteredData
                .filter((item)=> item.data[0].value)
                .map((item) => item.data[0].value),
                backgroundColor: [
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 205, 86, 0.7)',
                  ] ,
                  borderWidth:1,
                  type:"doughnut"
            }
        ]
    }
    setDoughnutData(filteredDoughnutData)
};
    

    return (
        <div>
            <h2>Calls Overview [Monthly]</h2>
            <Box  sx={{ justifyContent:'end'}}>
              Start:{' '}
        <TextField
          type="month"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          size="small"
          sx={{width:"50px"}}

        />
        
        End:{' '}
        <TextField
          type="month"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          size="small"
          sx={{width:"50px"}}

c        />
    
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
            <Pie data={doughnutData ? doughnutData : data } options={options} />
      
        </div>
    );
};

export default DoughnutCalls;
