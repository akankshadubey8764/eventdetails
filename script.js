const eventTitle = document.getElementById("event-title");
const eventDescription = document.getElementById("event-description");
const assignedTo = document.getElementById("assigned-to");
const statusText = document.getElementById("status-text");
const markComplete = document.getElementById("mark-complete");
const commentsList = document.getElementById("comments-list");
const newComment = document.getElementById("new-comment");
const addComment = document.getElementById("add-comment");

// Sample event data
const eventData = {
  title: "Event Title",
  description: "Event Description",
  assignedTo: "John Doe",
  status: "In Progress",
  comments: [
    { id: 1, text: "Comment 1" },
    { id: 2, text: "Comment 2" },
  ],
};

// Populate the modal with event data
eventTitle.value = eventData.title;
eventDescription.value = eventData;