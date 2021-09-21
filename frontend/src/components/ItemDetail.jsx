import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { URL_API, LANG_ES } from "../common/constants";
import Loader from "react-loader-spinner";
import {
  clearItems,
  clearSearch,
  setCategories,
} from "../redux/settings/actions";
import "../assets/scss/itemDetail.scss";
import { formatPrice } from "../common/utils";

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
    };
  }

  async componentDidMount() {
    try {
      let itemId = this.props.selectedItem
        ? this.props.selectedItem
        : this.props.match.params
        ? this.props.match.params.id
        : null;

      if (itemId) {
        const response = await fetch(`${URL_API}/api/items/${itemId}`);
        let item = await response.json();
        await this.setState({ item });

        if (!this.props.categories.length) {
          const categories = await fetch(
            `${URL_API}/api/categories/${item.category_id}`
          );
          let breadcrumb = await categories.json();
          await this.props.setCategories(breadcrumb);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentWillUnmount() {
    this.props.clearItems();
    this.props.clearSearch();
  }

  formatCondition(condition) {
    return condition === "new" ? LANG_ES.NEW : LANG_ES.USED;
  }

  render() {
    if (this.state.item.id) {
      return (
        <div className="item-detail">
          <div className="item-detail__image">
            <img src={this.state.item.picture} alt={this.state.item.title} />
          </div>
          <div className="item-detail__info">
            <p>
              {this.formatCondition(this.state.item.condition)} -{" "}
              {this.state.item.sold_quantity} {LANG_ES.SOLD}
            </p>
            <h1>{this.state.item.title}</h1>
            <h2>{formatPrice(this.state.item.price.amount)}</h2>
            <button>{LANG_ES.BUY}</button>
          </div>
          <div className="item-detail__description">
            <h3>{LANG_ES.PRODUCT_DESCRIPTION}</h3>
            <p>{this.state.item.description}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="main-container">
          <Loader type="Circles" color="#3483FA" />;
        </div>
      );
    }
  }
}

export default withRouter(
  connect(
    ({ selectedItem, categories }) => {
      return { selectedItem, categories };
    },
    { clearItems, clearSearch, setCategories }
  )(ItemDetail)
);
