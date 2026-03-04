const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 mt-16">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-5 gap-8">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-white font-semibold mb-4">
            CS — Ticket System
          </h2>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="text-white mb-4">Social Links</h3>
          <ul className="space-y-2 text-sm">
            <li>@CS — Ticket System</li>
            <li>@CS — Ticket System</li>
            <li>@CS — Ticket System</li>
            <li>support@cst.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;