import Nav from './secure/components/Nav';
import Menu from './secure/components/Menu';
import './App.css';
import Dashboard from './secure/dashboard/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './secure/users/Users';
import Login from './public/Login';
import Register from './public/Register';

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}

<div className="container-fluid">
  <div className="row">
      <Menu />

    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <BrowserRouter>

        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/users'} exact component={Users} />
        <Route path={'/login'} exact component={Login} />
        <Route path={'/register'} exact component={Register} />


      </BrowserRouter>
    </main>
  </div>
</div>
</div>
  )

}

export default App;
