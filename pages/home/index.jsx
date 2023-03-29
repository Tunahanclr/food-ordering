import About from "@/components/About";
import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import MenuWrapper from "@/components/product/MenuWrapper";
import React from "react";

const Index = () => {
  return <div className=""><Carousel/>
    <Campaigns/>
    <MenuWrapper/>
    <About/>
  </div>;
  
};

export default Index;