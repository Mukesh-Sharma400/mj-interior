"use client";

import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import { useState } from "react";
import interior from "../../../../public/assets/interior-design.jpg";
import Image from "next/image";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Residential");

  const pageHeader = {
    heading: "Projects",
    description:
      "Explore a collection of our recent projects, each telling a unique story of creativity and craftsmanship. Immerse yourself in our visual showcase of innovation.",
  };

  const residentialProjects = [
    {
      clientName: "Sanjay Wakkar",
      projectLocation: "Dahisar Mar",
      projectAmount: "22 Lakhs",
    },
    {
      clientName: "Sanjay Prajapati",
      projectLocation: "1503, Kamdhenu Commer",
      projectAmount: "14 Lakhs",
    },
    {
      clientName: "George Philips",
      projectLocation: "1005, Juhi Green",
      projectAmount: "12 Lakhs",
    },
  ];

  const commercialProjects = [
    {
      clientName: "Niharika Mirage",
      projectLocation: "1001-1008 Office",
      projectAmount: "35 Lakhs",
    },
    {
      clientName: "Naaz Advertising",
      projectLocation: "Kalyan-Shil Road",
      projectAmount: "15 Lakhs",
    },
  ];

  return (
    <BaseLayout>
      <Header data-aos="fade-up">
        <Heading>{pageHeader.heading}</Heading>
        <Description>{pageHeader.description}</Description>
      </Header>
      <TabsWrapper>
        <Tab
          className={activeTab === "Residential" && "active"}
          onClick={() => setActiveTab("Residential")}
        >
          Residential Projects
        </Tab>
        <Tab
          className={activeTab === "Commercial" && "active"}
          onClick={() => setActiveTab("Commercial")}
        >
          Commercial Projects
        </Tab>
      </TabsWrapper>
      {activeTab === "Residential" ? (
        <ProjectsWrapper>
          {residentialProjects.map((project, index) => (
            <ProjectLayout key={index} project={project} />
          ))}
        </ProjectsWrapper>
      ) : null}
      {activeTab === "Commercial" ? (
        <ProjectsWrapper>
          {commercialProjects.map((project, index) => (
            <ProjectLayout key={index} project={project} />
          ))}
        </ProjectsWrapper>
      ) : null}
    </BaseLayout>
  );
}

function ProjectLayout({ project }) {
  return (
    <Project data-aos="fade-up">
      <ClientName>
        <span>Client Name:</span>
        {project.clientName}
      </ClientName>
      <ProjectAddress>
        <span>Project Location:</span>
        {project.projectLocation}
      </ProjectAddress>
      <ProjectAmount>
        <span>Project Amount:</span>Rs. {project.projectAmount}
      </ProjectAmount>
      <SlantingImage src={interior} alt="Random" />
    </Project>
  );
}

const Header = styled.div`
  max-width: 900px;
  margin: 100px auto 0;
  text-align: center;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    max-width: 750px;
  }
  @media (max-width: 768px) {
    max-width: 85%;
  }
`;

const Heading = styled.h1`
  color: black;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 376px) {
    font-size: 25px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  color: grey;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 376px) {
    font-size: 14px;
  }
`;

const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: fit-content;
  height: fit-content;
  margin: 0 auto 50px;
  transition: all 0.5s ease-in-out;
`;

const Tab = styled.button`
  width: 220px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: black;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: all 0.5s ease-in-out;

  &.active {
    color: white;
    background-color: #ab81e8;

    &:focus {
      color: white;
      background-color: #ab81e8;
    }
  }

  &:hover {
    color: white;
    background-color: #23c3c4;
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 900px;
  margin: 0 auto 5rem;
  transition: all 0.5s ease-in-out;
`;

const Project = styled.div`
  width: 100%;
  height: 213px;
  padding: 3rem 4rem;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
  transition: all 0.5s ease-in-out;
`;

const ClientName = styled.p`
  font-size: 26px;
  color: black;
  font-weight: 300;
  transition: all 0.5s ease-in-out;

  & > span {
    font-weight: 500;
    margin-right: 5px;
  }
`;

const ProjectAddress = styled.p`
  font-size: 26px;
  color: black;
  font-weight: 300;
  transition: all 0.5s ease-in-out;

  & > span {
    font-weight: 500;
    margin-right: 5px;
  }
`;

const ProjectAmount = styled.p`
  font-size: 26px;
  color: black;
  font-weight: 300;
  transition: all 0.5s ease-in-out;

  & > span {
    font-weight: 500;
    margin-right: 5px;
  }
`;

const SlantingImage = styled(Image)`
  width: 40%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%);
  transition: all 0.5s ease-in-out;
`;
