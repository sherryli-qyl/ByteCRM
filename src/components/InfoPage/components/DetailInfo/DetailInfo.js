import React from 'react';
import './DetailInfo.scss';
import FormatContact from './services/FormatContact';
import DetailInfoItem from './components/DetailInfoItem';



class DetailInfo extends React.Component {
    constructor(props) {
        super(props);
        const ContactInfoList = FormatContact(this.props.contact);
        this.state = {
            ContactInfoList,
        }
    }

    render() {
        const { ContactInfoList } = this.state;
        return (
            <div className="DetailInfo">
                <div className='DetailInfo__top'>
                    <button className='nakedBtn DetailInfo__top__btn'>
                        About this contact
            </button>
                </div>
                <div className='DetailInfo__items'>
                    {ContactInfoList.map((item) => (
                        <DetailInfoItem
                            title={item.key}
                            value={item.value}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default DetailInfo;