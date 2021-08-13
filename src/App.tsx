import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import Home from "./pages/Home"
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
