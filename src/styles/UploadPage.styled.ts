import styled from "styled-components";

const getColor = (props: {
	isFocused: boolean;
	isDragAccept: boolean;
	isDragReject: boolean;
}) => {
	if (props.isDragAccept) {
		return "#00e676";
	}
	if (props.isDragReject) {
		return "#ff1744";
	}
	if (props.isFocused) {
		return "#2196f3";
	}
	return "#97bef4";
};

const StyledDropZone = styled.div<{
	isFocused: boolean;
	isDragAccept: boolean;
	isDragReject: boolean;
}>`
	background-color: #f6f8fb;
	border: 2px dashed;
	border-color: ${(props) => getColor(props)};
	border-radius: 12px;
	padding: 40px 0;
	p {
		color: #bdbdbd;
		font-size: 12px;
	}
`;

const StyledUploadPage = styled.div`
	transform: translateY(20vh);
	border-radius: 12px;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
	padding: 20px 40px;
	width: 50%;
	margin: auto;
	text-align: center;

	.file-upload > h3 {
		margin: 10px 0;
		font-size: 18px;
		color: #4f4f4f;
	}

	.file-upload > p {
		font-size: 10px;
		color: #828282;
	}

	.file-upload > .or-text {
		font-size: 12px;
		color: #bdbdbd;
	}

	.file-upload > .custom-file-input {
		width: 0.1px;
		height: 0.1px;
		opacity: 0;
		overflow: hidden;
		position: absolute;
		z-index: -1;
	}

	.file-upload > label {
		background-color: #2f80ed;
		font-size: 12px;
		color: #fff;
		padding: 8px 10px;
		border-radius: 8px;
		cursor: pointer;
	}

	@media (max-width: 480px) {
		width: 90%;
	}
`;

export { StyledUploadPage, StyledDropZone };
