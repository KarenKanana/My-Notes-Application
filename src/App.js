import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import NotePage from './Components/NotesPage'
import './App.css';
import Header from './components/Header'
import NotesApp from './Components/NotesApp'

function App() {
  return (
    <div className="container dark">
      <div className="app">
    <Header />
    <Router>
    <Routes>
     <Route path="/" element ={ <NotesApp/> } ></Route>
     <Route path="/note/:id" element ={ <NotePage/> } ></Route>

    </Routes>
    </Router>
    </div>
    </div>
  );
}

export default App;
