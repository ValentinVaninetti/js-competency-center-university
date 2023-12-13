import {Request, Response} from "express";
import Library from "../entities/library/Library";

class LibraryController{
    async getAllLibraries(request: Request, response: Response) {
        try {
            const libraries = await Library.find().populate('bookList');
            response.status(200).json({message:"Success", data:libraries});
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getLibraryById(request: Request, response: Response){
        const libraryId = request.params.id;
        try {
            const library = await Library.findById(libraryId).populate('bookList');
            if (library) {
                response.status(200).json({message:"Success", data:library});
            } else {
                response.status(404).json({ message: 'University not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async createLibrary(request: Request, response: Response) {
        try {
            const createdLibrary = await Library.create(request.body);
            response.status(201).json({status:"Success", data:createdLibrary});
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async updateLibrary(request: Request, response: Response) {
        try {
            const editedLibrary = await Library.findByIdAndUpdate(
                request.params.id,
                request.body,
                { new: true }
            );
            if (editedLibrary) {
                response.status(200).json({status: "Success", data: editedLibrary});
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
                response.status(200).json({status:"Success", data:deletedLibrary});
            } else {
                response.status(404).json({ message: 'University not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
export default new LibraryController();