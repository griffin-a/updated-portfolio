import type { NextComponentType } from "next";
import Link from "next/link";

import Project from "../Misc/Project.component";
import ProjectCard from "../Misc/ProjectCard.component";

const Projects: NextComponentType = () => {
  return (
    <div className="font-sen my-16 px-3" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <ProjectCard
          imageName="assets/maze.png"
          title="Graph Algorithm Visualizer"
          description="A pathfinding algorithm visualizer: place a start and end square and
             the program finds the shortest path. Provides the ability to use
             different pathfinding algorithms as well as different maze
             generation algorithms."
          projectUrl="https://graph-algo-visualizer-griffin-a.netlify.app/"
        />

        <ProjectCard
          imageName="assets/investment-island.png"
          title="Investment Island"
          description="An ongoing group project that I am working on at the moment with the 
        WDCC club at the University of Auckland. My role is a tech lead and full-stack developer. Is yet to be completed."
          projectUrl="https://github.com/UoaWDCC/Investment-island"
        />

        <ProjectCard
          imageName="assets/todo.jpeg"
          title="Todo List Web-App"
          description="A full-stack todo list web-app that provides full CRUD functionality and connection to a database.
        Uses authentication and authorization to create and use accounts."
          projectUrl="#"
        />

        <ProjectCard
          imageName="assets/co2.jpeg"
          title="Carbon Emissions Calculator"
          description="A proof of concept design for a carbon emissions calculator. A high-fidelity prototype."
          projectUrl="https://griffin-a.github.io/345-a2/"
        />

        <ProjectCard
          imageName="assets/library.jpeg"
          title="Book Library Browser"
          description="A full-stack application that provides the ability to browse and search for books in a
        database and create/sign in to accounts."
          projectUrl="https://book-web-app-235.herokuapp.com/"
        />

        <ProjectCard
          imageName="assets/movie.jpeg"
          title="Movie/TV Browser"
          description="An application that calls an external API to display search results for the entered title search"
          projectUrl="https://movie-tv-searcher.netlify.app"
        />
      </div>
    </div>
  );
};

export default Projects;
