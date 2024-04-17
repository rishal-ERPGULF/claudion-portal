import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import _layout from "@/pages/_layout";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <div className="min-h-screen flex flex-grow items-center justify-center bg-muted/40">
            <div className="rounded-lg bg-background p-8 text-center shadow-2xl">
              <h1 className="mb-4 text-4xl font-bold text-primary">404</h1>
              <p className="text-gray-600">
                Oops! The page you are looking for could not be found.
              </p>
              <Link
                to="/"
                className="mt-4 inline-block rounded-md bg- px-4 py-2 font-semibold bg-primary transition-colors hover:bg-primary/70 text-white"
              >
                Go back to Home
              </Link>
            </div>
          </div>
        }
      />
      {/* Main routes */}
      <Route path="/" element={<_layout />}>
        {/* Add your routes here */}
        <Route index element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/checkout" element={<div>heloo</div>} />
      </Route>
    </Routes>
  );
};

export default Router;
