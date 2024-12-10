import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledHeroSection from './HeroSection.styled.js';
import Button from '../Button/Button.js';
function HeroSection() {
  const navigate = useNavigate();
  return (
    <StyledHeroSection>
      <section>
        <header>
          <h1>Unleash Your Natural Glow</h1>
          <p>Experience the best in organic and cruelty-free cosmetics.</p>
          <div>
            <Button
              text="LEARN MORE"
              buttonStyle="defaultButton"
              onClick={() => {
                navigate('/about');
              }}
            />
          </div>
        </header>
      </section>
    </StyledHeroSection>
  );
}

export default HeroSection;
