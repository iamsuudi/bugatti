import { useRef } from "react";
import { useInView } from "framer-motion";
import PropTypes from 'prop-types';

export default function Section({ children, className }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });

	return (
		<section ref={ref} className={className}>
			<div
				style={{
					transform: isInView ? "none" : "translateY(200px)",
					opacity: isInView ? 1 : 0,
					transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
			>
				{children}
			</div>
		</section>
	);
}

Section.propTypes = {
	children: PropTypes.element,
	className: PropTypes.string,
}