import React from 'react';
import './Home.css';
import Product from './Product.js';

function Home() {
    return (
        <div className="home">
         <div className="home_container">
             <img className="home_image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/M32/LP/launch/M32_PC_LP_Top_Banner_2.jpg"
              alt="amazon logo"
              />
                
                <div className="home_row">
                        {/* {product} */}
                        {/* {product} */}
                        {/* <Product image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        title="the book"
                        price={54}
                        rating={6} /> */}
                        
                        <Product image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                        price={65}
                        rating={3}
                        id={1}/>

                        <Product image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3XH_gRLU-5uQGpjIYSlinpFNmjkJhnzLMw&usqp=CAU"
                        title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)
                        "
                        rating={4}
                        price={65}
                        id={2}/>
                       
                </div>

                <div className="home_row">
                    {/* {product} */}
                    <Product image="https://m.media-amazon.com/images/I/41CED+NsupL.__AC_SY200_.jpg"
                        title="ASUS TUF Gaming F15 Laptop 15.6 FHD 144Hz Intel Core i5 10th Gen, GTX 1650 4GB GDDR6 Graphics (8GB RAM/1TB HDD + 256GB SSD/Windows 10/Fortress Gray/2.30 Kg), FX566LH-HN009T + Xbox Game Pass for PC"
                        price={6399000}
                        rating={5}
                        id={3}/>

                    <Product image="https://m.media-amazon.com/images/I/51ZqNxY-PqL.__AC_SY200_.jpg"
                        title="LG Ultragear 24 inch (60.96 cm) 144Hz, Native 1ms Full HD Gaming Monitor with Radeon Freesync - TN Panel with Display Port, HDMI, Height Adjust Stand - 24GL650F (Black)"
                        price={0}
                        rating={2}
                        id={4}/>

                        <Product image="https://m.media-amazon.com/images/I/41f8eOJLsPL.__AC_SY200_.jpg"
                        title="OPPO F19 Pro+ 5G (Fluid Black, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
                        price={65}
                        id={5}/>
                    
                   
                    
                </div>

                <div className="home_row">
                   
                    <Product
                    id={6}
                    rating={6}
                    title="ViewSonic 15.6 Inch 1080p Portable Monitor with IPS Touchscreen, 2 Way Powered 60W USB C, Eye Care, Dual Speakers, Frameless Design, Built in Stand with Cover (TD1655)"
                    price={54000}
                    image="https://m.media-amazon.com/images/I/31MVcDazYrS._AC_SR160,160_.jpg"/>
                    
                </div>
       
       
         </div>
            
        </div>
    )
}

export default Home;
