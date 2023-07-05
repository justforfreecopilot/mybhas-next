import { useRouter } from "next/router";

export const getServerSideProps = async () => {
  const res = await fetch("https://v2.jokeapi.dev/joke/Any");
  const repo = await res.json();
  return { props: { repo } };
};

export default function PageSlug({ repo }) {
  const router = useRouter();
  return (
    <p>
      Not About: {router.query.id} <br /> And some content:{" "}
      {repo.joke ? repo.joke : repo.setup + ": " + repo.delivery}
    </p>
  );
}
