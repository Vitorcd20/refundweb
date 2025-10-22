import { Routes, Route } from "react-router-dom";
import { Refund } from "../pages/refund";
import { Dashboard } from "../pages/dashboard";
import { AppLayout } from "../components/app-layout";

export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/refund/:id" element={<Refund />} />
      </Route>

    </Routes>
  );
}