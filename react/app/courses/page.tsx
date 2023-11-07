"use client";

import NavbarItem from "../components/NavbarItem";
import CourseItem from "../components/CourseItem";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryMenuItem from "../components/CategoryMenuItem";

export default function courses() {
  const [coursesData, setCoursesData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response2 = await axios.get(
          "http://localhost:8000/courses/api/category/"
        );
        setCategoriesData(response2.data);
        const response = await axios.get(
          "http://localhost:8000/courses/api/course/"
        ); // Django API URL'sini buraya ekleyin
        setCoursesData(response.data);
      } catch (error) {
        console.error("Veri çekme hatası: ", error);
      }
    }
    fetchData();
  }, []);

  console.log(coursesData)

  return (
    <main className="flex flex-1 justify-center items-stretch py-8 text-3xl">
      <div className="w-[90%] grid grid-cols-4 justify-between gap-x-5 ">
        <div className="flex flex-col text-base bbg-white h-fit rounded-lg py-6 px-4 dark:bg-gray-900 border-2 border-slate-700 ">
          <ul>
            {categoriesData.map((data:any) => {
              return <CategoryMenuItem id={data.id} setCoursesData={setCoursesData} key={data.id} title={data.name} />;
            })}
          </ul>
        </div>
        <div className="col-span-3 overflow-y-auto scroll-smooth h-[520px] ">
          {coursesData.map((data: any) => {
            return (
              <CourseItem
                key={data.title}
                title={data.title}
                description={data.description}
                date={data.date}
                cover={data.cover}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
