import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/dharmatala.jpg";
import Destination2 from "../assets/collegesquare.jpg";
import Destination3 from "../assets/hatibagan.jpg";
import Destination4 from "../assets/howrahbridge.jpg";
import Destination5 from "../assets/museum.jpg";
import Destination6 from "../assets/nandan.jpg";
import info1 from "../assets/hotel1.jpg";
import info2 from "../assets/hotel2.jpg";
import info3 from "../assets/hotel3.jpg";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Dharmatala",
      subTitle: "Dharmatala (archaic spelling Dhurrumtollah) is a neighbourhood of Central Kolkata, in Kolkata district in the Indian state of West Bengal. Dharmatala Street has been renamed after Lenin as Lenin Sarani but the neighbourhood up to Wellington Square continues to be referred as Dharmatala. It is a busy commercial area that had come up with the growth of Calcutta during the British Raj and is thus one of the repositories of history in the city.",
      cost: "1000",
      duration: "Approx 1 day trip",
    },
    {
      image: Destination2,
      title: "College Square",
      subTitle: "A square or a park often features in the list of tourist destinations in a city,college square is in the heart of Kolkata. college square, as the name suggests, is in the midst of a dense layout of schools, colleges, institutes, and the kolkata university itself. the city of kolkata has an old-world charm, and college square is in the midst of it. ",
      cost: "1200",
      duration: "Approx 1 day trip",
    },
    {
      image: Destination3,
      title: "Hatibagan",
      subTitle: "The area is under Shyampukur[1] and Burtolla police stations. It is next to Shyambazar. The place is popular for its shops, markets, cinema halls and old theatres. No other places in Kolkata cover as many cinema & theatre halls as Hatibagan. One of the most popular and famous cinema halls here is the Star Theatre, with many people in North Kolkata choosing to watch films there instead of multiplexes because of its low ticket prices. Hatibagan is one of the oldest traditional markets in Kolkata city. One can buy typical Bengal silk and cotton saris here. ",
      cost: "1500",
      duration: "Approx 1 day trip",
    },
    {
      image: Destination4,
      title: "Howrah Bridge",
      subTitle: "The Howrah Bridge is a balanced cantilever bridge over the Hooghly River in West Bengal. Commissioned in 1943,[9][11] the bridge was originally named the New Howrah Bridge, because it replaced a pontoon bridge at the same location linking the cities of Howrah and Kolkata (Calcutta). On 14 June 1965, it was renamed Rabindra Setu after the Bengali poet Rabindranath Tagore, who was the first Indian and Asian Nobel laureate.[11] It is still popularly known as the Howrah Bridge.",
      cost: "2400",
      duration: "Approx 2 days trip",
    },
    {
      image: Destination5,
      title: "Kolkata Museum",
      subTitle: "Founded in 1814 at the cradle of the Asiatic Society of Bengal (at the present building of the Asiatic Society, 1 Park Street, Kolkata), Indian Museum is the earliest and the largest multipurpose Museum not only in the Indian subcontinent but also in the Asia-Pacific region of the world. With the foundation of Indian Museum in 1814, the Museum movement started rolling in India and through the years from then, got a new fillip and great momentum. Since then, it has so magnificently developed and culminated into the fruitful existence of more than 400 museums in the country. The movement, which was started in 1814, in fact was the beginning of a significant epoch initiating the socio-cultural and scientific achievements of the country. It is otherwise considered as the beginning of the modernity and the end of mediaeval era.",
      cost: "9500",
      duration: "Approx 1 day trip",
    },
    {
      image: Destination6,
      title: "Nandan",
      subTitle: "Nandan was a gift from the government to the cinema and art crazy citizens of Kolkata. Inaugurated by the legendary film-maker Satyajit Ray, the movie theater was opened to public on 2nd September, 1985. What distinguishes it from the current multiplexes is the amazing and vast collection of videos, journals, books and other cinematic research materials preserved and maintained at the in-house library. It also has an entire section, dedicated to the renowned and versatile writer, art director and winner of National awards, Satyajit Ray. Be it the annual Kolkata Film Festival or special movie screenings, there is not a single dull moment at Nandan. It also organizes seminars, lectures and workshops that cover different aspects of cinema. An integral part of the Bengali art and culture, it surely cannot be ignored and with each passing year, the glory furthers. You can also visit Bangla Academy, Gaganendra Prodorshonshala and other cultural centers that share space with Nandan. For more information on the current schedule, call ahead.",
      cost: "3880",
      duration: "Approx 1 night  trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>100 Kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;