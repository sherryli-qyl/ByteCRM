import React, { Component } from 'react';
import Modal from '../../../Modal/Modal';
import Contactbasic from '../../Contactbasic';
import '../contactmain/contactmain.scss';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Xaxis:500,
            Yaxis:200,
            visible:false,
            currentModal: "",
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    openModal(selectedModal){
        this.setState({
            visible:true,
            currentModal:selectedModal,

        });
        console.log("open the modal " + this.state.visible)
    }

    closeModal(){
        this.setState({
            visible:false,
        });
        console.log("close the modal " + this.state.visible)
    }

    render() {
        const {visible,currentModal} = this.state
        return (
            <div className="Main">
                <Contactbasic openModal = {this.openModal}
                />

                <div className="Function">
                    <p>function component</p>
                </div>

                <div className="Company">
                    <p>Company component</p>
                </div>
                <Modal Xaxis = {this.state.Xaxis}
                       Yaxis = {this.state.Yaxis}
                       visible = {visible}
                       currentModal = {currentModal}
                       closeModal = {this.closeModal}          
                />
            </div>



        )
    }

}


export default Main;