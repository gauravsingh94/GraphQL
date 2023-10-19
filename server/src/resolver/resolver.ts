import { Request} from "express";
interface CustomRequest extends Request {
  authHeader?: string;
}

export const routes = {
  getBlogs: ({ id }: { id: string }, req: CustomRequest) => {
    // Database logic

    if (id === "1") {
      return {
        id: "1",
        title: "Open Source Cohert",
        content:
          "A best course for the opensource is not going to end. Hkirat have teach everything which we need for contribution to the opensource projects. i will missed the opensource cohert , hkirat sir and the bachmates very much",
        author: "Gaurav Singh",
      };
    }
  },
  createBlogs: ({ input }: { input: any }, req: CustomRequest) => {
    console.log(req.header);

    // Database logic

    return { id: "2", ...input };
  },
};
