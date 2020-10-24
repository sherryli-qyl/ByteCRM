import React from 'react';



const withModal = (Component,controller) => {
    class Wrapper extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                controller:controller
            }
        }


        render() {
            const {controller} = this.state;
            console.log(controller.contact.id);
            return (
                <Component
                    {...this.props}
                    modalController={controller}
                />
            );
        }
    }
    return Wrapper;
};

export default withModal;