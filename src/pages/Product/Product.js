import React /* , { useEffect } */ from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout.js';
import { useSelector /* useDispatch */ } from 'react-redux';
import StyledProduct from './Product.styled.js';
import Button from '../../components/Button/Button.js';
import ProductCounter from '../../components/ProductCounter/ProductCounter.js';
/* import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase.js'; */
//import { setCurrentProduct } from '../../modules/database/database.actions.js';
function ProductDetail() {
  const { id } = useParams();

  /*   const dispatch = useDispatch(); */
  const products = useSelector((state) => state.products);
  const images = useSelector((state) => state.images);
  /*   useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
 
        const productDocRef = doc(db, 'products', id.toString());
        const productSnapshot = await getDoc(productDocRef, {
          source: 'server',
        });

        if (productSnapshot.exists()) {
          console.log('Document data:', productSnapshot.data());
        } else {
      
          console.log(db, 'No such document!');
        } */

  /*    const productSnapshot = await getDoc(productDoc);
          console.log(productSnapshot, 'sssssssssssssss');
          if (productSnapshot.exists()) {
            dispatch(setCurrentProduct(productSnapshot.data()));
          } else {
            console.error('Product not found');
          } */
  /*  } */ /*  catch (error) {
          console.error('Error fetching product:', error);
        } */
  /*   };

      fetchProduct();
    } else {
      console.error('Product ID is missing');
    }
  }, [id]);
 */
  /*  if (!currentProduct) {
    return <div>Loading...</div>;
  }
 */

  const product = products.find((p) => p.id === Number(id));
  console.log(product, 'fheeeeeee');
  return (
    <Layout>
      <StyledProduct>
        <header>
          {images.map(
            (image) =>
              image.name === product.image && (
                <img
                  key={image.id}
                  src={image.url}
                  alt={product.product_name}
                />
              )
          )}{' '}
        </header>
        <article>
          <h1>{product.product_name}</h1>
          <p>{product.description}</p>
          <p>
            <span>Ingredients</span>
            {product.ingredients}
          </p>

          <p>Price:{product.price}$</p>
          <div>
            <ProductCounter />
            <Button text="add to cart" buttonStyle="buttonAddProduct" />
          </div>
        </article>
      </StyledProduct>
    </Layout>
  );
}

export default ProductDetail;
