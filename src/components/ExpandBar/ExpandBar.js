import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import HintBox from '../HintBox';
import './ExpandBar.scss';


class ExpandBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: false,
            showHint:false,
            color:"white",

        }

        this.handleOnClickAngle = this.handleOnClickAngle.bind(this);
        this.hintBoxToggle = this.hintBoxToggle.bind(this);
    }

    handleOnClickAngle() {
        this.setState(prevState => ({
            showDetail: !prevState.showDetail,
        }))
        console.log(this.state.showDetail);
    }

    hintBoxToggle(show){
        this.setState({
            showHint:show
        })
    }


    render() {
        const { showDetail,showHint } = this.state;
        const { showAdd, disabled, hintMessage } = this.props;
        let angleIconClassName = 'angleIcon '


        let expandContentClassName = 'expandBar__container__content '
        let addBtnClassName = 'expandBar__container__right__addBtn '
        if (showDetail) {
            angleIconClassName += 'angleIcon__rotate';
            expandContentClassName += 'expandBar__container__content__active';
        }

        if (disabled) {
            addBtnClassName += "expandBar__container__right__addBtn--disable";
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
                        {showAdd  ?
                            <div className='expandBar__container__right'
                                 onMouseEnter = {()=>this.hintBoxToggle(true)}
                                 onMouseLeave={()=>this.hintBoxToggle(false)}>
                                <button className={addBtnClassName}
                                        disabled={disabled}
                                        onClick={(event) => {
                                        event.stopPropagation();
                                    }}>
                                    {disabled && showHint?
                                        <div className='expandBar__container__right__hint'>
                                            <HintBox variant="right">
                                                {hintMessage}
                                            </HintBox>
                                        </div>
                                        :
                                        ""
                                    }
                                   + Add
                                    </button>
                            </div>
                            :
                            ""
                        }
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