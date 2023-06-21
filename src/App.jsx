import { Route, Routes } from "react-router-dom";

import Home from "./pages/dash/Home";
import Apps from "./pages/dash/Apps";
import Templates from "./pages/dash/Templates";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apps" element={<Apps />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/history" element={<Templates />} />
      <Route path="/profile" element={<Templates />} />
      <Route path="/invite" element={<Templates />} />
    </Routes>
  );
}

export default App;
