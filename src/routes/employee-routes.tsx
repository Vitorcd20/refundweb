import { Routes, Route } from "react-router-dom";
import { Confirm } from "../pages/Confirm";
import { Refund } from "../pages/refund";
import { AppLayout } from "../components/app-layout";

export function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Refund />} />
        <Route path="/confirm" element={<Confirm />} />
      </Route>
    </Routes>
  );
}