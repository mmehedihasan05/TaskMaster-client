import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer items-center p-4 px-8 bg-white shadow-md">
            <aside className="items-center grid-flow-col">
                <p>Copyright © 2023 - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a
                    target="_blank"
                    href="https://www.facebook.com/mmehedihasan05/"
                    icon={BsFacebook}
                    className="text-xl"
                >
                    <BsFacebook></BsFacebook>
                </a>
                <a
                    target="_blank"
                    href="https://www.instagram.com/"
                    icon={BsInstagram}
                    className="text-xl"
                >
                    <BsInstagram></BsInstagram>
                </a>
                <a target="_blank" href="https://twitter.com/" icon={BsTwitter} className="text-xl">
                    <BsTwitter></BsTwitter>
                </a>
                <a
                    target="_blank"
                    href="https://github.com/mmehedihasan05"
                    icon={BsGithub}
                    className="text-xl"
                >
                    <BsGithub></BsGithub>
                </a>
            </nav>
        </footer>
    );
};
export default Footer;
