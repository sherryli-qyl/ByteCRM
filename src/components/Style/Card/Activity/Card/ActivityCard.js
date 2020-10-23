import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TimeStamp from '../../../Tag/Activity/TimeStamp';
import ControlBar from './components/ControlBar';
import DeleteModal from '../../../../DeleteModal';
import './ActivityCard.scss';



class ActivityCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showModal:false
        }
        this.onClickDelete = this.onClickDelete.bind(this);
        this.onClickCancel = this.onClickCancel.bind(this);
        this.onClickConfirm = this.onClickConfirm.bind(this);
    }

    onClickDelete(){
        this.setState({
            showModal:true
        })
    }

    onClickConfirm(){
        this.props.handleDeleteCard(this.props.card.id);
        this.setState({
            showModal:false
        })
    }

    onClickCancel(){
        this.setState({
            showModal:false
        })
    }


    render(){
        const {showModal} = this.state;
        return(
            <div className='activityCard'>
            <div className='activityCard__container'>
                <div className="activityCard__container__left">
                    <FontAwesomeIcon className='activityCard__container__left__icon'icon={this.props.icon} />
                </div>
                <div className='activityCard__container__content'>
                    <div className='cardHeader'>
                        <div className="cardHeader__title"> {this.props.card.type} </div>
                        <div className='cardHeader__timeStamp'>
                            <TimeStamp date={this.props.card.date} dateTime ={this.props.dateTime}/>
                        </div>
                    </div>
                    <div className='hoverBar'>
                      <ControlBar onClickDelete={this.onClickDelete}/>
                    </div>
                    <div className='activityCard__container__content__body'>
                        {this.props.cardContent}
                    </div>
                </div>
            </div>
            {showModal?
               <DeleteModal onClickCancel = {this.onClickCancel}
                            onClickConfirm = {this.onClickConfirm}/>
             :
             ""
            }
        </div>
        )
    }
}


export default ActivityCard;