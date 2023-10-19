/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Query:{
		getBlogs:{

		}
	},
	inputBlogsDetails:{

	},
	Mutation:{
		createBlogs:{
			input:"inputBlogsDetails"
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Blogs:{
		id:"ID",
		title:"String",
		content:"String",
		author:"String"
	},
	Query:{
		getBlogs:"Blogs"
	},
	Mutation:{
		createBlogs:"Blogs"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}