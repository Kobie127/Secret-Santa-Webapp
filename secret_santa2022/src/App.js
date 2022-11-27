import Homepage from "../src/pages/homepage.page"
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  console.log('dwadwad')
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage}/>
        </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
