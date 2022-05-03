// import { useCallback } from "react";
import { StyledUploadPage, StyledDropZone } from "../styles/UploadPage.styled";
import { useDropzone, FileWithPath, FileRejection } from "react-dropzone";
import UploadLoading from "../components/UploadLoading";
import UploadSuccess from "../components/UploadSuccess";

const UploadPage = () => {
	// Run if file is validated as correct format
	const onDropAccepted = (files: FileWithPath[]) => {
		files.forEach((file) => console.log(file));
	};

	// Runs if validation fails
	const onDropRejected = (fileRejections: FileRejection[]) => {
		fileRejections.forEach((file) => console.log(file));
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
		// console.log(files[0]);
		console.log(e.target.files);

		console.log(file);
	};

	return (
		<>
			<div className="container">
				<StyledUploadPage>
					{/* File Upload Form */}
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
							<p className="mt-4">Drag & Drop your image here</p>
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

					{/* File Upload Loader */}
					{/* <UploadLoading /> */}
					{/* File Upload Successful Component */}
					{/* <UploadSuccess /> */}
				</StyledUploadPage>
			</div>
		</>
	);
};

export default UploadPage;
