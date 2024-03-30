export default function Hero() {
    return (
		<>
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage: "url(./bugatti.jpg)",
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
						<p className="mb-5">
							From the iconic exteriors that exude timeless elegance to
							the sumptuous interiors adorned with the finest
							materials, each Bugatti is a testament to
							uncompromising craftsmanship and opulence.
						</p>
						<button className="btn btn-primary">Explore Features</button>
					</div>
				</div>
			</div>
		</>
	);
}