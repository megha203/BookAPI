const Router = require("express").Router();
const AuthorModel = require("../schema/author");

// Route    - /author
// Des      - to get all authors
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
Router.get("/", async (req, res) => {
    const getAllAuthors = await AuthorModel.find();
    return res.json(getAllAuthors);
});

// Route     /author/new
// Description add new author
// Access PUBLIC
// Parameters NONE
// METHOD POST
Router.post("/new", (req, res) => {
    const { newAuthor } = req.body;

    AuthorModel.create(newAuthor);

    return res.json({ message: "Author added to the database" });
});

// Route       /author/updateName
// Description Update name of the author
// Access      Public
// Parameters  id
// Method      Put
// Params in the req.body are always in string format

Router.put("/updateName/:id", async (req, res) => {
    const { name } = req.body.newName;
    const updateAuthor = await AuthorModel.findOneAndUpdate(
        {
            id: parseInt(req.params.id),
        },
        {
            name: name,
        },
        {
            new: true,
        }
    );

    return res.json({ author: updateAuthor });
});


/*
Route               /author/delete
Description         delete an author
Access              PUBLIC
Parameters          id
Method              DELETE
*/

Router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;

    const updateAuthorDatabase = await AuthorModel.findOneAndDelete({
        id:id,
    });

    return res.json({ authors:updateAuthorDatabase });
});

module.exports = Router;