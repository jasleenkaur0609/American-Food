import Box6 from "./pages/Box6";
import Box2 from "./pages/Box2";
import Box3 from "./pages/Box3";
import Home from "./pages/Home";
import List from "./pages/List";
import Box11 from "./pages/Box11";
import Box14 from "./pages/Box14";
import Footer from "./pages/Footer";
import Forms from "./pages/Forms";
import "./pages/list.css";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

const App = ()=>{
    return(
        <Router>
            <div className="container-fluid">

            {/* <Home/> */}
            <List/>
            {/* <Box2/> */}

        <section style={{'width':'100%','background':'white'}}>
      <Routes>
      <Route exact path='/Box2' element={<Box2/>} />
          <Route exact path='/Box3' element={<Box3/>} />
        
          <Route exact path='/Box6' element={<Box6/>} />
          <Route exact path='/Box11' element={<Box11/>} />
          <Route exact path='/Box14' element={<Box14/>} />
          <Route exact path='/Forms' element={<Forms/>} />
      </Routes>
      </section>
  
                
      {/* <Box3/> */}
      <Footer/>
    </div>
    </Router>
  );
  
}

export default App;
