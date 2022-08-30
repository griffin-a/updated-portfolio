import { BsArrowRightShort } from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white">Skills and Abilities</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">NextJS</span>
          &nbsp;Proficient at frontend and fullstack applications in NextJS.
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Typescript </span>
          {/* &nbsp;as my main language */}
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">NodeJS and ExpressJS </span>
          &nbsp;Experienced in building APIs in ExpressJS using NodeJS.
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">ReactJS and React Native </span>
          &nbsp;Experienced in using ReactJS extensively as well as React Native for application frontends.
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">.NET 6 </span>
          &nbsp;Have experience in building APIs with .NET 6 using C#
        </p>
      </div>

      {/* <p className="text-lg font-medium text-slate-300">
        ...more skills include <span className="text-white">javascript</span>,{" "}
        <span className="text-white">reactjs</span>,{" "}
        <span className="text-white">fastapi </span>{" "}
      </p> */}
    </div>
  );
};

export default Skills;
