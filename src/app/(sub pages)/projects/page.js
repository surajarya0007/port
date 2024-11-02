import Image from "next/image";
import bg from "../../../../public/background/home2.jpg";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
// import Staff from "@/components/models/Staff";
import dynamic from "next/dynamic";
import BatMobile from "@/components/models/BatMobile";


export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      
      
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen fixed top-1/2 -translate-y-1/2 left-0 -z-10">
        <RenderModel>
          <BatMobile />
        </RenderModel>
      </div>
      <ProjectList projects={projectsData} />
    </>
  );
}