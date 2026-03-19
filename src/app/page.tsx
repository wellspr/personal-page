import profilePic from "@/data/profile_pics/20241222_143920.jpg";
import Image from "next/image";

export default function Page() {
	return (
		<div className="homepage">

			<section id="hero" className="hero">
				<div className="headline">
					<h2>Hi. My name is Paulo</h2>
				</div>

				<div className="picture">
					<Image src={profilePic} alt="Profile Pic" fill sizes="100%" />
				</div>

				<div className="title">
					<h3>Web Developer</h3>
				</div>
			</section>

			<section id="content" className="content">
				<nav className="nav">
					<ul className="nav__menu">
						<li className="nav__menu__item">Projects</li>
						<li className="nav__menu__item">CV</li>
						<li className="nav__menu__item">About me</li>
						<li className="nav__menu__item">Contact</li>
					</ul>
				</nav>
			</section>

		</div>
	);
}