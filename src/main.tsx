import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.tsx";
import Theater from "./pages/Theater.tsx";
import Promotion from "./pages/Promotion.tsx";
import Movie from "./pages/Movie.tsx";
import News from "./pages/News.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Payment from "./pages/Payment.tsx";
import Booking from "./pages/Booking.tsx";
import Profile from "./pages/Profile.tsx";
import BookingHistory from "./pages/BookingHistory.tsx";
import PasswordRecover from "./pages/PasswordRecover.tsx";
import "./styles/global.css";
import MovieDetail from "./pages/MovieDetail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "theater",
        element: <Theater />,
      },
      {
        path: "promotion",
        element: <Promotion />,
      },
      {
        path: "movie",
        element: <Movie />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "booking/:movieId",
        element: <Booking />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "booking-history",
        element: <BookingHistory />,
      },
      {
        path: "change-password",
        element: <PasswordRecover />,
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
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/payment",
    element: <Payment />,
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
