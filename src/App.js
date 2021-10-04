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
function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/courses">
          <Courses></Courses>
        </Route>
        <Route exact path="/instructors">
          <Instructors></Instructors>
        </Route>
        <Route path="/aboutus">
          <AboutUs></AboutUs>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
