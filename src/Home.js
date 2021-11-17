import React from "react";
import "./Home.css";
import Product from "./Product";
// import banner from "./banner.png";
// import banner1 from "./banner1.png";
import banner from "./banner3.png";

function Home() {
  return (
    <div className="home ">
      <div className="home__container ">
        <img
          className="home__image"
          src={banner}
          // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row ">
          <Product
            id="12321341"
            title="SG Full Cricket Kit Combo with Spofly™ Brand Stumps"
            price={5999}
            rating={5}
            image="https://m.media-amazon.com/images/I/71O8-ltHVAL._SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Redux Digital Sports Watch Multi-Functional Watch for Boys "
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/51SN4OktKKL._UX385_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Apple Wireless AirPods Max, Active Noise Cancellation with Transparency Mode Sky Blue"
            price={7999}
            rating={5}
            image="https://www.reliancedigital.in/medias/Apple-Max-Headphones-and-Headsets-491936176-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzYyNjh8aW1hZ2UvanBlZ3xpbWFnZXMvaDk5L2g1MC85NDUwMjIzNTM0MTEwLmpwZ3w3ZjliNDk3M2ZkOWVhMmZmOTU1YTU4MjEyNmJmMTAzNzBlMTkwMmZlZDkyY2FhMDIxMTNkNGRkMzk0MTM4NDIz"
          />
          <Product
            id="49538094"
            title="Apple iPhone 11 (64GB) - White"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71QE00iB9IL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="KUNDAN SULZ GWALIOR Men's Poly-Viscose Unstitched Jacket; Trouser and Suit Fabric (Multicolour; Free Size) "
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61bVQEiYiNL._UL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="ASIAN Men's Bouncer-01 Sports,Walking,Gym,Training,Running Shoes "
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/41+2oGSsAqL._SY395_SX395_.jpg"
          />
          <Product
            id="49538094"
            title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, 16GB RAM, 1TB SSD, 2.0GHz Quad-core 10th-Generation Intel Core i5 Processor, Four Thunderbolt 3 Ports) - Silver "
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/716R-UhEB+L._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
