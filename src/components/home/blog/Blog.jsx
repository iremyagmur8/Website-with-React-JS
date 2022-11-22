
function Blog({data}) {
  return (
    <>
      <section className="blog services">
        <div className="container topMarign">
          <div className="heading">
            <h3>LATEST BLOG</h3>
            <h1>Read Inspirational Story Every Week</h1>
          </div>

          <div className="contain grid topMarign">
            {data.slice(0, 9).map((val) => {
              return (
                <div className="box">
                  <div className="img">
                    <img src={val.images[0]} alt="" />
                  </div>
                  <div className="text">
                    <span>22.06.2021</span>
                    <h2>{val.title}</h2>
                    <p className="line-wrap">{val.description}</p>
                    <a href="/">
                      Read More
                      <i class="fa-solid fa-arrow-right icon-arrow"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
