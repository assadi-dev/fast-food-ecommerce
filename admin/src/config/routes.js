import Dashboard from "../pages/Dashboard";

export const routeDetails = [
  {
    name: "Tableau de board",
    path: "/",
    element: <Dashboard name="Tableau de board" />,
  },
  {
    name: "Commandes",
    path: "/orders",
    element: <Dashboard name="Commandes" />,
  },
  {
    name: "Article",
    path: "/articles",
    element: <Dashboard name="Article" />,
  },
  {
    name: "Catégories",
    path: "/categories",
    element: <Dashboard />,
  },
];
