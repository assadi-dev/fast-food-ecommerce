import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import { routeDetails } from "./config/routes";

function App() {
  function Layout() {
    return (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    );
  }

  return (
    <div className="App">
      {
        <Routes>
          <Route path="/" element={<Layout />}>
            {routeDetails.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      }
    </div>
  );
}

export default App;
