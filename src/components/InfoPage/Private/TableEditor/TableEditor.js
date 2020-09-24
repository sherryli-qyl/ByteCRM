import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import {ContactContext} from '../../../Contact/ContactContext';
import './TableEditor.scss';



class TableEditor extends React.Component {
    static contextType = ContactContext;
    constructor(props) {
        super(props);
        const defaultValue = this.props.value;
        this.inputRef = React.createRef();
        this.state = {
            hideEditor: true,
            currentValue: defaultValue,
            itemKey:this.props.itemKey,
            onChange: '',
        }
        this.toggleEditor = this.toggleEditor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.onClickEditor = this.onClickEditor.bind(this);
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

    handleSubmit(e) {
        e.preventDefault();
        const key = this.state.itemKey;
        this.state.onChange(key,this.state.currentValue);
        this.toggleEditor();
    }

    updateDisplay(inputValue){
		this.setState({
			currentValue: inputValue
		});
    }

    handleChange(e) {
       this.updateDisplay(e.target.value)
    }

    handleBlur() {
        this.updateDisplay(this.props.value);
        this.toggleEditor();
    }

    componentDidUpdate() {
        if (!this.state.hideEditor) {
            this.inputRef.current.focus();
        }
    }

    componentDidMount(){
        const context = this.context;
        this.setState({
            onChange:context
        })
    }


    render() {
        const { hideEditor, currentValue } = this.state;
        let underline = "underline "
        if (!hideEditor){
            underline += "underline--active "
        }

        return (
            <div className="tableEditor">
                <div className="tableEditor__left">
                    <div className="tableEditor__left__title"> {this.props.title} </div>
                    <form onSubmit={this.handleSubmit}
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
                <div className={underline + 'underline__green'}/>
            </div>
        )
    }
}



export default TableEditor;