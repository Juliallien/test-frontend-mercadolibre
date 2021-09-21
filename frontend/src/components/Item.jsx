import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectItem } from "../redux/settings/actions";
import "../assets/scss/item.scss";
import shipping from "../assets/images/ic_shipping.png";
import { formatPrice } from "../common/utils";

class Item extends Component {
  constructor(props) {
    super(props);
    this.viewDetail = this.viewDetail.bind(this);
  }

  viewDetail() {
    this.props.selectItem(this.props.item.id);
    this.props.history.push(`item/${this.props.item.id}`);
  }

  render() {
    return (
      <div className="item" onClick={this.viewDetail}>
        <div className="item__general">
          <img src={this.props.item.picture} alt={this.props.item.title} />
          <div className="item__resume">
            <div className="item__resume--title">
              <h1>{formatPrice(this.props.item.price.amount)}</h1>
              {this.props.item.free_shipping ? (
                <img src={shipping} alt="Free shipping" />
              ) : null}
            </div>
            <h2>{this.props.item.title}</h2>
          </div>
        </div>
        <span>{this.props.item.address}</span>
      </div>
    );
  }
}

export default connect(null, {
  selectItem,
})(withRouter(Item));
