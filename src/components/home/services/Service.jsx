import React from "react";

export default function Service({data}) {
  return (
    <>
      <section className="services topMargin">
        <div className="container">
          <div className="heading">
            <h3>My Services</h3>
            <h1>Interactive Services Offered Me</h1>
          </div>
          <div className="contain grid topMargin">
            {data.slice(10,16).map((val) => {
              return (
                <>
                  <div className="box">
                    <div className="img">
                      <img src={val.images[1]} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p className="line-wrap">{val.description}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
