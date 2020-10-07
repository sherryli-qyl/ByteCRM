import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './ExpandBar.scss';


class ExpandBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: false,

        }

        this.handleOnClickAngle = this.handleOnClickAngle.bind(this);
    }

    handleOnClickAngle() {
        this.setState(prevState => ({
            showDetail: !prevState.showDetail,
        }))
        console.log(this.state.showDetail);
    }


    render() {
        const { showDetail } = this.state;
        let angleIconClassName = 'angleIcon '
        let expandContentClassName = 'expandBar__container__content '
        if (showDetail) {
            angleIconClassName += 'angleIcon__rotate';
            expandContentClassName += 'expandBar__container__content__active';
        }
        return (
            <div className='expandBar'>
                <div className='expandBar__container'>
                    <div className="expandBar__container__labelBtn" onClick={this.handleOnClickAngle}>
                        <div className='expandBar__container__labelBtn__icon'>
                            <FontAwesomeIcon className={angleIconClassName} icon={faAngleRight} />
                        </div>
                        <div className='expandBar__container__labelBtn__text'>
                            <span> {this.props.label} </span>
                        </div>
                    </div>
                    <div className={expandContentClassName}>
                        {this.props.content}
                    </div>
                </div>
               
            </div>
        )
    }
}


export default ExpandBar