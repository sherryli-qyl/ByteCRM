import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const primaryColor = '#0091ae';
const publicTheme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
  },
  overrides: {
    MuiInputBase: {
      root: {
        display: 'flex',
        justifyContent: 'flex-start',
        height: '15px',
        padding: '0px',
      }
    },
    MuiInput: {
      root: {

      },
      underline: {
        "&&&&:hover:before": {
          borderBottom: "1px solid" + primaryColor,
        },
        "&:before": {
          borderBottom: "0",
        },
        "&::after": {
          borderBottom: "0",
        },
        borderBottom: "0px solid" + primaryColor,
      },
      input: {
        color: primaryColor,
        padding: '0px',
        height: '15px',
        fontSize: '15px',

      }
    },
    MuiInputAdornment: {
      root: {
        backgroundColor: 'transparent',
      },
      positionEnd: {
        marginLeft: '0px',
      }
    },
    MuiButtonBase: {
      root: {
        width: '15px',
        backgroundColor: 'transparent',
      }
    },
    MuiSelect: {
      root:{
        display:'flex',
      },
      select: {
        "&:focus": {
          backgroundColor: 'transparent',
        },
      }
    },
  
  MuiIconButton: {
      root: {
        borderRadius: 0,
        height: '15px',
        minWidth: '15px',
        padding: '0px',
        backgroundColor: 'transparent',
        "&:hover": {
          backgroundColor: 'red',
        },
      },
    },
    MuiTouchRipple: {
      root: {
        "&:focus": {
          outline: 'none',
        }
      }
    }
  }
})


export { publicTheme };
