import { faHeart, faEnvelope, faPhone, faMapMarkerAlt, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <footer className="bg-black text-white/80 px-6 md:px-12 pt-12 pb-6">
            <div className="max-w-6xl mx-auto">
                {/* Main footer content - centered on mobile, two columns on desktop */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 pb-8 border-b border-white/10">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                            <FontAwesomeIcon icon={faHeart} className="text-rose-400 text-xl" />
                            <h2 className="font-display2 font-bold text-2xl tracking-wide text-white">Vixi</h2>
                        </div>
                        <p className="text-sm font-display4 text-white/60 max-w-xs mx-auto md:mx-0">
                            Find your perfect match in a safe, welcoming space. Love is just a click away.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="text-center md:text-right">
                        <h5 className="font-semibold text-md mb-4 text-white/70">Get in touch</h5>
                        <ul className="space-y-2 text-sm font-display4 text-white/60">
                            <li className="flex items-center justify-center md:justify-end gap-2">
                                <FontAwesomeIcon icon={faEnvelope} className="w-4 text-rose-400" />
                                <span>hello@vixi.com</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-end gap-2">
                                <FontAwesomeIcon icon={faPhone} className="w-4 text-rose-400" />
                                <span>+1 (888) 456-7890</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-end gap-2">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 text-rose-400" />
                                <span>123 Romance Lane, Austin, TX 78701</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright row */}
                <div className="text-center text-white/40 text-xs pt-6 font-display4">
                    <FontAwesomeIcon icon={faCopyright} className="mr-1" /> 2026 Vixi. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;