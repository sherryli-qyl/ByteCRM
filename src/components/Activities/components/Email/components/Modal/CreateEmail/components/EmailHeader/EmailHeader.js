import React from 'react';
import './EmailHeader.scss';
import HeaderItem from './components/HeaderItem';
import ReceiverTag from './components/ReceNameTag';
import Text from '../../../../../../../../Style/Text';



class EmailHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ccActive: false,
            emailReceivers: this.props.contacts,
            carbonCopies: this.props.contacts,
        }
        this.onCcButtonClick = this.onCcButtonClick.bind(this);
        this.onDeleteReceiversButton = this.onDeleteReceiversButton.bind(this);
        this.onDeleteCCsButton = this.onDeleteCCsButton.bind(this);
    }

    onCcButtonClick() {
        this.setState({
            ccActive: true,
        })
    }

    onDeleteReceiversButton(canceledemail) {
        console.log(canceledemail);
        let newContacts = this.state.emailReceivers;
        for (let key in newContacts) {
            if (newContacts[key].email === canceledemail) {
                newContacts.splice(key, 1)
            }
        }
        this.setState({
            emailReceivers: newContacts,
        });
        console.log("length" + this.props.contacts.length);
    }

    onDeleteCCsButton(canceledemail) {
        console.log(canceledemail);
        let newContacts = this.state.carbonCopies;
        for (let key in newContacts) {
            if (newContacts[key].email === canceledemail) {
                newContacts.splice(key, 1)
            }
        }
        this.setState({
            carbonCopies: newContacts,
        });
    }



    render() {
        const { ccActive, emailReceivers, carbonCopies } = this.state;
        return (
            <div className="emailHeader">
                <div className="emailHeader__blank" />
                <div className="emailHeader__main">
                    <HeaderItem
                        value={"To"}
                        borderBottom={false}
                    >
                        {emailReceivers.map((item) => (
                            <ReceiverTag 
                                key = {item.key}
                                onClick={() => this.onDeleteReceiversButton(item.email)}>
                                {item.value}
                            </ReceiverTag>
                        ))}
                    </HeaderItem>
                    {ccActive ?
                        <HeaderItem
                            value={"Cc"}
                            borderBottom={false}
                        >
                            {carbonCopies.map((item) => (
                                <ReceiverTag 
                                     key = {item.key}
                                     onClick={() => this.onDeleteCCsButton(item.email)}>
                                    {item.value}
                                </ReceiverTag>
                            ))}
                        </HeaderItem>
                        :
                        <div />
                    }
                    <HeaderItem
                        value={"From"}
                        borderBottom={true}
                    >
                        <div className="item-content__left">
                            <span>abc</span>
                        </div>
                        <div className={
                            ccActive ?
                                "item-content__right"
                                :
                                "item-content__right item-content__right__active"
                        }>
                            <button className="ccButton"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.onCcButtonClick();
                                }}
                            >
                                <Text className="ccButton__text">Cc</Text>
                            </button>
                        </div>
                    </HeaderItem>
                    <HeaderItem
                        value={"Subject"}
                        borderBottom={true}
                        extraClassName={"subject"}
                    >
                        <div className="item-content">
                            <input className='subject__input' />
                        </div>
                    </HeaderItem>
                </div>
                <div className="emailHeader__blank" />
            </div>
        )
    }


}



export default EmailHeader;


