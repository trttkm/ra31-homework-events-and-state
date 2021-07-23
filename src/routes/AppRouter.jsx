import { Route, Switch, withRouter } from 'react-router-dom';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Portfolio } from '../components/Portfolio/Portfolio';
import { StoreLayout } from '../components/StoreLayout/StoreLayout';

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Portfolio} />
      <Route path="/layout" exact component={StoreLayout} />
      <Route path="/dropdown" exact component={Dropdown} />
    </Switch>
  );
};

export default withRouter(AppRouter);
