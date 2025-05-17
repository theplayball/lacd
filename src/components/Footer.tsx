import { FaFacebookF, FaTwitter, FaGooglePlusG, FaFlickr, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#274472] text-[#e2eaf2] text-sm mt-auto border-t border-white">

      {/* Outer wrapper to match Events page layout */}
      <div className="px-6 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
         
          <div>
            <h4 className="text-lg font-semibold mb-4">TEXT WIDGET</h4>
            <p className="mb-4">
              Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel.
            </p>
            <p>
              Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">CAMPAIGN</h4>
            <ul className="space-y-2">
              {['Home', 'About LACD', 'Activities', 'Contact Us'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:underline text-gray-300">
                    &rsaquo; {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">LATEST TWEETS</h4>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow">
              FOLLOW US ON TWITTER
            </button>
          </div>
         
        </div>

        <div className="mt-12 border-t border-gray-50 pt-6 flex flex-col xl:flex-row items-center justify-between">
          <p className="text-sm text-gray-300 mb-4 xl:mb-0">
            © 2016 Candidate. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <a href="#" className="bg-[#3b5998] p-2 rounded text-white"><FaFacebookF /></a>
            <a href="#" className="bg-[#00aced] p-2 rounded text-white"><FaTwitter /></a>
            <a href="#" className="bg-[#dd4b39] p-2 rounded text-white"><FaGooglePlusG /></a>
            <a href="#" className="bg-[#ff0084] p-2 rounded text-white"><FaFlickr /></a>
            <a href="#" className="bg-[#333] p-2 rounded text-white"><FaEnvelope /></a>
            <a href="#" className="bg-[#3f729b] p-2 rounded text-white"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
