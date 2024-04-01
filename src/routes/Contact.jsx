import Section from "../components/Animate";

export default function Contact() {
    return (
		<div className="py-52 px-20 flex flex-col gap-10 text-sm">
			<Section>
				<>
					<h2 className="text-3xl font-black mb-2">Company Name</h2>
					<p>BUGATTI AUTOMOBILES S.A.S.</p>
				</>
			</Section>
			<Section>
				<>
					<h2 className="text-3xl font-black mb-2">Address</h2>
					<p>1, Château Saint Jean </p>
					<p>67120 Molsheim, Alsace France</p>
				</>
			</Section>
			<Section>
				<>
					<h2 className="text-3xl font-black mb-2">Email Us</h2>
					<p>info@bugatti.com</p>
				</>
			</Section>
			<Section>
				<>
					<h2 className="text-3xl font-black mb-2">Call Us</h2>
					<p>+33 388 04 56 00</p>
				</>
			</Section>
		</div>
	);
}