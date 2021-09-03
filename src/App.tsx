// import Nav from './secure/components/Nav';
// import Menu from './secure/components/Menu';
import './App.css';
import Dashboard from './secure/dashboard/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './secure/users/Users';
import {UserCreate} from './secure/users/UserCreate';
import Login from './public/Login';
import Register from './public/Register';
import RedirectToDashboard from './secure/RedirectToDashBoard';
import { UserEdit } from './secure/users/UserEdit';
import Roles from './secure/roles/Roles';
import RoleCreate from './secure/roles/RoleCreate';
import RoleEdit from './secure/roles/RoleEdit';
import Products from './secure/products/Products';
import ProductCreate from './secure/products/ProductCreate';
import ProductEdit from './secure/products/ProductEdit';
import Orders from './secure/orders/Orders';
import OrderItems from './secure/orders/OrderItems';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <BrowserRouter>

              <Route path={'/'} exact component={RedirectToDashboard} />
              <Route path={'/dashboard'} exact component={Dashboard} />
              <Route path={'/login'} exact component={Login} />
              <Route path={'/register'} exact component={Register} />
              <Route path={'/users'} exact component={Users} />
              <Route path={'/users/create'} exact component={UserCreate} />
              <Route path={'/users/:id/edit'} component={UserEdit} />
              <Route path={'/roles'} component={Roles} exact />
              <Route path={'/roles/create'} component={RoleCreate} />
              <Route path={'/roles/:id/edit'} component={RoleEdit} />
              <Route path={'/products'} component={Products} exact />
              <Route path={'/products/create'} component={ProductCreate} />
              <Route path={'/products/:id/edit'} component={ProductEdit} />
              <Route path={'/orders'} component={Orders} exact />
              <Route path={'/order/:id/'} component={OrderItems} exact />

              {/* <Route path={'/products/create'} component={ProductCreate} />
              <Route path={'/products/:id/edit'} component={ProductEdit} /> */}


            </BrowserRouter>
          </main>
        </div>
      </div>
</div>
  )

}

export default App;
