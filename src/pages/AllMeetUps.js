import MeetUpList from "../components/meetups/MeetUpList";
import { useState } from "react";
import { useEffect } from "react";

function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetUps, setLoadedMeetUps] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-meeting-app-43687-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (let key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetUps(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetUpList meetups={loadedMeetUps} />
    </section>
  );
}

export default AllMeetUpsPage;
