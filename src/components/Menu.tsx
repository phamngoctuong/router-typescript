import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
var menus = [
  {
    to: '/',
    label: 'Trang chủ',
    exact: true
  },
  {
    to: '/about',
    label: 'Giới thiệu',
    exact: false
  },
  {
    to: '/contact',
    label: 'Liên hệ',
    exact: false
  },
  {
    to: '/products',
    label: 'Danh sách sản phẩm',
    exact: false
  },
  {
    to: '/login',
    label: 'Đăng nhập',
    exact: false
  }
];
var MenuLink = ({ label, to, activeOnlyWhenExact }: any) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      var active = match ? 'active' : '';
      return (
        <li className={`my-li ${active}`}>
          <NavLink to={to} className="my-link">{label}</NavLink>
        </li>
      )
    }}></Route>
  )
};
class Menu extends Component {
  showMenus = (menus: any) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu: any, index: any) => {
        return (
          <MenuLink key={index} label={menu.label} to={menu.to} activeOnlyWhenExact={menu.exact}></MenuLink>
        );
      });
    }
    return result;
  }
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <ul className="nav navbar-nav">
          {this.showMenus(menus)}
        </ul>
      </nav>
    );
  }
}
export default Menu;