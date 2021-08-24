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


            </BrowserRouter>
          </main>
        </div>
      </div>
</div>
  )

}

export default App;
