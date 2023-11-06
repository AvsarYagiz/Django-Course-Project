import Image from "next/image";
import NavbarItem from "../components/NavbarItem";

const dataMenu = [
  {
    title: "Programlama",
    link: "/",
  },
  {
    title: "Web Geliştirme",
    link: "/",
  },
  {
    title: "Mobil Geliştirme",
    link: "/",
  },
];

export default function courses() {
  return (
    <main className="flex flex-1 justify-center items-stretch py-8 text-3xl">
      <div className="w-[90%] grid grid-cols-4 justify-between gap-x-5 ">
        <div className="flex flex-col text-base bbg-white h-fit rounded-lg py-6 px-4 dark:bg-gray-900 ">
          <ul>
            {dataMenu.map((data) => {
              return <NavbarItem title={data.title} link={data.link} />;
            })}
          </ul>
        </div>
        <div className="col-span-3 ">
          <div className="flex flex-1 items-center h-fit border-2 rounded-xl">
            <Image
              className="rounded-l-xl object-cover"
              width={300}
              height={0}
              src="/assets/img/javascript.jpg"
              alt="alt"
            />
            <div className="flex flex-col gap-4 items-center justify-center w-50">
              <p className="text-xl"> JavaScript Course</p>
              <p className="text-lg"> Description of JavaScript Course</p>
              <p className="text-sm"> 11/06/2023</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
