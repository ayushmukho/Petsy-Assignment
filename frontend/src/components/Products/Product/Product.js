import {

  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import React from "react";
import useStyles from "./styles";
import { useHistory } from "react-router";

const Product = ({ product }) => {
  const classes = useStyles();
  const history=useHistory()
  
  const reroute=(e)=>{
   e.preventDefault()
   history.push(`/product/${product._id}`)
  }
  return (
    <div className="App">
      <Card className={classes.card} onClick={reroute}>
        <CardMedia
          className={classes.media}
          image={product.image}
        />

        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            {product.name}
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            {product.description.split(" ").splice(0, 10).join(" ")}...
          </Typography>
        </CardContent>
        <CardContent className={classes.mid}>
          <div>
            <Typography variant={"h6"}>{product.price} USD</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Product;
