import MeetupList from "@/components/meetups/MeetupList";
import client from "@/db/mongoclient";

export default (props) => {

  const meetups = props.meetups


  return <>
    <MeetupList meetups={meetups} />
  </>
};
export const getStaticProps = async () => {

  try {
    await client.connect();
            
            const db = client.db('meetups');

            const collection = db.collection('meetups');

            const meetups = await collection.find({}).toArray();

            await client.close();



    return {
      props: {
        meetups: JSON.parse(JSON.stringify(meetups))
      }
    };
  } catch (error) {
    console.error('Error fetching meetups:', error);
    return {
      props: {
        meetups: []
      }
    };
  }

};

const dummyMeetups = [
  {
    id: 1,
    title: 'React Meetup',
    address: 'South Street Tokyo',
    image: 'https://media.gettyimages.com/id/1320444476/photo/tokyo-tower-and-downtown-district-at-dusk-tokyo-japan.jpg?s=612x612&w=0&k=20&c=VHuRl2E-mk6D39F3JgxGiwtO0w4dMHu48D2Z1-zlZRU='
  },
  {
    id: 2,
    title: 'Angular Meetup',
    address: 'South Street Tokyo',
    image: 'https://media.gettyimages.com/id/1320444476/photo/tokyo-tower-and-downtown-district-at-dusk-tokyo-japan.jpg?s=612x612&w=0&k=20&c=VHuRl2E-mk6D39F3JgxGiwtO0w4dMHu48D2Z1-zlZRU='
  },
  {
    id: 3,
    title: 'Mojo Meetup',
    address: 'South Street Tokyo',
    image: 'https://media.gettyimages.com/id/1320444476/photo/tokyo-tower-and-downtown-district-at-dusk-tokyo-japan.jpg?s=612x612&w=0&k=20&c=VHuRl2E-mk6D39F3JgxGiwtO0w4dMHu48D2Z1-zlZRU='
  },
  {
    id: 4,
    title: 'ML-Opps Meetup',
    address: 'South Street Tokyo',
    image: 'https://media.gettyimages.com/id/1320444476/photo/tokyo-tower-and-downtown-district-at-dusk-tokyo-japan.jpg?s=612x612&w=0&k=20&c=VHuRl2E-mk6D39F3JgxGiwtO0w4dMHu48D2Z1-zlZRU='
  },
  {
    id: 5,
    title: 'MERN Meetup',
    address: 'South Street Tokyo',
    image: 'https://media.gettyimages.com/id/1320444476/photo/tokyo-tower-and-downtown-district-at-dusk-tokyo-japan.jpg?s=612x612&w=0&k=20&c=VHuRl2E-mk6D39F3JgxGiwtO0w4dMHu48D2Z1-zlZRU='
  },
]