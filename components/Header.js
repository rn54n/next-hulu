import Image from "next/image";

const Header = () => {
  return (
    <header className="">
      <h1>This is the header</h1>
      <Image
        className="object-contain"
        src="/assets/images/hulu-logo-white.png"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
