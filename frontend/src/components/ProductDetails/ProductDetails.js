import {
  Box,
  Button,
  Card,
  CardMedia,
  Checkbox,
  CircularProgress,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Navbar from "../LandingPage/Navbar/Navbar";
import useStyles from "./styles";
import { getSingleProduct } from "../../actions/product";

import { Favorite, FavoriteBorderOutlined } from "@material-ui/icons";
import Footer from "../LandingPage/Footer/Footer";

function ProductDetails({ deviceType }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { prodid } = useParams();
  const [singleProductDetails, setProductDetails] = useState({});
  const productDetails = useSelector((state) => state.singleProductReducer);

  const { isLoading } = productDetails;

  useEffect(() => {
    dispatch(getSingleProduct(prodid));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setProductDetails(productDetails.products);
  }, [productDetails.products]);

  return (
    <div>
      <Navbar />

      {/* Detail Section */}
      {!isLoading && singleProductDetails ? (
        <>
          <div className={classes.nameDiv}>
          </div>
          <Box className={classes.outerBox}>
            <div className={classes.DetailSection}>
              <div className={classes.Photos}>
                <div className={classes.largePhotos}>
                  <Card className={classes.largePhotos1} sx={{ maxWidth: 350 }}>
                    <CardMedia
                      component='img'
                      height='250'
                      image={singleProductDetails.image}
                      alt='img'
                    />
                  </Card>
                </div>
              </div>
              <div className={classes.details}>
                <h3>{singleProductDetails.name}</h3>
                <span className={classes.price}>
                  ${singleProductDetails.price}
                </span>

                <p className={classes.description}>
                  {singleProductDetails.description}
                </p>
                <div className={classes.buttonDiv}>
                  <Button size='small' className={classes.add}>
                    Add To Cart
                  </Button>
                  <Checkbox
                    className={classes.heart}
                    icon={<FavoriteBorderOutlined />}
                    checkedIcon={<Favorite />}
                  />
                </div>
              </div>
            </div>
          </Box>

          {/* Additional Details Section */}

          <div className={classes.AdditionalDetails}>
          </div>
          <Footer />
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}

export default ProductDetails;
