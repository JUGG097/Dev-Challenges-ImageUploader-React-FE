import styled from "styled-components";

const StyledUploadSuccess = styled.div<{
	image_link: string;
}>`
	padding: 5px 10px;

	.upload-success {
		svg {
			color: #219653;
			font-size: 35px;
		}

		h3 {
			font-size: 18px;
			color: #4f4f4f;
		}

		.uploaded-image {
			width: 100%;
			height: 250px;
			border: 1px solid #e0e0e0;
			border-radius: 12px;
			/* background-image: url(/img/image.svg); */
			background-image: ${(props) => `url(${props.image_link})`};
			background-repeat: no-repeat;
			background-position: center;
			background-size: 100%;
		}

		.image-link-container {
			background-color: #f6f8fb;
			border: 1px solid #e0e0e0;
			border-radius: 8px;
			padding: 2px 0;
			font-size: 8px;

			.copy-link {
				padding-right: 2px;
			}

			input {
				width: 100%;
				height: 40px;
				padding: 5px 0;
				border: none;
				background-color: #f6f8fb;
				font-size: 8px;
				outline: none;
			}

			button {
				width: 100%;
				height: 100%;
				background-color: #2f80ed;
				color: #fff;
				border: none;
				border-radius: 8px;
			}
		}
	}

	@media (max-width: 480px) {
		.upload-success {
			.uploaded-image {
				height: 150px;
			}
		}
	}
`;

export default StyledUploadSuccess;
