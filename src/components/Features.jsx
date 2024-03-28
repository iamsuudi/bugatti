export default function Features() {
	return (
		<div className="flex flex-col items-center justify-center pb-32">
			<p className="text-4xl font-black max-w-64 mb-24">
				Drive Into Adventure: Buy Your{" "}
				<span className="text-primary">Dream Car</span> Today!
			</p>
			<div className="carousel w-[90%] max-w-screen-xl rounded-3xl">
				<div id="item1" className="carousel-item w-full relative">
					<img src="./bugatti1.jpg" className="w-full" />
					<div className="absolute w-full h-full flex items-start justify-center pt-0 md:pt-10">
						<div className="card md:scale-100 scale-50 max-w-96 max-h-72 text-primary-content glass">
							<div className="card-body">
								<h2 className="card-title">
									Unparalleled Performance
								</h2>
								<p>
									Exceptional performance, boasting powerful
									engines, advanced aerodynamics
								</p>
								<div className="card-actions justify-end">
									<button className="btn btn-primary">
										Read Detail &rarr;
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="item2" className="carousel-item w-full relative">
					<img src="./bugatti2.jpg" className="w-full" />
					<div className="absolute w-full h-full flex items-start justify-center pt-0 md:pt-10">
						<div className="card md:scale-100 scale-50 max-w-96 max-h-72 text-primary-content glass">
							<div className="card-body">
								<h2 className="card-title">
									Exquisite Craftsmanship
								</h2>
								<p>
									Meticulously handcrafted with the finest
									materials and attention to detail. From the
									luxurious interiors to the flawless exterior
									finishes
								</p>
								<div className="card-actions justify-end">
									<button className="btn btn-primary">
										Read Detail &rarr;
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="item3" className="carousel-item w-full relative">
					<img src="./bugatti3.jpg" className="w-full" />
					<div className="absolute w-full h-full flex items-start justify-center pt-0 md:pt-10">
						<div className="card md:scale-100 scale-50 max-w-96 max-h-72 text-primary-content glass">
							<div className="card-body">
								<h2 className="card-title">
									Innovative Engineering
								</h2>
								<p>
									Leveraging state-of-the-art technologies and
									groundbreaking design concepts to optimize
									performance, handling, and safety
								</p>
								<div className="card-actions justify-end">
									<button className="btn btn-primary">
										Read Detail &rarr;
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="item4" className="carousel-item w-full relative">
					<img src="./bugatti4.jpg" className="w-full" />
					<div className="absolute w-full h-full flex items-start justify-center pt-0 md:pt-10">
						<div className="card md:scale-100 scale-50 max-w-96 max-h-72 text-primary-content glass">
							<div className="card-body">
								<h2 className="card-title">Iconic Design</h2>
								<p>
									Characterized by sleek lines, distinctive
									curves, and aerodynamic shapes that not only
									enhance performance but also embody the
									brand&qous;s heritage and vision for automotive
									excellence
								</p>
								<div className="card-actions justify-end">
									<button className="btn btn-primary">
										Read Detail &rarr;
									</button>
								</div>
							</div>
						</div>
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
	);
}
