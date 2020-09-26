import React, { useContext } from 'react';
import './InfoBody.scss';


class InfoBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {        
        }
    }

    render() {
        const dataPack  = this.props.dataPack;
        return (
            <div className="infoBody">
                {dataPack.key === 'contact' ?
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
