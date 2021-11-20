import ProductsCarousel from './carousel';
import axios from 'axios'
import useSwr from 'swr';

const ProductsFeatured = () => {
  const fetcher = (url) => axios(url).then((res) => console.log(res));
  const { data } = useSwr('http://192.168.1.3:3000/products', fetcher);
  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Selected just for you</h3>
          <a href="/products" className="btn btn--rounded btn--border">Show All</a>
        </header>

        <ProductsCarousel products={data} />
      </div>
    </section>
  )
};

export default ProductsFeatured