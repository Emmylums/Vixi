import { faCar, faCopyright, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import {sendWhatsAppMessage} from "../components/whatsappLink";

function Footer(){
    return (
        <>
            <footer className="bg-black text-white px-7 pt-10 pb-4 flex flex-col">
                <section className="flex flex-col lg:flex-row lg:items-center text-base/loose gap-7 pb-10">
                    <section className="z-30 md:px-5">
                        <div className="flex items-baseline">
                            <FontAwesomeIcon icon={faCar}/>
                            <h2 className="font-display2 font-semibold pb-2 md:text-center md:text-xl tracking-widest pl-3">Mossati</h2>
                        </div>
                        <p className="text-sm font-display4 text-nowrap">Your premium car dealership experience</p>
                    </section>
                    <section className="z-30 font-display4 flex flex-col md:flex-row justify-between w-full space-y-14 md:space-y-0">
                        <div className="md:w-1/3 md:px-5">
                            <h5 className="font-semibold mb-5 text-lg">Quick Links</h5>
                            <nav>
                                <Link to="/">
                                    <p>Home</p>
                                </Link>
                                <Link  to="/faq">
                                    <p>FAQ</p>
                                </Link>
                                <Link to="/shop">
                                    <p>Shop</p>
                                </Link>
                                <Link to="/about">
                                    <p>About</p>
                                </Link>
                                <Link to="/contact">
                                    <p>Contact</p>
                                </Link>
                            </nav>
                        </div>
                        <div className="md:w-1/3 md:px-5">
                            <h5 className="font-semibold mb-5 text-lg">Account</h5>
                            <nav>
                                <Link to="/login">
                                    <p>Sign In</p>
                                </Link>
                                <Link to="/register">
                                    <p>Register</p>
                                </Link>
                                <Link to="/user/dashboard">
                                    <p>Dashboard</p>
                                </Link>
                            </nav>
                        </div>
                        <div className="md:w-1/3 md:px-5">
                            <h5 className="font-semibold mb-5 text-lg">Contact</h5>
                            <nav>
                                <Link>
                                    <p>info@mossati.com</p>
                                </Link>
                                <Link>
                                    <p>+1 (555) 123-4567</p>
                                </Link>
                                <Link>
                                    <p>Los Angeles, CA 90001</p>
                                </Link>
                            </nav>
                        </div>
                    </section>
                </section>

                <section className="z-30 text-white flex justify-center items-center border-t border-white/20 pt-10 pb-6 font-display4 ">
                    <p className="tracking-wider text-sm font-semibold"><FontAwesomeIcon icon={faCopyright}/> 2026 Mossati. All rights reserved.</p>
                </section>
            </footer>
        </>
    )
};

export default Footer;