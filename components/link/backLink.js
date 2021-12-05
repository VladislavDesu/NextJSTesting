import Link from "next/link";

const BackLink = ({url, text}) => {
    return (
        <>
            <Link href={url}>
                <a>{text}</a>
            </Link>
            <style jsx>{`
              a {
                display:inline-block;
                padding: 20px 10px;
                font-size: 20px;
                line-height: 30px;
                text-decoration: none;
                color: #ff6767;
                transition: color 0.15s linear;
              }
              
              a:hover,
              a:focus {
                color: black;
              }
            `}</style>
        </>

    );
};

export default BackLink;