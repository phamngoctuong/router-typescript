import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        Đây là trang liên hệ.
        <button type="button" className="btn btn-success">Cho phép</button>
        <button type="button" className="btn btn-danger">Không cho phép</button>
        <Prompt when={true} message={(location) =>
          `Bạn muốn chuyển đến trang ${location.pathname}`
        }></Prompt>
      </div>
    );
  }
}
export default Contact;