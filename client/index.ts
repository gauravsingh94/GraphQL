import { Chain } from "./client/zeus";

const chain = Chain("http://localhost:4000/graphql");

async function send() {
  try {
    const response = await chain("mutation")({
      createBlogs: [
        {
          input: {
            title: "Learn graphql",
            content: "GraphQL is completed with the help of harkarit",
            author: "Gaurav Singh",
          },
        },
        {
          id: true,
          title: true,
          content: true,
        },
      ],
    });
    console.log(response.createBlogs);
  } catch (e) {
    console.log(e);
  }
}

send();
