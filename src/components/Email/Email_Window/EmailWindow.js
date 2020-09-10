import React, {Component} from 'react';
import EmailNavbar from './EmailNavbar'
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';




class EmailWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }

    render() {
        return (
            <div className="Email_Window">
                <Draggable
                    defaultPosition={{x: 500, y: 50}}
                >
                    <div  className="Window_wrapper">
                        <div className="Email_Navbar">
                            <EmailNavbar/>
                        </div>
                    </div>
                </Draggable>
            </div>



        )
    }

}


export default EmailWindow;