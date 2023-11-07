import React from "react";

const Testimonial = () => {
  return (
    <section>
      <div className="container">
        <section className="testimonials-wrap">
          <p className="heading">What people say about us!</p>
          <div className="flex-items">
            <div className="flex-item">
              <div className="img-wrap">
                <img src="image" alt="customer"></img>
                <p className="name">Jenny</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonial;
