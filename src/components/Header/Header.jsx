import React from "react";
import Public from "./components/Public";
import Private from "./components/Private";
import store from "../../store";
import "./Header.scss";


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { user: null, reload: true };
  }

  componentDidMount() {
    store.subscribe(() => {
      const { reload, user } = store.getState().user;
      console.log(user);
      if (reload) {
        this.setState({
          user: user,
        });
      }
    });
    if (this.state.reload) {
      const user = JSON.parse(localStorage.getItem("user"));
      this.setState({
        user: user,
        reload: false,
      });
    }
  }

  render() {
    const { user } = this.state;
    return (
      <nav className="styled_header">
        <div className="styled_header__container">
          <div className="layout">
            <div className="left">
              <Public />
            </div>
            {user ? (
              <div className="right">
                <Private user={user} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
