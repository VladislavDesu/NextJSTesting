import List from "../components/list/list";
import BackLink from "../components/link/backLink";
import Layout from "../components/layout/layout";
import Container from "../components/container/container";

export default function Posts({posts}) {
    return (
        <Layout>
            <Container>
                <BackLink text={"← Back to Home"} url={"/"}/>
                <List list={posts} name="post"/>
            </Container>
        </Layout>
    );
};

export async function getStaticProps() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();

    return {
        props: {posts}
    }
}

