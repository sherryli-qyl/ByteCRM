import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


function getTheme() {
  const primaryColor = '#00bda5';
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: primaryColor,
      },
    },
    overrides: {
      // Style sheet name ⚛️ 
      MuiInput: {
        underline: {
          "&&&&:hover:before": {
            borderBottom: "1px solid" + primaryColor,
          },
          "&:before": {
            borderBottom: "0",
          },
          "&::after": {
            borderBottom: "0",
          }
        },
        input: {
          height: "25px"
        }
      },

      MuiTab: {
        root: {
          flexGrow: 1,
          backgroundColor: 'white',
          maxWidth:'100px',
          
        },
      },
      MuiButton:{
         root:{
          backgroundColor: 'white',
         }
      },

      MuiSelect: {
        // Name of the rule
        select: {
          border: 0,
          height: "25px",
          color: primaryColor,
          fontWeight: "bold",
          fontSize: "small",
          "&:focus": {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  });
  return theme;
}

export default getTheme;