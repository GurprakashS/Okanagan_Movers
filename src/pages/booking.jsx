const Booking = () => {
  return (
    <div>
      <h1>Book a Service</h1>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Booking;
