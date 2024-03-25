import React, { useState } from "react";
import './styles.css'

const ScrollToSection = () => {
  const [selectedProject, setSelectedProject] = useState("");

  const handleChange = (e) => {
    setSelectedProject(e.target.value);
  };

  const handleClick = () => {
    const selectedElement = document.getElementById(selectedProject);
    if (selectedElement) {
      selectedElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className="scroll-to-section">
        <h1>Scroll To Section</h1>
      <select value={selectedProject} onChange={handleChange}>
        <option value="">Select a project</option>
        <option value="Accordion">Accordion</option>
        <option value="RandomColor">RandomColor</option>
        <option value="StarRating">StarRating</option>
        <option value="ImageSlider">ImageSlider</option>
        <option value="LoadMoreData">LoadMoreData</option>
        <option value="TreeView">TreeView</option>
        <option value="QRCodeGenerator">QRCodeGenerator</option>
        <option value="LightDarkMode">LightDarkMode</option>
        <option value="ScrollIndicator">ScrollIndicator</option>
        <option value="TabTest">TabTest</option>
        <option value="ModalTest">ModalTest</option>
        <option value="GithubProfileFinder">GithubProfileFinder</option>
        <option value="SearchAutoComplete">SearchAutoComplete</option>
        <option value="TicTacToe">TicTacToe</option>
      </select>
      <button onClick={handleClick}>Scroll to section</button>
    </div>
  );
};

export default ScrollToSection;
