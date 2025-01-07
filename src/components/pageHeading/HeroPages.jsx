import React from "react";
import { Zoom } from "react-awesome-reveal";

const HeroPages = ({ title }) => {
  return (
    <section
      style={{
        background: `url(https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundColor: "rgba(0,0,0,0.8)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-bottom py-32 bg-blend-overlay text-center "
    >
      <div className="container">
        <Zoom>
          <h2 className="text-5xl text-center text-p-background font-bold">
            {title} Page
          </h2>
        </Zoom>
      </div>
    </section>
  );
};

export default HeroPages;
