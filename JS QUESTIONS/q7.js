// The Local Storage Manager:
//     You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

function saveNoteToLocalStorage(note) {
    if (typeof note !== 'object' || note === null) {
        throw new Error('Note must be a non-null object');
    }
    const noteKey = `note_${note.id}`;
    localStorage.setItem(noteKey, JSON.stringify(note));
}

// Example usage:
const note = {
    id: 1,
    title: "Meeting Notes",
    content: "Discuss project milestones and deadlines."
};

saveNoteToLocalStorage(note);