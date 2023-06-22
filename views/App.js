import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Login from './Login/Login.js';
import Auth from './Auth/Auth.js';

import Home from './Home/Home';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";



/**
 * 2 components: class component / function component ( function, arrow)
 * JSX
 */

function App() {
  // const  App = () =>  {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>

        </header>


        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        
      </div>
    </BrowserRouter>
    
    
  );
}

export default App;
