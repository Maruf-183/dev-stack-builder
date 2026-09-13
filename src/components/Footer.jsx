import logo from "../assets/logo-text.png";

function Footer() {
  const year = new Date().getFullYear();
  const columns = [
    { title: "Product", links: ["Home", "Technologies", "Projects"] },
    { title: "Company", links: ["About", "Contact", "Careers"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Dev Stack" className="h-7 w-auto" />
          <p className="mt-3 text-sm text-gray-500">Curated tools, technologies, and resources for developers building modern software.</p>
          <div className="mt-4 flex gap-4 text-sm text-gray-500"><a href="#" className="hover:text-gray-900">GitHub</a><a href="#" className="hover:text-gray-900">Twitter</a><a href="#" className="hover:text-gray-900">LinkedIn</a></div>
        </div>
        {columns.map((col) => <div key={col.title}><h4 className="text-gray-900 font-semibold mb-3 text-sm uppercase tracking-wide">{col.title}</h4><ul className="space-y-2 text-sm text-gray-500">{col.links.map((link) => <li key={link} className="hover:text-gray-900 cursor-pointer">{link}</li>)}</ul></div>)}
      </div>
      <div className="border-t border-gray-200"><div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500"><p>© {year} Dev Stack. All rights reserved.</p><div className="flex gap-4"><a href="#" className="hover:text-gray-900">Privacy</a><a href="#" className="hover:text-gray-900">Terms</a></div></div></div>
    </footer>
  );
}

export default Footer;
