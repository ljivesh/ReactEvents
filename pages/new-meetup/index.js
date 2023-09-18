import NewMeetupForm from "@/components/meetups/NewMeetupForm"


export default ()=> {


    const newMeetupHandler = async (meetupData)=> {
        console.log(meetupData);
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(meetupData)
        });

        const data = await response.json();

        console.log(response);
        console.log(data);

    }

    return <NewMeetupForm onAddMeetup={newMeetupHandler} />
}

