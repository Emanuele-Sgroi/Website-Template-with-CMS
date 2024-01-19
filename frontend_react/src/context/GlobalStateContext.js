import React, { createContext, useState, useContext, useEffect } from "react";
import { client } from "../client";

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [general, setGeneral] = useState(null);
  const [about, setAbout] = useState(null);
  const [homepage, setHomepage] = useState(null);
  const [mission, setMission] = useState(null);
  const [servicesStatic, setServicesStatic] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [services, setServices] = useState([]);
  const [isAllFetched, setIsAllFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          generalData,
          aboutData,
          homepageData,
          missionData,
          servicesStaticData,
          testimonialsData,
          servicesData,
        ] = await Promise.all([
          client.fetch('*[_type == "general"]'),
          client.fetch('*[_type == "about"]'),
          client.fetch('*[_type == "homepage"]'),
          client.fetch('*[_type == "mission"]'),
          client.fetch('*[_type == "services_static"]'),
          client.fetch('*[_type == "testimonials"] | order(_createdAt desc)'),
          client.fetch('*[_type == "services"]'),
        ]);

        setGeneral(generalData[0]);
        setAbout(aboutData[0]);
        setHomepage(homepageData[0]);
        setMission(missionData[0]);
        setServicesStatic(servicesStaticData[0]);
        setTestimonials(testimonialsData);
        setServices(servicesData);

        if (
          generalData[0] &&
          aboutData[0] &&
          homepageData[0] &&
          missionData[0] &&
          servicesStaticData[0] &&
          testimonialsData.length > 0 &&
          servicesData.length > 0
        ) {
          setIsAllFetched(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{
        general,
        setGeneral,
        about,
        setAbout,
        homepage,
        setHomepage,
        mission,
        setMission,
        servicesStatic,
        setServicesStatic,
        testimonials,
        setTestimonials,
        services,
        setServices,
        isAllFetched,
        setIsAllFetched,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
