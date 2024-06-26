import features from "../features";
import Section from "../components/Animate";
import PropTypes from "prop-types";
import Hero from "../components/Hero";
import SignUp from "../components/SignUp";
import MotionButton from "../components/MotionButton";

const Card = ({ feature, index }) => {
	return (
		<div className="card lg:card-side glass shadow-xl max-h-[30rem]">
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

const Buy = () => {
	return (
		<div className="flex justify-center">
			<div className="card w-[90%] max-w-screen-xl bg-primary text-primary-content">
				<div className="card-body">
					<h2 className="card-title">Bugatti is the future!</h2>
					<p>The most admired AutoMobile in the world</p>
					<div className="card-actions justify-end">
						<MotionButton>
							<button className="btn">Buy Now</button>
						</MotionButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default function About() {
	// console.log(features);
	return (
		<>
			<Hero
				title="Bugatti's Features"
				body={`Each model embodies perfection, boasting unmatched performance, breathtaking design, and opulent interiors. ng. Every curve and detail exude magnificence, evoking awe and admiration.`}
			/>
			<div className="bg-base-100">
				<div className="w-[90%] max-w-screen-xl mx-auto py-40 flex flex-col items-center gap-32">
					{features.map((feature, index) => (
						<Section className={"max-w-[1024px]"} key={index}>
							<Card feature={feature} index={index + 1} />
						</Section>
					))}
				</div>
			</div>
			<div className="py-32 bg-base-300 flex flex-col gap-20">
				<Section>
					<SignUp />
				</Section>
				<Section>
					<Buy />
				</Section>
			</div>
		</>
	);
}

Card.propTypes = {
	feature: PropTypes.object,
	index: PropTypes.number,
};
