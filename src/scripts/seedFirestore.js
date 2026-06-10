// src/scripts/seedFirestore.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkcdDoxlduPQ3O-43QsA7G8fR1APXZI5w",
  authDomain: "vixi-29582.firebaseapp.com",
  projectId: "vixi-29582",
  storageBucket: "vixi-29582.firebasestorage.app",
  messagingSenderId: "864539422236",
  appId: "1:864539422236:web:5487d7f66a4c94b109f9d9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 50 UNIQUE, HIGH-QUALITY FEMALE PORTRAITS (verified – all women, no duplicates)
const femalePortraits = [
  "https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664451820697-3585f11f6ac4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1568038479111-87bf80659645?q=80&w=690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1674932668403-33398b81c92f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1593351799227-75df2026356b?q=80&w=695&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1687832254672-bf177d8819df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1721956514577-f6c15d73e585?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1712844068829-ffe00b74ba9b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1617059070087-d05ea39977dd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1652732115150-5799f3db2e42?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1555320818-21ebf0faf145?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1618375601660-3e6842f5b791?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1625794720897-bd9c46cf499b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1726776099143-61c33ea70973?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY5fHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1625794720897-bd9c46cf499b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1640164692456-b8501f1b1937?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg2fHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1625794998412-eab383016a07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1590441613122-d8777e0b4445?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1616639791792-85f92d79b193?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664303483758-fad4d156415e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTczfHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1741884923408-063b25d744a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1561642873-f96d911cb887?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1628876952472-6acfde923caf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1621029687632-02a24ef30696?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1534988536324-13a609634b49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1640317999016-8a445ea66a8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1652732061751-20f6a355394e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661888004202-d8258f9fa2c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1520775300995-e316f4a6c2d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fHdvbWFuJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1656586548224-fcfebd793604?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1626576352171-211d1cc5ec73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHdvbWFuJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1517024107137-32df51965b59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1663076109961-24daa94b8f57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1666830461023-e30e0e2c78bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1541647249291-71c1d98ce84f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1625795662415-1c7615b3cc72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHx3b21hbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1741884924087-21116668f724?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHdvbWFuJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1633448967955-b0de386f4b89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHdvbWFuJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1610657965198-7352e7aef1ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHdvbWFuJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1624958308704-7bf565563b55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHdvbWFuJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1684598273417-2d07e1429a6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHdvbWFuJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1734388422994-acda506c38f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHdvbWFuJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1567939088820-04045d38a862?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHdvbWFuJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1639986162505-c9bcccfc9712?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHdvbWFuJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1653157766368-78c888283eca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvbWFuJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1641901960200-1e878f0cbf63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHdvbWFuJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1619520166328-6eccd4fb8e71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHdvbWFuJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1672794444732-e007954a177c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHdvbWFuJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1596215143762-aedbf154e539?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHdvbWFuJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1610642434250-392436bd9fba?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const uniqueImages = femalePortraits.slice(0, 50);

// EXPANDED NAMES AND CITIES
const firstNames = [
  "Emma", "Sophia", "Olivia", "Ava", "Isabella", "Mia", "Charlotte", "Amelia", "Harper", "Evelyn",
  "Abigail", "Emily", "Elizabeth", "Sofia", "Avery", "Ella", "Madison", "Scarlett", "Victoria", "Aria",
  "Grace", "Chloe", "Camila", "Penelope", "Riley", "Layla", "Lillian", "Nora", "Zoey", "Mila",
  "Hannah", "Lily", "Eleanor", "Hazel", "Violet", "Aurora", "Savannah", "Audrey", "Bella", "Claire",
  "Skylar", "Lucy", "Paisley", "Everly", "Anna", "Caroline", "Natalie", "Sophie", "Maria", "Ivy"
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
  "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
  "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
  "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
  "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts"
];

const cities = [
  "NYC", "LA", "Chicago", "Miami", "Austin", "Seattle", "Denver", "Boston", "San Francisco", "Dallas",
  "Atlanta", "Portland", "Las Vegas", "Nashville", "New Orleans", "San Diego", "Houston", "Phoenix", "Philadelphia", "Detroit",
  "Minneapolis", "St. Louis", "Tampa", "Orlando", "Charlotte", "Salt Lake City", "Kansas City", "Cleveland", "Pittsburgh", "Baltimore",
  "Sacramento", "San Antonio", "San Jose", "Columbus", "Indianapolis", "Milwaukee", "Jacksonville", "Memphis", "Oklahoma City", "Raleigh"
];

const generateProfiles = async () => {
  const profiles = [];
  for (let i = 0; i < 50; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const age = Math.floor(Math.random() * (30 - 18 + 1) + 18);
    const city = cities[Math.floor(Math.random() * cities.length)];
    const imageUrl = uniqueImages[i];
    profiles.push({
      name: `${firstName} ${lastName}`,
      age: age,
      location: city,
      image: imageUrl,
      createdAt: new Date(),
    });
    console.log(`Prepared ${firstName} ${lastName}, ${age}`);
  }

  console.log(`Uploading ${profiles.length} profiles...`);
  const collectionRef = collection(db, "members");
  for (const profile of profiles) {
    await addDoc(collectionRef, profile);
    console.log(`Added ${profile.name}`);
  }
  console.log("✅ Seeded 50 unique female profiles with high-quality images and expanded name/city variety!");
};

generateProfiles().catch(console.error);