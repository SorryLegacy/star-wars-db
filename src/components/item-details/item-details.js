import React, { Component } from 'react';

import './item-details.css';
import SwapiService from "../../services/api-client";


const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{ item[field] }</span>
    </li>
  );
};

export {
  Record
};

export default class ItemDetails extends Component {

  swapiService = new SwapiService()

  state = {
    item: null,
    image: null
  }

  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updatePerson();
    }
  }

  updatePerson (){
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId)
        .then((item) => {
          this.setState({
            item,
            image: getImageUrl(item)
          });
        });
  }

  render() {
    if (!this.state.item){
      return <span>Select a person from a list</span>;
    }
    const { name } = this.state.item;
    const item = this.state.item
    const { image } = this.state


   return (
      <div className="item-details card">
        <img className="item-image"
          src={image}
          alt="item"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
              {
                  React.Children.map(this.props.children, (child, idx) =>{
                      return React.cloneElement(child, {item});
                  })
              }
          </ul>
        </div>
      </div>
    );
  }
}