import StyledUploadPage from "../styles/UploadLoader.styled";

const UploadLoading = () => {
	return (
		<StyledUploadPage>
			<div className="upload-loading">
				<h3>Uploading</h3>
				<div className="loader-container mt-4">
					<div className="loading-gif"></div>
				</div>
			</div>
		</StyledUploadPage>
	);
};

export default UploadLoading;
