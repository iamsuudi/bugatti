import Section from "./Animate";

export default function Features() {
	return (
		<div className="flex flex-col items-center justify-center gap-32 py-32">
			<Section>
				<div className="card w-[90%] max-w-[35rem] bg-base-100 shadow-xl">
					<div className="card-body gap-7">
						<p className="text-4xl font-black">
							Drive Into Adventure: Buy Your <br />
							<span className="text-primary">Dream Car</span>{" "}
							Today!
						</p>
						<p className="max-w-lg">
							Join us as we invite you to experience the epitome
							of automotive luxury and innovation. Discover the
							legacy, ignite your passion, and become part of the
							Bugatti family today
						</p>
						<div className="card-actions justify-start">
							<button className="btn btn-primary">Explore Features</button>
						</div>
					</div>
				</div>
			</Section>
			<Section>
				<div className=" w-[90%] max-w-screen-xl mx-auto">
					<div className="carousel w-full rounded-box">
						<div id="item1" className="carousel-item w-full">
							<div className="card w-full bg-base-300 shadow-xl">
								<div className="card-body">
									<h2 className="card-title">
										Unrivaled Performance
									</h2>
									<p>
										Powered by high-output engines that
										deliver astonishing horsepower and
										torque
									</p>
								</div>
								<figure>
									<img
										src="./bugatti1.jpg"
										className="w-full"
									/>
								</figure>
							</div>
						</div>
						<div id="item2" className="carousel-item w-full">
							<div className="card w-full bg-base-300 shadow-xl">
								<div className="card-body">
									<h2 className="card-title">
										Exquisite Design
									</h2>
									<p>
										From the iconic horseshoe grille to the
										sleek lines and curves
									</p>
								</div>
								<figure>
									<img
										src="./bugatti2.jpg"
										className="w-full"
									/>
								</figure>
							</div>
						</div>
						<div id="item3" className="carousel-item w-full">
							<div className="card w-full bg-base-300 shadow-xl">
								<div className="card-body">
									<h2 className="card-title">
										Luxurious Interiors
									</h2>
									<p>
										Fine leather, carbon fiber, and exotic
										woods adorn every surface
									</p>
								</div>
								<figure>
									<img
										src="./bugatti3.jpg"
										className="w-full"
									/>
								</figure>
							</div>
						</div>
						<div id="item4" className="carousel-item w-full">
							<div className="card w-full bg-base-300 shadow-xl">
								<div className="card-body">
									<h2 className="card-title">
										Advanced Technology
									</h2>
									<p>
										Adaptive suspension systems to advanced
										driver assistance features
									</p>
								</div>
								<figure>
									<img
										src="./bugatti4.jpg"
										className="w-full"
									/>
								</figure>
							</div>
						</div>
					</div>
					<div className="flex justify-center w-full py-2 gap-2">
						<a href="#item1" className="btn btn-xs">
							1
						</a>
						<a href="#item2" className="btn btn-xs">
							2
						</a>
						<a href="#item3" className="btn btn-xs">
							3
						</a>
						<a href="#item4" className="btn btn-xs">
							4
						</a>
					</div>
				</div>
			</Section>
		</div>
	);
}
