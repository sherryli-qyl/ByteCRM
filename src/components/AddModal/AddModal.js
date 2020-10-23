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
        const { title, content } = this.props.addModal;
        const { showAddModal } = this.props

        let className = 'addModal ';
        if (showAddModal) {
            className += 'addModal--active'
        }
        return (
            <div className={className}>
                {showAddModal ?
                    <React.Fragment>
                        <Header title={title} onClickCloseBtn={this.props.onClickCloseBtn} />
                        <div className="addModal__body">
                            {content}
                        </div>
                        <Footer onClickSaveBtn={this.props.onClickSaveBtn}
                            onClickCancelBtn={this.props.onClickCloseBtn} />

                    </React.Fragment>
                    :
                    ""
                }
            </div>
        )
    }
}


export default AddModal;

