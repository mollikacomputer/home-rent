import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Common/Nav';
import { publicRoute } from './Components/Routes/publicRoute';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        {
          publicRoute.map(({path, Component}, index) => (
            <Route key={index} path={path} element= {<Component/>} />
          ))}
      </Routes>
    </div>
  );
}

export default App;
