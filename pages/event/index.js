import axios from "axios"
import { useRouter } from "next/router"
export default function EventList(props) {
    const route = useRouter();

    function filterTheData() {
        route.push("http://localhost:3000/event?category=food");
    }
    return (
        <div>
            <div>EventList</div>
            <button onClick={filterTheData}>Only Food</button>
            {props.eventsData.map(event => {
                return (
                    <div key={event.id}>
                        <div>{event.id} | {event.title}</div>
                        <h1>{event.description} | {event.category}</h1>
                        <hr />
                        <br></br>
                    </div>
                )
            })}
        </div>
    )
}

export async function getServerSideProps(context) {
    const { query } = context;
    const subcategory = query.category ? `?category=${query.category}` : ''
    const events = await axios.get(`http://localhost:4000/events${subcategory}`);
    const eventsData = events.data;

    console.log(query);
    // console.log("Evenst Data: ", eventsData);
    return {
        props: {
            eventsData
        }
    }
}
