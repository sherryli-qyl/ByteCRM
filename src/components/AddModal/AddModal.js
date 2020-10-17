import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './AddModal.scss';



class AddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        const { title,content} = this.props.addModal;

        let className = 'addModal ';
        if(this.props.showAddModal){
            className += 'addModal--active'
        }
        return (
            <div className= {className}>
                <Header title = {title} onClickCloseBtn = {this.props.onClickCloseBtn}/>
                <div className="addModal__body">
                    {content}
                </div>
                <Footer/>
            </div>
        )
    }
}


export default AddModal;

