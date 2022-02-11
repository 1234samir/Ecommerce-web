import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Album from "./Album";
import Filter from "./Filter";

export default function Products(props) {
  let { category } = useParams();
  console.log(category, "jhk");

  const [product, setProduct] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/${category}`)
      .then(function (response) {
        setProduct(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (selectedBrands.length) {
      axios
        .get(`http://localhost:5000/${category}`)
        .then(function (response) {
          const filteredCards = response.data.filter((el) => {
            return selectedBrands.indexOf(el.brand) > -1;
          });
          console.log("filtered Cards", filteredCards);
          setProduct(filteredCards);

          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          console.log("selected Brands", selectedBrands);
        });
    } else {
      axios
        .get(`http://localhost:5000/${category}`)
        .then(function (response) {
          setProduct(response.data);
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, [selectedBrands]);

  // let selectedBrands = [];
  // let selectedBrands = [...product];
  let filterHandler = (brands) => {
    console.log(brands);
    if (selectedBrands.indexOf(brands) > -1) {
      let filterBrand = [...selectedBrands].filter((brand) => brand !== brands);
      console.log(filterBrand);
      setSelectedBrands(filterBrand);
    } else {
      // selectedBrands.push(brands);
      setSelectedBrands([...selectedBrands, brands]);
    }
  };
  return (
    <div>
      <div
        style={{
          width: "15%",
          float: "left",
          margin: "2%",
          marginTop: "80px",
          fontSize: "1.17em",
          marginBottom: "1em",
        }}>
        <Filter category={category} change={filterHandler} />
      </div>

      <div style={{ width: "80%", float: "right" }}>
        <Album cards={product} />
      </div>
    </div>
  );
}
