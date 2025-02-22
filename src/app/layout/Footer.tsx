import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

export const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__copy">
                    &copy; 2025 by Paulo Wells
                </div>
                <div className="footer__links">
                    <ul className="footer__links__list">
                        <li className="footer__links__list__item">
                            <Link href={"https://github.com/wellspr"}>
                                <IconBrandGithub />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}