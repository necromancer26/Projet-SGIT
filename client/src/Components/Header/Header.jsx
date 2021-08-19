import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  container = React.createRef();
  state = {
    open: false,
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };

  handleButtonClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };
  render() {
    return (
      <div className="header-container">
        <ul>
          <li>
            <button
              type="button"
              class="button"
              onClick={this.handleButtonClick}
            >
              ACCEUIL
            </button>
            {this.state.open && (
              <div class="dropdown">
                <ul>
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                  <li>Option 4</li>
                </ul>
              </div>
            )}
          </li>
          {/* <li>
            <button type="button" class="button">
              NOS LOGICIELS
            </button>
          </li>
          <li>
            <button type="button" class="button">
              CONTACT
            </button>
          </li>
          <li>
            <button type="button" class="button">
              A PROPOS
            </button>
          </li> */}
        </ul>
      </div>
    );
  }
}
