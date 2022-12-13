import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Product Details",
		},
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon }) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="/"
						>
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;