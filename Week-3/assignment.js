// Problem Description – fetchWithTimeout(url, ms)

// You are required to write a function named fetchWithTimeout that accepts a URL and a time limit in milliseconds. 
// The function must return a Promise that attempts to fetch data from the given URL.
// If the request completes within the specified time, the Promise resolves with the fetched data. 
// If the operation exceeds the time limit, the Promise rejects with the message "Request Timed Out".

function fetchWithTimeout(url, timeLimit) {
  const fetchPromise = fetch(url).then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Request Timed Out");
    }, timeLimit);
  });

  return Promise.race([fetchPromise, timeoutPromise]);
}