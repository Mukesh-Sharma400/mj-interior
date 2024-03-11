"use client";

import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import turnkey from "../../../../public/assets/turnkey.jpg";
import interior from "../../../../public/assets/interior-design.jpg";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Residential");

  const pageHeader = {
    heading: "Projects",
    description:
      "Explore a collection of our recent projects, each telling a unique story of creativity and craftsmanship. Immerse yourself in our visual showcase of innovation.",
  };

  const residentialProjects = [
    {
      clientName: "Sanjay Walkar",
      projectLocation: "Dahisar Mori",
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
    {
      clientName: "Prabhu Sir",
      projectLocation: "101, Esar Building",
      projectAmount: "16 Lakhs",
    },
    {
      clientName: "Subhayu Sir",
      projectLocation: "1203, Juhi Green",
      projectAmount: "23 Lakhs",
    },
    {
      clientName: "Dimple Metha",
      projectLocation: "Balkeshwar",
      projectAmount: "12 Lakhs",
    },
    {
      clientName: "Sadashiv Ombale",
      projectLocation: "1206, Juhi Serenity",
      projectAmount: "12 Lakhs",
    },
    {
      clientName: "Kannan Das",
      projectLocation: "1603, Juhi Serenity",
      projectAmount: "12 Lakhs",
    },
    {
      clientName: "Rajgopal Das",
      projectLocation: "1604, Juhi Serenity",
      projectAmount: "14 Lakhs",
    },
    {
      clientName: "Shekar Ayyar",
      projectLocation: "403, Juhi Green",
      projectAmount: "15 Lakhs",
    },
    {
      clientName: "Bharat Jadhav",
      projectLocation: "303, Juhi Green",
      projectAmount: "12 Lakhs",
    },
    {
      clientName: "Nasser Arivoli",
      projectLocation: "903, Juhi Green",
      projectAmount: "13 Lakhs",
    },
    {
      clientName: "Yogesh Panchal",
      projectLocation: "201, Bhagyauday",
      projectAmount: "14 Lakhs",
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
    {
      clientName: "Surti Collection",
      projectLocation: "Kamothe",
      projectAmount: "15 Lakhs",
    },
    {
      clientName: "Sai Shah Residency",
      projectLocation: "Sector 36, Kamothe",
      projectAmount: "18 Lakhs",
    },
    {
      clientName: "Star Bazaar",
      projectLocation: "Bichumbe-Panvel",
      projectAmount: "14 Lakhs",
    },
    {
      clientName: "Wipro",
      projectLocation: "Airoli",
      projectAmount: "12 Lakhs",
    },
    {
      clientName: "Globe Builders",
      projectLocation: "Dombivali",
      projectAmount: "15 Lakhs",
    },
  ];

  const sortedResidentialProjects = [...residentialProjects].sort((a, b) => {
    return parseInt(b.projectAmount) - parseInt(a.projectAmount);
  });

  const sortedCommercialProjects = [...commercialProjects].sort((a, b) => {
    return parseInt(b.projectAmount) - parseInt(a.projectAmount);
  });

  return (
    <BaseLayout>
      <Header data-aos="fade-up">
        <Heading>{pageHeader.heading}</Heading>
        <Description>{pageHeader.description}</Description>
      </Header>
      <TabsWrapper data-aos="fade-up">
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
          {sortedResidentialProjects.map((project, index) => (
            <ProjectLayout
              key={index}
              project={project}
              activeTab={activeTab}
            />
          ))}
        </ProjectsWrapper>
      ) : null}
      {activeTab === "Commercial" ? (
        <ProjectsWrapper>
          {sortedCommercialProjects.map((project, index) => (
            <ProjectLayout
              key={index}
              project={project}
              activeTab={activeTab}
            />
          ))}
        </ProjectsWrapper>
      ) : null}
    </BaseLayout>
  );
}

function ProjectLayout({ project, activeTab }) {
  return (
    <Project data-aos="fade-up">
      <FieldContainer>
        <ProjectLabel>Client Name:</ProjectLabel>
        <ProjectData>{project.clientName}</ProjectData>
      </FieldContainer>
      <FieldContainer>
        <ProjectLabel>Project Location:</ProjectLabel>
        <ProjectData>{project.projectLocation}</ProjectData>
      </FieldContainer>
      <FieldContainer>
        <ProjectLabel>Project Amount:</ProjectLabel>
        <ProjectData>{project.projectAmount}</ProjectData>
      </FieldContainer>
      <SlantingImage
        src={activeTab === "Residential" ? interior : turnkey}
        alt="Random"
      />
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
  @media (max-width: 850px) {
    max-width: 90%;
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

  @media (max-width: 550px) {
    gap: 30px;
  }
  @media (max-width: 500px) {
    width: 90%;
    gap: 0;
    justify-content: space-evenly;
  }
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

  @media (max-width: 550px) {
    width: 200px;
    height: 45px;
    font-size: 14px;
  }
  @media (max-width: 460px) {
    width: 170px;
    height: 40px;
    font-size: 13px;
  }
  @media (max-width: 400px) {
    width: 130px;
    height: 60px;
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
  height: fit-content;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
  transition: all 0.5s ease-in-out;

  @media (max-width: 950px) {
    width: 90%;
    margin: 0 auto;
  }
  @media (max-width: 460px) {
    padding: 1.5rem;
  }
`;

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;

const ProjectLabel = styled.p`
  font-size: 26px;
  line-height: 26px;
  color: black;
  font-weight: 500;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 23px;
    line-height: 23px;
  }
  @media (max-width: 550px) {
    font-size: 18px;
    line-height: 18px;
  }
  @media (max-width: 400px) {
    font-size: 16px;
    line-height: 16px;
  }
`;

const ProjectData = styled.p`
  font-size: 26px;
  line-height: 26px;
  color: black;
  font-weight: 300;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 23px;
    line-height: 23px;
  }
  @media (max-width: 550px) {
    font-size: 18px;
    line-height: 18px;
  }
  @media (max-width: 400px) {
    font-size: 16px;
    line-height: 16px;
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
