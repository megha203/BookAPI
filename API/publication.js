const Router = require("express").Router();
const PublicationModel = require('../schema/publication');
const BookModel = require("../schema/book");

// Route    - /publication
// Des      - to get all publications
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
Router.get("/", async (req, res) => {
    const getAllPublications = await PublicationModel.find();
    return res.json(getAllPublications);
});

//TODO: Student Task
/*
Route           /publication/new
Description     to add new publications
Access          PUBLIC
Parameters      NONE
Method          POST
*/
Router.post("/new", (req, res) => {
    const { newPublication } = req.body;

    PublicationModel.create(newPublication);

    return res.json({ message: "Publication added to the database" });
});


/*
Route               /publication/delete
Description         delete an publication
Access              PUBLIC
Parameters          id
Method              DELETE
*/
Router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;

    const updatePublicationDatabase = await PublicationModel.findOneAndDelete({
        id:id,
    });

    return res.json({ publications:updatePublicationDatabase });
});

/*
Route               /publication/delete/book
Description         delete an book from a publication
Access              PUBLIC
Parameters          id, isbn
Method              DELETE
*/

Router.delete("/delete/book/:isbn/:id", async (req, res) => {
    const { isbn, id } = req.params;

    //updating book database object
    const updatedBook = await BookModel.findOneAndUpdate(
        {
            ISBN: isbn,
        },
        {
            $pull: {
                publications: parseInt(id),
            },
        },
        {
            new: true,
        }
    );

    const updatedPublication = await PublicationModel.findOneAndUpdate(
        {
            id: parseInt(id),
        },
        {
            $pull: {
                books: isbn,
            },
        },
        {
            new: true,
        }
    );

    return res.json({
        book: updatedBook,
        publication: updatedPublication,
    });
});

module.exports = Router;