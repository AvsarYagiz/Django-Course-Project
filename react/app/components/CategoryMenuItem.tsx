import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  id:number;
  setCoursesData: React.Dispatch<React.SetStateAction<never[]>>;
};

const CategoryMenuItem = (props: Props) => {

  const clickHandler=()=>{
    if (props.id === 5) {
      return
    }
    else{
      props.setCoursesData((prev:any)=>{
            return(
              prev.filter((course)=>{
                course.

              })
            )
      })
    }
  }

  return (
    <li>
      <Link
        href="#"
        onClick={clickHandler}
        className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
        aria-current="page"
      >
        {props.title}
      </Link>
    </li>
  );
};
export default CategoryMenuItem;
