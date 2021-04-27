import './App.css';
import {InstructorBasicViewComponent} from "./components/instructor_searching/InstructorBasicViewComponent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Button} from "@material-ui/core";
import { CourseView } from './components/course/CourseView';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">
            <Button>Home</Button>
        </Link>
        <Link to="/search">
            <Button>Search For My Courses</Button>
        </Link>

        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/search">
                <InstructorBasicViewComponent />
            </Route>
            <Route path="/course/:id" children={<CourseView />} />
            <Route path="*">
                <NoMatch />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Home(){
    return(
        <div>Home</div>
    )
}

function NoMatch(){
    return(
        <p>Oh no, looks like you've found some 404! </p>
    )
}

export default App;
