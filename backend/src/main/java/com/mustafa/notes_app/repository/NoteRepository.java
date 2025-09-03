package com.mustafa.notes_app.repository;

import com.mustafa.notes_app.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note,Long> {
}
