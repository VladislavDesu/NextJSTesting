import Layout from "../../components/layout/layout";
import Container from "../../components/container/container";
import BackLink from "../../components/link/backLink";

export default function Post({post}) {
    return (
        <Layout>
            <Container>
                <BackLink text={"← Back to Posts"} url={"/posts"}/>
                <section>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </section>
            </Container>

            <style jsx>{`
              section {
                padding: 40px 0;
              }

              h1 {
                font-size: 30px;
                line-height: 40px;
                margin: 0 0 15px;
              }

              p {
                color: black;
                font-size: 20px;
                line-height: 30px;
              }
            `}</style>
        </Layout>
    );
};

export async function getServerSideProps({params}) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await data.json();

    return {
        props: {
            post
        }
    }
}