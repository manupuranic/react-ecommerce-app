import React, { useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";

import classes from "./ProductDetail.module.css";

const ProductDetail = () => {
  const params = useParams();
  const [mainImage, setMainImage] = useState(1);

  const imgs = {
    1: "/1.jpg",
    2: "/2.jpg",
    3: "/3.jpg",
    4: "/4.jpg",
  };
  console.log(params);

  const onImageChange = (e) => {
    setMainImage(+e.target.id);
  };

  const sideImgContent = Object.values(imgs).map((image, index) => (
    <Image
      src={image}
      className={classes.smallImg}
      id={index + 1}
      onClick={onImageChange}
    />
  ));

  return (
    <Container>
      <Container fluid className={classes.mainDisplay}>
        <div className={classes.prodImg}>
          <div className={classes.sideImg}>{sideImgContent}</div>
          <div className={classes.mainImg}>
            <Image src={`${imgs[mainImage]}`} alt="main" />
          </div>
        </div>
        <div className={classes.details}>
          <h1 className="display-3">Colors</h1>
          <div>
            <span className={classes.price}>₹80/-</span>
          </div>
          <p>
            Pariatur aute deserunt ad cillum qui cupidatat. Ullamco ea
            reprehenderit Lorem laboris duis qui proident. Ad cupidatat
            cupidatat commodo est amet fugiat nostrud duis non id.
          </p>
          <Button variant="dark" type="button">
            Add to Cart
          </Button>
        </div>
      </Container>
      <Container fluid className="mt-5">
        <h2 className="display-5">Reviews</h2>
        <div>
          <span>Avg Rating: ⭐⭐⭐⭐</span>
        </div>
        <hr />
        <div className={classes.reviews}>
          <ul className="list-group">
            <li className={classes.reviewList}>
              <span>Rating: ⭐⭐⭐⭐⭐</span>
              <p>Ut cupidatat occaecat non anim est officia.</p>
              <span className="text-right">-John Doe</span>
              <div>2 months ago</div>
            </li>
            <li className={classes.reviewList}>
              <span>Rating: ⭐⭐⭐⭐</span>
              <p>
                Exercitation elit irure anim ex elit labore magna elit
                reprehenderit ea velit.
              </p>
              <span className="text-right">-John Doe</span>
              <div>6 months ago</div>
            </li>
            <li className={classes.reviewList}>
              <span>Rating: ⭐⭐⭐</span>
              <p>
                Ea consequat ipsum proident non occaecat minim magna sint
                voluptate.
              </p>
              <span className="text-right">-John Doe</span>
              <div>9 months ago</div>
            </li>
          </ul>
        </div>
      </Container>
    </Container>
  );
};

export default ProductDetail;
