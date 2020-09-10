import React, {Component} from 'react';
import './EmailNavbar.scss';

class EmailNavbar extends Component{
    constructor(props){
        super(props);
        this.state ={
            active:false,
        };
    }
    render(){
        return(
            <div className="Email_Navbar">
                <p>this is email navbar component</p>
            </div>
        )
    }
   

    
}



export default EmailNavbar;