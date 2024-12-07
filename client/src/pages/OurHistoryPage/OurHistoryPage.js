import { React } from 'react';

import Layout from '../../components/Layout/Layout.js';
import OurHistorySection from '../../components/OurHistorySection/OurHistorySection.js';
function OurHistoryPage() {
  return (
    <Layout>
      <OurHistorySection />
    </Layout>
  );
}
/*   if (notFound) {
    return <NotFound />;
  }
 */

export default OurHistoryPage;
