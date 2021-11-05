import NewMeetUpForm from "../components/meetups/NewMeetUpForm";
import { useHistory } from "react-router-dom";
function NewMeetUpPage() {
  const history = useHistory();
  function addMeetUpHandler(meetupData) {
    fetch(
      "https://react-meeting-app-43687-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetUpForm onAddMeetUp={addMeetUpHandler} />
    </div>
  );
}

export default NewMeetUpPage;
