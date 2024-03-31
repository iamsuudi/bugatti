import features from "../features";
import Section from "./Animate";
import PropTypes from "prop-types";

const Card = ({ feature, index }) => {
	return (
		<div className="card lg:card-side glass shadow-xl">
			<figure>
				<img src={`bugatti${index}.jpg`} alt="Album" className="" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{feature.feature}</h2>
				<p>{feature.description}</p>
			</div>
		</div>
	);
};

export default function About() {
	// console.log(features);
	return (
		<div className=" bg-base-100">
			<div className="w-[90%] max-w-screen-xl mx-auto py-40 flex flex-col items-center gap-32">
				{/* <Hero /> */}
				{features.map((feature, index) => (
					<Section className={"max-w-[1024px]"} key={index}>
						<Card feature={feature} index={index + 1} />
					</Section>
				))}
			</div>
		</div>
	);
}

Card.propTypes = {
	feature: PropTypes.object,
	index: PropTypes.number,
};
