import React from 'react';
import './DetailInfo.scss';
import FormatContact from './services/FormatContact';
import AboutContact from './components/About';
import ExpandBar from '../../Private/ExpandBar';
import TableEditor from '../../Private/TableEditor';




class DetailInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: false,

        }
        this.handleOnClickAbout = this.handleOnClickAbout.bind(this);
    }

    handleOnClickAbout() {
        this.setState(prevState => ({
            showDetail: !prevState.showDetail,
        }))
        console.log(this.state.showDetail);
    }


    render() {
        const { showDetail } = this.state
        const contactInfoList = FormatContact(this.props.contact);
        const expandTableContent = <AboutContact contactInfoList={contactInfoList}/>;
        return (
            <div className="DetailInfo">
                <ExpandBar label="About this Contact"
                  content = {expandTableContent}/>
                <div>
                  {this.props.expandPack?
                  this.props.expandPack.map((item) => (
                        <ExpandBar key={item.key}
                            label={item.key}
                            content={item.content}>
                        </ExpandBar>
                    ))
                    :
                    ''
                  }       
                </div>
            </div>
        )
    }
}

export default DetailInfo;