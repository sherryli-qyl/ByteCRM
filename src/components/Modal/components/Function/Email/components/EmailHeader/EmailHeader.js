import React from 'react';
import './EmailHeader.scss';
import HeaderItem from './components/HeaderItem';
import ReceiverTag from './components/ReceNameTag';
import Text from '../../../../../../Style/Text';



class EmailHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ccActive: false,
        }
        this.onCcButtonClick = this.onCcButtonClick.bind(this);
    }

    onCcButtonClick(){
        this.setState({
            ccActive:true,
        })
    }


    render() {
        const { ccActive } = this.state;
        return (
            <div className="emailHeader">
                <div className="emailHeader__blank" />
                <div className="emailHeader__main">
                    <HeaderItem
                        value={"To"}
                        borderBottom={false}
                    >
                        <ReceiverTag>John  Wick</ReceiverTag>
                        <ReceiverTag>John 111111  Wick</ReceiverTag>
                    </HeaderItem>
                    {ccActive ?
                        <HeaderItem
                            value={"Cc"}
                            borderBottom={false}
                        >
                            <ReceiverTag>John  Wick</ReceiverTag>
                            <ReceiverTag>John 111111  Wick</ReceiverTag>
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
                            ccActive?
                             "item-content__right" 
                             : 
                             "item-content__right item-content__right__active"
                             }>
                            <button className="ccButton"
                            onClick={(event) => {
                                event.preventDefault();
                                this.onCcButtonClick();}}
                                >
                            <Text className="ccButton__text">Cc</Text>
                            </button>
                        </div>
                    </HeaderItem>
                    <HeaderItem
                        value={"Subject"}
                        borderBottom={true}
                    >
                        <div className="item-content subject">
                            <span>abc</span>
                        </div>
                    </HeaderItem>
                </div>
                <div className="emailHeader__blank" />
            </div>
        )
    }


}



export default EmailHeader;


