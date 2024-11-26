import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector /* , useDispatch */ } from 'react-redux';
import Layout from '../../components/Layout/Layout.js';
import Article from '../../components/Article/Article.js';
import StyledCategoryPage from './CategoryPage.styled.js';

import ProductQuickView from '../../components/ProductQuickView/ProductQuickView.js';
/* import Pagination from '../../components/Pagination/Pagination.js'; */

function CategoryPage() {
  const { slug } = useParams();
  const products = useSelector((state) => state.products);
  const images = useSelector((state) => state.images);
  const quickviewProduct = useSelector((state) => state.quickViewProduct);
  const [sort, setSort] = useState('sort');
  if (products.length > 0) {
    const filteredArticles = products.filter(
      (product) => product.category.split(' ').join('-') === slug
    );

    const sortedArticles = filteredArticles.sort((a, b) => {
      if (sort === 'asc') {
        return a.price - b.price;
      } else if (sort === 'desc') {
        return b.price - a.price;
      } else return;
    });

    const handleSortChange = (event) => {
      setSort(event.target.value);
    };
    return (
      <Layout>
        {/*    <Pagination path={`/category/${slug}`} limit={2}> */}
        <StyledCategoryPage>
          <div>
            <label htmlFor="sort"></label>

            <select id="category" value={sort} onChange={handleSortChange}>
              <option value="sort">SORT</option>
              <option value="asc">Price ascending</option>
              <option value="desc">Price descending</option>
            </select>

            <form></form>
          </div>
          <section>
            {sortedArticles.map((article, index) => (
              <Article key={index} images={images} product={article} />
            ))}
          </section>
        </StyledCategoryPage>
        <ProductQuickView
          product={quickviewProduct}
          message="Are you sure you want to remove this item?"
        />
        {/*     </Pagination> */}
      </Layout>
    );
  }
  return <p>No products available</p>;
}

export default CategoryPage;
