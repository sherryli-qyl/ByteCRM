import React from 'react';
import Header from './components/Header';
import './AddModal.scss';



class AddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        const { title,content } = this.props.addModal;
        return (
            <div className="addModal">
                <Header title = {title}/>
                <div className="addModal__Body">
                    {content}
                </div>
            </div>
        )
    }
}


export default AddModal;

