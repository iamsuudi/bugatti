import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Section({ children, className }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });

	return (
		<section ref={ref} className={className}>
			<div
				style={{
					transform: isInView ? "none" : "translateX(-200px)",
					opacity: isInView ? 1 : 0,
					transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
			>
				{children}
			</div>
		</section>
	);
}