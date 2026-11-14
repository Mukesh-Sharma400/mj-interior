"use client";

import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { BaseLayout } from "@/app/components/BaseLayout";
import { commercialProjects, residentialProjects } from "@/app/data/projects";
import residentialImage from "#/interior-design.webp";
import commercialImage from "#/turnkey-contractor.webp";

const byAmountDesc = (a, b) => b.amountLakhs - a.amountLakhs;

const tabs = [
  {
    id: "residential",
    label: "Residential Projects",
    projects: [...residentialProjects].sort(byAmountDesc),
    image: residentialImage,
  },
  {
    id: "commercial",
    label: "Commercial Projects",
    projects: [...commercialProjects].sort(byAmountDesc),
    image: commercialImage,
  },
];

export function ProjectsContent() {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  const pageHeader = {
    heading: "Projects",
    description:
      "Explore a collection of our recent projects, each telling a unique story of creativity and craftsmanship. Immerse yourself in our visual showcase of innovation.",
  };

  return (
    <BaseLayout>
      <Header data-aos="fade-up">
        <Heading>{pageHeader.heading}</Heading>
        <Description>{pageHeader.description}</Description>
      </Header>
      <TabsWrapper role="tablist" data-aos="fade-up">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            type="button"
            role="tab"
            id={`${tab.id}-tab`}
            aria-selected={tab.id === activeTabId}
            aria-controls={`${tab.id}-panel`}
            className={tab.id === activeTabId ? "active" : undefined}
            onClick={() => setActiveTabId(tab.id)}
          >
            {tab.label}
          </Tab>
        ))}
      </TabsWrapper>
      <ProjectsWrapper
        role="tabpanel"
        id={`${activeTab.id}-panel`}
        aria-labelledby={`${activeTab.id}-tab`}
      >
        {activeTab.projects.map((project) => (
          <ProjectCard
            key={`${activeTab.id}-${project.client}-${project.location}`}
            project={project}
            image={activeTab.image}
          />
        ))}
      </ProjectsWrapper>
    </BaseLayout>
  );
}

function ProjectCard({ project, image }) {
  return (
    <Project data-aos="fade-up">
      <FieldContainer>
        <ProjectLabel>Client Name:</ProjectLabel>
        <ProjectData>{project.client}</ProjectData>
      </FieldContainer>
      <FieldContainer>
        <ProjectLabel>Project Location:</ProjectLabel>
        <ProjectData>{project.location}</ProjectData>
      </FieldContainer>
      <FieldContainer>
        <ProjectLabel>Project Amount:</ProjectLabel>
        <ProjectData>{project.amountLakhs} Lakhs</ProjectData>
      </FieldContainer>
      {/* Decorative */}
      <SlantingImage src={image} alt="" sizes="360px" />
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
  color: ${({ theme }) => theme.colors.text};
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
  color: ${({ theme }) => theme.colors.muted};
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
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.tabBackground};
  border-radius: 10px;
  transition: all 0.5s ease-in-out;

  &.active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};

    &:focus {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.dark};
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
  box-shadow: ${({ theme }) => theme.shadows.card};
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
  color: ${({ theme }) => theme.colors.text};
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
  color: ${({ theme }) => theme.colors.text};
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
