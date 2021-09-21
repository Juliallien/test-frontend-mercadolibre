import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../assets/images/Logo_ML.png";
import { withRouter, Link } from "react-router-dom";
import { setSearch, setItems } from "../redux/settings/actions";
import "../assets/scss/header.scss";
import { LANG_ES } from "../common/constants";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
    };

    this.searchItems = this.searchItems.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async searchItems(event) {
    event.preventDefault();
    this.props.setSearch(this.state.searchField);
    this.props.history.push(`/items?search=${this.state.searchField}`);
  }

  handleChange(event) {
    this.setState({ searchField: event.target.value });
  }

  render() {
    return (
      <header>
        <nav>
          <form className="search-form" onSubmit={this.searchItems}>
            <Link to="/">
              <img src={logo} alt="MercadoLibre" />
            </Link>
            <input
              type="text"
              id="search-field"
              placeholder={LANG_ES.SEARCHBAR_PLACEHOLDER}
              className="search-input"
              value={this.state.searchField}
              onChange={this.handleChange}
            />
            <button type="submit" className="search-button"></button>
          </form>
        </nav>
      </header>
    );
  }
}

export default withRouter(connect(null, { setSearch, setItems })(Header));
