import React from 'react'
import {Wrapper, GlobalStyle} from './styles'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Home from '../Home'
import About from '../About'
import Statisticks from '../Statisticks'

const App = () => {
        return (
            <Router>
            <Wrapper>
                <GlobalStyle />

                <nav>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/statisticks">Statistics</Link> 
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/statisticks" element={<Statisticks />} />
                <Route path="/about" element={<About />} />
                </Routes>

            </Wrapper>
            </Router>
        )
}

export default App;