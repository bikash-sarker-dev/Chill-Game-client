import React from "react";
import { Fade } from "react-awesome-reveal";
import TournamentImg from "../../../assets/images/touranment.jpg";

const Tournament = () => {
  return (
    <section
      style={{
        background: `url(https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundColor: "rgba(0,0,0,0.8)",
      }}
      className="bg-center py-32 bg-blend-overlay bg-fixed"
    >
      <Fade direction="up">
        <div className="container">
          <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse text-white">
              <img
                src={TournamentImg}
                className="max-w-xg rounded-lg shadow-2xl "
              />
              <div>
                <h1 className="text-5xl font-bold">Gaming Tournaments</h1>
                <p className="py-6 text-gray-300">
                  Quis nostrum exercitationem ullam corporis suscit labor iosam,
                  nisi ut aliquid ex ea commodi conse aute irure dolor in
                  reprehenderit in voluptateesse occaecat cuida at non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulle ariatur
                </p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Tournament;
