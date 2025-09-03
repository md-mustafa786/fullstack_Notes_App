const API_URL = import.meta.env.VITE_API_URL;

export const getNotes = async () => {
  const response = await fetch(`${API_URL}/api/notes`);
  return response.json();
};

export const addNote = async (note) => {
  const response = await fetch(`${API_URL}/api/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  return response.json();
};

export const deleteNote = async (id) => {
  const res = await fetch(`${API_URL}/api/notes/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Failed to delete note");
  }
};

export const updateNote = async (id, note) => {
  const response = await fetch(`${API_URL}/api/notes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  return response.json();
};
