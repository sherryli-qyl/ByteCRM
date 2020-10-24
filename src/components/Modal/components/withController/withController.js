import React from 'react';



const withController = (Modal,controller) => {
    class Wrapper extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                controller:controller

            }
        }


        render() {
            return (
                <Modal
                    {...this.props}
                    modalController={this.state.controller}
                />
            );
        }
    }
    return Wrapper;
};

export default withController;