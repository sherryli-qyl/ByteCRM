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
    }

    showModal(target, key, value) {
        const newData = this.state.data;
        newData[key] = value;
        this.setState({
            modalActive: target,
            data: newData
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
                    />
                ))}
                <InfoContext.Consumer>
                    {value =>(
                         <SaveModal modalActive={modalActive}
                                    showModal={() => { 
                                        value.multi(data);
                                        this.showModal(false);
                                     }
                                    } />
                    )}
                </InfoContext.Consumer>
            </div>

        )
    }
}

export default AboutSection;