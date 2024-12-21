import Image from "next/image";
import { useRouter } from "next/navigation";
import Search from "./search";
import Link from "next/link";

const Navbar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  return (
    <nav className="bg-white h-auto py-4 flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8">
      
      <div className="w-full flex justify-center sm:w-auto sm:justify-start items-center">
      <Link href="/" legacyBehavior>
  <a>
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
      
      <div className="w-full mt-4 sm:mt-0 sm:w-auto flex justify-center sm:justify-end">
        <Search onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Navbar;
