import React, { useContext } from 'react';
// import { ContactContext } from '../../../../../Contact/ContactContext';
import './InfoBody.scss';



// const InfoBody = () => {
//     const contact= useContext(ContactContext); //receive context
//     return (
//         <div className="infoBody">
//             <div className='infoBody__contactsIcon__init'>BH</div>
//             <div className="infoBody__name"> {`${contact.FirstName} ${contact.LastName}`} </div>
//             <div className="infoBody__jobTitle"> {contact.JobTitle}  </div>
//         </div>
//     )
// }

class InfoBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: this.props.contact,
        }
    }
    // getContact() {
    //     const contact = useContext(ContactContext);
    //     this.setState({
    //         currentContact: contact,
    //     })
    // }
    
    // componentDidMount(){
    //     this.getContact();
    // }

    render() {
        const { contact} = this.state;
        // const currentContact = useContext(ContactContext);
        return (
            <div className="infoBody">
                <div className='infoBody__contactsIcon__init'>BH</div>
                <div className="infoBody__name"> {`${ contact.FirstName} ${ contact.LastName}`} </div>
                <div className="infoBody__jobTitle"> {`${ contact.JobTitle} at ${contact.Company}`}  </div>
            </div>
        )
    }
}


export default InfoBody;
