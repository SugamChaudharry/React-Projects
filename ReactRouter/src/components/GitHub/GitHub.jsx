import React, { useEffect, useState } from "react";

function GitHub() {
  const [userName, setUsername] = useState("SugamChaudharry");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [typingTimeout, setTypingTimeout] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Debounce the API call by introducing a delay
    const delay = 1000; // 1 second delay
    clearTimeout(typingTimeout);

    const timeout = setTimeout(() => {
      fetch(`https://api.github.com/users/${userName}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("User not found");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, delay);

    setTypingTimeout(timeout);

    // Clean up the timeout on component unmount or when the input changes
    return () => clearTimeout(timeout);
  }, [userName]);

  return (
    <div className="w-full  flex flex-col items-center justify-center bg-slate-700">
      <div className="w-full h-auto flex items-center justify-center">
        <label className="text-3xl  font-semibold  text-slate-400 px-4">USER NAME </label>
        <input
          type="text"
          className="rounded-l-lg outline-none px-6 py-3 text-xl  font-semibold  text-white  bg-slate-600"
          placeholder="SugamChaudharry"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <br />
      <br />
      <br />
      {loading && <p className=" text-white text-4xl">Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div className="w-full flex justify-center items-center">
          <div className="w-1/2 flex items-center justify-center">
            <img src={data.avatar_url} className="w-72" alt="User Avatar" />
          </div>
          <div className="w-1/2 text-white text-2xl flex justify-around">
            <span>
              <p>NAME </p>
              <p>BIO </p>
              <p>LOCATION </p>
              <p>FOLLOWER </p>
              <p>FOLLOWING </p>
              <p>API URL </p>
            </span>
            <span>
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </span>
            <span>
              <p id="name"> {data.name}</p>
              <p id="bio"> {data.bio}</p>
              <p id="location"> {data.location}</p>
              <p id="follower"> {data.followers}</p>
              <p id="following"> {data.following}</p>
              <a id="link" href={data.html_url} target="_blank" rel="noopener noreferrer">
                {data.html_url}
              </a>
            </span>
          </div>
        </div>
      )}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default GitHub;
