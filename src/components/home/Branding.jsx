import React from "react";

export default function Branding({data}) {

  return (
    <>
      <section className="branding">
        <div className="container grid">
          {data.slice(17,20).map((val) => {
            return (
              <div className="box flex">
                <div className="text">
                  <h1>{val.id}</h1>
                </div>
                <div className="para">
                  <h2>{val.category.name}</h2>
                  <h2>{val.description}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
