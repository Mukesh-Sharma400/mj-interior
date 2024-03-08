import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";
import turnkey from "../../../public/assets/turnkey.jpg";
import popWork from "../../../public/assets/pop-work.jpg";
import painting from "../../../public/assets/painting.png";
import civilWork from "../../../public/assets/civil-work.png";
import electrical from "../../../public/assets/electrical.jpg";
import carpenters from "../../../public/assets/carpenters.jpg";
import modular from "../../../public/assets/modular-kitchen.jpg";
import fabrication from "../../../public/assets/fabrication.jpg";
import interior from "../../../public/assets/interior-design.jpg";
import flooring from "../../../public/assets/tiling-flooring.jpg";

export const Services = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const sectionData = {
    smallHeading: "Services",
    heading: "Our Best Services",
    description:
      "Dive into the realm of excellence with our tailored services, meticulously crafted for every space and vision. Discover the unparalleled quality of our offerings.",
  };

  const servicesData = [
    {
      image: interior,
      title: "Interior Designing",
    },
    {
      image: civilWork,
      title: "Civil Work",
    },
    {
      image: flooring,
      title: "Tiling And Flooring",
    },
    {
      image: electrical,
      title: "Electrical Work",
    },
    {
      image: fabrication,
      title: "Fabrication Work",
    },
    {
      image: painting,
      title: "Painting Work",
    },
    {
      image: popWork,
      title: "POP Work",
    },
    {
      image: carpenters,
      title: "Carpenter Work",
    },
    {
      image: modular,
      title: "Modular Kitchen",
    },
    {
      image: turnkey,
      title: "Turnkey Contractor",
    },
  ];

  return (
    <DisplayWrapper>
      <Header data-aos="fade-up">
        <ServicesHeading>{sectionData.smallHeading}</ServicesHeading>
        <Heading>{sectionData.heading}</Heading>
        <Description>{sectionData.description}</Description>
      </Header>
      <MySlider {...settings}>
        {servicesData.map((service, index) => (
          <MySlide key={index}>
            <SlideImageWrapper>
              <SlideImage src={service.image} alt={service.title} />
            </SlideImageWrapper>
            <SlideTitle>{service.title}</SlideTitle>
          </MySlide>
        ))}
      </MySlider>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  padding-bottom: 50px;
  background-image: repeating-linear-gradient(
    to right,
    #1d1d1d,
    #1d1d1d 0.5px,
    transparent 0.5px,
    transparent
  );
  background-size: 200px 200px;
  background-color: #0c0e17;
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

const ServicesHeading = styled.p`
  font-size: 20px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
`;

const Heading = styled.h1`
  color: white;
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
  color: lightgrey;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 376px) {
    font-size: 14px;
  }
`;

const MySlider = styled(Slider)`
  width: 90%;
  margin: 0 auto;
  transition: all 0.5s ease-in-out;
`;

const MySlide = styled.div`
  padding: 0 10px;
  transition: all 0.5s ease-in-out;
`;

const SlideImageWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;
  transition: all 0.5s ease-in-out;
`;

const SlideImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const SlideTitle = styled.p`
  text-align: center;
  font-size: 25px;
  color: white;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 670px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
  @media (max-width: 376px) {
    font-size: 14px;
  }
  @media (max-width: 321px) {
    font-size: 12px;
  }
`;
