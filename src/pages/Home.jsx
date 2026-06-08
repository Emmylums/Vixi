import { faArrowRight, faBoltLightning, faCompass, faGem, faLocationArrow, faShield, faStar } from "@fortawesome/free-solid-svg-icons";
// import bg from "../assets/car_logo.jpg";
import { useState } from "react";
import NavBar from "../components/NavBar";
// import MobileNavBar from "../components/MobileNavBar";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home(){
    const [mobileNavBarVisible, setMobileNavBarVisible] = useState(false);

    return(
        <>
            <NavBar activeLink="Match" onToggleMobileNavBar={() => setMobileNavBarVisible(!mobileNavBarVisible)}/>
            
            {/* <MobileNavBar isVisible={mobileNavBarVisible} activeLink="Home" onClose={() => setMobileNavBarVisible(false)} className="sm:col-span-1 pt-7"/> */}
            

            <div>
                <main>
                    <section   className="relative h-screen bg-center bg-cover">
                        <div className="absolute inset-0 h-screen opacity-60 bg-black" />
                        <div className="relative flex items-center justify-center h-full">
                            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0 }}>
                                <div className="p-10 text-center text-white mt-10 flex flex-col items-center justify-center">
                                    <div className="text-sm landscape:text-xs landscape:lg:text-sm w-1/3.5 font-semibold rounded-full py-2.5 px-5 bg-white/5 backdrop-blur-xl shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] border border-white/50 font-display4">
                                        <FontAwesomeIcon icon={faStar} className="text-yellow-500 pr-0.5"/> Trusted by 10,000+ Customers
                                    </div>
                                    <div className="pt-5 font-display4">
                                        <h2 className="text-6xl md:text-8xl landscape:text-5xl landscape:lg:text-8xl tracking-tighter font-black">Experience Your <br /> Ideal Ride</h2>
                                        
                                        <h4 className="pt-2 landscape:text-xs landscape:md:text-sm sm:text-xl sm:px-[15%] sm:pt-5 md:text-2xl landscape:lg:pt-7 landscape:lg:text-lg text-gray-300 hover:text-white">Top-tier vehicles, clear pricing, and outstanding service—your path to luxury begins here.</h4>
                                    </div>
                                    <div className="space-x-5 mt-9">
                                        <Link to="/shop">
                                            <button className="hover:cursor-pointer bg-white text-black hover:text-white hover:bg-white/5 hover:backdrop-blur-xl hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] border border-white px-3 md:px-10 py-3.5 rounded-xl font-semibold font-display4 text-sm md:text-base">Browse Collection <FontAwesomeIcon icon={faArrowRight} className="text-xs"/></button>
                                        </Link>
                                        <Link to="/about">
                                            <button className="bg-white/5 backdrop-blur-xl shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] border border-white hover:text-black hover:bg-white px-3 md:px-10 py-3.5 rounded-xl hover:cursor-pointer font-semibold font-display4 text-sm md:text-base">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>



                    {/* Bridge Section */}
                    <section className="bg-black text-white font-display4 px-30 md:px-20 landscape:md:px-20 landscape:lg:px-30 py-7">
                        <div className="flex flex-col space-y-15 md:flex-row md:space-y-0 justify-between">
                            <div className="text-center">
                                <p className="text-4xl font-bold">500+</p>
                                <p className="text-sm text-white/75">Premium Vehicles</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold">10K+</p>
                                <p className="text-sm text-white/75">Happy Customers</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold">10+</p>
                                <p className="text-sm text-white/75">Years Experience</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold">95%</p>
                                <p className="text-sm text-white/75">Satisfaction Rate</p>
                            </div>
                        </div>
                    </section>

                    {/* Second Section  */}
                    <section className="bg-black/92 text-white font-display4 px-10 py-20">
                        <div className="text-center">
                            <h2 className="text-5xl font-bold">Why Mossati Stands Out</h2>
                            <p className="text-white/75 pt-4 text-lg px-10 landscape:md:px-50">Elevate your experience with exceptional service and a carefully curated selection.</p>
                        </div>
                        <div className="flex flex-col space-y-15 lg:flex-row lg:space-y-0 justify-between mt-20">
                            <div className="text-center lg:w-1/3">
                                <FontAwesomeIcon icon={faGem} className="text-4xl bg-linear-to-br from-black via-gray-800k to-gray-700 p-5.5 rounded-xl"/>
                                <h3 className="text-xl font-bold tracking-wide mt-7">Elite Collection</h3>
                                <p className="text-sm px-10 md:px-30 landscape:md:px-50 landscape:lg:px-10 mt-3">An exclusive collection of luxury, sports, and electric vehicles sourced from renowned manufacturers worldwide</p>
                            </div>
                            <div className="text-center lg:w-1/3">
                                <FontAwesomeIcon icon={faShield} className="text-4xl bg-linear-to-br from-black via-gray-800k to-gray-700 p-5.5 rounded-xl"/>
                                <h3 className="text-xl font-bold tracking-wide mt-7">Seamless & Secure Transactions</h3>
                                <p className="text-sm px-10 md:px-30 landscape:md:px-50 landscape:lg:px-10 mt-3">Secure, bank-grade payments with flexible options—use your balance or pay on delivery.</p>
                            </div>
                            <div className="text-center lg:w-1/3">
                                <FontAwesomeIcon icon={faBoltLightning} className="text-4xl bg-linear-to-br from-black via-gray-800 to-gray-700 p-5.5 rounded-xl"/>
                                <h3 className="text-xl font-bold tracking-wide mt-7">Trusted Expert Assistance</h3>
                                <p className="text-sm px-10 md:px-30 landscape:md:px-50 landscape:lg:px-10 mt-3">24/7 access to a dedicated team of automotive specialists to guide your purchase.</p>
                            </div>
                        </div>
                    </section>


                    {/* Third Section */}
                    <section className="bg-black/70 text-white font-display4 px-10 py-20">
                        <div className="text-center">
                            <h2 className="text-5xl font-bold">A Trusted Choice for Thousands</h2>
                            <p className="text-white/75 pt-4 text-lg px-10 landscape:md:px-50">Genuine feedback from happy clients.</p>
                        </div>
                        <div className="flex flex-col space-y-15 lg:flex-row lg:space-y-0 landscape:lg:space-x-10 justify-between mt-20 select-none">
                            <div className="px-10 md:px-30 landscape:md:px-50 landscape:lg:px-10 py-10 rounded-xl bg-white/5 backdrop-blur-xl shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] border border-white hover:text- hover:bg-white/7 lg:w-1/3">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500 pr-2"/>
                                ))}
                                <p className="text-base mt-3">"Incredible service—found my perfect Mercedes quickly, and the delivery was flawless and professional."</p>
                                <div className="flex space-x-5 items-center mt-3">
                                    <p className="p-3 bg-black text-white rounded-full font-bold tracking-widest">VH</p>
                                    <div>
                                        <p className="font-semibold tracking-wider">Veronica Howard</p>
                                        <p className="text-xs pt-1 tracking-wide">Mercedes S-Class Owner</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-10 md:px-30 landscape:md:px-50 landscape:lg:px-10 py-10 rounded-xl bg-white/5 backdrop-blur-xl shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] border border-white hover:text- hover:bg-white/7 lg:w-1/3">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500 pr-2" />
                                ))}
                                <p className="text-base mt-3">"The most straightforward car-buying experience I’ve had. Transparent pricing and excellent support throughout. My Range Rover is perfect."</p>
                                <div className="flex space-x-5 items-center mt-3">
                                    <p className="p-3 bg-black text-white rounded-full font-bold tracking-widest">OH</p>
                                    <div>
                                        <p className="font-semibold tracking-wider">Owen Hansbury</p>
                                        <p className="text-xs pt-1 tracking-wide">Range Rover P400 Owner</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-10 md:px-30 landscape:md:px-50 landscape:lg:px-10 py-10 rounded-xl bg-white/5 backdrop-blur-xl shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] border border-white hover:text- hover:bg-white/7 lg:w-1/3">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500 pr-2" />
                                ))}
                                <p className="text-base mt-3">"A seamless buying experience with full pricing transparency and great customer support. Couldn’t be happier with my new Tesla."</p>
                                <div className="flex space-x-5 items-center mt-3">
                                    <p className="p-3 bg-black text-white rounded-full font-bold tracking-widest">EJ</p>
                                    <div>
                                        <p className="font-semibold tracking-wider">Grover James</p>
                                        <p className="text-xs pt-1 tracking-wide">Tesla Cybertruck Owner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Fourth Section */}
                    <section style={{backgroundImage: "radial-gradient(circle at 10px 10px, gray 0.9px, transparent 0px)", backgroundSize: "40px 40px"}} className="bg-black/70 text-white font-display4 px-10 py-20">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faCompass} className="text-6xl pb-10"/>
                            <h2 className="text-5xl font-bold">Start Your Journey to the Perfect Car</h2>
                            <p className="text-white/75 pt-4 text-lg px-10 landscape:md:px-50">Genuine feedback from happy clients.</p>
                        </div>
                        <div className="flex justify-center items-center space-x-5 mt-9">
                            <Link to="/shop">
                                <button className="hover:cursor-pointer bg-white text-black hover:text-white hover:bg-white/5 hover:backdrop-blur-xl hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] border border-white px-3 md:px-10 py-3.5 rounded-xl font-semibold font-display4 text-sm md:text-base">View Our Collection <FontAwesomeIcon icon={faArrowRight} className="text-xs"/></button>
                            </Link>
                            <Link to="/contact">
                                <button className="bg-white/5 backdrop-blur-xl shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] border border-white hover:text-black hover:bg-white px-3 md:px-10 py-3.5 rounded-xl hover:cursor-pointer font-semibold font-display4 text-sm md:text-base">Contact Sales</button>
                            </Link>
                        </div>
                    </section>


                    {/* Footer */}
                    <Footer/>
                </main>
            </div>
        </>
    )
}