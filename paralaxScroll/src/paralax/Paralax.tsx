import React, { useEffect, useRef, useState } from "react";
import "./ParalaxStyles.css";
import {
	motion,
	useScroll,
	useTransform,
	MotionValue,
	useInView,
} from "framer-motion";
import photo from "../data/photo.json";

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id, image, setActiveSlide }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const isInView = useInView(ref);
	const y = useParallax(scrollYProgress, 300);

	useEffect(() => {
		if (isInView) {
			setActiveSlide(id);
		}
	}, [isInView, id, setActiveSlide]);

	return (
		<div className="screen-container">
			<div className="img-container" ref={ref}>
				<img src={image} alt="" />
			</div>
			<motion.div className="numbers" style={{ y }}>{`#00${id}`}</motion.div>
		</div>
	);
}

export default function App() {
	const [activeSlide, setActiveSlide] = useState(1);

	return (
		<>
			{photo.map(({ image, id }) => {
				return (
					<Image
						key={id}
						id={id}
						image={image}
						setActiveSlide={setActiveSlide}
					/>
				);
			})}

			<div className="dotsContainer">
				{photo.map(({ id }) => {
					return (
						<div
							key={id}
							className={activeSlide === id ? "dot_active" : "dot"}
						/>
					);
				})}
			</div>
		</>
	);
}
