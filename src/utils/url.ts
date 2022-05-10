const imageUploadUrl = () => {
	if (process.env.NODE_ENV === "production") {
		return "https://imageuploader.juggyprojects.com/api/v1/image";
	} else {
		// return "http://127.0.0.1:8000/v1/image/";
		// return "http://localhost:8000/v1/image/";
		return "http://127.0.0.1:8000/api/v1/image/";
	}
};

export default imageUploadUrl;
