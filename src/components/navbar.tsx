import Image from "next/image";
import { useRouter } from "next/navigation";
import Search from "./search";
import Link from "next/link";

const Navbar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  return (
    <nav className="bg-white h-[110px] flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
      <Link href={'/'}>
      <Image
          className="h-8 w-auto"
          src="/image/logoipsum.svg"
          alt="Logo"
          width={700}
          height={700}
        />
      </Link>
       
      </div>
      <Search onSearch={onSearch} /> 
    </nav>
  );
};

export default Navbar;
