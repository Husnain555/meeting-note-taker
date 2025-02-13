"use client";
import { useState } from "react";
import axios from "axios";
import React from "react";

const AudioUpload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [transcription, setTranscription] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        setLoading(true);
        setTranscription(null);

        try {
            const response = await axios.post("http://127.0.0.1:8000/upload-audio", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setTranscription(response.data.transcription);
        } catch (error) {
            console.error("Error uploading file", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Transcribe Audio</h1>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                <label className="text-gray-700 mb-2">Upload Audio File:</label>
                <input
                    type="file"
                    accept="audio/*"
                    onChange={handleFileChange}
                    className="border border-gray-300 rounded p-2 mb-4"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    disabled={loading}
                >
                    {loading ? "Transcribing..." : "Submit"}
                </button>
            </form>

            {transcription && (
                <div className="mt-6 p-4 bg-white shadow-md rounded-lg w-full max-w-lg">
                    <h2 className="text-lg font-semibold">Transcription:</h2>
                    <p className="text-gray-800 mt-2">{transcription}</p>
                </div>
            )}
        </div>
    );
};

export default AudioUpload;
