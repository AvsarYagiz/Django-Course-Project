"use client";

import CourseItem from "../components/CourseItem";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryMenuItem from "../components/CategoryMenuItem";

export default function courses() {
  const [coursesData, setCoursesData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(5);

  useEffect(() => {
    async function fetchData() {
      try {
        const response2 = await axios.get(
          "http://localhost:8000/courses/api/category/"
        );
        setCategoriesData(response2.data);
        const response = await axios.get(
          "http://localhost:8000/courses/api/course/"
        );
        setCoursesData(response.data);
      } catch (error) {
        console.error("Veri çekme hatası: ", error);
      }
    }
    fetchData();
  }, []);

  const filteredCourses = coursesData.filter((data) => {
    return !selectedCategory || data.categories.includes(selectedCategory);
  });

  return (
    <main className="flex flex-1 justify-center items-stretch py-8 text-3xl">
      <div className="w-[90%] grid grid-cols-4 justify-between gap-x-5 ">
        <div className="flex flex-col text-base bbg-white h-fit rounded-lg dark:bg-gray-900 border-2 border-slate-700 ">
          <ul>
            {categoriesData.map((data: any) => {
              return (
                <CategoryMenuItem
                  id={data.id}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  key={data.id}
                  title={data.name}
                />
              );
            })}
          </ul>
        </div>
        <div className="col-span-3 overflow-y-auto scroll-smooth h-[60vh]">
          {filteredCourses.map((data: any) => {
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
