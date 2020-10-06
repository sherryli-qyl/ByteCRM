import { createMuiTheme } from '@material-ui/core/styles';

const primaryColor = '#0091ae';
const DropdownTheme = createMuiTheme({
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
                width: '65px',
            }
        },
        MuiInput: {
            root: {

            },
            underline: {
                "&&&&:hover:before": {
                    borderBottom: "1px solid" + primaryColor,
                },
                "&:hover":{
                    borderBottom: "0",
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
                width: '65px',
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
            select: {
                "&:focus": {
                    backgroundColor: 'transparent',
                },
            }
        },
    }
})

export default DropdownTheme;