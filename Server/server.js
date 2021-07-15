let toysDatabase = [];
let currentToyId = 1;

// Create a toy
function storeToy(toy) {
    // Assign a new ID to the toy
    toy.id = currentToyId;
    // Increase the ID number so the next toy gets a new ID
    currentToyId++;
    // Store the toy in our database
    toysDatabase.push(toy);

    console.log("Toy stored " + toy.id);
}

// List all toys
function listToys() {
    return toysDatabase;
}

// Update a toy
function updateToy(toyToUpdate) {
    // Find the toy in the database
    for (let toyInDatabase of toysDatabase) {
        if (toyInDatabase.id == toyToUpdate.id) {
            // Found it! Update the toy by copying the values
            toyInDatabase.name = toyToUpdate.name;
            toyInDatabase.description = toyToUpdate.description;
            toyInDatabase.image = toyToUpdate.image;
            toyInDatabase.category = toyToUpdate.category;
            toyInDatabase.status = toyToUpdate.status;

            console.log("Toy updated " + toyToUpdate.id);
            return;
        }
    }

    // Toy was not found
    console.log("Toy not found " + toyToUpdate.id);
}

// Delete a toy
function deleteToy(idToDelete) {
    // Find the toy in the database
    for (let toyIndex in toysDatabase) {
        let toyInDatabase = toysDatabase[toyIndex];
        if (toyInDatabase.id == idToDelete) {
            // Found it! Delete it
            toysDatabase.splice(toyIndex, 1);
            console.log("Toy deleted " + idToDelete);
            return;
        }
    }

    // Toy was not found
    console.log("Toy not found " + toyToUpdate.id);
}

// Extra: Search for matching toys
function searchToys(searchQuery) {
    let matchingToys = [];
    for (let toy of toysDatabase) {
        // If the toy matches the search query, add it to matchingToys
    }
    return matchingToys;
}


// Testing code
storeToy({
    "name": "Key holder",
    "description": "It holds your keys =)",
    "image": "images/Key holder.jpg",
    "category": "Key holders",
    "status": "Public"
});

storeToy({
    "name": "Key holder2",
    "description": "It holds your keys =)",
    "image": "images/Key holder.jpg",
    "category": "Key holders",
    "status": "Public"
});

updateToy({
    "id": 2,
    "name": "Key holder2 (updated)",
    "description": "It holds your keys =) (updated)",
    "image": "images/Key holder.jpg",
    "category": "Key holders",
    "status": "Public"
});

storeToy({
    "name": "Key holder2",
    "description": "It holds your keys =)",
    "image": "images/Key holder.jpg",
    "category": "Key holders",
    "status": "Public"
});

storeToy({
    "name": "Key holder2",
    "description": "It holds your keys =)",
    "image": "images/Key holder.jpg",
    "category": "Key holders",
    "status": "Public"
});

deleteToy(3);

let toys = listToys();
console.log("Retrieved toys", toys);