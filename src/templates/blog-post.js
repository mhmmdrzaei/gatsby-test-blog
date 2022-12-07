import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';

const DataExport = ({data}) => {
	const post = data.markdownRemark;
	return (
		<Layout>
			<div>
				<h2>{post.frontmatter.title}</h2>
				<div dangerouslySetInnerHTML={{__html:post.html}}/>
			</div>

		</Layout>

		)
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark (fields: {slug: {eq: $slug}}) {
			html
			frontmatter {
				title
			}
		}
	}


`

export default DataExport;
// i want you to match this field on our markdownRemark where this field is equavalent to the slug value