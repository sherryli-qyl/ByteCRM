import React from 'react';
import Text from '../../../../Text';
import './ControlBar.scss';



const ControlBar = ({
    handleDeleteCard,
})=>{
        return (
            <div className='controlBar'>
                <div className='controlBar__container'>
                    <button className='controlBar__container__btn'>
                        <Text className='controlBar__container__btn__text'>Pin</Text>
                    </button>
                </div>
                <div className='controlBar__container'>
                    <button className='controlBar__container__btn'
                             onClick={(event) => {
                                event.preventDefault();
                                handleDeleteCard();
                              }}>
                        <Text className='controlBar__container__btn__text'>Delete</Text>
                    </button>
                </div>
            </div>
        ) 
}

export default ControlBar;