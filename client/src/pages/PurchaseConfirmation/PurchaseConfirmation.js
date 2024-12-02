import { React } from 'react';

import Layout from '../../components/Layout/Layout.js';

import PurchaseConfirm from '../../components/PurchaseConfirm/PurchaseConfirm.js';

function Homepage() {
  return (
    <Layout>
      <PurchaseConfirm />
    </Layout>
  );
}

export default Homepage;
