import { React } from 'react';

import Layout from '../../components/Layout/Layout.js';

import StyledHomepage from './Homepage.styled.js';
import HeroSection from '../../components/HeroSection/HeroSection.js';
import Main from '../../components/Main/Main.js';

function Homepage() {
  return (
    <StyledHomepage>
      <Layout>
        <HeroSection />
        <Main />
      </Layout>
    </StyledHomepage>
  );
}
/*   if (notFound) {
    return <NotFound />;
  }
 */

export default Homepage;
