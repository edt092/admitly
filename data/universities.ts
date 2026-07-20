import type { University } from "@/types/calculator";

export const universities: University[] = [
  { id: "harvard", name: "Harvard University", location: "Cambridge, MA", prestige: 98, accent: "#ff6678", acceptanceRate: 3.6, avgGpa: 4.0, avgSat: 1550, tuition: 59076, enrollment: "7,110", type: "Private" },
  { id: "stanford", name: "Stanford University", location: "Stanford, CA", prestige: 97, accent: "#ff5b5b", acceptanceRate: 3.9, avgGpa: 3.95, avgSat: 1540, tuition: 65127, enrollment: "8,054", type: "Private" },
  { id: "mit", name: "MIT", location: "Cambridge, MA", prestige: 96, accent: "#a78bfa", acceptanceRate: 4.5, avgGpa: 4.0, avgSat: 1550, tuition: 62690, enrollment: "4,576", type: "Private" },
  { id: "nyu", name: "New York University", location: "New York, NY", prestige: 84, accent: "#c4b5fd", acceptanceRate: 8.0, avgGpa: 3.8, avgSat: 1520, tuition: 62438, enrollment: "29,760", type: "Private" },
  { id: "ucla", name: "UCLA", location: "Los Angeles, CA", prestige: 86, accent: "#60a5fa", acceptanceRate: 9.0, avgGpa: 3.93, avgSat: 1450, tuition: 15222, enrollment: "33,040", type: "Public" },
  { id: "umich", name: "University of Michigan", location: "Ann Arbor, MI", prestige: 82, accent: "#facc15", acceptanceRate: 18.0, avgGpa: 3.9, avgSat: 1470, tuition: 18686, enrollment: "33,730", type: "Public" },
  { id: "uc-davis", name: "UC Davis", location: "Davis, CA", prestige: 73, accent: "#facc15", acceptanceRate: 42.1, avgGpa: 3.87, avgSat: 1360, tuition: 15881, enrollment: "31,540", type: "Public" },
  { id: "ohio-state", name: "Ohio State University", location: "Columbus, OH", prestige: 66, accent: "#bef264", acceptanceRate: 53.7, avgGpa: 3.81, avgSat: 1370, tuition: 13174, enrollment: "46,820", type: "Public" },
  { id: "purdue", name: "Purdue University", location: "West Lafayette, IN", prestige: 69, accent: "#e7d7a8", acceptanceRate: 50.3, avgGpa: 3.74, avgSat: 1320, tuition: 9992, enrollment: "39,170", type: "Public" },
  { id: "asu", name: "Arizona State University", location: "Tempe, AZ", prestige: 54, accent: "#fb7185", acceptanceRate: 89.8, avgGpa: 3.55, avgSat: 1240, tuition: 12393, enrollment: "65,490", type: "Public" },
  { id: "penn-state", name: "Penn State", location: "University Park, PA", prestige: 63, accent: "#93c5fd", acceptanceRate: 55.2, avgGpa: 3.68, avgSat: 1300, tuition: 20066, enrollment: "42,220", type: "Public" },
  { id: "ucf", name: "University of Central Florida", location: "Orlando, FL", prestige: 51, accent: "#fde68a", acceptanceRate: 41.0, avgGpa: 3.64, avgSat: 1270, tuition: 6368, enrollment: "54,950", type: "Public" },
];
