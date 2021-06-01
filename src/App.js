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
import { AdminView } from './components/admin_panel/AdminView';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Page404 } from './components/utils/404';
import { EventList } from './components/event_view/EventList';
import { ErrorBoundary } from './components/utils/ErrorBoundary';

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
  createSwitchElement("/admin_panel", <AdminView />),
  createSwitchElement("/events", <EventList />),
  createSwitchElement("*", <Page404 text="We couldn't find a page you're looking for!" />)
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
        <ErrorBoundary>
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
        </ErrorBoundary>
      </div>
    );
}

export default App;
