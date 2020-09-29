import React from 'react';
import TableEditor from '../../../../Private/TableEditor';
import SaveModal from '../../../../Private/SaveModal';
import { InfoContext } from '../../../Context';
import './AboutSection.scss';




class AboutSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: false,
            data: this.props.data,
        }
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this)
    }

    showModal(target, key, value) {
        const newData = this.state.data;
        newData[key] = value;
        this.setState({
            modalActive: target,
            data: newData
        })
    }

    closeModal(){
        this.setState({
            modalActive: false,
        })
    }


    render() {
        const { modalActive, data } = this.state;
        return (
            <div className='aboutContact'>
                {this.props.infoList.map((item) => (
                    <TableEditor
                        key={item.key}
                        item={item}
                        showModal={this.showModal}
                        closeModal = {this.closeModal}
                    />
                ))}
                <InfoContext.Consumer>
                    {value =>(
                         <SaveModal modalActive={modalActive}
                                    closeModal={this.closeModal}
                                    saveData={() => { 
                                        value.multi(data);
                                        this.closeModal();
                                     }
                                    } />
                    )}
                </InfoContext.Consumer>
            </div>

        )
    }
}

export default AboutSection;