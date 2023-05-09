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
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

//for revalidate every incoming request
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //fetch data form api
//   return {
//     props: {
//       meetups: DUMMY_Meetups,
//     },
//   };
// }
export async function getStaticProps() {
  //fetch data form api
  return {
    props: {
      meetups: DUMMY_Meetups,
    },
    revalidate: 1, //1 = 1second
  };
}
export default HomePage;
