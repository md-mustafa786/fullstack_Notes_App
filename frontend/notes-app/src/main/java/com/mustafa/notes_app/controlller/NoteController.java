package com.mustafa.notes_app.controlller;

import com.mustafa.notes_app.model.Note;
import com.mustafa.notes_app.service.NoteService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "*") // for react

public class NoteController {

    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PostMapping
    public Note create(@RequestBody Note note) {
        return noteService.createNote(note);
    }

    @GetMapping
    public List<Note> getAll() {
        return noteService.getAllNotes();
    }

    @GetMapping("/{id}")
    public Note getById(@PathVariable Long id) {
        return noteService.getNoteById(id);
    }

    @PutMapping("/{id}")
    public Note update(@PathVariable Long id, @RequestBody Note note) {
        return noteService.updateNote(id, note);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        noteService.deleteNote(id);
        return "Note deleted successfully";
    }
}
