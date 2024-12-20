import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-primary py-10 mt-10">
      <div className="px-4 sm:px-6 lg:px-1 container mx-auto">
        <Image
          className="h-8 w-auto drop-shadow-md"
          src="/image/logoipsum-white.svg"
          alt="Minha Imagem SVG"
          width={200}
          height={50}
        />
        
        <div className="my-6 border-t-2 border-white"></div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 text-white">
            <a href="/terms" className="text-sm hover:text-gray-400">Terms & Conditions</a>
            <a href="/privacy" className="text-sm hover:text-gray-400">Privacy</a>
          </div>

          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
