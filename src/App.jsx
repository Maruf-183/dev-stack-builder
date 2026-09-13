import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const addToStack = (tech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const removeFromStack = (id) => {
    const removed = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  };

  const removeAllFromStack = () => {
    setStack([]);
    toast.success("All technologies removed from your stack.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <section id="technologies" className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-extrabold text-gray-900">Explore the <span className="text-pink-600">Technologies</span></h2>
        <p className="mt-2 text-gray-500">Pick one technology per category to build your ideal stack.</p>
        <div className="mt-8 grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex items-center justify-center py-20 text-gray-500 font-medium">Loading technologies...</div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech) => <TechCard key={tech.id} tech={tech} isAdded={stack.some((item) => item.id === tech.id)} onAdd={addToStack} />)}
              </div>
            )}
          </div>
          <StackSidebar stack={stack} onRemove={removeFromStack} onRemoveAll={removeAllFromStack} />
        </div>
      </section>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2500} />
    </div>
  );
}

export default App;
