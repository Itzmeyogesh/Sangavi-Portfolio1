import React from "react";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">

      {/* Background Layer 1 */}
      <div className="fixed inset-0 -z-50">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px]" />

        <div className="absolute top-[20%] right-0 w-[450px] h-[450px] bg-fuchsia-500/20 rounded-full blur-[140px]" />

        <div className="absolute bottom-0 left-[30%] w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[140px]" />
      </div>

      {/* Background Layer 2 */}
      <div
        className="
        fixed
        inset-0
        -z-40
        opacity-[0.05]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:50px_50px]
      "
      />

      {/* Background Layer 3 */}
      <div className="fixed inset-0 -z-30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="md:ml-24 relative">

        <div className="max-w-7xl mx-auto">

          <Home />

          <About />

          <Skills />

          <Projects />

          <Contact />
          <Footer />

        </div>

      </main>

    </div>
  );
}

export default App;