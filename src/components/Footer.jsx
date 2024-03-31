import MotionButton from "./MotionButton";

export default function Footer() {
    return (
		<div className="flex justify-center items-center py-24 bg-base-200 gap-20 flex-col">
			<footer className="footer p-10 w-[90%] max-w-screen-xl bg-base-200 text-base-content">
				<nav className="gap-3">
					<h6 className="footer-title">Services</h6>
					<a className="link link-hover">Branding</a>
					<a className="link link-hover">Design</a>
					<a className="link link-hover">Marketing</a>
					<a className="link link-hover">Advertisement</a>
				</nav>
				<nav className="gap-3">
					<h6 className="footer-title">Company</h6>
					<a className="link link-hover">About us</a>
					<a className="link link-hover">Contact</a>
					<a className="link link-hover">Jobs</a>
					<a className="link link-hover">Press kit</a>
				</nav>
				<nav className="gap-3">
					<h6 className="footer-title">Legal</h6>
					<a className="link link-hover">Terms of use</a>
					<a className="link link-hover">Privacy policy</a>
					<a className="link link-hover">Cookie policy</a>
				</nav>
				<form>
					<h6 className="footer-title">Newsletter</h6>
					<fieldset className="form-control w-80">
						<label className="label">
							<span className="label-text">
								Enter your email address
							</span>
						</label>
						<div className="join">
							<input
								type="text"
								placeholder="username@site.com"
								className="input input-bordered join-item max-w-72"
							/>
							<MotionButton>
								<button className="btn btn-primary join-item">
									Subscribe
								</button>
							</MotionButton>
						</div>
					</fieldset>
				</form>
			</footer>
			<p className="text-sm">
				Copyright © 2024 -{" "}
				<a
					className="link link-hover"
					href="https://www.linkedin.com/in/iamsuudi"
				>
					Abdulfetah Suudi ↗︎
				</a>
			</p>
			<MotionButton>
				<button className="btn btn-primary fixed bottom-4 right-4 lg:hidden">
					Contact Us
				</button>
			</MotionButton>
		</div>
	);
}