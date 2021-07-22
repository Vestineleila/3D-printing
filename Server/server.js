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

    return toy;
}

// List all toys
function listToys() {
    return toysDatabase;
}

// Retrieve a toy
function getToy(id) {
    // Find the toy in the database
    for (let toyInDatabase of toysDatabase) {
        if (toyInDatabase.id == id) {
            return toyInDatabase;
        }
    }
    return null;
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
            return toyInDatabase;
        }
    }

    // Toy was not found
    console.log("Toy not found " + toyToUpdate.id);
    return null;
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
            return true;
        }
    }

    // Toy was not found
    console.log("Toy not found " + idToDelete);
    return false;
}

// Extra: Search for matching toys
function searchToys(searchQuery) {
    let matchingToys = [];
    for (let toy of toysDatabase) {
        // CHALLENGE! Make this work
        // If the toy matches the search query, add it to matchingToys
    }
    return matchingToys;
}


console.log("Running server!");

let express = require("express");
let app = express();
app.use(express.json());

app.get("/toys", function (request, response) {
    let toys = listToys();
    response.send(toys);
});

app.post("/toys", function (request, response) {
    let createdToy = storeToy(request.body);
    response.send(createdToy);
});

app.get("/toys/:toyId", function (request, response) {
    let toyId = request.params.toyId;
    let toy = getToy(toyId);
    response.send(toy);
});

app.put("/toys/:toyId", function (request, response) {
    let toyIdFromUrl = request.params.toyId;
    let toyFromBody = request.body;
    if (toyFromBody.id != toyIdFromUrl) {
        response.send("Toy IDs do not match!!");
    }
    else {
        let updatedToy = updateToy(toyFromBody);
        response.send(updatedToy);
    }
});

app.delete("/toys/:toyId", function (request, response) {
    let toyId = request.params.toyId;
    let wasDeleted = deleteToy(toyId);

    if (wasDeleted) {
        response.send("Deleted!");
    }
    else {
        response.send("Toy not found!");
    }
});

app.listen(8080);


