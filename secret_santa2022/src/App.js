import Homepage from "../src/pages/homepage.page"
import Opening from "./pages/opening.page";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  console.log('dwadwad')
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Opening}/>
          <Route exact path='/home' component={Homepage}/>
          
        </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
