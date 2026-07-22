const API_URL = `${import.meta.env.VITE_API_URL}/api/sessions`;

export async function saveSession(sessionData) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sessionData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to save session.");
  }

  return data;
}

export async function getSessions() {
  const response = await fetch(API_URL);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to load sessions.");
  }

  return data;
}

export async function getSession(id) {
  const response = await fetch(`${API_URL}/${id}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to load session.");
  }

  return data;
}

export async function updateSession(id, sessionData) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sessionData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update session.");
  }

  return data;
}

export async function deleteSession(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete session.");
  }

  return data;
}