import { Route, Routes } from "react-router-dom";

import Home from "./pages/dash/Home";
import Apps from "./pages/dash/Apps";
import NotFound from "./pages/NotFound";
import Invite from "./pages/dash/Invite";
import Profile from "./pages/dash/Profile";
import Templates from "./pages/dash/Templates";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/history" element={<Templates />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/invite" element={<Invite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl={baseUrl} />
      </SignedOut>
    </ClerkProvider>
  );
}

export default App;
