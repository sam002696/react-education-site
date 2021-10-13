import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Paths/Home/Home';
import Courses from './Components/Paths/Courses/Courses';
import Instructors from './Components/Paths/Instructors/Instructors';
import AboutUs from './Components/Paths/AboutUs/AboutUs';
import NotFound from './Components/Paths/NotFound/NotFound';
import Login from './Components/Paths/Login/Login';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/courses">
            <Courses></Courses>
          </PrivateRoute>
          <Route exact path="/instructors">
            <Instructors></Instructors>
          </Route>
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>

  );
}

export default App;
