import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import PostDetails from "./pages/PostDetails";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/blog", element: <Blog></Blog> },
        { path: "/about", element: <About></About> },
        { path: "/terms", element: <Terms></Terms> },
        { path: "/privacy", element: <Privacy></Privacy> },
        { path: "/blog/:slug", element: <PostDetails></PostDetails> },
        { path: "*", element: <NotFound></NotFound> },
      ],
    },
  ]);
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
