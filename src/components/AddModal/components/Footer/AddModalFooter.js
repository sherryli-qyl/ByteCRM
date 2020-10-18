import React from 'react';
import Button from '../../../Button';
import './AddModalFooter.scss';



const AddModalFooter = ({
    onClickSave,
    onClickCancel,
}) => (
        <div className='addModalFooter'>
            <div className='addModalFooter__btnWrapper'>
                <Button size='large' variant='contained' onClick = {onClickSave}>
                    Save
                </Button>
                <Button size='large' variant='outlined' onClick={onClickCancel}>
                    Cancel
                 </Button>
            </div>
        </div>
    )

export default AddModalFooter;