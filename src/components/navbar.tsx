import Image from "next/image";
import Search from "./search";
import Link from "next/link";

const Navbar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <nav className="bg-white h-auto py-8 flex flex-wrap items-center justify-between px-6 sm:px-8 lg:px-10">
      
   
      <div className="w-full flex justify-center sm:w-auto sm:justify-start items-center px-4 sm:px-6">
        <Link href="/" legacyBehavior>
          <a onClick={handleReload}> 
            <Image
              className="h-8 w-auto"
              src="/image/logoipsum.svg"
              alt="Logo"
              width={700}
              height={700}
            />
          </a>
        </Link>
      </div>
      
    
      <div className="w-full mt-4 sm:mt-0 sm:w-auto flex justify-center sm:justify-end px-4 sm:px-6">
        <Search onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Navbar;
