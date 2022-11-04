import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import Pizza from "./Pizza";

function PizzaList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getProducts() {
      // eslint-disable-next-line
      const products = await axios
        .post("/products/all")
        .then((res) => setData(res.data.productsList));
    }
    getProducts();
  }, []);

  return (
    <Grid
      container
      columns={4}
      rowSpacing={6}
      sx={{ width: "80vw", margin: "0 auto" }}
    >
      {data.map((product, key) => {
        return (
          <Grid item lg={1} key={key}>
            <Pizza
              _id={product._id}
              name={product.name}
              price={product.price}
              desc={product.description}
              picture={product.picture}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default PizzaList;
