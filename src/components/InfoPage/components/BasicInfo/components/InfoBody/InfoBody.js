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
            dataPack : this.props.dataPack,
        }
    }
    // const testCompany = {
    //     Name: 'Nike', CompanyDomainName: 'Nike.Ltd', Industry: 'IT', PhoneNumber: '123123',
    //     CompanyOwner: 'John Doe', Type: 'Partner', City: 'Sydney'
    // }

    render() {
        const { dataPack } = this.state;
        return (
            <div className="infoBody">
                {dataPack.type === 'contact' ?
                    <React.Fragment>
                        <div className='infoBody__contactsIcon__init'> BH </div>
                        <div className="infoBody__name"> {`${dataPack.data.FirstName} ${dataPack.data.LastName}`} </div>
                        <div className="infoBody__jobTitle"> {`${dataPack.data.JobTitle} at ${dataPack.data.Company}`}  </div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                    <div className='infoBody__contactsIcon__init'> AA</div>
                    <div className="infoBody__name"> {dataPack.data.CompanyDomainName} </div>
                    <div className="infoBody__jobTitle"> {dataPack.data.CompanyDomainName} </div>
                    </React.Fragment>
                }
            </div>
        )
    }
}


export default InfoBody;
