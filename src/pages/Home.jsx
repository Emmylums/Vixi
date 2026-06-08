import { faHeart, faUsers, faUserPlus, faComments, faShieldHeart, faArrowRight, faVideoCamera, faVideo } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Dummy member data – replace with real API data later
const members = [
    { id: 1, name: "Emma", age: 26, location: "NYC", image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 2, name: "Sophia", age: 24, location: "Chicago", image: "https://randomuser.me/api/portraits/women/3.jpg" },
    { id: 3, name: "Olivia", age: 27, location: "Seattle", image: "https://randomuser.me/api/portraits/women/5.jpg" },
    { id: 4, name: "Ava", age: 25, location: "Denver", image: "https://randomuser.me/api/portraits/women/15.jpg" },
    { id: 5, name: "Isabella", age: 23, location: "Portland", image: "https://randomuser.me/api/portraits/women/9.jpg" },
    { id: 6, name: "Mia", age: 28, location: "Austin", image: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 7, name: "Charlotte", age: 30, location: "Boston", image: "https://randomuser.me/api/portraits/women/4.jpg" },
    { id: 8, name: "Amelia", age: 26, location: "LA", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 9, name: "Liam", age: 29, location: "SF", image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 10, name: "Noah", age: 31, location: "Miami", image: "https://randomuser.me/api/portraits/men/4.jpg" },
];

export default function Home() {
    const [mobileNavBarVisible, setMobileNavBarVisible] = useState(false);
    const [liveUserCount, setLiveUserCount] = useState(1247);

    // Simulate live user counter updating every few seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setLiveUserCount(prev => {
                // Random fluctuation between -5 and +15
                const change = Math.floor(Math.random() * 20) - 5;
                const newCount = prev + change;
                return newCount > 1000 ? newCount : 1247;
            });
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <NavBar activeLink="Home" onToggleMobileNavBar={() => setMobileNavBarVisible(!mobileNavBarVisible)} />
            
            <main className="bg-black text-white">
                {/* Hero Section – Immersive with live counter */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-linear-to-br from-rose-950 via-black to-purple-950 opacity-70" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-pattern.png')] opacity-20" />
                    
                    <div className="relative z-10 text-center px-4 py-20 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 border border-white/20">
                                <FontAwesomeIcon icon={faUsers} className="text-rose-400 text-sm" />
                                <span className="text-sm font-medium">
                                    {liveUserCount.toLocaleString()} people online now
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                                Find Your{" "}
                                <span className="bg-linear-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                                    Perfect Match
                                </span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                                Join a global community of authentic singles looking for real connections. 
                                Smart matching, safe environment, and genuine conversations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/signup">
                                    <button className="bg-linear-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg transition-all flex items-center gap-2 mx-auto">
                                        Video Chat <FontAwesomeIcon icon={faVideo} />
                                    </button>
                                </Link>
                                <Link to="/how-it-works">
                                    <button className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 rounded-full py-4 px-8 text-lg font-medium transition">
                                        How It Works
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Member Grid – Interactive & Dynamic */}
                <section className="py-20 px-4 bg-black">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-3">
                                Meet Members <span className="text-rose-400">Ready to Connect</span>
                            </h2>
                            <p className="text-gray-400 max-w-xl mx-auto">
                                Browse real profiles – start a conversation with someone special today.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                            {members.map((member, index) => (
                                <motion.div
                                    key={member.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-gray-900"
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-white font-semibold text-sm">
                                            {member.name}, {member.age}
                                        </p>
                                        <p className="text-white/70 text-xs">{member.location}</p>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-rose-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                                        <FontAwesomeIcon icon={faHeart} className="text-white text-xs" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link to="/browse">
                                <button className="border border-white/30 hover:bg-white/10 rounded-full py-3 px-8 font-medium transition inline-flex items-center gap-2">
                                    Browse All Members <FontAwesomeIcon icon={faUserPlus} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Features Section – Lightweight with icons */}
                <section className="py-16 px-4 border-t border-white/10 border-b">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between gap-8 text-center md:text-left">
                            <div className="flex-1">
                                <FontAwesomeIcon icon={faComments} className="text-rose-400 text-3xl mb-3" />
                                <h3 className="text-xl font-semibold mb-2">Real Conversations</h3>
                                <p className="text-gray-400 text-sm">Icebreakers and video calls make connecting easy.</p>
                            </div>
                            <div className="flex-1">
                                <FontAwesomeIcon icon={faShieldHeart} className="text-rose-400 text-3xl mb-3" />
                                <h3 className="text-xl font-semibold mb-2">Safe & Verified</h3>
                                <p className="text-gray-400 text-sm">All profiles manually reviewed and verified.</p>
                            </div>
                            <div className="flex-1">
                                <FontAwesomeIcon icon={faUsers} className="text-rose-400 text-3xl mb-3" />
                                <h3 className="text-xl font-semibold mb-2">Global Community</h3>
                                <p className="text-gray-400 text-sm">Connect with singles from over 100 countries.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA – minimal */}
                <section className="py-20 px-4 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to find love?</h2>
                        <p className="text-gray-400 mb-8">Join thousands of happy couples who met on vixi.</p>
                        <Link to="/signup">
                            <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-8 rounded-full transition shadow-lg">
                                Create Free Account
                            </button>
                        </Link>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}