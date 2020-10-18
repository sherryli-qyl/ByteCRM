import React from 'react';
import Button from '../../../Button';
import './AddModalFooter.scss';



const AddModalFooter = ({
    onClickSaveBtn,
    onClickCancelBtn,
}) => (
        <div className='addModalFooter'>
            <div className='addModalFooter__btnWrapper'>
                <Button size='large' variant='contained' onClick = {onClickSaveBtn}>
                    Save
                </Button>
                <Button size='large' variant='outlined' onClick={onClickCancelBtn}>
                    Cancel
                 </Button>
            </div>
        </div>
    )

export default AddModalFooter;