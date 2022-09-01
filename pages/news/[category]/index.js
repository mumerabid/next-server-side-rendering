import axios from "axios"
export default function NewByCategory(props) {

    return (
        <div>
            <div>NewByCategory</div>
            {props.newsData.map(news => {
                return (
                    <div key={news.id}>{news.id} | {news.title} | {news.category}</div>
                )
            })}
        </div>
    )
}

export async function getServerSideProps(context) {
    const { params } = context;
    console.log(params);
    const news = await axios.get(`http://localhost:4000/news?category=${params.category}`);
    const newsData = news.data;
    console.log(newsData);
    return {
        props: {
            newsData
        }
    }
}