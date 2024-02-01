function addItem() {
    // Get the value from the input field
    var newItemValue = document.getElementById("newItem").value;

    // Check if the input is not empty
    if (newItemValue.trim() !== "") {
        // Create a new list item
        var newItem = document.createElement("li");
        newItem.textContent = newItemValue;

        // Append the new item to the list
        document.getElementById("itemList").appendChild(newItem);

        // Clear the input field
        document.getElementById("newItem").value = "";
    }
}

function removeSelectedItem() {
    var itemList = document.getElementById("itemList");
    var selectedItems = document.querySelectorAll("#itemList li.selected");

    // Remove all selected items
    selectedItems.forEach(function (item) {
        itemList.removeChild(item);
    });
}

function changeContent(sectionId) {
    // Get the section element by its ID
    var section = document.getElementById(sectionId);

    // Change the content of the section
    section.innerHTML = `
        <h2>${sectionId}</h2>
        <p>This content has been changed by clicking on an item in the sidebar.</p>
    `;
}

function changeColorScheme() {
    // Toggle between light and dark color schemes
    document.documentElement.classList.toggle('dark-mode');
}

// Toggle selected class on list items
document.getElementById("itemList").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("selected");
    }
});

function showPopup() {
    // Display the pop-up message
    document.getElementById("popupMessage").style.display = "block";
}

function hidePopup() {
    // Hide the pop-up message
    document.getElementById("popupMessage").style.display = "none";
}