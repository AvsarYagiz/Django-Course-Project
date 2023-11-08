import Link from "next/link";
import React, { useState, useEffect } from "react";

type Props = {
  title: string;
  id: number;
  selectedCategory: number; 
  setSelectedCategory: React.Dispatch<React.SetStateAction<any>>;
};

const CategoryMenuItem = (props: Props) => {
  const [isSelected, setIsSelected] = useState(false);


  useEffect(() => {
    setIsSelected(props.id === props.selectedCategory);
  }, [props.selectedCategory, props.id]);

  const clickHandler = () => {
    props.setSelectedCategory(props.id);
  };

  
  const linkClass = `flex flex-col m-5 pl-3 pr-4 text-gray-900 rounded  ${
    isSelected ? "bg-blue-700" : "hover:text-blue-700"
  }   dark:text-white dark:focus:text-white dark:border-gray-700 `;

  return (
    <li>
      <Link
        href="#"
        onClick={clickHandler}
        className={linkClass}
        aria-current="page"
      >
        {props.title}
      </Link>
    </li>
  );
};

export default CategoryMenuItem;
