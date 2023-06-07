const form = document.querySelector('#new-note-form');
const notesContainer = document.querySelector('#notes-container');

function fetchNotes() {
    fetch('/api/notes')
        .then(response => response.json())
        .then(notes => {
            notesContainer.innerHTML = ''; // Clear the container
            notes.forEach(note => {
                const div = document.createElement('div');
                div.textContent = `${note.title}: ${note.content}`;
                notesContainer.appendChild(div);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Fetch the notes when the page loads
fetchNotes();

form.addEventListener('submit', event => {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    const note = {
        title,
        content
    };

    fetch('/api/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
        .then(response => response.json())
        .then(note => {
            console.log('Note created:', note);
            fetchNotes(); // Fetch the notes again to update the UI
        })
        .catch(error => console.error('Error:', error));
});
