import { CollegeDirectory } from "@/components/CollegeDirectory";
import { PageIntro, SiteShell } from "@/components/SiteShell";
import { AdsterraAd } from "@/components/AdsterraAd";
export default function CollegesPage(){return <SiteShell><main className="mx-auto max-w-7xl px-5 py-16 sm:px-8"><PageIntro eyebrow="College directory" title="Find a school worth getting excited about." copy="Explore popular colleges and compare the academic profile of their incoming students. Published figures are directional and may change by admissions cycle."/><AdsterraAd format="leaderboard" className="mx-auto my-10 hidden md:block"/><AdsterraAd format="mobile" className="mx-auto my-8 md:hidden"/><CollegeDirectory/></main></SiteShell>}
