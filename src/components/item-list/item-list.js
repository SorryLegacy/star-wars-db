import React, { Component } from 'react';

import './item-list.css';
import Spinner from "../spinner/spinner";

class ItemList extends Component {

  static defaultProps = {
  onItemSelected: () => {}
};
  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.children(item);

      return (
        <li className="list-group-item"
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
          {label}
        </li>
      );
    });
  }

  render() {

    const { data } = this.props;

    if (!data) {
      return <Spinner />;
    }

    const items = this.renderItems(data);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}

export default ItemList;