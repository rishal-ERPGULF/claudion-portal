import Home from "@/pages/Home";
import _layout from "@/pages/_layout";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
            <div className="rounded-lg bg-white p-8 text-center shadow-xl">
              <h1 className="mb-4 text-4xl font-bold">404</h1>
              <p className="text-gray-600">
                Oops! The page you are looking for could not be found.
              </p>
              <a
                href="/"
                className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
              >
                Go back to Home
              </a>
            </div>
          </div>
        }
      />
      {/* Main routes */}
      <Route path="/" element={<_layout />}>
        {/* Add your routes here */}
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
