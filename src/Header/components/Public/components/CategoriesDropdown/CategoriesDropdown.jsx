import React from 'react';
import styled from 'styled-components';
import NavigationLink from '../../../NavigationLink';
import NavigationItem from '../../../NavigationItem';

const Wrapper = styled.div`
  position: relative;
  cursor: initial;
`;

const CursorWrapper = styled(NavigationItem)`
  cursor: pointer;
`;

const Menu = styled.div`
  position: absolute;
  left: 0;
  background: white;
  padding: 16px 24px;
  border: 1px solid #dadada;
  border-radius: 4px;
  margin-top: -6px;
  margin-left: 8px;
  display: flex;
`;

const Left = styled.div`
  width: 200px;
`;

const Right = styled.div`
`;

class CategoriesDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      showContent: 'POSTER',
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    event.preventDefault();

    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  handleContentItemClick(target) {
    return (event) => {
      event.preventDefault();

      this.setState({
        showContent: target,
      });
    };
  }

  render() {
    const { show, showContent } = this.state;

    return (
      <Wrapper
        onMouseEnter={this.toggleMenu}
        onMouseLeave={this.toggleMenu}
      >
        <CursorWrapper indictable>
          <NavigationLink.Text
            as="span"
            indictable
          >
            Categories
          </NavigationLink.Text>
        </CursorWrapper>
        {show && (
          <Menu>
            <Left>
              <button type="button" onClick={this.handleContentItemClick('POSTER')}>
                As a poster
              </button>
              <button type="button" onClick={this.handleContentItemClick('TASKER')}>
                As a Tasker
              </button>
            </Left>
            <Right>
              {showContent === 'POSTER' && (
                <div>Poster content</div>
              )}
              {showContent === 'TASKER' && (
                <div>Tasker content</div>
              )}
            </Right>
          </Menu>
        )}
      </Wrapper>
    );
  }
}

export default CategoriesDropdown;
