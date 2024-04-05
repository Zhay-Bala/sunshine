// Array to store wishlist items
let wishlist = [];

// Function to add item to the wishlist
function addToWishlist() {
    // Get form input values
    const itemName = document.getElementById("item-name").value;
    const itemDescription = document.getElementById("item-description").value;
    const itemPhoto = document.getElementById("item-photo").files[0];

    // Create a new wishlist item object
    const newItem = {
        name: itemName,
        description: itemDescription,
        photo: itemPhoto ? URL.createObjectURL(itemPhoto) : null
    };

    // Add the new item to the wishlist array
    wishlist.push(newItem);

    // Clear form fields
    document.getElementById("item-name").value = "";
    document.getElementById("item-description").value = "";
    document.getElementById("item-photo").value = "";

    // Refresh the wishlist display
    displayWishlist();
}

// Function to display wishlist items
function displayWishlist() {
    const wishlistContainer = document.getElementById("wishlist-list");

    // Clear previous items
    wishlistContainer.innerHTML = "";

    // Loop through the wishlist array and create list items
    wishlist.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${item.name}</strong>: ${item.description}`;
        
        // Display photo if available
        if (item.photo) {
            const img = document.createElement("img");
            img.src = item.photo;
            img.alt = item.name;
            listItem.appendChild(img);
        }

        wishlistContainer.appendChild(listItem);
    });
}
