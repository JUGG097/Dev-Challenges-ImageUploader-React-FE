import { useState } from "react";
import { StyledUploadPage, StyledDropZone } from "../styles/UploadPage.styled";
import { useDropzone, FileWithPath, FileRejection } from "react-dropzone";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UploadLoading from "../components/UploadLoading";
import UploadSuccess from "../components/UploadSuccess";
import axios from "axios";
import imageUploadUrl from "../utils/url";

const UploadPage = () => {
	// Create some app states
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [imageUrl, setimageUrl] = useState("");

	// Notification Toast When there is an error
	const error = (text: string) =>
		toast(text, {
			position: "top-center",
			type: "error",
			theme: "dark",
		});

	// Custom function to handle file upload for both drag and button oploads
	const handleImageUpload = (file: FileWithPath | File) => {
		setLoading(true);
		const data = new FormData();

		data.append("file", file);
		axios
			.post(imageUploadUrl(), data)
			.then((res) => {
				setLoading(false);
				setSuccess(true);
				setimageUrl(res.data.image_link);
			})
			.catch((err) => {
				setLoading(false);
				setSuccess(false);
				error("Could not upload image");
			});
	};

	// Runs if file is validated as correct format
	const onDropAccepted = (files: FileWithPath[]) => {
		let file = files[0];
		if (file !== undefined || file !== null) {
			handleImageUpload(file);
		}
	};

	// Runs if validation fails
	const onDropRejected = (fileRejections: FileRejection[]) => {
		// fileRejections.forEach((file) => console.log(file));
		// console.log("toast fire");

		error("Invalid File Format");
	};

	const {
		getRootProps,
		getInputProps,
		isFocused,
		isDragAccept,
		isDragReject,
	} = useDropzone({
		noClick: true,
		maxFiles: 1,
		accept: {
			"image/*": [".jpeg", ".png", ".jpg"],
		},
		onDropAccepted,
		onDropRejected,
	});

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let files = e.target.files;
		let file = files?.item(0);
		// console.log(file);

		if (file !== undefined && file !== null) {
			// Validate file type
			if (
				!["image/png", "image/jpeg", "image/jpg"].includes(file?.type)
			) {
				error("Invalid File Format");
			} else {
				handleImageUpload(file);
			}
		}
	};

	return (
		<>
			<div className="container">
				<StyledUploadPage>
					{loading ? (
						<UploadLoading />
					) : success ? (
						<UploadSuccess image_link={imageUrl} />
					) : (
						<div className="file-upload">
							<h3>Upload your image</h3>
							<p>File should be jpeg, jpg or png...</p>
							<StyledDropZone
								{...getRootProps({
									isFocused,
									isDragAccept,
									isDragReject,
								})}
							>
								<input {...getInputProps()} />
								<img src="/img/image.svg" alt="" />
								<p className="mt-4">
									Drag & Drop your image here
								</p>
							</StyledDropZone>
							<p className="mt-4 or-text">Or</p>
							<input
								type="file"
								name="image-file"
								id="image-file"
								className="custom-file-input"
								accept=".jpeg, .jpg, .png, "
								onChange={handleFileChange}
							/>
							<label htmlFor="image-file">Choose a file</label>
						</div>
					)}

					{success && (
						<button
							className="btn btn-primary"
							onClick={() => {
								setSuccess(false);
							}}
						>
							Back
						</button>
					)}
				</StyledUploadPage>
				<footer className="text-center mt-4 transform-footer">
					<p>created by Adeoluwa Adeboye - devChallenges.io</p>
				</footer>
			</div>
			<ToastContainer />
		</>
	);
};

export default UploadPage;
