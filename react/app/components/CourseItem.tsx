import Image from "next/image";

type Props = {
  title: string;
  description: string;
  date: string;
  cover: string;
};

const CourseItem = (props: Props) => {
  return (
    <div className="flex flex-1 items-center h-40 border-2 border-slate-700 rounded-lg mb-3">
      <Image
        priority={true}
        className="rounded-l-lg object-cover h-full w"
        width={300}
        height={300}
        src={
          props.cover
            ? props.cover.replace("localhost", "127.0.0.1")
            : "http://127.0.0.1:8000/media/images/naunau.jpg"
        }
        alt="alt"
      />
      <div className="flex flex-col gap-4 w-50 mx-8 ">
        <p className="text-xl"> {props.title}</p>
        <p className="text-lg"> {props.description}</p>
        <p className="text-sm"> {props.date}</p>
      </div>
    </div>
  );
};

export default CourseItem;
