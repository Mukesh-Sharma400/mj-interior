import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";
import popWork from "../../../public/assets/pop-work.jpg";
import painting from "../../../public/assets/painting.png";
import civilWork from "../../../public/assets/civil-work.png";
import electrical from "../../../public/assets/electrical.jpg";
import carpenters from "../../../public/assets/carpenters.jpg";
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
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <DisplayWrapper>
      <Header>
        <ServicesHeading>Services</ServicesHeading>
        <Heading>Our Best Services</Heading>
        <Description>
          Dive into the realm of excellence with our tailored services,
          meticulously crafted for every space and vision. Discover the
          unparalleled quality of our offerings.
        </Description>
      </Header>
      <MySlider {...settings}>
        <MySlide>
          <SlideImageWrapper>
            <SlideImage src={interior} />
          </SlideImageWrapper>
          <SlideTitle>Interior Designing</SlideTitle>
        </MySlide>
        <MySlide>
          <SlideImageWrapper>
            <SlideImage src={civilWork} />
          </SlideImageWrapper>
          <SlideTitle>Civil Work</SlideTitle>
        </MySlide>
        <MySlide>
          <SlideImageWrapper>
            <SlideImage src={flooring} />
          </SlideImageWrapper>
          <SlideTitle>Tiling And Flooring</SlideTitle>
        </MySlide>
        <MySlide>
          <SlideImageWrapper>
            <SlideImage src={electrical} />
          </SlideImageWrapper>
          <SlideTitle>Electrical Work</SlideTitle>
        </MySlide>
        <MySlide>
          <SlideImageWrapper>
            <SlideImage src={fabrication} />
          </SlideImageWrapper>
          <SlideTitle>Fabrication Work</SlideTitle>
        </MySlide>
        <MySlide>
          <SlideImageWrapper>
            <SlideImage src={painting} />
          </SlideImageWrapper>
          <SlideTitle>Painting Work</SlideTitle>
        </MySlide>
        <MySlide>
          <SlideImageWrapper>
            <SlideImage src={popWork} />
          </SlideImageWrapper>
          <SlideTitle>POP Work</SlideTitle>
        </MySlide>
        <MySlide>
          <SlideImageWrapper>
            <SlideImage src={carpenters} />
          </SlideImageWrapper>
          <SlideTitle>Carpenter Work</SlideTitle>
        </MySlide>
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
  @media (max-width: 426px) {
    font-size: 16px;
  }
  @media (max-width: 376px) {
    font-size: 14px;
  }
  @media (max-width: 321px) {
    font-size: 12px;
  }
`;
