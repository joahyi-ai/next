// import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function NewPost(props) {
  console.log("New Post Props: ", props);
  return (
    <div>
      <h1>this is the new post page</h1>
    </div>
  );
}

export const getServerSideProps = () => {
  return {
    props: {
      test: "this is a test",
    },
  };
};
