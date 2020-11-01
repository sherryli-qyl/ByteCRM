import React from 'react';
import SwitchButton from './components/SwitchButton';

import './SwitchButtonBar.scss';

class SwitchButtonBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentComponent: 0,

        };
        this.handleSwitchBtn = this.handleSwitchBtn.bind(this);
    }

    handleSwitchBtn(component) {
        this.setState({
            currentComponent: component,
        });
    }

    render() {
        const { components } = this.props;
        const { currentComponent } = this.state;

        return (
          <div className="switchButtonBar">
            <div className="switchButtonBar__buttonWrapper">
              <div className="switchButtonBar__buttonWrapper__buttons">
                {components.map((item) => (
                  <SwitchButton
                    key={item.key}
                    label={item.label}
                    active={currentComponent === item.key}
                    component={item.component}
                    handleSwitchBtn={() => this.handleSwitchBtn(item.key)}
                  />
                        ))}
                <div className="switchButtonBar__buttonWrapper__blank" />
              </div>
            </div>
            <div className="switchButtonBar__components">
              {components.map((item) => {
                        if (currentComponent !== item.key) {
                            return null;
                        }

                        return (
                          <React.Fragment key={item.key}>
                            {item.component}
                          </React.Fragment>
                        );
                    })}
            </div>
          </div>

        );
    }
}

export default SwitchButtonBar;
