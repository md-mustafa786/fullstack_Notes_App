import { useEffect, useState } from "react";
import { getNotes, deleteNote } from "../api";
import AddNote from "./AddNote";
import EditNote from "./EditNote";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const data = await getNotes();
      setNotes(data);
    };
    fetchNotes();
  }, []);

  const handleAdd = (note) => setNotes([note, ...notes]);

  const handleDelete = async (id) => {
    await deleteNote(id);
    setNotes(notes.filter((n) => n.id !== id));
  };

  const handleUpdate = (updatedNote) => {
    setNotes(notes.map((n) => (n.id === updatedNote.id ? updatedNote : n)));
  };

  return (
    <div>
      <h1>My Notes</h1>

      <AddNote onAdd={handleAdd} />

      {editing && (
        <EditNote note={editing} onUpdate={handleUpdate} onClose={() => setEditing(null)} />
      )}

      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <strong>{note.title}</strong> - {note.content}
            <button onClick={() => setEditing(note)}>Edit</button>
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
