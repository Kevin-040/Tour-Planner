// import React from "react";
// import dayjs from 'dayjs';

// import { makeStyles } from "@material-ui/core/styles";
// import { TextField } from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { Box } from "@mui/material";
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


// const useStyles = makeStyles(() => ({
  
//   input1: {
//     height: 50,
//     width:225
      
//   },

// }));


// export default function DateForm() {
//   const [value, setValue] = React.useState(dayjs());
//   const [value1, setValue1] = React.useState(null);

//   const classes = useStyles();

//   return (
  
    
// <Box  bgcolor="blue">
//     <div className="Ho"  >
//       <Grid Grid container  direction="column"  
     
//         spacing={0}
//         alignItems="center"
//         justifyContent="center"
//         style={{ minHeight: '80vh' }}>
//       <Grid item>
      
//       <TextField id="outlined-basic" label="Enter a Place"   variant="outlined" endIcon={<LocationOnOutlinedIcon />}
//        InputProps={{ classes: { input: classes.input1 } }}
//       />
//        </Grid>

// <br />
//       <Grid item>

//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//     <DatePicker
         
//           label="Start Date"
//           openTo="year"
//           views={['year', 'month', 'day']}
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} />}
//           />
//       </LocalizationProvider>
//       </Grid>
// <br />

// <Grid item>
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//     <DatePicker
//           label="End Date"
//           defaultProp={null}
//           openTo="year"
//           views={['year', 'month', 'day']}
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} />}
//           />
//       </LocalizationProvider>
//       </Grid>

//       <br />

//       <Grid item>
//           <Button
//             variant="contained"
//             color="primary"
//             className={classes.button}
//             size="large"
//           >
//             Next
//           </Button>
//         </Grid>
//         <br />
// </Grid>
//     </div>
//     </Box>
//   );
// }