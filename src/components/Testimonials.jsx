import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/durgamaa.jpg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Hotels are really good. Very comfortable bed and family friendly.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Nabanita Chakroborty</h4>
              <span>CEO - Techno Web Solutions</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Very good services. Really nice customer care service.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Komal Yadav</h4>
              <span>IT Employee</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Love to travel with City Life,best in business.Highly Recommended.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Aman Sheth</h4>
              <span>Businessman</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;