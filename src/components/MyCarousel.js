import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

let MyCarousel = (props) => {
  let items = [
    {
      name: "Random Name #1",
      imgUrl: "https://picsum.photos/536/354",
    },
    {
      name: "Random Name #2",
      imgUrl:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--J2NNFAdg--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://images.unsplash.com/photo-1529675641475-78780f1fd4b0%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26auto%3Dformat%26fit%3Dcrop%26w%3D1350%26q%3D80",
    },
  ];

  const mystyle = {
    width: " 100%",
    "max-height": "350px",
  };

  // const j = {
  //   width: " 100%",
  // };

  return (
    <div>
      <Carousel>
        {items.map((item, i) => (
          <img alt='p' style={mystyle} src={item.imgUrl} />
        ))}
      </Carousel>
    </div>
  );
};
export default MyCarousel;
