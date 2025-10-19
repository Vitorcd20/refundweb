import { Routes, Route } from "react-router";


import { AppLayout } from "../components/app-layout";
import { Dashboard } from "../pages/dashboard";

export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>

    </Routes>
  );
}