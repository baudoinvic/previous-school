// import "./App.css";
// import Header from "./components/common/header/Header";
// import { BrowserRouter as Router, Route,Link } from "react-router-dom";
// import About from "./components/about/About";
// import CourseHome from "./components/allcourses/CourseHome";
// import Team from "./components/team/Team";
// import Pricing from "./components/pricing/Pricing";
// import Blog from "./components/blog/Blog";
// import Contact from "./components/contact/Contact";
// import Footer from "./components/common/footer/Footer";
// import Home from "./components/home/Home";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Route exact path="/" component={Home} />
//       <Route exact path="/about" component={About} />
//       <Route exact path="/courses" component={CourseHome} />
//       <Route exact path="/team" component={Team} />
//       <Route exact path="/pricing" component={Pricing} />
//       <Route exact path="/journal" component={Blog} />
//       <Route exact path="/contact" component={Contact} />
   
//       <Footer />
//     </Router>
//   );
// }

// export default App;


import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Event from "./components/Events/Event";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CourseHome />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/journal" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<Event />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
