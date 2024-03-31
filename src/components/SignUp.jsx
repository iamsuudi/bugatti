import MotionButton from "./MotionButton";

export default function SignUp() {
	return (
		<div className="hero">
			<div className="hero-content flex-col gap-10 lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Sign Up</h1>
					<p className="py-6 max-w-96">
						Stay in the know and be the first to access exclusive
						updates, insider news, and special offers by signing up
						for our newsletter. Join our community of enthusiasts
						and enthusiasts to elevate your experience with us.
					</p>
				</div>
				<div className="card shrink-0 w-full max-w-sm shadow-2xl">
					<form className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Full Name</span>
							</label>
							<input
								type="text"
								placeholder="full name"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="username@site.com"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control mt-6">
							<MotionButton>
								<button className="btn btn-primary">
									Sign UP
								</button>
							</MotionButton>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
