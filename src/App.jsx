import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Error = lazy(() => import("./pages/Error"));
const Education = lazy(() => import("./pages/Education"));

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/създателите" element={<About />} />
            <Route path="/контакти" element={<Contact />} />
            <Route path="/обучение" element={<Education />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
