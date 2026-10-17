import { RideEvent, GalleryItem, TeamMember, StoryHighlight, InstagramPost, ClubStats } from '../types';

export const CLUB_INFO = {
  name: "MIT-WPU RIDERS",
  tagline: "Ride Beyond Limits. Ride Together.",
  titleBadge: "India's First Official University-Level Riding Club",
  estYear: "2025",
  university: "MIT World Peace University",
  campus: "Kothrud, Pune, Maharashtra 411038, India",
  instagramHandle: "@mitwpu.riders",
  instagramUrl: "https://www.instagram.com/mitwpu.riders?igsi=MTY2YXVoY2YydjFzMw==",
  youtubeUrl: "https://www.youtube.com/@mitwpu.riders",
  email: "riders@mitwpu.edu.in",
  phone: "+91 20 7117 7104",
  logoUrl: "/assets/club/logo-crest.png",
  heroImage: "/assets/club/hero-convoy.jpg",
  awardImage: "/assets/club/bosch-award-ceremony.png",
  safetyImage: "/assets/club/campus-safety.jpg",
  dgrImage: "/assets/club/dgr-event.jpg",
};

export const INITIAL_STATS: ClubStats = {
  ridesCompleted: 28,
  kilometersCovered: 24500,
  ridersConnected: 165,
  eventsConducted: 14,
  safetyScorePercentage: 100,
};

export const STORY_HIGHLIGHTS: StoryHighlight[] = [
  {
    id: "hl-1",
    title: "Achievements",
    imageUrl: "/assets/club/highlight-achievements.png",
    count: 12,
  },
  {
    id: "hl-2",
    title: "Events & DGR",
    imageUrl: "/assets/club/highlight-events.png",
    count: 18,
  },
  {
    id: "hl-3",
    title: "Badge Ceremony",
    imageUrl: "/assets/club/highlight-badge-ceremony.png",
    count: 24,
  },
  {
    id: "hl-4",
    title: "Ride Moments",
    imageUrl: "/assets/club/highlight-ride-moments.png",
    count: 45,
  },
  {
    id: "hl-5",
    title: "1st Ride",
    imageUrl: "/assets/club/highlight-first-ride.png",
    count: 15,
  },
  {
    id: "hl-6",
    title: "Inauguration",
    imageUrl: "/assets/club/highlight-inauguration.png",
    count: 19,
  },
];

export const UPCOMING_RIDE: RideEvent = {
  id: "upcoming-lonavala-sunrise",
  title: "Lonavala Sunrise Expedition 2026",
  category: "Weekend",
  location: "Western Ghats, Maharashtra",
  destination: "Tiger Point, Lonavala",
  date: "Sunday, September 20, 2026",
  distance: "140 km (Round Trip)",
  duration: "5 Hours",
  difficulty: "Moderate",
  shortDescription: "Our signature sunrise chase through the misty twists of Old Mumbai-Pune Highway, culminating at Tiger Point with breakfast and brotherhood.",
  fullDescription: "Join the pack for an early dawn ride starting from MIT-WPU Gate 3. We cruise in staggered formation through Dehu Road, climbing the scenic ghats to Lonavala just as the first sun rays break over the Sahyadris. Includes mandatory pre-ride briefing, roadside safety check, and team breakfast at Lonavala.",
  coverImage: "/assets/club/hero-convoy.jpg",
  galleryImages: [
    "/assets/club/hero-convoy.jpg",
    "/assets/club/campus-safety.jpg",
    "/assets/club/dgr-event.jpg"
  ],
  routeHighlights: [
    "MIT-WPU Campus Flag-off",
    "Chandani Chowk Bypass",
    "Old Pune-Mumbai Highway Cruising",
    "Tiger Point Lonavala Peak Ascent"
  ],
  pace: "70 - 85 km/h (Strict Formation)",
  meetingPoint: "MIT-WPU Campus Gate 3, Paud Road, Pune",
  departureTime: "05:30 AM Sharp (Briefing 05:00 AM)",
  mandatoryGear: [
    "Full-face DOT/ECE certified helmet",
    "Armored textile or leather riding jacket",
    "Motorcycle riding gloves (knuckle protected)",
    "Ankle-height riding shoes or boots",
    "Valid Driving License & Motorcycle RC/Insurance"
  ],
  registrationOpen: true,
};

export const RIDES_AND_EVENTS: RideEvent[] = [
  UPCOMING_RIDE,
  {
    id: "tamhini-monsoon-run",
    title: "Tamhini Ghat Monsoon Thunder",
    category: "Adventure",
    location: "Tamhini Ghat, Mulshi",
    destination: "Plus Valley Viewpoint",
    date: "August 16, 2026",
    distance: "185 km",
    duration: "7 Hours",
    difficulty: "Challenging",
    shortDescription: "Carving wet canyon curves through cascading waterfalls and dense mountain fog in the heart of the Sahyadri mountains.",
    fullDescription: "A test of wet-weather handling, throttle discipline, and formation communication. Riders navigated the scenic water streams and lush green curves of Tamhini with zero incidents.",
    coverImage: "/assets/club/hero-convoy.jpg",
    galleryImages: ["/assets/club/hero-convoy.jpg"],
    routeHighlights: ["Chandani Chowk", "Pirangut Ghat", "Mulshi Dam Vista", "Tamhini Canyon"],
    pace: "55 - 70 km/h",
    meetingPoint: "MIT-WPU Gate 3",
    departureTime: "06:00 AM",
    mandatoryGear: ["Waterproof Riding Gear", "Anti-fog Visor Pinlock", "Tire Depth Check"],
    registrationOpen: false,
  },
  {
    id: "dgr-pune-chapter",
    title: "Distinguished Gentleman's Ride (DGR) Pune",
    category: "Collaborations",
    location: "Pune City",
    destination: "Koregaon Park to MIT-WPU",
    date: "May 19, 2026",
    distance: "45 km",
    duration: "4 Hours",
    difficulty: "Easy",
    shortDescription: "Riding dapper for men's mental health and cancer awareness alongside hundreds of classic cafe racers and scramblers.",
    fullDescription: "MIT-WPU Riders partnered with the global DGR initiative. Dressed in dapper tweed jackets and cravats, our student convoy rode in unison through iconic Pune heritage streets, representing academic excellence and social impact.",
    coverImage: "/assets/club/dgr-event.jpg",
    galleryImages: ["/assets/club/dgr-event.jpg", "/assets/club/bosch-award-ceremony.png"],
    routeHighlights: ["Camp Area", "FC Road", "Koregaon Park", "MIT-WPU Peace Dome"],
    pace: "40 - 50 km/h (Heritage Cruise)",
    meetingPoint: "MIT World Peace Dome",
    departureTime: "07:30 AM",
    mandatoryGear: ["ECE Helmet", "Dapper Formal/Riding Jacket", "Boots"],
    registrationOpen: false,
  },
  {
    id: "bosch-safety-drive",
    title: "Bosch Road Safety Awareness Rally",
    category: "Road Safety",
    location: "Pune Metropolitan Area",
    destination: "Bosch Tech Park to MIT-WPU",
    date: "July 28, 2026",
    distance: "60 km",
    duration: "5 Hours",
    difficulty: "Easy",
    shortDescription: "City-wide road discipline advocacy demonstrating ATGATT principles and formation signaling to thousands of commuters.",
    fullDescription: "In celebration of our national recognition, MIT-WPU Riders led a prominent convoy promoting defensive riding, lane discipline, and the critical importance of proper protective gear.",
    coverImage: "/assets/club/campus-safety.jpg",
    galleryImages: ["/assets/club/campus-safety.jpg", "/assets/club/bosch-award-ceremony.png"],
    routeHighlights: ["Paud Road", "Shivajinagar", "Bhosari Tech Hub", "MIT-WPU Campus"],
    pace: "45 km/h",
    meetingPoint: "MIT-WPU Central Plaza",
    departureTime: "08:00 AM",
    mandatoryGear: ["High-visibility Vest", "Certified Helmet", "Full Riding Gear"],
    registrationOpen: false,
  },
  {
    id: "mahabaleshwar-highland-tour",
    title: "Mahabaleshwar Highland Tour",
    category: "Long Distance",
    location: "Satara District",
    destination: "Arthur's Seat, Mahabaleshwar",
    date: "March 14, 2026",
    distance: "260 km",
    duration: "9 Hours",
    difficulty: "Moderate",
    shortDescription: "An endurance expedition ascending the Khambatki and Pasarni Ghats into the cool strawberry plateaus.",
    fullDescription: "Over 35 motorcycles embarked on a seamless long-haul pack ride. Perfect cornering techniques, fuel stops synchronization, and teamwork in the steep hairpin switchbacks.",
    coverImage: "/assets/club/hero-convoy.jpg",
    galleryImages: ["/assets/club/hero-convoy.jpg"],
    routeHighlights: ["NH48 Highway", "Khambatki Tunnel", "Wai Ghats", "Pasarni Hairpins"],
    pace: "75 - 90 km/h",
    meetingPoint: "MIT-WPU Gate 1",
    departureTime: "05:00 AM",
    mandatoryGear: ["Full Riding Suit/Jacket", "Knee Guards", "Luggage Harness"],
    registrationOpen: false,
  },
  {
    id: "freshers-orientation-campus-run",
    title: "Freshers Orientation & Campus Ride",
    category: "University",
    location: "MIT-WPU Campus, Pune",
    destination: "MIT Peace Dome Circuit",
    date: "August 24, 2026",
    distance: "25 km",
    duration: "3 Hours",
    difficulty: "Easy",
    shortDescription: "Welcoming batch 2026 into India's premier student riding brotherhood with live bike showcases and badge awards.",
    fullDescription: "Hundreds of freshers gathered at the university amphitheatre to experience the roaring spirit of MIT-WPU Riders. Showcasing sportsbikes, tourers, cruisers, and interactive gear exhibitions.",
    coverImage: "/assets/club/post-freshers.png",
    galleryImages: ["/assets/club/post-freshers.png", "/assets/club/bosch-award-ceremony.png"],
    routeHighlights: ["MIT Peace Dome", "Engineering Quad", "Paud Road Loop"],
    pace: "30 - 40 km/h",
    meetingPoint: "MIT Amphitheatre",
    departureTime: "04:30 PM",
    mandatoryGear: ["Helmet", "Riding Shoes", "MIT ID Card"],
    registrationOpen: false,
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Official Bosch & Radon Riders Award",
    category: "Events",
    imageUrl: "/assets/club/bosch-award-ceremony.png",
    date: "August 2026",
    location: "MIT-WPU Pune",
    caption: "Honoured with India's 1st Institute-Level Riding Club Award presented by Bosch & Radon Riders."
  },
  {
    id: "gal-2",
    title: "Dawn Convoy in the Sahyadris",
    category: "Rides",
    imageUrl: "/assets/club/hero-convoy.jpg",
    date: "2026",
    location: "Lonavala - Tamhini Ghat",
    caption: "Pack riding at sunrise. Brotherhood, precision throttle control, and sheer passion."
  },
  {
    id: "gal-3",
    title: "Distinguished Gentleman's Ride",
    category: "Events",
    imageUrl: "/assets/club/dgr-event.jpg",
    date: "May 2026",
    location: "Pune Chapter",
    caption: "Riding dapper for prostate cancer and men's health awareness. Over 80 riders in classic attire."
  },
  {
    id: "gal-4",
    title: "Campus Gate Safety Inspection",
    category: "Bikes",
    imageUrl: "/assets/club/campus-safety.jpg",
    date: "2026",
    location: "MIT-WPU Gate 3",
    caption: "Strict ATGATT compliance before rolling out. Safety is our non-negotiable pride."
  },
  {
    id: "gal-5",
    title: "Batch of 2026 Orientation",
    category: "Memories",
    imageUrl: "/assets/club/post-freshers.png",
    date: "August 2026",
    location: "MIT-WPU Campus",
    caption: "Find your people. Fuel your passion. More than a club — it's a lifelong family."
  },
  {
    id: "gal-6",
    title: "The Official Club Crest",
    category: "Memories",
    imageUrl: "/assets/club/logo-crest.png",
    date: "Est. 2025",
    location: "MIT-WPU Pune",
    caption: "The official emblem of MIT-WPU Riders. Est. 2025."
  },
  {
    id: "gal-7",
    title: "Sahyadri Hairpin Carving",
    category: "Rides",
    imageUrl: "/assets/club/hero-convoy.jpg",
    date: "July 2026",
    location: "Western Ghats",
    caption: "Staggered formation through sweeping mountain twists."
  },
  {
    id: "gal-8",
    title: "Fellowship of the Throttle",
    category: "Riders",
    imageUrl: "/assets/club/dgr-event.jpg",
    date: "2026",
    location: "Pune City",
    caption: "Cross-department unity across Mechanical, Computer, Civil, and Management students."
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "tm-1",
    name: "Vishal S.",
    role: "Founder & Club President",
    category: "Club Leadership",
    motorcycle: "BMW R 1250 GS / Kawasaki Z900",
    department: "Mechanical Engineering",
    year: "Final Year",
    instagram: "@vishal.officiial",
    photoUrl: "/assets/club/bosch-award-ceremony.png",
    quote: "We didn't just build a bike club; we founded a culture of discipline, respect, and fearless adventure on two wheels."
  },
  {
    id: "tm-2",
    name: "Arjun Kulkarni",
    role: "Lead Ride Captain & Route Navigator",
    category: "Ride Captains",
    motorcycle: "KTM 390 Adventure",
    department: "Computer Science",
    year: "Third Year",
    instagram: "@arjun_rides_pune",
    photoUrl: "/assets/club/campus-safety.jpg",
    quote: "A ride is only as good as the safety of the last rider in the pack."
  },
  {
    id: "tm-3",
    name: "Rhea Deshmukh",
    role: "Safety Marshal & Gear Auditor",
    category: "Core Team",
    motorcycle: "Royal Enfield Continental GT 650",
    department: "Design & Media Studies",
    year: "Final Year",
    instagram: "@rhea_onwheels",
    photoUrl: "/assets/club/dgr-event.jpg",
    quote: "ATGATT isn't a slogan; it's our golden protocol. Dress for the slide, not the ride."
  },
  {
    id: "tm-4",
    name: "Dr. S. Patil",
    role: "Faculty Advisor & Mentor",
    category: "Club Leadership",
    motorcycle: "Triumph Bonneville T120",
    department: "School of Mechanical Engineering",
    year: "Faculty",
    instagram: "@mitwpu.riders",
    photoUrl: "/assets/club/bosch-award-ceremony.png",
    quote: "MIT-WPU Riders showcases how student passion, when guided by safety and leadership, achieves national prestige."
  },
  {
    id: "tm-5",
    name: "Tanmay Shinde",
    role: "Sweep Marshal & Technical Lead",
    category: "Ride Captains",
    motorcycle: "Yamaha YZF R3",
    department: "Automobile Engineering",
    year: "Third Year",
    instagram: "@tanmay_apex",
    photoUrl: "/assets/club/hero-convoy.jpg",
    quote: "No rider left behind. That is the foundational oath of MIT-WPU Riders."
  },
  {
    id: "tm-6",
    name: "Ananya Joshi",
    role: "Media & Outreach Lead",
    category: "Core Team",
    motorcycle: "Honda CB300R",
    department: "Media & Communication",
    year: "Second Year",
    instagram: "@ananya_captures",
    photoUrl: "/assets/club/post-freshers.png",
    quote: "Documenting raw emotions, roaring engines, and brotherhood across every mile."
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "post-1",
    imageUrl: "/assets/club/bosch-award-ceremony.png",
    caption: "A MILESTONE WORTH RIDING FOR. 🏆 Proud to announce that MIT-WPU Riders Club has been honoured with India's 1st Institute-Level Riding Club Award by Bosch & Radon Riders! #MITWPURiders #FirstInIndia",
    likes: 317,
    comments: 13,
    date: "August 26, 2026",
    link: "https://www.instagram.com/mitwpu.riders/"
  },
  {
    id: "post-2",
    imageUrl: "/assets/club/hero-convoy.jpg",
    caption: "Turning miles into memories ✨ Brotherhood • Ride Therapy • Sahyadri Escapades. Staggered formation through dawn mist. #RideTogether #SahyadriChasers",
    likes: 489,
    comments: 27,
    isVideo: false,
    date: "August 2026",
    link: "https://www.instagram.com/mitwpu.riders/"
  },
  {
    id: "post-3",
    imageUrl: "/assets/club/post-freshers.png",
    caption: "FIND YOUR PEOPLE. FUEL YOUR PASSION. 🏍️ MIT-WPU Riders invites all freshers. This is more than a club — it's a family. Orientation 2026! #MITWPUFreshers",
    likes: 412,
    comments: 34,
    isVideo: false,
    date: "August 24, 2026",
    link: "https://www.instagram.com/mitwpu.riders/"
  },
  {
    id: "post-4",
    imageUrl: "/assets/club/dgr-event.jpg",
    caption: "Distinguished Gentleman's Ride Pune Chapter. Dapper style, vintage machines, and a noble cause. #DGRPune #GentlemansRide #MITWPURiders",
    likes: 524,
    comments: 42,
    date: "May 19, 2026",
    link: "https://www.instagram.com/mitwpu.riders/"
  },
  {
    id: "post-5",
    imageUrl: "/assets/club/campus-safety.jpg",
    caption: "Pre-ride routine at Gate 3. Mirrors checked, tire pressures dialed, visors clean. ATGATT always. #SafetyFirst #ResponsibleRiding",
    likes: 388,
    comments: 19,
    date: "July 2026",
    link: "https://www.instagram.com/mitwpu.riders/"
  }
];

export const SAFETY_DOCTRINE = [
  {
    icon: "ShieldAlert",
    title: "ATGATT: All The Gear, All The Time",
    description: "ECE/DOT full-face helmet, armored jacket, knuckle-guard gloves, riding pants/knee guards, and sturdy boots are mandatory on every single club rollout. Zero compromises."
  },
  {
    icon: "Radio",
    title: "Staggered Formation & Lead-Sweep",
    description: "Riders maintain a zigzag staggered formation with 2-second safe buffer. The Lead Captain sets cruising tempo; the Sweep Marshal ensures no rider is left behind."
  },
  {
    icon: "HandMetal",
    title: "Hand Signals & Hazard Warning",
    description: "Standard motorsport hand signals for hazards (potholes, debris, pedestrians), single-file transitions, fuel stops, and mechanical alerts communicated downstream."
  },
  {
    icon: "Ban",
    title: "Zero Tolerance Substance Policy",
    description: "100% strictly enforced zero-alcohol and zero-substance doctrine before and during all rides. Violation results in immediate permanent expulsion from the club."
  },
  {
    icon: "Wrench",
    title: "T-CLOCS Pre-Ride Inspection",
    description: "Comprehensive pre-departure check: Tires & Wheels, Controls, Lights & Electrics, Oil & Fluids, Chassis, and Side-stand cutoffs prior to ignition."
  },
  {
    icon: "HeartHandshake",
    title: "Fellowship & Defensive Awareness",
    description: "Respect fellow commuters and pedestrians. We represent MIT World Peace University with dignity, courteous road etiquette, and humanitarian discipline."
  }
];

export const HAND_SIGNALS = [
  {
    signal: "Left Turn",
    gesture: "Left arm straight out horizontal, palm forward",
    purpose: "Indicates pack is executing a left switch"
  },
  {
    signal: "Right Turn",
    gesture: "Left arm bent 90° upward at elbow, fist closed",
    purpose: "Indicates pack is turning right"
  },
  {
    signal: "Hazard on Left",
    gesture: "Left foot extended or left hand pointing down toward road",
    purpose: "Warns trailing riders of pothole, sand or debris on left side"
  },
  {
    signal: "Hazard on Right",
    gesture: "Right foot extended pointing toward road",
    purpose: "Warns trailing riders of debris or obstacle on right lane"
  },
  {
    signal: "Single File",
    gesture: "Left arm straight up with one index finger raised",
    purpose: "Transition from staggered to single file in tight curves or traffic"
  },
  {
    signal: "Double / Staggered",
    gesture: "Left arm straight up with index and middle fingers raised (V-shape)",
    purpose: "Resume safe staggered cruising formation on open highway"
  },
  {
    signal: "Stop / Slow Down",
    gesture: "Left arm extended downward at 45°, palm facing backward",
    purpose: "Immediate pack deceleration or impending halt"
  }
];
