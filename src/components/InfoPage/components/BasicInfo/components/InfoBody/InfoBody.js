import React from 'react';
import Loading from '../../../../../Loading';
import './InfoBody.scss';


class InfoBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const dataPack = this.props.dataPack;
        let loading = true;
        if (dataPack.data && !dataPack.data.errors) {
            loading = false
        }

        let companyName = "";
        if(dataPack.data.company){
             companyName = `at ${dataPack.data.company.name}`;
        }
        return (
            <div className="infoBody">
                {dataPack.key === 'contact' ?
                    <React.Fragment>
                        {loading ?
                            <Loading variant="block" />
                            :
                            <React.Fragment>
                                <div className='infoBody__contactsIcon__init'> BH </div>
                                <div className="infoBody__name"> {`${dataPack.data.firstName} ${dataPack.data.lastName}`} </div>
                                <div className="infoBody__jobTitle"> {`${dataPack.data.jobTitle} ${companyName}`}  </div>
                            </React.Fragment>
                        }
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <div className='infoBody__contactsIcon__init'> AA</div>
                        <div className="infoBody__name"> {dataPack.data.name} </div>
                        <div className="infoBody__jobTitle"> {dataPack.data.companyDomainName} </div>
                    </React.Fragment>
                }
            </div>
        )
    }
}


export default InfoBody;
