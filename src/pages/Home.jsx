import { Helmet } from 'react-helmet-async';
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer/index'
import products from "../json/books_reviews.json";
function Home(){
    const title = "Welcome to the Bookstore";

    return(
        <div>
        <div className="container mx-auto main-layout min-h-screen">
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <Header
            title={title}
            slogan="The best place to buy your favorite products"
          />
          <ProductList products={products} className="content" />
        </div>
        <Footer className="footer" />
      </div>
    )
}

export default Home