import { Fragment, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import MovieDetailPage from "./pages/MovieDetailPage";
// code slitting routes
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path="/movies" element={<MoviesPage></MoviesPage>} />
            <Route
              path="/movie/:movieId"
              element={<MovieDetailPage></MovieDetailPage>}
            />
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
