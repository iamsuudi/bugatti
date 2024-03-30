import Section from "./Animate";

const months = ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function Stat() {
	return (
		<div className="stats stats-vertical lg:stats-horizontal shadow w-full justify-center gap-10 py-32 bg-base-300 text-base-content">
			<Section>
				<div className="stat w-56">
					<div
						className="stat-figure tooltip tooltip-primary text-primary"
						data-tip="Total bugatties sold in the last month"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="inline-block w-10 h-10 stroke-current"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							></path>
						</svg>
					</div>
					<div className="stat-title">Sales</div>
					<div className="stat-value">31K</div>
					<div className="stat-desc">
						{months[new Date().getMonth()]} 1st -{" "}
						{months[new Date().getMonth() - 1]} 1st
					</div>
				</div>
			</Section>

			<Section>
				<div className="stat w-56">
					<div
						className="stat-figure tooltip tooltip-primary text-primary"
						data-tip="New Customers visit in the last month"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="inline-block w-10 h-10 stroke-current"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
							></path>
						</svg>
					</div>
					<div className="stat-title">New Customers</div>
					<div className="stat-value">4,200</div>
					<div className="stat-desc">↗︎ 400 (22%)</div>
				</div>
			</Section>

			<Section>
				<div className="stat w-56">
					<div
						className="stat-figure tooltip tooltip-primary text-primary"
						data-tip="New Customers registered in the last month"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="inline-block w-10 h-10 stroke-current"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
							></path>
						</svg>
					</div>
					<div className="stat-title">New Registers</div>
					<div className="stat-value">1,200</div>
					<div className="stat-desc">↘︎ 90 (14%)</div>
				</div>
			</Section>
		</div>
	);
}
