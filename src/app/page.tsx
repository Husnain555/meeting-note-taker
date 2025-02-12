'use client';
import { useState } from "react";
import {login, logout} from "../../lib/firebase.js";


export default function Home() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const userData = await login();
    setUser(userData);
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold">AI Meeting Note Taker</h1>
        {user ? (
            <div className="mt-4">
              <p>Welcome, {user.displayName}!</p>
              <button onClick={logout} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">
                Logout
              </button>
            </div>
        ) : (
            <button onClick={handleLogin} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              Sign in with Google
            </button>
        )}
      </div>
  );
}
