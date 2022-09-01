import axios from "axios";
export default function news(props) {
    return (
        <div>
            <div>News List</div>
            {props.newsDtat.map((news) => {
                return (
                    <div key={news.id}>{news.id} | {news.title}</div>
                )
            })}

        </div>
    )
}
export async function getServerSideProps() {
    const news = await axios.get("http://localhost:4000/news");
    const newsDtat = news.data;
    // console.log(newsDtat);
    console.log("SSR in news category")
    return {
        props: {
            newsDtat
        }
    }
}