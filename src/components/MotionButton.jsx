import { motion } from "framer-motion";
import PropTypes from 'prop-types';

export default function MotionButton({children}) {
    return (
		<motion.div
			className="box"
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.9 }}
			transition={{
				type: "spring",
				stiffness: 400,
				damping: 17,
			}}
		>
			{children}
		</motion.div>
	);
}

MotionButton.propTypes = {
    children: PropTypes.element,
}