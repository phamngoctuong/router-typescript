import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Product from './Product';
interface Props {
  [key: string]: any
}
class Products extends Component<Props, any> {
  render() {
    var products = [
      {
        id: 1,
        name: "Iphone 6 Plus",
        slug: 'iphone6plus',
        price: 6000000
      },
      {
        id: 2,
        name: "Iphone 7 Plus",
        slug: 'iphone7plus',
        price: 7000000
      },
      {
        id: 3,
        name: "Iphone 8 Plus",
        slug: 'iphone8plus',
        price: 8000000
      }
    ];
    var { match }: any = this.props;
    var { url } = match;
    var result = products.map((product, index) => {
      return (
        <NavLink key={index} to={`${url}/${product.slug}`}>
          <li className="list-group-item">
            {product.id} - {product.name} - {product.price}
          </li>
        </NavLink>
      )
    });
    return (
      <div className="container">
        <div className="row">
          {result}
        </div>
        <div className="row">
          <Route path="/products/:slug" component={Product}></Route>
        </div>
      </div>
    );
  }
}
export default Products;
