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
    const { params, req, res, query } = context;
    console.log(query)
    // console.log(req.headers.cookie)
    // console.log(params);
    res.setHeader('Set-Cookie', ['name=umer'])
    const news = await axios.get(`http://localhost:4000/news?category=${params.category}`);
    const newsData = news.data;
    // console.log(newsData);
    console.log("SSR in news sub-category")
    return {
        props: {
            newsData
        }
    }
}