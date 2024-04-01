import Section from "../components/Animate";

export default function Contact() {
	return (
		<div className="hero py-52 w-[90%] max-w-screen-xl mx-auto">
			<div className="hero-content flex-col gap-20 lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<img
						src="./bugatti-contact.jpg"
						className="w-full rounded-3xl shadow-2xl"
					/>
				</div>
				<div className="card shrink-0 w-full max-w-sm">
					<div className="flex flex-col gap-10 text-sm w-fit">
						<Section>
							<>
								<h2 className="text-3xl font-black mb-2">
									Company Name
								</h2>
								<p>BUGATTI AUTOMOBILES S.A.S.</p>
							</>
						</Section>
						<Section>
							<>
								<h2 className="text-3xl font-black mb-2">
									Address
								</h2>
								<p>1, Château Saint Jean </p>
								<p>67120 Molsheim, Alsace France</p>
							</>
						</Section>
						<Section>
							<>
								<h2 className="text-3xl font-black mb-2">
									Email Us
								</h2>
								<p>info@bugatti.com</p>
							</>
						</Section>
						<Section>
							<>
								<h2 className="text-3xl font-black mb-2">
									Call Us
								</h2>
								<p>+33 388 04 56 00</p>
							</>
						</Section>
					</div>
				</div>
			</div>
		</div>
	);
}
