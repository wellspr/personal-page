import Link from "next/link";

export const Header = () => {

    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__nav__menu">
                    <li className="header__nav__menu__item">
                        <Link href={"/"}>Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}