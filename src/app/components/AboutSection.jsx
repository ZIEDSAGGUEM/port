"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>Laravel</li>
        <li>NextJS</li>
        <li>TypeScript</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Docker</li>
      </ul>
    ),
  },
  {
    title: "Tools",
    id: "tools",
    content: (
      <ul className="list-disc pl-2">
        <li>Postamn</li>
        <li>Git</li>
        <li>VSCODE</li>
        <li>PyCHARM</li>
        <li>Jupyter</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image2.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full relative ">
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg ">
            I am a Computer Science with a strong interest in AI and web
            development. Proficient in Python and statistical modeling, I excel
            at extracting insights from large datasets. Passionate about AI, I
            have knowledge of machine learning. Additionally, I am skilled in
            MERN Stack for creating responsive websites.
          </p>
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 to-green-800 animate-bounce rounded-full h-52 w-52 blur-3xl   absolute top-3/4  transform -translate-x-1/2 -translate-1/2"></div>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tools")}
              active={tab === "tools"}
            >
              {" "}
              Tools{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
