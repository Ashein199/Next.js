import { useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_Meetups = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5st,12345 City",
    description: "THe is First Meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10st,12345 City",
    description: "THe is Second Meetup!",
  },
];
const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    //fetch data from api
    setLoadedMeetups(DUMMY_Meetups);
  }, []);
  return <MeetupList meetups={loadedMeetups} />;
};
export default HomePage;
