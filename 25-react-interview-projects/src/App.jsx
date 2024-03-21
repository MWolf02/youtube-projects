import { useState } from "react";
import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import "./index.css";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from './components/qr-code-generator'
import LightDarkMode from "./components/light-dark-mode";

function App() {
  return (
    <>
      {/* Accordion component */}
      <Accordion />
      {/* Random Color component */}
      <RandomColor />
      {/* Star Rating component */}
      <StarRating />
      {/* Image Slider component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      {/* Load-More-Data component */}
      <LoadMoreData />
      {/* Tree view component/menu UI component / recursive navigation menu */}
      <TreeView menus={menus} />
      {/* QR Code Generator component */}
      <QRCodeGenerator />
      {/* Light-Dark Mode component */}
      <LightDarkMode/>
    </>
  );
}

export default App;
