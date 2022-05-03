import StyledUploadSuccess from "../styles/UploadSucess.styled";
import { AiFillCheckCircle } from "react-icons/ai";

const UploadSuccess = () => {
	return (
		<StyledUploadSuccess>
			<div className="upload-success">
				<AiFillCheckCircle />
				<h3 className="mt-4">Uploaded Successfully!</h3>
				<div className="uploaded-image mt-4"></div>
				<div className="row image-link-container mt-4">
					<div className="col-8">
						<input type="text" name="image-link" id="image-link" />
					</div>
					<div className="col-4 copy-link">
						<button>Copy Link</button>
					</div>
				</div>
			</div>
		</StyledUploadSuccess>
	);
};

export default UploadSuccess;
