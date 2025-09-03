import { useState } from "react";
import { updateNote } from "../api";

const EditNote = ({ note, onUpdate, onClose }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = await updateNote(note.id, { title, content });
    onUpdate(updated);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Note</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Update</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditNote;
