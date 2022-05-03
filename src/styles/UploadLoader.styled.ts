import styled from "styled-components";

const StyledUploadPage = styled.div`
	padding: 10px;

	.upload-loading > h3 {
		text-align: left;
		font-size: 18px;
		color: #4f4f4f;
	}

	.upload-loading > .loader-container {
		height: 5px;
		width: 100%;
		background-color: #f2f2f2;
		border-radius: 8px;

		.loading-gif {
			height: 100%;
			width: 20%;
			background-color: #2f80ed;
			border-radius: inherit;
			text-align: right;
			animation: translate 2s linear infinite;
		}
	}

	@keyframes translate {
		from {
			transform: translateX(0%);
		}
		to {
			transform: translateX(360%);
		}
	}
`;

export default StyledUploadPage;
