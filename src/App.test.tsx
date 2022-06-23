import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { act } from "react-dom/test-utils";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Landing Page Rendering", () => {
	test("Title displayed correctly", () => {
		render(<App />);
		expect(screen.getByText("Upload your image")).toBeInTheDocument();
	});

	test("Input Elements are rendered correctly", () => {
		render(<App />);
		// to target input elements
		expect(screen.getAllByDisplayValue("").length).toBe(2);
	});

	test("Drag and Drop box is rendered correctly", () => {
		render(<App />);
		expect(screen.getByRole("presentation")).toBeInTheDocument();
	});

	test("Manual File Upload Label is rendered correctly", () => {
		render(<App />);
		expect(screen.getByLabelText("Choose a file")).toBeInTheDocument();
	});
});

describe("File Upload Functionality", () => {
	let fakeFile: File;
	let fakeFile2: File;

	beforeEach(() => {
		fakeFile = new File(["test1"], "test1.png", {
			type: "image/png",
		});

		fakeFile2 = new File(["test2"], "test2.jpg", {
			type: "image/svg+xml",
		});

		const data = {
			data: {
				image_link: "testingImageLink",
			},
		};

		act(() => {
			mockedAxios.post.mockImplementationOnce(() =>
				Promise.resolve(data)
			);
		});
	});

	test("Manual File Upload Success", async () => {
		render(<App />);

		userEvent.upload(screen.getAllByDisplayValue("")[1], fakeFile);

		expect(
			await screen.findByDisplayValue("testingImageLink")
		).toBeInTheDocument();
	});

	test("Manual File Upload Fails", async () => {
		render(<App />);

		userEvent.upload(screen.getAllByDisplayValue("")[1], fakeFile2);

		expect(
			await screen.findByText("Invalid File Format")
		).toBeInTheDocument();
	});

	test("Drag and Drop File Upload Success", async () => {
		render(<App />);

		// Stole from stackOverFlow
		const inputEl = screen.getAllByDisplayValue("")[0];
		Object.defineProperty(inputEl, "files", {
			value: [fakeFile],
		});

		// fireEvent.drop(inputEl);
		fireEvent.drop(inputEl);

		expect(
			await screen.findByDisplayValue("testingImageLink")
		).toBeInTheDocument();

		// Cannot test for failure because of some issues
	});
});
