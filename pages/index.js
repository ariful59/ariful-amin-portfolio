import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import Education from "../components/Education"
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";


import data from "../data/portfolio.json";
import ResearchExperience from "../components/ResearchExperience";
import SkillSet from "../components/SkillSet";
import ExtraCuricular from "../components/ExtraCuricular";
import Typed from "react-typed";
import React, { useState, useEffect, useRef } from "react";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

//testing
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  function loading(){
    let bar = document.getElementById('bar');
    bar.classList.remove('w-0');
    bar.classList.add('w-full');
  }


  return (
    <div>
      <Head>
        <title>Md Ariful Amin | Software Engineer</title>
      </Head>
      <div className="container mx-auto mb-10 laptop:px-4 px-4">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-8 tablet:mx-4">
            <img
                alt="Profile Photo"
                src="/images/profile1.jpeg"
                className="object-center rounded-full custom-position"/>
            <h1
              ref={textOne}
              className="text-2xl mt-4 tablet:text-3xl laptop:text-3xl laptopl:text-4xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 text-blue-500"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-2xl tablet:text-3xl laptop:text-3xl laptopl:text-4xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >

              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-xl mt-3 p-1 tablet:p-2 text-bold w-full laptop:text-justify mx-auto laptop:tracking-wider"
            >
              {data.headerTaglineFour}
            </h1>
            <button type="button" className="text-white bg-[#2557D6] hover:bg-yellow-400 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-lg  px-5 py-3 mt-5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2"
                    onClick={()=>{window.open("/Resume_Md_Ariful_Amin.pdf")}}>Download Resume
            </button>
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 laptop:p-0 "ref={aboutRef}>
          <h1 className="text-5xl text-bold">EDUCATION</h1>
          <div className="mt-5 grid grid-cols-1 gap-6">
            {data.education.map((education, index) => (
                <Education
                    name={education.name}
                    degree={education.degree}
                    duration={education.duration}
                />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 laptop:p-0 "ref={aboutRef}>
          <h1 className="text-5xl text-bold">EXPERIENCE</h1>
          <div className="mt-5 grid grid-cols-1 gap-6">
            {data.services.map((service, index) => (
                <ServiceCard
                    key={index}
                    link={service.link}
                    name={service.title}
                    post={service.post}
                    duration={service.duration}
                    description={service.description}
                />
            ))}
          </div>
        </div>

        {/*<div className="mt-10 laptop:mt-10 p-2 laptop:p-0">*/}
        {/*  <h1 className="text-5xl text-bold">TECHNICAL SKILLS</h1>*/}
        {/*  <div className="grid grid-cols-1 tablet:grid-cols-2  laptop:grid-cols-2 gap-16">*/}
        {/*    <SkillSet/>*/}
        {/*    <div>*/}
        {/*      <div>*/}
        {/*        <h1 className="text-2xl mt-5 text-bold">App Development</h1>*/}
        {/*        <div className="mb-1 text-base font-medium dark:text-white">Tizen</div>*/}
        {/*        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">*/}
        {/*          <div className='bg-blue-600 h-2.5 rounded-full w-3/4'></div>*/}
        {/*        </div>*/}
        {/*        <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">Android</div>*/}
        {/*        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">*/}
        {/*          <div className="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300 w-1/4" ></div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <h1 className="text-2xl mt-15 text-bold pt-5">Database</h1>*/}
        {/*      <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">MYSQL</div>*/}
        {/*      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">*/}
        {/*        <div className="bg-red-600 h-2.5 rounded-full dark:bg-red-500 w-4/6" ></div>*/}
        {/*      </div>*/}
        {/*      <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">SQLite</div>*/}
        {/*      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">*/}
        {/*        <div className="bg-gray-500 h-2.5 rounded-full dark:bg-gray-300 w-1/2"></div>*/}
        {/*      </div>*/}

        {/*      <h1 className="text-2xl mt-15 pt-5 text-bold">Code Repository</h1>*/}
        {/*      <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">GitHub</div>*/}
        {/*      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">*/}
        {/*        <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500 w-4/6" ></div>*/}
        {/*      </div>*/}
        {/*      <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">Gerrit</div>*/}
        {/*      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">*/}
        {/*        <div className="bg-yellow-400 h-2.5 rounded-full w-1/2"></div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div
            className="mt-10 laptop:mt-10 p-2 laptop:p-0"
            ref={sectionRef} // Attach ref for observing visibility
        >
          <h1 className="text-5xl text-bold">TECHNICAL SKILLS</h1>
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 gap-16">
            {/* SkillSet Component */}
            <SkillSet />

            {/* Skills Section */}
            <div>
              {/* App Development */}
              <div>
                <h1 className="text-2xl mt-5 text-bold">App Development</h1>
                <div className="mb-1 text-base font-medium dark:text-white">Tizen</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div
                      className={`bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ${
                          isVisible ? "w-3/4" : "w-0"
                      }`}
                  ></div>
                </div>
                <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">Android</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div
                      className={`bg-gray-600 h-2.5 rounded-full transition-all duration-1000 ${
                          isVisible ? "w-1/4" : "w-0"
                      }`}
                  ></div>
                </div>
              </div>

              {/* Database */}
              <h1 className="text-2xl mt-15 text-bold pt-5">Database</h1>
              <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">MYSQL</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div
                    className={`bg-red-600 h-2.5 rounded-full transition-all duration-1000 ${
                        isVisible ? "w-4/6" : "w-0"
                    }`}
                ></div>
              </div>
              <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">SQLite</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div
                    className={`bg-gray-500 h-2.5 rounded-full transition-all duration-1000 ${
                        isVisible ? "w-1/2" : "w-0"
                    }`}
                ></div>
              </div>

              {/* Code Repository */}
              <h1 className="text-2xl mt-15 pt-5 text-bold">Code Repository</h1>
              <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">GitHub</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div
                    className={`bg-green-600 h-2.5 rounded-full transition-all duration-1000 ${
                        isVisible ? "w-4/6" : "w-0"
                    }`}
                ></div>
              </div>
              <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">Gerrit</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div
                    className={`bg-yellow-400 h-2.5 rounded-full transition-all duration-1000 ${
                        isVisible ? "w-1/2" : "w-0"
                    }`}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-5xl text-bold">PROJECTS</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2  laptop:grid-cols-3 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>
        <div className="mt-16 laptop:mt-30 laptop:p-0">
          <h1 className="text-5xl text-bold">RESEARCH EXPERIENCE</h1>
          <div className="mt-5 grid grid-cols-1 gap-6">
            {
                <ResearchExperience
                    key={data.researchExperience.id}
                    name={data.researchExperience.title}
                    duration={data.researchExperience.duration}
                    description={data.researchExperience.description}
                    publication={data.researchExperience.publication}
                />
            }
          </div>
        </div>


        <div className="mt-16 laptop:mt-30 laptop:p-0">
        <h1 className="text-5xl text-bold">EXTRA-CURRICULAR ACTIVITIES, AWARDS AND ACHIEVEMENTS</h1>
        <div className="grid grid-cols-1">
          {
            <ExtraCuricular
                key={1}
                item={data.extraCuricular}
            />
          }
        </div>
      </div>
        <Footer />
      </div>
    </div>
  );
}
