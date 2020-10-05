import React from 'react';
import TableEditor from '../../../../Private/TableEditor';
import SaveModal from '../../../../Private/SaveModal';
import { InfoContext } from '../../../Context';
import FindDiff from '../../../../services/FindPropertyDiff';
import './AboutSection.scss';




class AboutSection extends React.Component {
    constructor(props) {
        super(props);
        const data = { ...this.props.data };
        this.state = {
            modalActive: false,
            data,
            propertyDiff: 0,
        }
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this)
    }

    showModal(key, value) {
        const newData = this.state.data;
        let target = true;
        newData[key] = value;
        const count = FindDiff(newData, this.props.data, 0);
        count === 0 ? target = false : target = true;
        this.setState({
            modalActive: target,
            data: newData,
            propertyDiff: count,
        });
    }

    closeModal() {
        this.setState({
            modalActive: false,
        })
    }


    render() {
        const { modalActive, data, propertyDiff } = this.state;
        return (
            <div className='aboutContact'>
                {this.props.infoList.map((item) => {
                    return (
                        <TableEditor
                            key={item.key}
                            item={item}
                            showModal={this.showModal}
                            closeModal={this.closeModal}
                        />
                    )
                }
                )}
                <InfoContext.Consumer>
                    {value => (
                        <SaveModal modalActive={modalActive}
                            closeModal={this.closeModal}
                            propertyDiff={propertyDiff}
                            saveData={() => {
                                value.multi({ ...data });
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