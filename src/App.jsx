import { Routes, Route } from 'react-router';
import NavBar from '@components/NavBar/NavBar.jsx';
import Home from '@components/Home/Home.jsx';

function App() {

    return (
        <>
            <NavBar/>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </>
    )
}

export default App;