export const API_BASE_URL = "http://127.0.0.1:8000"; // Update with your backend URL if needed

export const uploadAudio = async (file: File): Promise<{ transcript: string }> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${API_BASE_URL}/upload-audio/`, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Failed to upload audio");
    }

    return response.json();
};
