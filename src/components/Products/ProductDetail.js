import React, { useContext, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CartContext from "../../store/cart-context";

import classes from "./ProductDetail.module.css";

const productsArr = [
  {
    id: "01",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "02",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "03",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "04",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductDetail = () => {
  const params = useParams();
  const [product] = productsArr.filter((item) => item.id === params.productId);
  const [mainImage, setMainImage] = useState(+product.id - 1);
  const cartCtx = useContext(CartContext);

  const onImageChange = (e) => {
    setMainImage(+e.target.id);
  };

  const sideImgContent = productsArr.map((item, index) => (
    <Image
      key={item.id}
      src={item.imageUrl}
      className={classes.smallImg}
      id={index}
      onMouseOver={onImageChange}
    />
  ));

  const addToCartHandler = () => {
    cartCtx.addItem(product, 1, true);
  };

  return (
    <Container>
      <Container fluid className={classes.mainDisplay}>
        <div className={classes.prodImg}>
          <div className={classes.sideImg}>{sideImgContent}</div>
          <div className={classes.mainImg}>
            <Image src={`${productsArr[mainImage].imageUrl}`} alt="main" />
          </div>
        </div>
        <div className={classes.details}>
          <h1 className="display-3">{product.title}</h1>
          <div>
            <span className={classes.price}>₹{product.price}/-</span>
          </div>
          <p>
            Pariatur aute deserunt ad cillum qui cupidatat. Ullamco ea
            reprehenderit Lorem laboris duis qui proident. Ad cupidatat
            cupidatat commodo est amet fugiat nostrud duis non id.
          </p>
          <Button variant="dark" type="button" onClick={addToCartHandler}>
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
