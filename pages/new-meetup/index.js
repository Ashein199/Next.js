import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetupHandler = (enteredValues) => {
    console.log(enteredValues);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};
export default NewMeetupPage;
