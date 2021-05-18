import './App.css';
import {InstructorBasicViewComponent} from "./components/instructor_searching/InstructorBasicViewComponent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import {Button} from "@material-ui/core";
import { CourseView } from './components/course/CourseView';
import { makeStyles } from '@material-ui/core/styles';
import { AdminPanel } from './components/admin_panel/AdminPanel';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Page404 } from './components/utils/404';
import { EventList } from './components/event_view/EventList';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      justifyContent: "right"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
        color: "white",
        textDecoration: "none"
    }
  }));

const createSwitchElement = (path, component) => {
  return {
    path: path,
    component: component
  }
}

const switchElements = [
  createSwitchElement("/search", <InstructorBasicViewComponent />),
  createSwitchElement("/events", <EventList />),
  createSwitchElement("/admin_panel", <AdminPanel />),
  createSwitchElement("*", <Page404 />)
]

const createLinkElement = (to, buttonText) => {
  return {
    to: to,
    buttonText: buttonText
  }
}

const linksElements = [
  createLinkElement("/search", "Search For My Courses"),
  createLinkElement("/events", "Search Events")
]

function App() {

    const classes = useStyles();

    const getSwitchElements = () => {
      return switchElements.map(element => <Route path={element.path} key={element.path}>{element.component}</Route>)
    }

    const getLinksElements = () => {
      return linksElements.map(element => <Link to={element.to} className={classes.link} ><Button color="inherit" className={classes.menuButton}>{element.buttonText}</Button></Link>)
    }

    return (
      <div className="App">
        <Router>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                      {getLinksElements()}
              </Toolbar>
            </AppBar>

          <Switch>
              <Route exact path="/">
                <Redirect to="/search" />
              </Route>
              <Route path="/course/:id" children={<CourseView />} />
              {getSwitchElements()}
          </Switch>
        </Router>
      </div>
    );
}

export default App;
