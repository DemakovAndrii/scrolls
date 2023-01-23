import { useInView, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useRef } from "react";

export default function Comp({ x, setInView, num }) {
	const ref = useRef(null);
	const isInView = useInView(ref);

	useEffect(() => {
		if (isInView) {
			setInView(num);
		}
	}, [isInView]);

	return (
		<motion.div
			animate={{ x }}
			transition={{ duration: 0.3 }}
			className="el"
			key={num}
		>
			<div ref={ref}>{num}</div>
		</motion.div>
	);
}
