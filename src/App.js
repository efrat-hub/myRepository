import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CreateUsers from './createUser';
import UpLoad from './uploadimages';
import { Provider } from 'react-redux';
// import {createUser} from './service';
//  import ShowImage from './showImage';


function App() {
  return (
    <div className="App">
      <Provider>
        <Router>
          <Switch>
            <Route exact path='/'>
    <CreateUsers></CreateUsers>
    </Route >
    <Route path='/UpLoad'>
    <UpLoad></UpLoad>
    </Route>
    </Switch>
    </Router>
    </Provider>
    {/* <ShowImage></ShowImage> */}
    {/* <showImage></showImage> */}
    </div>
  );
}

export default App;
