
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="footer-section">
            <h2 className="text-lg font-semibold mb-4">CareerHub</h2>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              aliquet ligula vitae nunc convallis, non molestie ipsum tempor.
            </p>
            <p className="text-sm">
              Address: 123 Company St, City, Country
              <br />
              Phone: +1 (123) 456-7890
              <br />
              Email: info@example.com
            </p>
          </div>

          {/* Job Openings */}
          <div className="footer-section">
            <h2 className="text-lg font-semibold mb-4">Job Openings</h2>
            <ul className="text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Software Engineer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  UX/UI Designer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Data Analyst
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Marketing Manager
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h2 className="text-lg font-semibold mb-4">Legal</h2>
            <ul className="text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="footer-section">
            <h2 className="text-lg font-semibold mb-4">Social Media</h2>
            <div className="flex">
              <a href="#" className="text-gray-300 hover:text-gray-400 mr-4">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400 mr-4">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400">
                Instagram
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
            <p className="text-sm mb-4">
              For inquiries and support, contact us at:
            </p>
            <p className="text-sm">
              Email: contact@example.com
              <br />
              Phone: +1 (234) 567-8901
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center">
          &copy; {new Date().getFullYear()} Job Apply Company. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;