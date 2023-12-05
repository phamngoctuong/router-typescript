import React, { Component } from 'react';
class Product extends Component<any, any> {
  render() {
    var { match }: any = this.props;
    return (
      <div className="Product text-center">
        <h1>Trang chi tiết sản phẩm: {match.params.slug}</h1>
      </div>
    );
  }
}
export default Product;