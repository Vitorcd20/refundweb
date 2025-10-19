import { Routes, Route } from "react-router";

import { AuthLayout } from "../components/auth-layout";
import { SignIn } from "../pages/sign-in";
import { SignUp } from "../pages/sign-up";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
