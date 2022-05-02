import StyledUploadPage from "../styles/UploadPage.styled";

const UploadPage = () => {
	return (
		<>
			<div className="container">
				<StyledUploadPage>
					<h3>Upload your image</h3>
					<p>File should be jpeg, jpg or png...</p>
				</StyledUploadPage>
			</div>
		</>
	);
};

export default UploadPage;
