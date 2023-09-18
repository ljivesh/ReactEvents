import db, { connectDb } from "@/db/db";
import Meetup from "../../db/meetupModel";



export const handler = async(req, res)=> {

    if(req.method === 'POST') {

        const meetupID = req.body.meetupID;
        
        const db = await connectDb();
        const meetup = await Meetup.findOne({id: meetupID}).exec();
        console.log("Meetup ID is :"+meetupID);
        console.log(meetup);
        console.log("Here")
        res.status(200).json(meetup);

    }

}