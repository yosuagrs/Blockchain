'use client';

import { useState } from 'react';

export default function Home() {
  const [address, setAddress] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
      setError('Invalid Ethereum address.');
      return;
    }

    if (!/^0x[a-fA-F0-9]{64}$/.test(privateKey)) {
      setError('Invalid private key.');
      return;
    }

    setError('');
    setLoggedIn(true);
  };

  return (
    <main className="flex items-center justify-center p-4">
      <div className="max-w-sm w-full bg-white border border-gray-200 rounded-xl shadow-lg p-6 sm:p-8">
        {!loggedIn ? (
          <>
            <h1 className="text-xl font-semibold text-center text-gray-800 mb-5">
              🔐 Ethereum xogin
            </h1>

            {error && (
              <div className="bg-red-50 border border-red-300 text-red-700 px-3 py-2 rounded mb-4 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ethereum Address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="0x..."
                  className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Private Key
                </label>
                <input
                  type="password"
                  value={privateKey}
                  onChange={(e) => setPrivateKey(e.target.value)}
                  placeholder="0x..."
                  className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-md transition"
              >
                Login
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-bold text-green-600 mb-2">✅ Logged In</h2>
            <p className="text-sm text-gray-700 break-words">
              Address:
            </p>
            <p className="text-xs font-mono text-gray-600 break-words mt-2">
              {address}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}