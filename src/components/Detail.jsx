export default function Detail() {
	return (
		<div className="py-32 flex flex-col gap-32 justify-center items-center">
			<div className="w-fit flex flex-col items-center">
				<h3 className="text-3xl font-black w-fit text-center">
					How It <span className="text-primary">Works</span>
				</h3>
				<p className="w-fit">Buy With Following 3 Working Steps</p>
			</div>
			<div className="w-full flex flex-wrap justify-center items-center gap-24">
				<div className="card max-w-80 hover:glass">
					<div className="card-body">
						<h2 className="card-title">Choose Location</h2>
						<p>Choose Your Location And Nearest Store</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">
								See Now!
							</button>
						</div>
					</div>
				</div>
				<div className="card max-w-80 hover:glass">
					<div className="card-body">
						<h2 className="card-title">Pick Up Date</h2>
						<p>Select Your Pick Up Date And Time To Book Your Car</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">
								See Now!
							</button>
						</div>
					</div>
				</div>
				<div className="card max-w-80 hover:glass">
					<div className="card-body">
						<h2 className="card-title">Book Your Car</h2>
						<p>Book Your Car And We Will Deliver Directly To You</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">
								See Now!
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
