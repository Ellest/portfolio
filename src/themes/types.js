export const [H1, H2, H3] = ['h1', 'h2', 'h3']
	.map((tag) => styled[tag]`
		${({ align }) => align && `text-align: ${align};`}
	`)