import Layout from "../../components/layout/layout";
import Container from "../../components/container/container";
import BackLink from "../../components/link/backLink";

export default function User({user}) {
    return (
        <Layout>
            <Container>
                <BackLink text={"← Back to Users"} url={"/posts"}/>
                <section>
                    <h1>{user.name}</h1>
                    <p>Username: {user.username}</p>
                    <p>Username: {user.phone}</p>
                    <p>Username: {user.email}</p>
                    <p>Username: {user.website}</p>
                </section>
            </Container>

            <style jsx>{`
              section {
                padding: 40px 0;
              }

              h1 {
                margin: 0 0 15px;
              }

              p {
                color: black;
              }

              p:not(:last-child) {
                margin: 0 0 8px;
              }
            `}</style>
        </Layout>
    );
};

export async function getServerSideProps({params}) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await data.json();

    return {
        props: {
            user
        }
    }
}