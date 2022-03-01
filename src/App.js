import logo from './logo.svg';
import './App.css';
import ListTodo from './components/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav  from './nav/Nav';
// import Product from './components/Product';
import react,{Fragment} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

function App() {
  return (
    < Router >
    <div className="App">

      <header className="App-header">
      <Nav />

        <img src={logo} className="App-logo" alt="logo" />
      
       {/* < ListTodo /> */}

        <Routes>
        <Fragment>
          <Route exact path="/"  >
          </Route>
          <Route path="/todos" element={<ListTodo />}>
          </Route>
          {/* <Route path="/product" element={<Product />}> */}
          {/* </Route> */}
          {/* <Route path="/about">
            <Nav /> */}
          {/* </Route> */}
          </Fragment>
        </Routes> 



       
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
{/* Same as */}
<ToastContainer />
    </div>
    </Router>
  );
}

export default App;
