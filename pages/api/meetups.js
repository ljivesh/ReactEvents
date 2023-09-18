import client from "@/db/mongoclient";

const handler = async (req, res)=> {

    if(req.method === 'GET') {

        try {
            await client.connect();
            
            const db = client.db('meetups');

            const collection = db.collection('meetups');

            const meetups = await collection.find({}).toArray();

            await client.close();

            res.status(200).json(meetups);
        } catch(err) {
            res.status(500).json({message: 'Fetch Data failed'});
        }

    }

};

export default handler;