import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import EntryLayout from "./Pages/Layout/EntryLayout";
import Register from "./Pages/RegisterPage/Register";
import Login from "./Pages/LoginPage/Login";
import UserLayout from "./Pages/Layout/UserLayout";
import Home from "./Pages/HomePage/Home";
import Products, { PostsLoader } from "./Pages/ProductsPage/Products";
import About from "./Pages/AboutPage/About";
import FirstLoadingPage from "./Pages/FirstLoadingPage/FirstLoadingPage";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    if (localStorage.getItem("currentUser") === "") {
      localStorage.setItem("currentUser", "Guest");
    }
  });
  const RoutesSecondWay = createBrowserRouter([
    {
      path: "/",
      element: <FirstLoadingPage />,
    },
    {
      path: "/booxtore",
      element: <UserLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "products", element: <Products />, loader: PostsLoader },
      ],
    },
    {
      path: "account",
      element: <EntryLayout />,
      children: [
        {
          index: true,
          element: <Register />,
        },
        { path: "login", element: <Login /> },
      ],
    },
  ]);
  return <RouterProvider router={RoutesSecondWay} />;
}

export default App;

{
  /* <BrowserRouter>
  <Routes>
    <Route path="/" element={<FirstLoadingPage />} />

    <Route path="/booxtore" element={<UserLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} loader={PostsLoader} />
    </Route>

    <Route path="/account" element={<EntryLayout />}>
      <Route index element={<Register />} />
      <Route path="login" element={<Login />} />
    </Route>
  </Routes>
</BrowserRouter>; */
}
