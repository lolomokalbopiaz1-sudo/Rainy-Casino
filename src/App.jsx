
import React, { useState } from 'react';

export default function App() {
  const [kycMsg, setKycMsg] = useState("");

  async function submitKYC() {
    const res = await fetch("/api/kyc", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({ name: "Test User"})
    });
    const data = await res.json();
    setKycMsg(data.message || JSON.stringify(data));
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl">Rainy Casino (Fixed)</h1>
      <button onClick={submitKYC} className="mt-4 bg-blue-600 p-3 rounded">Submit KYC</button>
      <div className="mt-4">{kycMsg}</div>
    </div>
  );
}
