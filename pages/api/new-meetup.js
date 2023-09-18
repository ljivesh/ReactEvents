import client from "@/db/mongoclient";


const handler = async (req, res)=> {
    // console.log(req);
    if(req.method === 'POST') {

        try {

            const data = req.body;
            await client.connect();

            const db = client.db('meetups');
            const collection = db.collection('meetups');
            const result = await collection.insertOne(data);
            await client.close();
    
            return res.status(200).json({message: 'Success'});
        } catch(err) {
            return res.status(500).json(err);
        }
    }
};

export default handler;