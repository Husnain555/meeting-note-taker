import AudioUpload from "@/app/components/AudioUpload";

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-xl">
                <h1 className="text-3xl font-bold text-center text-gray-800">Upload & Transcribe Audio</h1>
                <p className="text-gray-600 text-center mt-2">
                    Upload your meeting recordings and get transcriptions instantly!
                </p>
                <div className="mt-6">
                    <AudioUpload />
                </div>
            </div>
        </div>
    );
}
