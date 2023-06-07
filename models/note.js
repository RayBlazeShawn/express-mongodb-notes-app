// Import the mongoose module. Mongoose provides a straight-forward, schema-based solution to model your application data with MongoDB.
const mongoose = require('mongoose');

// Create a new mongoose Schema. A schema defines the structure of documents within a particular collection. Documents are instances of our model.
// In this case, we're creating a schema for our 'Note' documents.
const NoteSchema = mongoose.Schema({
    // 'title' is a path in our schema with type String. It's also required, meaning a value must be provided when creating a new 'Note'.
    title: {
        type: String,
        required: true
    },
    // 'content' is another path in our schema, also of type String and required.
    content: {
        type: String,
        required: true
    },
    // 'date' is a path of type Date. It's not required because we're providing a default value. If no value is provided, it defaults to the current date and time.
    date: {
        type: Date,
        default: Date.now
    }
});

// We create a mongoose model from our schema and export it. A model is a constructor compiled from our schema definition. An instance of our model is a document.
// 'Note' is the name of our model. This name is what mongoose will use to find the 'notes' collection in the database. Mongoose automatically looks for the plural,
// lowercase version of the model name. In this case, the 'Note' model corresponds to the 'notes' collection in the database.
module.exports = mongoose.model('Note', NoteSchema);
