
import styles from './Meetupdetail.module.css'


export default (props)=> {

    const meetup = props.meetup;

    return (
        <div className={styles.meetup}>
            <img src={meetup.image} />
            <h1>{meetup.title}</h1>
            <address>{meetup.address}</address>
            <p>{meetup.description}</p>
        </div>
    );
};