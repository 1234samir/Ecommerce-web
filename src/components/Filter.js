import React from "react";
import { useState, useEffect } from "react";

export default function Filter(props) {
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    if (props.category === "electronics") {
      setFilterList([
        { id: "12", name: "Sony" },
        { id: "13", name: "Apple" },
        { id: "14", name: "LG" },
        { id: "15", name: "Panasonic" },
      ]);
    }
  }, []);

  useEffect(() => {
    if (props.category === "fashion") {
      setFilterList([
        { id: "12", name: "Coach" },
        { id: "13", name: "H&M" },
        { id: "14", name: "Michael Kors" },
        { id: "15", name: "Nike" },
      ]);
    }
  }, []);

  useEffect(() => {
    if (props.category === "books") {
      setFilterList([
        { id: "12", name: "History" },
        { id: "13", name: "Math" },
        { id: "14", name: "Hary Potter" },
        { id: "15", name: "Immunology" },
      ]);
    }
  }, []);

  let checkboxHandler = (brand) => {
    props.change(brand);
    console.log(brand, "d");
  };

  // let clicked = products.filter(function (product) {
  //   return product.name === "Sony";
  // });
  return (
    <div>
      {filterList.map((filter) => (
        <React.Fragment>
          <div></div>
          <label htmlFor={filter.id}>{filter.name}</label>
          <input
            id={filter.id}
            type='checkbox'
            onChange={() => checkboxHandler(filter.name)}
            onclick='return false;'
          />
        </React.Fragment>
      ))}
    </div>
  );
}
