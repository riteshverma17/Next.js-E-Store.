
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-pink-400">E-Store</h2>
          <p className="text-sm mt-3 text-gray-300">
            Your one-stop shop for quality products at unbeatable prices. Discover deals and shop smart!
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/store" className="hover:text-white">Store</a></li>
            
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">FAQ</a></li>
            <li><a href="/" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="/" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400">Email: support@estore.com</p>
          <p className="text-sm text-gray-400">Phone: +1 800 123 4567</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-pink-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="hover:text-pink-400"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} E-Store by Ritesh Verma.
      </div>
    </footer>
  );
};

export default Footer;
