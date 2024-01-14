import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";
import interior from "../../../public/assets/interior-design.jpg";
import person from "../../../public/assets/person.png";

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
            <SlideImage src={interior} />
          </LeftSide>
          <RightSide>
            <Message>
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ex
              assumenda maiores officia cum laborum voluptate dicta numquam.
              Voluptate nisi officiis dignissimos, aspernatur fuga error aperiam
              temporibus quas accusantium laborum!"
            </Message>
            <PersonDetailsWrapper>
              <PersonImage src={person} />
              <PersonDetails>
                <PersonName>Mukesh Sharma</PersonName>
                <PersonDesc>Web Developer</PersonDesc>
              </PersonDetails>
            </PersonDetailsWrapper>
          </RightSide>
        </MySlide>
        <MySlide>
          <LeftSide>
            <SlideImage src={interior} />
          </LeftSide>
          <RightSide>
            <Message>
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ex
              assumenda maiores officia cum laborum voluptate dicta numquam.
              Voluptate nisi officiis dignissimos, aspernatur fuga error aperiam
              temporibus quas accusantium laborum!"
            </Message>
            <PersonDetailsWrapper>
              <PersonImage src={person} />
              <PersonDetails>
                <PersonName>Mukesh Sharma</PersonName>
                <PersonDesc>Web Developer</PersonDesc>
              </PersonDetails>
            </PersonDetailsWrapper>
          </RightSide>
        </MySlide>
        <MySlide>
          <LeftSide>
            <SlideImage src={interior} />
          </LeftSide>
          <RightSide>
            <Message>
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ex
              assumenda maiores officia cum laborum voluptate dicta numquam.
              Voluptate nisi officiis dignissimos, aspernatur fuga error aperiam
              temporibus quas accusantium laborum!"
            </Message>
            <PersonDetailsWrapper>
              <PersonImage src={person} />
              <PersonDetails>
                <PersonName>Mukesh Sharma</PersonName>
                <PersonDesc>Web Developer</PersonDesc>
              </PersonDetails>
            </PersonDetailsWrapper>
          </RightSide>
        </MySlide>
        <MySlide>
          <LeftSide>
            <SlideImage src={interior} />
          </LeftSide>
          <RightSide>
            <Message>
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ex
              assumenda maiores officia cum laborum voluptate dicta numquam.
              Voluptate nisi officiis dignissimos, aspernatur fuga error aperiam
              temporibus quas accusantium laborum!"
            </Message>
            <PersonDetailsWrapper>
              <PersonImage src={person} />
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
`;

const Description = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  color: grey;
  transition: all 0.5s ease-in-out;
`;

const MySlider = styled(Slider)`
  width: 80%;
  margin: 0 auto;
  transition: all 0.5s ease-in-out;
`;

const MySlide = styled.div`
  width: 100%;
  display: flex !important;
  gap: 50px;
  padding: 0 10px;
  transition: all 0.5s ease-in-out;
`;

const LeftSide = styled.div`
  width: 50%;
  transition: all 0.5s ease-in-out;
`;

const SlideImage = styled(Image)`
  width: 100%;
  height: 500px;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
`;

const RightSide = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
`;

const Message = styled.p`
  font-size: 24px;
  letter-spacing: 1px;
  font-style: italic;
`;

const PersonDetailsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const PersonImage = styled(Image)`
  width: 80px;
  height: 80px;
`;

const PersonDetails = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PersonName = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const PersonDesc = styled.p`
  font-size: 17px;
  color: grey;
`;
