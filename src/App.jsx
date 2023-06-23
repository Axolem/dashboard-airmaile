import { Route, Routes } from "react-router-dom";

import Home from "./pages/dash/Home";
import Apps from "./pages/dash/Apps";
import NotFound from "./pages/NotFound";
import Invite from "./pages/dash/Invite";
import Profile from "./pages/dash/Profile";
import Templates from "./pages/dash/Templates";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apps" element={<Apps />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/history" element={<Templates />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/invite" element={<Invite />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
