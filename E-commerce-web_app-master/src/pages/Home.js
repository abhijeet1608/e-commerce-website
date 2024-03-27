import React from "react";
import { Carousel } from "react-bootstrap";
import Categories from "../components/CategoriesCard/CategoriesCard";

function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/8/17/6fe7489e-8300-46f9-9ae2-6b02d42f65b01629208170398-SportsShoes_Dk.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/14/bc55d378-bd56-46c3-ad4e-c178af604f571631633421839-Dressberry_Desk--2-.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/19/b87dd3ae-f0c1-4c88-af27-839009fa49361632055905457-30-Sep-Prebuzz-Wishlist-desktop-----1.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1 className="home-heading">Welcome! </h1>
      <p className="home-sub-heading">
        This is a modified jumbotron that occupies the entire horizontal space
        of its parent.
      </p>
      <Categories />
    </>
  );
}

export default Home;
