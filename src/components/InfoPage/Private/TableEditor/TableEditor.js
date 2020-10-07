import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { InfoContext } from '../../components/Context';
import TipIcon from './Private/TipIcon';
import './TableEditor.scss';



class TableEditor extends React.Component {
    constructor(props) {
        super(props);
        const { title, value, key, tip } = this.props.item;
        this.inputRef = React.createRef();
        this.state = {
            hideEditor: true,
            value,
            currentValue: value,
            key,
            title,
            tip,
        }
        this.toggleEditor = this.toggleEditor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.onClickEditor = this.onClickEditor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.closeModal();
        this.toggleEditor();
    }

    onClickEditor() {
        this.inputRef.current.focus();
        this.toggleEditor();
    }

    toggleEditor() {
        this.setState(prevState => ({
            hideEditor: !prevState.hideEditor
        }))
    }

    updateDisplay(inputValue) {
        this.setState({
            currentValue: inputValue
        });
    }

    handleChange(e) {
        let value = e.target.value;
        let key = this.state.key;
        this.props.showModal(key, value);
        this.updateDisplay(e.target.value);
    }

    handleBlur() {
        this.toggleEditor();
    }

    componentDidUpdate() {
        if (!this.state.hideEditor) {
            this.inputRef.current.focus();
        }
    }

    render() {
        const { hideEditor, currentValue, title, tip, key } = this.state;

        let underline = "underline "
        if (!hideEditor) {
            underline += "underline--active "
        }

        return (
            <InfoContext.Consumer>
                { value => (<div className="tableEditor">
                    <div className="tableEditor__left">
                        <div className="tableEditor__left__title">
                            {title}
                            {tip ?
                                <div className="tableEditor__left__title__info" >
                                    <TipIcon />
                                </div>
                                :
                                ""
                            }
                        </div>
                        <form onSubmit={(event) => {
                            this.onSubmit(event);
                            value.single(key, currentValue);
                        }}
                        >
                            <input ref={this.inputRef} className='tableEditor__left__input '
                                disabled={hideEditor}
                                value={currentValue}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                            />
                        </form>

                    </div>
                    {hideEditor ?
                        <div className="tableEditor__right">
                            <button className="tableEditor__right__btn nakedBtn" onClick={this.onClickEditor}>
                                <FontAwesomeIcon className='tableEditor__right__btn__icon' icon={faPencilAlt} />
                            </button>
                        </div>
                        :
                        ""
                    }
                    <div className={underline + 'underline__green'} />

                </div>
                )
                }
            </InfoContext.Consumer>
        )
    }
}



export default TableEditor;