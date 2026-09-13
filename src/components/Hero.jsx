import banner from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">Build Your Ideal <span className="brand-gradient-text">Development Stack</span></h1>
        <p className="mt-4 text-gray-600 text-lg">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#technologies" className="brand-gradient-bg text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition">Explore Technologies</a>
          <a href="#about" className="border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-full hover:border-pink-500 hover:text-pink-600 transition">Learn More</a>
        </div>
      </div>
      <img src={banner} alt="Dev Stack Builder" className="w-full max-w-sm mx-auto" />
    </section>
  );
}

export default Hero;
