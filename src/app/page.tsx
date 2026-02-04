import AuthLayout from "@/components/AuthLayout";
import Header from "@/components/Header";
import Image from "next/image";


const HeadingImagesAndText: Array<{
  image: string;
  text: string;
  subtitle: string;
}> = [
  {
    image: "/image-1.jpg",
    text: "Where social meets shopping",
    subtitle: "Connect with people and shop smarter in one place",
  },
  {
    image: "/image-2.jpg",
    text: "Share, connect and discover",
    subtitle: "Explore trending products and stories from your community",
  },
  {
    image: "/image-3.jpg",
    text: "Buy and sell in your community",
    subtitle: "Find trusted deals from people near you",
  },
  {
    image: "/image-4.jpg",
    text: "On app endless possibilities",
    subtitle: "Everything you need to grow, trade, and connect",
  },
];

export default function Home() {
  return (
    <>
    <Header/>
    <AuthLayout
      // images={["/image-1.jpg", "/image-2.jpg", "/image-3.jpg" , "/image-4.jpg"]}
      // headline="Speed up your work with our Web App"
      imagesText={HeadingImagesAndText}
    >
      <div className="space-y-6">

        <div>
          <h2 className="text-4xl text-[#ff6602] font-semibold mb-2">
            Welcome Back
          </h2>
          <p className="text-md text-gray-500">
            Login to your account
          </p>
        </div>

        <form className="space-y-4">
         <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
              <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff6602] focus:border-[#ff6602] block w-full p-2.5 "/>
          </div>

          <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff6602] focus:border-[#ff6602] block w-full p-2.5 "/>
          </div>

         <button className="relative z-0 h-12 w-full rounded-full bg-[#ff6602] px-6 text-neutral-50 border border-[#ff6602]">
            Log in
          </button>
        </form>

      </div>
    </AuthLayout>
    </>
  );
}
