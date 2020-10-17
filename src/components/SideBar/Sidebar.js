import React from 'react';
import ContactsCompany from '../ContactsCompany';


import './SideBar.scss'



class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        const {company} = this.props.data;
        return(
            <div className = 'sideBar'>
                <ContactsCompany company = {company}/>

            </div>
        )
    }
}

export default SideBar;