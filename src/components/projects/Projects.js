import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="زر موقعي واعطني رأيك"
          des="مشاريعي"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="تطبيق تواصل اجتماعي"
          des=" استطيع توفير خدمات ذكاء اصطناعي
              استطيع توفير خدمات ذكاء اصطناعي "
          src={projectOne}
        />
        <ProjectsCard
          title="متجر الكتروني"
          des=" استطيع توفير خدمات ذكاء اصطناعي
              استطيع توفير خدمات ذكاء اصطناعي "
          src={projectTwo}
        />
        <ProjectsCard
          title="برنامج محادثه"
          des=" استطيع توفير خدمات ذكاء اصطناعي
              استطيع توفير خدمات ذكاء اصطناعي "
          src={projectThree}
        />
        <ProjectsCard
          title="تطبيق تواصل اجتماعي"
          des=" استطيع توفير خدمات ذكاء اصطناعي
              استطيع توفير خدمات ذكاء اصطناعي "
          src={projectThree}
        />
        <ProjectsCard
          title="متجر الكتروني"
          des=" استطيع توفير خدمات ذكاء اصطناعي
              استطيع توفير خدمات ذكاء اصطناعي "
          src={projectOne}
        />
        <ProjectsCard
          title="برنامج محادثه"
          des=" استطيع توفير خدمات ذكاء اصطناعي
              استطيع توفير خدمات ذكاء اصطناعي "
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects