import Image from "next/image";
import styled from "styled-components";
import person from "../../../public/assets/person.png";
import mukeshSharma from "../../../public/assets/mukesh-sharma.png";
import yuvrajVirkar from "../../../public/assets/yuvraj-virkar.png";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import yogeshPanchal from "../../../public/assets/yogesh-panchal.png";
import siddheshGhadigaonkar from "../../../public/assets/siddhesh-ghadigaonkar.png";

export const Testimonials = () => {
  const sectionData = {
    smallHeading: "Testimonials",
    heading: "What Our Clients Say About Us",
    description:
      "Explore firsthand the commendations of our craftsmanship. Tailoring services for every space and vision, our clients share their experiences of excellence.",
  };

  const testimonialsData = [
    {
      message:
        "Completed work on time and within the budget. Kuwar bhai is good person to interact with. They understood the requirements and also gave their suggestions. You can trust them and can take service from them.",
      name: "Siddhesh Ghadigaonkar",
      image: siddheshGhadigaonkar,
      rating: 5,
    },
    {
      message:
        "I Have Hired MJ Interiors for my sister's House Work, I Would like to recommend For any work. The Special Thing is the Friendly Behaviour Of Kuberji, And The Timely Work Handover. They Also Have The Labours who are very skilled. Would Like to Recommend Everyone For Making There Home Like They Want.",
      name: "Yuvraj Virkar",
      image: yuvrajVirkar,
      rating: 5,
    },
    {
      message:
        "We had Good experience in with MJ interior. Our House interior design was done by MJ Interior and the most notable point is that the perfection they giving in the design and its execution. Would Recommend MJ interior for Anyone.",
      name: "Salman Khan",
      image: person,
      rating: 5,
    },
    {
      message:
        "Done my kitchen work very nicely experience and co operative team along with kuber ji would prefer mj interiors for further work.",
      name: "Dayar Yadav",
      image: person,
      rating: 5,
    },
    {
      message:
        "Very nice peoples and prompt service Rates are also very reasonable. Best of luck.",
      name: "Yogesh Panchal",
      image: yogeshPanchal,
      rating: 5,
    },
    {
      message:
        "Amazing transformation! The attention to detail and creative vision have made my space truly exceptional. I couldn't be happier with the results.",
      name: "Mukesh Sharma",
      image: mukeshSharma,
      rating: 5,
    },
    {
      message: "Good professional and on time service. 10/10 would recommend.",
      name: "Santosh Sharma",
      image: person,
      rating: 5,
    },
    {
      message:
        "Project delivered on time with exactly how I wanted. Very Good Experience..!",
      name: "Vikas Sharma",
      image: person,
      rating: 5,
    },
  ];

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
            {testimonialsData.map((testimonial, index) => (
              <Testimonial key={index} data-aos="fade-up">
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
                    <Ratings>{renderStars(testimonial.rating)}</Ratings>
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
  @media (max-width: 768px) {
    max-width: 85%;
  }
`;

const TestimonialsHeading = styled.p`
  font-size: 20px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
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
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 0.5s ease-in-out;
`;

const Message = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-style: italic;
  letter-spacing: 1px;
  color: black;
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
  color: black;
  transition: all 0.5s ease-in-out;
`;

const Ratings = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: #fbbc04;
  transition: all 0.5s ease-in-out;
`;
