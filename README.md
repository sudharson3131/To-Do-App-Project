# To-Do App 📝  

A simple and responsive To-Do List web application that allows users to add tasks, mark them as completed, and delete them when no longer needed.

## Features 🚀  
✅ **Add Tasks** – Users can enter a task and add it to the list.  
✅ **Strike Out Completed Tasks** – Clicking the checkbox marks the task as completed (strikes out text).  
✅ **Delete Tasks** – Clicking the "X" button removes a task from the list.  
✅ **Responsive Design** – Fully optimized for desktop, tablet, and mobile.  
✅ **Input Validation** – Prevents adding empty tasks.  

## Technologies Used 🛠  
- **HTML** – Structuring the UI.  
- **CSS** – Styling and making the app responsive.  
- **JavaScript** – Handling events and user interactions.  

## How to Use 🔹  
1. Type a task in the input field.  
2. Click the "Add" button to add the task to the list.  
3. Click the checkbox to mark a task as completed (text gets strikethrough).  
4. Click the "X" icon to delete a task.  

## Challenges Faced & Solutions 🔥  
### 1️⃣ Checkbox Not Striking Out Text  
- **Issue:** Initially, the checkbox was not updating the text style.  
- **Solution:** Used `classList.toggle("completed")` inside a `change` event listener.  

### 2️⃣ Preventing Empty Task Entries  
- **Issue:** The app allowed users to add empty tasks.  
- **Solution:** Used `trim()` to validate input and prevent blank submissions.  

---

### **Live Demo & Source Code**  
📌 **GitHub Repository:** https://github.com/sudharson3131/To-Do-App-Project.git

![image](https://github.com/user-attachments/assets/1355c956-43a4-4488-863d-5f3af2e54d45)


---

