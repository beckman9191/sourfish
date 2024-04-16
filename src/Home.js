import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        
        <img 
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
        alt=""
        />
      </div>

      <div className="home__row">
        {/* product */}
        <Product 
        id="12321341"
        title='The lean startup' 
        price={29.99}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        rating={5}
        />
        {/* product */}
        <Product 
        id="49538094"
        title="Kenwood kMix Stand Mixer for 
        Baking, Stylish Kitchen Mixer with 
        K-beats, Dough Hook and Whisk, 5 Litre
        Glass Bowl"
        price={239.0}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        rating={4}
        />
      </div>

      <div className="home__row">
        {/* product */}
        <Product 
        id="4903850"
        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
        price={199.99}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        rating={3}
        />
        {/* product */}
        <Product 
        id="23445930"
        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
        price={98.99}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        rating={5}
        />
        {/* product */}
        <Product 
        id="3254354345"
        title="New Apple Ipad pro"
        price={598.99}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        rating={4}
        />
      </div>

      <div className="home__row">
        {/* product */}
        <Product 
        id="90829332"
        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
        price={1094.98}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        rating={4}
        />
      </div>
    </div>
  )
}

export default Home
