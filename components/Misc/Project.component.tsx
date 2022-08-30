import Link from "next/link";

type ProjectProps = {
  link: string;
  title: string;
  description: string;
};

export default function Project({ link, title, description }: ProjectProps) {
  return (
    <>
      <Link href={link} passHref>
        <a
          className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-lg px-2 text-center font-medium">
            <p className="text-xl font-semibold">{title}</p>
            <p>{description}</p>
          </div>
        </a>
      </Link>
    </>
  );
}
