import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";
import person from "../../../public/assets/person.png";
import interior from "../../../public/assets/interior-design.jpg";

export const Testimonials = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };

  return (
    <DisplayWrapper>
      <Header>
        <TestimonialsHeading>Testimonials</TestimonialsHeading>
        <Heading>What Our Clients Say About Us</Heading>
        <Description>
          Explore firsthand the commendations of our craftsmanship. Tailoring
          services for every space and vision, our clients share their
          experiences of excellence.
        </Description>
      </Header>
      <MySlider {...settings}>
        <MySlide>
          <LeftSide>
            <SlideImage src={interior} alt="interior" />
          </LeftSide>
          <RightSide>
            <Message>
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ex
              assumenda maiores officia cum laborum voluptate dicta numquam.
              Voluptate nisi officiis digniss
            </Message>
            <PersonDetailsWrapper>
              <PersonImage src={person} alt="person" />
              <PersonDetails>
                <PersonName>Mukesh Sharma</PersonName>
                <PersonDesc>Web Developer</PersonDesc>
              </PersonDetails>
            </PersonDetailsWrapper>
          </RightSide>
        </MySlide>
        <MySlide>
          <LeftSide>
            <SlideImage src={interior} alt="interior" />
          </LeftSide>
          <RightSide>
            <Message>
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ex
              assumenda maiores officia cum laborum voluptate dicta numquam.
              Voluptate nisi officiis dignissimos, aspernatur fuga error aperiam
              temporibus quas accusantium laborum!"
            </Message>
            <PersonDetailsWrapper>
              <PersonImage src={person} alt="person" />
              <PersonDetails>
                <PersonName>Mukesh Sharma</PersonName>
                <PersonDesc>Web Developer</PersonDesc>
              </PersonDetails>
            </PersonDetailsWrapper>
          </RightSide>
        </MySlide>
        <MySlide>
          <LeftSide>
            <SlideImage src={interior} alt="interior" />
          </LeftSide>
          <RightSide>
            <Message>
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ex
              assumenda maiores officia
            </Message>
            <PersonDetailsWrapper>
              <PersonImage src={person} alt="person" />
              <PersonDetails>
                <PersonName>Mukesh Sharma</PersonName>
                <PersonDesc>Web Developer</PersonDesc>
              </PersonDetails>
            </PersonDetailsWrapper>
          </RightSide>
        </MySlide>
        <MySlide>
          <LeftSide>
            <SlideImage src={interior} alt="interior" />
          </LeftSide>
          <RightSide>
            <Message>
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ex
              assumenda maiores officia cum laborum voluptate dicta numquam.
              Voluptate nisi officiis dignissimos, aspernatur fuga error aperiam
              temporibus quas accusantium laborum!"
            </Message>
            <PersonDetailsWrapper>
              <PersonImage src={person} alt="person" />
              <PersonDetails>
                <PersonName>Mukesh Sharma</PersonName>
                <PersonDesc>Web Developer</PersonDesc>
              </PersonDetails>
            </PersonDetailsWrapper>
          </RightSide>
        </MySlide>
      </MySlider>
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

const MySlider = styled(Slider)`
  width: 90%;
  margin: 0 auto;
  transition: all 0.5s ease-in-out;
`;

const MySlide = styled.div`
  width: 100%;
  display: flex !important;
  gap: 50px;
  padding: 0 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    width: 100%;
  }
`;

const SlideImage = styled(Image)`
  width: 100%;
  height: 500px;
  object-fit: cover;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    height: 300px;
  }
  @media (max-width: 376px) {
    height: 250px;
  }
`;

const RightSide = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    width: 100%;
  }
`;

const Message = styled.p`
  font-size: 24px;
  letter-spacing: 1px;
  font-style: italic;
  color: black;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const PersonDetailsWrapper = styled.div`
  display: flex;
  gap: 20px;
  transition: all 0.5s ease-in-out;
`;

const PersonImage = styled(Image)`
  width: 80px;
  height: 80px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

const PersonDetails = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    height: 70px;
  }
`;

const PersonName = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: black;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const PersonDesc = styled.p`
  font-size: 20px;
  color: grey;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
