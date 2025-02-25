// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef } from "react";
// import PropTypes from "prop-types";
// import "../../Components/ScrollingEffect/scrolling.css";

// import image1 from "../../assets/1.jpg";
// import image2 from "../../assets/2.jpg";
// import image3 from "../../assets/3.jpg";
// import image4 from "../../assets/4.jpg";

// const cards = [
//   {
//     url: image1,
//     title: "Title 1",
//     id: 1,
//   },
//   {
//     url: image2,
//     title: "Title 2",
//     id: 2,
//   },
//   {
//     url: image3,
//     title: "Title 3",
//     id: 3,
//   },
//   {
//     url: image4,
//     title: "Title 4",
//     id: 4,
//   },
//   {
//     url: image1,
//     title: "Title 5",
//     id: 5,
//   },
//   {
//     url: image2,
//     title: "Title 6",
//     id: 6,
//   },
//   {
//     url: image3,
//     title: "Title 7",
//     id: 7,
//   },
// ];

// const ScrollingRow = () => {
//   return <HorizontalScrollCarousel />;
// };

// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   // Calculate the total width to stop the scroll at the last card
//   const cardWidth = 470;
//   const gap = 30; // Gap between cards
//   const initialGap = 100;
//   const totalWidth = cards.length * (cardWidth + gap) - gap + initialGap; // Including initial and final gaps
//   const maxTranslateX = -(totalWidth - window.innerWidth);
//   const x = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["40%", `${maxTranslateX}px`]
//   );

//   return (
//     <section
//       ref={targetRef}
//       className="position-relative"
//       style={{ height: "300vh" }}
//     >
//       <div
//         className="position-sticky d-flex align-items-center"
//         style={{ top: "0", height: "100vh", backgroundColor: "lightblue" }}
//       >
//         <motion.div style={{ x }} className="d-flex gap-3">
//           {cards.map((card) => (
//             <Card card={card} key={card.id} />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };
// const Card = ({ card }) => {
//   return (
//     <div className="position-relative overflow-hidden bg-light card-style">
//       <div
//         style={{
//           backgroundImage: `url(${card.url})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="position-absolute w-100 h-100 transition-transform duration-300 zoom-effect"
//       ></div>
//       <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100">
//         <p className="card-title text-white">{card.title}</p>
//       </div>
//     </div>
//   );
// };

// Card.propTypes = {
//   card: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     url: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default ScrollingRow;
