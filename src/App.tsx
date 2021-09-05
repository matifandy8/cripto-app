import './App.css';
import Layout from './components/layout';
import Home from './pages/home';

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
      <Home/>
      </Layout>
    </div>
  );
}

export default App;
