import Section from "./Animate";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MotionButton from "./MotionButton";
export default function Hero({title, body}) {
    return (
		<Section>
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage: "url(./bugatti.jpg)",
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">
							{title || "Hello there"}
						</h1>
						<p className="mb-5">
							{body ||
								`From the iconic exteriors that exude timeless elegance to
							the sumptuous interiors adorned with the finest
							materials, each Bugatti is a testament to
							uncompromising craftsmanship and opulence.`}
						</p>
						{!title && (
							<MotionButton>
								<button className="btn btn-primary">
									<Link to={"/features"}>
										Explore Features
									</Link>
								</button>
							</MotionButton>
						)}
					</div>
				</div>
			</div>
		</Section>
	);
}

Hero.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
}