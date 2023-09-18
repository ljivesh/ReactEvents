import Meetupdetail from "@/components/meetups/Meetupdetail"
import client from "@/db/mongoclient";
import { ObjectId } from "mongodb";

export default (props)=> {


    return <Meetupdetail meetup={props.meetup}/>
}


export const getStaticPaths = async ()=> {

  console.log("Hereee in static paths");

  await client.connect();
            
  const db = client.db('meetups');

  const collection = db.collection('meetups');

  const meetups = await collection.find({}).toArray();

  await client.close();
    
    

    // console.log(meetups);

    const meetupPaths = meetups.map((meetup)=> {
        return {
            params: {
                meetupID: meetup._id.toString()
            }
        }
    });
    
    return {
        paths: meetupPaths,
        fallback: false
    };
};

export const getStaticProps = async (context)=> {

  console.log("Hereee in static porps");


    const meetupID = context.params.meetupID;

    await client.connect();
            
    const db = client.db('meetups');

    const collection = db.collection('meetups');

    console.log("Incoming meetup ID: "+meetupID);
    const meetup = await collection.findOne({_id: new ObjectId(meetupID)});

    console.log("outgoing meetup"+ meetup);

    await client.close();


    // const meetup = dummyMeetups.filter((meetup)=> meetup.id === +meetupID)[0];
    
    return {
        props: {
            meetup: JSON.parse(JSON.stringify(meetup))
        },
        revalidate: 5
    }


}

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