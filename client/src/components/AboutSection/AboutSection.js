import React from 'react';
import StyledAboutSection from './AboutSection.styled.js';
import crueltyFree from '../../img/crueltyFree.png';
import plant from '../../img/plant.png';
import bio from '../../img/bio.png';
import label from '../../img/label.png';
function AboutSection() {
  return (
    <StyledAboutSection>
      <article>
        <h1>Discover the Benefits of Our Organic & Cruelty-Free Cosmetics</h1>
        <p>
          At ShoppApp, we believe in the power of nature to enhance beauty. Our
          cosmetics are crafted from the finest organic ingredients, ensuring
          that what you put on your skin is not only effective but also safe and
          nourishing.
        </p>
        <h2>Why choose our products?</h2>
        <ul>
          <li>
            <div>
              {' '}
              <img src={bio} alt="bio"></img>
            </div>
            <p>
              100% Organic Ingredients: We source our ingredients from
              sustainable farms, ensuring purity and potency.
            </p>
          </li>

          <li>
            <p>
              {' '}
              We are proudly cruelty-free, never testing on animals and
              committed to ethical beauty practices.
            </p>
            <div>
              {' '}
              <img src={crueltyFree} alt="cruelty-free"></img>
            </div>
          </li>

          <li>
            <div>
              {' '}
              <img src={plant} alt="eco"></img>
            </div>
            <p>
              {' '}
              Eco-Friendly Packaging: Our packaging is designed to be
              environmentally friendly, minimizing waste and reducing our carbon
              footprint.
            </p>
          </li>
          <li>
            <p>
              {' '}
              Dermatologist Tested: All our products are rigorously tested to
              ensure they are gentle on your skin and deliver the best results.
            </p>
            <div>
              {' '}
              <img src={label} alt="dermatologically-tested"></img>
            </div>
          </li>
        </ul>
        <h3>Transform Your Beauty Routine </h3>
        <p>
          From radiant serums to luxurious lipsticks, our product range is
          designed to cater to all your beauty needs. Each product is
          meticulously formulated to bring out your natural glow, making you
          feel beautiful inside and out
        </p>
      </article>
    </StyledAboutSection>
  );
}

export default AboutSection;
