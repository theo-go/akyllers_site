// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { useState, useEffect } from "react"
import { PlasmicManifesto3 } from "../components/plasmic/akyllers/PlasmicManifesto3";
import FullText from "../components/FullText";
import RoadmapBox from "../components/RoadmapBox";

const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
};


function Manifesto3() {
  const [resources, setResources] = useState([]);
  const [desc, setDesc] = useState("Let us tell you a story of Akyllers...")

  useEffect(() => {
    var airtable_url = "https://api.airtable.com/v0/appaMdZWgP7E2X944/Roadmap?api_key=" + "key5t3q3H8TgvBOMs"
    fetch(airtable_url)
      .then((res) => res.json())
      .then((resources) => {
        setResources(resources);
        console.log(resources);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
    
  if (resources.records) {
  return (<PlasmicManifesto3 
    descCol={<FullText description={desc}/>}

    boxes={{
      children: resources.records.map((item) => {
        return (
          <RoadmapBox
            image={item.fields.Image[0].url}
            title={item.fields.Title}
            onClick={() => {
              setDesc(item.fields.Description)
              console.log(item.fields.Description)
              goToTop()
            }}
          />
        )
      })
    }}
    
    
    />)}
  return (<PlasmicManifesto3 />)
  
}

export default Manifesto3;
