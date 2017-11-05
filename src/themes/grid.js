import styled, { css } from 'styled-components';

export const Div = styled.div`
	${({ marginBottom }) => marginBottom && css`
		margin-bottom: ${marginBottom};
	`}
`;

export const Container = styled.div`
	padding-left: 120px;
	padding-right: 120px;
	padding-top: 35px;
`;

export const Flex = styled(Div)`
	display: flex;

	${({ column }) => column && css`
		flex-direction: column;
	`}
`;

export const Relative = styled(Div)`
	position: relative;
`;