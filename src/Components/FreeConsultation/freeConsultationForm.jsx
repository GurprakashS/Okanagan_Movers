import "./freeConsultationForm.css";

const FreeConsultationForm = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Request a Free Consultation</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="5"
            placeholder="Describe Your Project"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </section>
  );
};

export default FreeConsultationForm;
