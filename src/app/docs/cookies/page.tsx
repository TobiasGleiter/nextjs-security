"use client";

export default function CookiesPage() {
  const fetchData = async () => {
    const data = await fetch("/api/v1/cookies");
    console.log(data);
  };

  return (
    <div>
      <h1>CookiesPage</h1>
      <button onClick={fetchData}>Cookies OK?</button>
    </div>
  );
}
