import StyledUploadSuccess from "../styles/UploadSucess.styled";
import { AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react";

const UploadSuccess: React.FC<{
	image_link: string;
}> = ({ image_link }) => {
	const [isCopied, setIsCopied] = useState(false);

	// This function uses the clipboard browswer API
	async function copyTextToClipboard(text: string) {
		if ("clipboard" in navigator) {
			return await navigator.clipboard.writeText(text);
		} else {
			return document.execCommand("copy", true, text);
		}
	}

	// onClick handler function for the copy button
	const handleCopyClick = () => {
		// Asynchronously call copyTextToClipboard
		copyTextToClipboard(image_link)
			.then(() => {
				// If successful, update the isCopied state value
				setIsCopied(true);
				setTimeout(() => {
					setIsCopied(false);
				}, 1500);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<StyledUploadSuccess image_link={image_link}>
			<div className="upload-success">
				<AiFillCheckCircle />
				<h3 className="mt-4">Uploaded Successfully!</h3>
				<div className="uploaded-image mt-4"></div>
				<div className="row image-link-container mt-4">
					<div className="col-8">
						<input
							type="text"
							name="image-link"
							id="image-link"
							defaultValue={image_link}
						/>
					</div>
					<div className="col-4 copy-link">
						<button onClick={handleCopyClick}>
							{isCopied ? "Copied" : "Copy Link"}
						</button>
					</div>
				</div>
			</div>
		</StyledUploadSuccess>
	);
};

export default UploadSuccess;
