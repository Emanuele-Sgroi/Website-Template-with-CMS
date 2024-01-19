import React, { useEffect } from "react";
import {
  Homepage,
  About,
  Mission,
  Services,
  Contacts,
  Scroller,
} from "../../components/index";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Function to handle scrolling to a specific element
    const handleScrollToElement = () => {
      const hash = location.hash.replace("#", "");
      if (hash) {
        let element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Call the scroll handler when the component mounts or the hash changes
    handleScrollToElement();

    const timeoutId = setTimeout(handleScrollToElement, 100); // adjust delay

    return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts
  }, [location]); // Re-run effect when the location changes

  return (
    <>
      <Homepage />
      <About />
      <Services />
      <Mission />
      <Contacts />
      <Scroller />
    </>
  );
};

export default Home;
