import List from "../components/list/list";
import Container from "../components/container/container";
import Layout from "../components/layout/layout";
import BackLink from "../components/link/backLink";

export default function Users({users}) {
    return (
        <Layout>
            <Container>
                <BackLink text={"← Back to Home"} url={"/"}/>
                <List list={users} name="user"/>
            </Container>
        </Layout>
    );
};

export async function getStaticProps() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();

    return {
        props: {users}
    }
}

