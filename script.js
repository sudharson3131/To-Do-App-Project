
let btn = document.getElementById("To-Do-btn");

btn.addEventListener("click", function () {
    var input = document.querySelector(".To-Do-input").value.trim(); // Get input value

    if (input === "") {
        alert("Task cannot be empty!"); // Prevent empty tasks
        return;
    }



        var div = document.createElement("div"); // Create a task container
        div.classList.add("task-item"); // Add class for styling

        var checkbox = document.createElement("input"); // Create checkbox
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");

        var span = document.createElement("span"); // Create span for task text
        span.textContent = input;
        span.classList.add("task-text");

        checkbox.addEventListener("click",function(){
            if(checkbox.checked){
                span.classList.add("completed")
            }else {
                span.classList.remove("completed");
            } 
        })
        
        var deleteIcon = document.createElement("img"); // Create delete button (X icon)
        deleteIcon.src = "./assets/close.png"; // X icon URL
        deleteIcon.classList.add("delete-icon");

        // Append elements inside div
        div.appendChild(checkbox);
        div.appendChild(span);  
        div.appendChild(deleteIcon);

        // Append div to the task list container
        document.querySelector(".To-Do-add").appendChild(div);

        // Clear input field after adding task
        document.querySelector(".To-Do-input").value = "";

        // Delete task when clicking the "X" icon
        deleteIcon.addEventListener("click", function () {
            div.remove();
            console.log(`deleted sucessfully ${input}`);
            alert(`deleted sucessfully ${input}`)
        });

        console.log(input);
});
