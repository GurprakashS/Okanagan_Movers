// src/Components/Testimonial/testimonials.jsx

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      review: "Great service! They made my move stress-free.",
    },
    { name: "Jane Smith", review: "Highly recommend their packing services." },
    { name: "Mike Johnson", review: "Professional and affordable." },
  ];

  return (
    <div className="testimonials">
      <h2>Whats our Customers Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => {
          <div key={index} className="testimonial">
            <p>{testimonial.review}</p>
            <p>{testimonial.name}</p>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Testimonials;
