import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="mt-20 text-neutral-900 container mx-auto min-h-screen ">
      <div className=" text-center space-y-5">
        <p className="uppercase">What we offer</p>
        <h2 className="text-4xl w-[800px] mx-auto text-neutral-600">
          We offer a wide range of high-quality fabrics, from cotton to synthetics, tailored for diverse applications. 
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 justify-center  p-10">
        <div className="w-full">
            <Image src={"/assets/images/about.jpg"} alt="about us" width={600} height={500}/>
        </div>
        <div className="space-y-9 text-start justify-center flex flex-col">
        <p className="uppercase">Premium Quality</p>
        <p className="text-3xl ">
        Our commitment to sustainability ensures eco-friendly materials and processes in every product 
        </p>
        <p className="text-neutral-500">We appreciate your trust greatly! Our clients choose us and our products because they know we’re the best.</p>
        <ul>
            <li className="hover:text-cyan-500">Top Quality Fabric</li>
            <li className="hover:text-cyan-500">Modern Collection</li>
        </ul>
        <Link href={"/about"}> <button className="btn btn-outline text-base bg-black text-white px-10 py-3 rounded-sm hover:text-black hover:bg-white duration-500">About Us</button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;
