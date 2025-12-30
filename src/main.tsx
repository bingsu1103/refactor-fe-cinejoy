import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.tsx";
import "./styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "/about",
      //   element: <About />,
      // },
      // {
      //   path: "/movie",
      //   element: <Movie />,
      // },
      // {
      //   path: "/movie/:id",
      //   element: <Movie />,
      // },
      // {
      //   path: "/booking",
      //   element: <Booking />,
      // },
      // {
      //   path: "/checkout",
      //   element: <Checkout />,
      // },
    ],
  },
  // {
  //   path: "/admin",
  //   element: <AdminLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <AdminDashboard />,
  //     },
  //     {
  //       path: "users",
  //       element: <UserManagement />,
  //     },
  //     {
  //       path: "theaters",
  //       element: <TheaterManagement />,
  //     },
  //     {
  //       path: "auditoriums",
  //       element: <AuditoriumManagement />,
  //     },
  //     {
  //       path: "films",
  //       element: <FilmManagement />,
  //     },
  //     {
  //       path: "showtimes",
  //       element: <ShowtimeManagement />,
  //     },
  //     {
  //       path: "addresses",
  //       element: <AddressManagement />,
  //     },
  //     {
  //       path: "bookings",
  //       element: <BookingManagement />,
  //     },
  //   ],
  // },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
