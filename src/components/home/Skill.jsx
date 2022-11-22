import React from "react";

function Skill() {
  const Progress = ({ done, title }) => {
    return (
      <div className="progress">
        <div className="progress-done" style={{ opacity: 1, width: `${done}%` }}>
          <h4>{title}</h4>
          <h4>{done} %</h4>
        </div>
      </div>
    );
  };
  const data = [
    {
      title: "Every day is a new adventure, a new opportunity.",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, voluptatibus obcaecati! Rerum minima nobis natus debitis dolores modi id nisi soluta, ex molestias harum sunt praesentium consequuntur eligendi temporibus repudiandae.",
      para1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quis, aperiam vitae, sunt explicabo facilis quia eos ipsam eaque velit amet inventore ut aliquid saepe, sapiente porro eligendi! Quisquam, impedit.",
    },
  ]
  return (
    <>
      <section className="skill">
        <div className="container">
          <div className="heading">
            <h3> Skills</h3>
            <h1>Some Of My Skills</h1>
          </div>
          <div className="content flex align-items-center">
            <div className="left topMarign">
              <Progress done="95" title="HTML"></Progress>
              <Progress done="82" title="PHP"></Progress>
              <Progress done="70" title="React JS"></Progress>
              <Progress done="100" title="CSS"></Progress>
            </div>
            <div className="right mtop">
                {data.map((val) => {
                    return(
                        <>
                        <h1>{val.title}</h1>
                        <p>{val.para}</p>
                        <p>{val.para1}</p>
                        <button className='primary-btn'>Contact Me</button>
                        </>
                    )
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skill;
