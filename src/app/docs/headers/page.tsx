"use client";

export default function SecureHeaderPage() {
  const fetchData = async () => {
    const data = await fetch("/api/v1/headers");
    console.log(data);
  };

  return (
    <div>
      HeaderPage
      <button onClick={fetchData}>FetchData</button>
    </div>
  );
}
