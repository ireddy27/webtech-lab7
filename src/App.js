import React from "react";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Menu from "./pages/menu";
import Reservation from "./pages/reservation";
import Cafes from "./components/cafes";
import CafeDetail from "./pages/CafeDetail";

export default function App(){

  return(
    <div>
     <Router>
       <Routes>
               <Route exact path='/' element={< Home />}></Route>
               <Route exact path='/menu' element={< Menu />}></Route>
               <Route exact path='/reservation' element={< Reservation />}></Route>
                <Route path="/cafe/:id" element={< CafeDetail />}></Route>
                <Route path="/cafes" render={() => <Cafes />} />
       </Routes>
       
   </Router>
    
    </div>
  )
}

