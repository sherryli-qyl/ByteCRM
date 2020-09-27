import React from 'react';
import TableEditor from '../../../../Private/TableEditor';
import SaveModal from '../../../../Private/SaveModal';
import './AboutSection.scss';




class AboutSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: false,
        }
        this.showModal = this.showModal.bind(this);
    }

    showModal(target) {
        this.setState({
            modalActive: target,
        })
    }

   

    render() {
        const { modalActive } = this.state;
        return (
            <div className='aboutContact'>
                {this.props.infoList.map((item) => (
                    <TableEditor
                        key={item.key}
                        item={item}
                        showModal={this.showModal}
                    />
                ))}
                <SaveModal modalActive={modalActive}
                           showModal = {()=>this.showModal(false)} />
            </div>

        )
    }
}

export default AboutSection;