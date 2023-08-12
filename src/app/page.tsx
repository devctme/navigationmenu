import Image from "next/image";
import Pic from "../../public/devct.webp";

export default function Home() {
  return (
    <div className=" flex flex-col gap-5 justify-between items-center lg:flex-row lg:gap-10">
      <h1 className="font-bold text-5xl text-black">Design by DevCT</h1>
      <div>
        <Image src={Pic} width={500} height={500} alt="devct" />
      </div>
    </div>
  );
}
