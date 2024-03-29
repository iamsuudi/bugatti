export default function Detail() {
	return (
		<div className="py-32 px-10 flex flex-col gap-32 justify-center items-center">
			<div className="w-fit flex flex-col items-center">
				<h3 className="text-3xl font-black w-fit text-center">
					How It <span className="text-primary">Works</span>
				</h3>
				<p className="w-fit">Buy With Following 3 Working Steps</p>
			</div>
			<div className="w-full flex flex-wrap justify-center items-center gap-24">
				<ul className="steps steps-vertical">
					<li className="step step-primary h-56 block">
						<div className="collapse bg-base-200">
							<input type="checkbox" />
							<div className="collapse-title text-xl font-medium">
								Choose Location
							</div>
							<div className="collapse-content">
								<p>Choose Your Location And Nearest Store</p>
							</div>
						</div>
					</li>
					<li className="step step-primary">
						<div className="collapse bg-base-200">
							<input type="checkbox" />
							<div className="collapse-title text-xl font-medium">
								Piack Up Date
							</div>
							<div className="collapse-content">
								<p>
									Select Your Pick Up Date And Time To Book
									Your Car
								</p>
							</div>
						</div>
					</li>
					<li className="step step-primary">
						<div className="collapse bg-base-200">
							<input type="checkbox" />
							<div className="collapse-title text-xl font-medium">
								Buy Your Car
							</div>
							<div className="collapse-content">
								<p>
									Book Your Car And We Will Deliver Directly
									To You
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}
