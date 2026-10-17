export interface RideEvent {
  id: string;
  title: string;
  category: 'Long Distance' | 'Adventure' | 'Weekend' | 'University' | 'Road Safety' | 'Collaborations';
  location: string;
  destination: string;
  date: string;
  distance: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Expert';
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  galleryImages: string[];
  routeHighlights: string[];
  pace: string;
  meetingPoint: string;
  departureTime: string;
  mandatoryGear: string[];
  registrationOpen: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Rides' | 'Events' | 'Riders' | 'Bikes' | 'Memories';
  imageUrl: string;
  date?: string;
  location?: string;
  caption: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Club Leadership' | 'Core Team' | 'Ride Captains' | 'Members';
  motorcycle: string;
  department: string;
  year: string;
  instagram: string;
  photoUrl: string;
  quote?: string;
}

export interface StoryHighlight {
  id: string;
  title: string;
  imageUrl: string;
  count: number;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
  isVideo?: boolean;
  link: string;
}

export interface RegistrationFormData {
  fullName: string;
  mitEmail: string;
  prnNumber: string;
  department: string;
  year: string;
  phoneNumber: string;
  motorcycle: string;
  ridingExperience: string;
  instagramHandle: string;
  whyJoin: string;
  emergencyContact: string;
  hasFullGear: boolean;
}

export interface ClubStats {
  ridesCompleted: number;
  kilometersCovered: number;
  ridersConnected: number;
  eventsConducted: number;
  safetyScorePercentage: number;
}
