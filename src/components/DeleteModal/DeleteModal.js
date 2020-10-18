import React from 'react';
import Overlay from '../Overlay';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './DeleteModal.scss';



const DeleteModal = ({
    onClickConfirm,
    onClickCancel,
}) => {
    return (
        <Overlay>
            <div className='deleteModal'>
                <Header/>
                <Body/>
                <Footer onClickCancel={onClickCancel}
                        onClickConfirm={onClickConfirm}/>
            </div>
        </Overlay >
    )
}


export default DeleteModal;