import { React } from 'react';

import Layout from '../../components/Layout/Layout.js';
import PurchaseTermsSection from '../../components/PurchaseTermsSection/PurchaseTermsSection.js';
function PurchaseTerms() {
  return (
    <Layout>
      <PurchaseTermsSection />
    </Layout>
  );
}
/*   if (notFound) {
    return <NotFound />;
  }
 */

export default PurchaseTerms;
