import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

function App() {
    return (
        <fieldset>
            <h1>App</h1>
            <ol>
                <li><Link to="/">ComponentA</Link></li>
                <li><Link to="/componentB">ComponentB</Link></li>
                <li><Link to="/componentC">ComponentC</Link></li>
                <li><Link to="/componentC/componentD">ComponentC / ComponentD</Link></li>
                <li><Link to="/componentC/componentE">ComponentC / ComponentE</Link></li>
                <li><Link to="/componentC/componentF">ComponentC / ComponentF</Link></li>
            </ol>
            <Routes>
                <Route path="/" element={<ComponentA />} />
                <Route path="/componentB" element={<ComponentB />} />
                <Route path="/componentC/*" element={<ComponentC />} />
            </Routes>
        </fieldset>
    );
}

export default App;
