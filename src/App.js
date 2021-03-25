import './App.css';
import {InstructorBasicViewComponent} from "./components/instructor_searching/InstructorBasicViewComponent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import {Button} from "@material-ui/core";

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
            <Route path="/course/:id" children={<Course />} />
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

function Course(){
    const { id } = useParams();
    return(
        <div>
            Course number {id}
        </div>
    )
}

function NoMatch(){
    return(
        <p>Oh no, looks like you've found some 404! </p>
    )
}

export default App;
