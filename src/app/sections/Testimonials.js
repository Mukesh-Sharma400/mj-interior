"use client";

import Image from "next/image";
import styled from "styled-components";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { testimonials } from "@/app/data/testimonials";

export const Testimonials = () => {
  const sectionData = {
    smallHeading: "Testimonials",
    heading: "What Our Clients Say About Us",
    description:
      "Explore firsthand the commendations of our craftsmanship. Tailoring services for every space and vision, our clients share their experiences of excellence.",
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star"></i>);
      }
    }
    return stars;
  };

  return (
    <DisplayWrapper>
      <Header data-aos="fade-up">
        <TestimonialsHeading>{sectionData.smallHeading}</TestimonialsHeading>
        <Heading>{sectionData.heading}</Heading>
        <Description>{sectionData.description}</Description>
      </Header>
      <TestimonialsWrapper>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 700: 2, 1024: 3 }}
        >
          <Masonry gutter="16px">
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.name} data-aos="fade-up">
                <Message>{testimonial.message}</Message>
                <PicNameWrapper>
                  <Image
                    className="rounded-circle"
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                  />
                  <div>
                    <Name>{testimonial.name}</Name>
                    <Ratings
                      role="img"
                      aria-label={`${testimonial.rating} out of 5 stars`}
                    >
                      {renderStars(testimonial.rating)}
                    </Ratings>
                  </div>
                </PicNameWrapper>
              </Testimonial>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </TestimonialsWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  padding-bottom: 50px;
  transition: all 0.5s ease-in-out;
`;

const Header = styled.div`
  max-width: 900px;
  margin: 0 auto;
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

const TestimonialsHeading = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
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

const TestimonialsWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0px auto;
  transition: all 0.5s ease-in-out;
`;

const Testimonial = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: all 0.5s ease-in-out;
`;

const Message = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-style: italic;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.5s ease-in-out;
`;

const PicNameWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px !important;
  transition: all 0.5s ease-in-out;
`;

const Name = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.5s ease-in-out;
`;

const Ratings = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.star};
  transition: all 0.5s ease-in-out;
`;
