const API_URL = "http://localhost:5000/api/sessions";

export async function saveSession(sessionData) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sessionData),
  });

  if (!response.ok) {
    throw new Error("Failed to save session.");
  }

  return response.json();
}

export async function getSessions() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to load sessions.");
  }

  return response.json();
}