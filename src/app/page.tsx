import Image from "next/image";
import { ProductDataType } from "@/components/types/types";
import { Archivo_Black } from "next/font/google";
import Link from "next/link";
import FeedbackButton from "../components/Feedback/FeedbackButton";
import DisplayFeedback from "../components/Feedback/DisplayFeedback";
import Hero from "@/components/HeroSection/Hero";
import ProductCard from "@/components/ProductCard/ProductCard";

const boldFont = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [data1, data2, data3, data4] = await Promise.all([
    fetch(`${baseUrl}/api/productsData?category=hoodie`, {
      cache: "no-cache",
    }).then((res) => res.json() as Promise<ProductDataType[]>),
    fetch(`${baseUrl}/api/productsData?category=jeans`, {
      cache: "no-cache",
    }).then((res) => res.json() as Promise<ProductDataType[]>),
    fetch(`${baseUrl}/api/productsData?category=shirt`, {
      cache: "no-cache",
    }).then((res) => res.json() as Promise<ProductDataType[]>),
    fetch(`${baseUrl}/api/productsData?category=tshirt`, {
      cache: "no-cache",
    }).then((res) => res.json() as Promise<ProductDataType[]>),
  ]);

  return (
    <div className="w-full min-h-screen">
      <section>
        {/* hero section for small devices  */}
        <div className="">
          <Hero />
        </div>

        {/* hero section for large devices */}
        <div
          className="flex flex-col lg:flex-row w-full h-max lg:h-[493px] xl:h-[660px] bg-[#F2F0F1] 
        lg:bg-[url(/images/Rectangle2.png)] lg:bg-cover"
        >
          {/* hero section content */}
          <div className="hidden lg:flex flex-col justify-center items-start w-[43%] xl:w-[50%] h-fit my-20 lg:py-20 px-2">
            <h1
              className={`${boldFont.className} uppercase text-[24px] tracking-normal leading-tight 
              md:text-3xl md:text-center lg:text-left lg:px-2 lg:text-4xl xl:text-6xl xl:px-8 xl:leading-[63px]
              lg:hover:scale-105 transition-all duration-500 lg:hover:text-gray-800`}
            >
              find clothes
              <span className="pl-1 xl:pl-3 lg:pl-2">that matches</span> your
              style
            </h1>
            <p className="text-sm lg:mt-2 lg:pl-2 text-gray-500 md:text-lg lg:text-base xl:text-lg xl:pl-9 lg:hover:opacity-75   transition-all duration-500">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Link
              href={"#new-arrivals"}
              prefetch={true}
              className="bg-black text-white px-6 py-2 rounded-3xl mx-1 mt-2 lg:mt-6 text-sans 
            md:mx-52 lg:mx-0 lg:w-fit xl:ml-14 xl:px-14 g:hover:scale-105 lg:hover:opacity-55 lg:hover:scale-105 transition-all duration-500"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* bottom brands logos */}
        <div className="w-full bg-black py-3 xl:py-1">
          <div className="flex justify-around items-center flex-wrap p-3 pt-5 xl:pt-4">
            <Image
              src="/brandsName/Vector4.png"
              width={110}
              height={90}
              alt="Vector 4"
              className="px-2"
            />
            <Image
              src="/brandsName/Vector2.png"
              width={70}
              height={90}
              alt="Vector 2"
              className="px-2"
            />
            <Image
              src="/brandsName/Vector3.png"
              width={110}
              height={90}
              alt="Vector 3"
              className="px-2"
            />
            <Image
              src="/brandsName/vector5.png"
              width={110}
              height={90}
              alt="Vector 5"
              className="py-3"
            />
            <Image
              src="/brandsName/vector-1.png"
              width={110}
              height={90}
              alt="Vector 1"
              className="py-3"
            />
          </div>
        </div>
      </section>

      {/*  new arrival hoodies section */}
      <section id="new-arrivals">
        <div
          className="font-[sans-serif] py-4 mx-auto lg:max-w-[98%] sm:max-w-full border-b-2
        border-gray-200 pb-28"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold my-16 text-center transition-all duration-300 hover:text-gray-700 hover:scale-105">
            New Arrival Hoodies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
            {/* component which display the data */}
            {data1 ? (
              data1.map((item: ProductDataType, i: number) => {
                return (
                  <div className="" key={i}>
                    <ProductCard
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      description={item.description}
                      colors={item.colors}
                      sizes={item.sizes}
                      isNew={item.isNew}
                      slug={item.slug}
                      image={item.image}
                    />
                  </div>
                );
              })
            ) : (
              <h1>No data !</h1>
            )}
          </div>
        </div>
      </section>

      {/* top selling jeans section */}
      <section>
        <div
          className="font-[sans-serif] py-4 mx-auto lg:max-w-[89%] sm:max-w-full border-b-2
        border-gray-200 pb-28"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold text-black my-16 text-center transition-all duration-300 hover:text-gray-700 hover:scale-105">
            Top Selling Jeans
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
            {/* component which display hhe data */}
            {data2 ? (
              data2.map((item: ProductDataType, i: number) => {
                return (
                  <div className="" key={i}>
                    <ProductCard
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      description={item.description}
                      colors={item.colors}
                      sizes={item.sizes}
                      isNew={item.isNew}
                      slug={item.slug}
                      image={item.image}
                    />
                  </div>
                );
              })
            ) : (
              <h1>No data !</h1>
            )}
          </div>
        </div>
      </section>

      {/* classic shirts section */}
      <section>
        <div
          className="font-[sans-serif] py-4 mx-auto lg:max-w-[89%] sm:max-w-full border-b-2
        border-gray-200 pb-28"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold text-black my-16 text-center transition-all duration-300 hover:text-gray-700 hover:scale-105">
            Classic Shirts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
            {/* component which display hhe data */}
            {data3 ? (
              data3.map((item: ProductDataType, i: number) => {
                return (
                  <div className="" key={i}
                  >
                    <ProductCard
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      description={item.description}
                      colors={item.colors}
                      sizes={item.sizes}
                      isNew={item.isNew}
                      slug={item.slug}
                      image={item.image}
                    />
                  </div>
                );
              })
            ) : (
              <h1>No data !</h1>
            )}
          </div>
        </div>
      </section>

      {/* light and bright t-shirts section */}
      <section>
        <div
          className="font-[sans-serif] py-4 mx-auto lg:max-w-[89%] sm:max-w-full border-b-2
        border-gray-200 pb-28"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold text-black my-16 text-center transition-all duration-300 hover:text-gray-700 hover:scale-105">
            Light And Bright T-Shirts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
            {/* component which display hhe data */}
            {data4 ? (
              data4.map((item: ProductDataType, i: number) => {
                return (
                  <div className="" key={i}>
                    <ProductCard
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      description={item.description}
                      colors={item.colors}
                      sizes={item.sizes}
                      isNew={item.isNew}
                      slug={item.slug}
                      image={item.image}
                    />
                  </div>
                );
              })
            ) : (
              <h1>No data !</h1>
            )}
          </div>
        </div>
      </section>

      {/* Dress style section */}
      <div className="bg-[#F0F0F0] mt-16 w-[90%] lg:w-[95%] h-fit rounded-[20px] mx-auto mb-10 flex flex-col items-center">
        <div className="uppercase font-extrabold text-2xl md:text-3xl text-center font-[sans-serif] pt-8 px-4 lg:text-5xl lg:hover:scale-110 transition-all duration-300 lg:hover:border-b-2 lg:hover:text-gray-900 mb-10 pb-4 border-gray-600">
          Browse by dress style
        </div>

        <div
          className="flex justify-center items-center flex-col lg:flex-row
        w-full h-full space-y-5 mb-4 lg:space-x-3"
        >
          <Image
            src="/images/casual-image.png"
            alt="image"
            width={800}
            height={800}
            className="w-[80%] md:w-[50%] lg:w-[30%] lg:hover:scale-105 transition-all duration-500 cursor-pointer"
          />
          <Image
            src="/images/formal-image.png"
            alt="image"
            width={800}
            height={800}
            className="w-[90%] md:w-[60%] lg:w-[48%] lg:hover:scale-105 transition-all duration-500 cursor-pointer"
          />
        </div>

        <div
          className="flex justify-center items-center flex-col lg:flex-row
        w-full h-full space-y-5 mb-4 lg:space-x-3"
        >
          <Image
            src="/images/party.png"
            alt="image"
            width={800}
            height={800}
            className="w-[90%] md:w-[60% lg:w-[40%] lg:hover:scale-105 transition-all duration-500 cursor-pointer"
          />
          <Image
            src="/images/gym.png"
            alt="image"
            width={800}
            height={800}
            className="w-[90%] md:w-[50%] lg:w-[20%] lg:hover:scale-105 transition-all duration-500 cursor-pointer"
          />
        </div>
      </div>

      {/* bottom feedbacks */}
      <div className="w-full h-fit flex flex-col flex-wrap">
        {/* heading */}
        <div className="w-full flex items-end">
          <div className="w-2/3 pl-3 ">
            <h1 className="uppercase text-2xl md:text-3xl lg:text-4xl lg:pl-8 font-extrabold font-[sans-serif]">
              our happy customers
            </h1>
          </div>
          <div className="w-1/3 text-end text-xl lg:pr-8 space-x-3 lg:space-x-7 pr-2 flex flex-col md:flex-row justify-center items-center">
            <FeedbackButton />
          </div>
        </div>

        {/* Feedback cards */}
        <div className="">
          <DisplayFeedback />
        </div>

      </div>
    </div>
  );
}
