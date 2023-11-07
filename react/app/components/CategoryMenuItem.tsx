import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  id: number;
  setSelectedCategory: React.Dispatch<React.SetStateAction<any>>;
};

const CategoryMenuItem = (props: Props) => {
  const clickHandler = () => {
    props.setSelectedCategory(props.id);
  };

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
