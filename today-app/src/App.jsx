import Hero from "./components/Hero";
import MessageForToday from "./components/MessageForToday";
import ThisWeek from "./components/ThisWeek";
import TodaysServices from "./components/TodaysServices";
import FirstTime from "./components/FirstTime";
import NextSteps from "./components/NextSteps";
import PrayerRequest from "./components/PrayerRequest";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Hero />
      <div className="container">
        <MessageForToday />
        <ThisWeek />
        <TodaysServices />
        <FirstTime />
        <NextSteps />
        <PrayerRequest />
      </div>
      <Footer />
    </>
  );
}
