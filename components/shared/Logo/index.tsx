import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="img/logo.svg" alt="logo" width={72} height={30} />
    </Link>
  );
};

export default Logo;
