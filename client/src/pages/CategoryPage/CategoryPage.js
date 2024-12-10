import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout/Layout.js';
import Article from '../../components/Article/Article.js';
import StyledCategoryPage from './CategoryPage.styled.js';
import CartQuickView from '../../components/CartQuickView/CartQuickView.js';
import ProductQuickView from '../../components/ProductQuickView/ProductQuickView.js';

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
        <StyledCategoryPage>
          <div>
            <label htmlFor="sort"></label>

            <select id="category" value={sort} onChange={handleSortChange}>
              <option value="sort">SORT</option>
              <option value="asc">Price ascending</option>
              <option value="desc">Price descending</option>
            </select>
          </div>
          <h1>{slug.replace('-', ' ')}</h1>
          <section>
            {sortedArticles.map((article, index) => (
              <Article key={index} images={images} product={article} />
            ))}
          </section>
        </StyledCategoryPage>
        <CartQuickView images={images} />
        <ProductQuickView product={quickviewProduct} />
      </Layout>
    );
  }
  return <p>No products available</p>;
}

export default CategoryPage;
