import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import './App.css';
import routes from './constants/routes';
interface IAppProps { [propName: string]: any }
class App extends React.Component<IAppProps> {
  showContentMenus = (routes: any) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route: any, index: number) => {
        return (
          <Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>
        )
      });
    }
    return result;
  }
  public render() {
    return (
      <Router>
        <div className="App">
          <Menu></Menu>
          <Switch>
            {this.showContentMenus(routes)}
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;