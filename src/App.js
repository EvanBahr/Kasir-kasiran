import "./App.css";
import Member from "./Member";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import ArrayMap from "./ArrayMap";
import Abal2Array from "./Abal2Array";

import ArrayMap from "./latihan/latihan4/ArrayMap";
import StateSetstate from "./latihan/latihan1/stateSetstate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index path="/" element={<ArrayMap />} /> */}
        <Route index path="map" element={<Abal2Array />} />
        <Route index path="/" element={<ArrayMap />} />
        <Route index path="state" element={<StateSetstate />} />
        {/* <Route path="admin"> */}
        <Route path="member" element={<Member />} />
        {/* <Route path="member" element={<Member2 />} /> */}

        {/* <Route path="dapur" element={<Admin />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
