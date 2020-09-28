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
                        <div className="infoBody__name"> {`${dataPack.data.firstName} ${dataPack.data.lastName}`} </div>
                        <div className="infoBody__jobTitle"> {`${dataPack.data.jobTitle} at ${dataPack.data.company}`}  </div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                    <div className='infoBody__contactsIcon__init'> AA</div>
                    <div className="infoBody__name"> {dataPack.data.Name} </div>
                    <div className="infoBody__jobTitle"> {dataPack.data.CompanyDomainName} </div>
                    </React.Fragment>
                }
            </div>
        )
    }
}


export default InfoBody;
