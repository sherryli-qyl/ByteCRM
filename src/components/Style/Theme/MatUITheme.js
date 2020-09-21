import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const primaryColor = '#0091ae';
const datePicker = createMuiTheme({
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
        width: '100px',
        // backgroundColor: 'yellow',
        padding: '0px',
      }
    },
    MuiFormControl:{
      marginNormal:{
        marginTop:'0px',
        marginBottom:'0px',
      }

    },
    MuiInput: {
      root: {
        flex: 1,
      },
      underline: {
        "&&&&:hover:before": {
          borderBottom: "0px solid" + primaryColor,
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
        minWidth: '80px',
        // backgroundColor: 'pink',
        height: '15px',
        width: '80px',
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

    MuiIconButton: {
      root: {
        borderRadius: 0,
        height: '15px',
        minWidth: '15px',
        padding: '0px',
        backgroundColor: 'transparent',
        "&:hover": {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiSvgIcon: {
      root: {
        height: '15px',
        width: '15px',
      }
    },
    MuiPickersDay: {
      daySelected: {
        borderRadius: '50px',
        backgroundColor: 'rgb(71, 223, 135,0.9)',
        "&:hover": {
          backgroundColor: 'rgb(71, 223, 135,0.7)',
        },
      }
    }
  }
})

const timePicker = createMuiTheme({
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
        width: '100px',
        // backgroundColor: 'yellow',
        padding: '0px',
      }
    },
    MuiInput: {
      root: {
        flex: 1,
      },
      underline: {
        "&&&&:hover:before": {
          borderBottom: "0px solid" + primaryColor,
        },
        "&:before": {
          borderBottom: "0",
        },
        "&::after": {
          borderBottom: "0",
        },
        borderBottom: "0px solid" + primaryColor,
      },
      formControl:{
        marginTop: '20px',
      },
      input: {
        color: primaryColor,
        padding: '0px',
        minWidth: '80px',
        // backgroundColor: 'pink',
        height: '15px',
        width: '100px',
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

    MuiIconButton: {
      root: {
        borderRadius: 0,
        height: '15px',
        minWidth: '15px',
        padding: '0px',
        backgroundColor: 'transparent',
        "&:hover": {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiSvgIcon: {
      root: {
        height: '15px',
        width: '15px',
      }
    },
    MuiPickersDay: {
      daySelected: {
        borderRadius: '50px',
        backgroundColor: 'rgb(71, 223, 135,0.9)',
        "&:hover": {
          backgroundColor: 'rgb(71, 223, 135,0.7)',
        },
      }
    }
  }
})

const checkbox = createMuiTheme({
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
          borderBottom: "0px solid" + primaryColor,
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
    MuiSelect:{
      root:{
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
          backgroundColor: 'transparent',
        },
      },
    },
    MuiSvgIcon: {
      root: {
        height: '20px',
        width: '20px',
      }
    },
  }
})


export {checkbox,datePicker,timePicker};
