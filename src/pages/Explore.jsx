// src/pages/Explore.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Explore() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mobileNavBarVisible, setMobileNavBarVisible] = useState(false);

  useEffect(() => {
    const fetchAllMembers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "members"));
        const membersData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMembers(membersData);
      } catch (error) {
        console.error("Error fetching members:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllMembers();
  }, []);

  return (
    <>
      <NavBar activeLink="Explore" onToggleMobileNavBar={() => setMobileNavBarVisible(!mobileNavBarVisible)} />
      <main className="bg-black text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-20">
          {/* Header with back button */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition">
              <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">
              All Members <span className="text-rose-400">({members.length})</span>
            </h1>
            <div className="w-20" /> {/* spacer for alignment */}
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 border-4 border-rose-400 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {members.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.01 }}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-gray-900"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          )}
        </div>
        <Footer />
      </main>
    </>
  );
}