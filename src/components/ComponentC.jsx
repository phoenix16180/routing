import { Route, Routes, Link } from 'react-router-dom';
import ComponentD from './ComponentD'; // Import the ComponentD component
import ComponentE from './ComponentE'; // Import the ComponentD component
import ComponentF from './ComponentF'; // Import the ComponentD component

const ComponentC = () => {

    return (
        <fieldset>
            <h2>ComponentC</h2>
            <li><Link to="componentD">ComponentC / ComponentD</Link></li>
            <li><Link to="componentE">ComponentC / ComponentE</Link></li>
            <li><Link to="componentF">ComponentC / ComponentF</Link></li>
            <Routes>
                <Route path="componentD" element={<ComponentD />} />
                <Route path="componentE" element={<ComponentE />} />
                <Route path="componentF" element={<ComponentF />} />
            </Routes>
        </fieldset>
    )
};

export default ComponentC;
