import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./features/Login/pages/Login";
import Registration from "./features/Login/pages/Registration";
import Home from "./features/Login/pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Index path="/" element={<> <Login/> </>}></Route>
        <Route path="/Register" element={<> <Registration/> </>}></Route>
        <Route path="/Home" element={<> <Home/> </>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;