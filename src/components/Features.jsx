export default function Features() {
	return (
		<div className="py-32 flex flex-col gap-20 items-center bg-primary-content">
			<div className=" w-[80%] flex flex-wrap gap-20 justify-between">
				<p className="text-4xl font-black max-w-72">
					Drive Into Adventure: Buy Your <span className="text-primary">Dream Car</span> Today!
				</p>
				<div>
					<p className="max-w-96">
						Bugatti epitomizes automotive excellence, merging
						precision with passion in every creation. With an
						illustrious heritage and relentless pursuit of
						perfection, Bugatti crafts iconic luxury vehicles that
						redefine automotive standards.
					</p>
					<button className="btn btn-primary mt-5 shadow-primary">
						Learn More &rarr;
					</button>
				</div>
			</div>
			<div className="carousel w-[80%] rounded-2xl">
				<div id="slide1" className="carousel-item relative w-full">
					<img src="./bugatti1.jpg" className="w-full" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide4" className="btn btn-circle">
							❮
						</a>
						<a href="#slide2" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<img src="./bugatti2.jpg" className="w-full" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide1" className="btn btn-circle">
							❮
						</a>
						<a href="#slide3" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide3" className="carousel-item relative w-full">
					<img src="./bugatti3.jpg" className="w-full" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide2" className="btn btn-circle">
							❮
						</a>
						<a href="#slide4" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide4" className="carousel-item relative w-full">
					<img src="./bugatti2.jpg" className="w-full" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide3" className="btn btn-circle">
							❮
						</a>
						<a href="#slide1" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
