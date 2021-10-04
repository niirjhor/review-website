import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Coaches from './components/Coaches/Coaches';

function App() {
  return (
    <div className="App container-fluid">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/coaches'>
            <Coaches></Coaches>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>

      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
