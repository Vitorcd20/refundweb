import { BrowserRouter } from "react-router";
import { Loading } from "../components/ui/loading";
import { AuthRoutes } from "./auth-routes";
import { EmployeeRoutes } from "./employee-routes";
import { ManagerRoutes } from "./manager-routes";

const isLoading = false;
// const session = undefined

const session = {
  user: {
    role: "",
  },
};

export function Routes() {
  function Route() {
    switch (session?.user.role) {
      case "employee":
        return <EmployeeRoutes />;
      case "manager":
        return <ManagerRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
