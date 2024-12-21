import Image from "next/image";
import { FaTwitter, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-primary py-12 mt-10">
      <div className="px-4 sm:px-6 lg:px-8 container mx-auto">

       
        <div className="flex justify-center sm:justify-start mb-4">
          <Image
            className="h-10 w-auto drop-shadow-md"
            src="/image/logoipsum-white.svg"
            alt="Logo"
            width={200}
            height={50}
          />
        </div>

        <div className="my-6 border-t-2 border-white"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center">
          
         
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-6 sm:space-y-0 text-white">
            <a href="/terms" className="text-sm hover:text-gray-400">Terms & Conditions</a>
            <a href="/privacy" className="text-sm hover:text-gray-400">Privacy</a>
          </div>

         
          <div className="flex space-x-4 mt-4 sm:mt-0">
           
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <Image 
                src="/image/facebook.svg" 
                alt="Facebook" 
                width={20} 
                height={20} 
                className="hover:scale-110 transition-transform duration-200" 
              />
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
