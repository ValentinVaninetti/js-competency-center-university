import {Request, Response} from "express";
import Library from "../entities/library/Library";

class LibraryController{
    async getAllLibraries(request: Request, response: Response) {
        try {
            const libraries = await Library.find().populate('bookList');
            response.json(libraries);
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getLibraryById(request: Request, response: Response){
        const libraryId = request.params.id;
        try {
            const library = await Library.findById(libraryId).populate('bookList');
            if (library) {
                response.json(library);
            } else {
                response.status(404).json({ message: 'University not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async createLibrary(request: Request, response: Response) {
        const { bookList, university }= request.body;

        const newLibrary = new Library({
            bookList:[],
            university
        });

        try {
            const createdLibrary = await newLibrary.save();
            response.json(createdLibrary);
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async updateLibrary(request: Request, response: Response) {
        const libraryId = request.params.id;
        const { bookList, university } = request.body;

        try {
            const editedLibrary = await Library.findByIdAndUpdate(
                libraryId,
                {bookList, university },
                { new: true }
            );

            if (editedLibrary) {
                response.json(editedLibrary);
            } else {
                response.status(404).json({ message: 'University not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async deleteLibrary(request: Request, response: Response) {
        const libraryID = request.params.id;

        try {
            const deletedLibrary = await Library.findByIdAndDelete(libraryID);

            if (deletedLibrary) {
                response.json(deletedLibrary);
            } else {
                response.status(404).json({ message: 'University not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
export default new LibraryController();