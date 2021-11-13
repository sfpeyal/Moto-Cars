import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvier from './contexts/AuthProvider/AuthProvier';
import Explore from './pages/Explore/Explore/Explore';
import Home from './pages/Home/Home/Home';
import Login from './pages/Home/Login/Login/Login';
import PrivateRoute from './pages/Home/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Home/Login/Register/Register';
import Purchase from './pages/Purchase/Purchase';
import Footer from './pages/Shared/Footer/Footer';
import Navigation from './pages/Shared/Navigation/Navigation';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Error from './pages/Error/Error';

function App() {
  return (
    <div className="App">
      <AuthProvier>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/products/purchase/:id">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvier>
    </div>
  );
}

export default App;
