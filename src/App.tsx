import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import { Public } from './router/public';

const App: React.FC = () => {
  return (
      <Router>
    <div className="App">
      <Public />
    </div>
    </Router>
  );
}

export default App;
