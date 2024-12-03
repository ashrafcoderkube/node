
// Importing HTTP status codes and messages from utilities
const { Codes, Messages } = require("../Utils/httpCodesAndMessages");
// Importing the response handler utility for managing API responses
const ResponseHandler = require("../Utils/responseHandler");
const LibraryModel = require("../Models/Library.Model");

module.exports = {
  createLibrary: async (req, res, next) => {
    try {
      const result = await LibraryModel(req.body).save();;
      ResponseHandler.sendSuccess(res, result, Codes.CREATED, Messages.DATA_CREATED_SUCCESS);
      return;
    } catch (error) {
      ResponseHandler.sendError(res, error, Codes.INTERNAL_SERVER_ERROR, Messages.INTERNAL_SERVER_ERROR);
      next(error);
      return;
    }
  },

  getLibrary: async (req, res, next) => {
    try {
      if (req.query.id) {
        const result = await LibraryModel.findById(req.query.id);
        if (!result) {
          ResponseHandler.sendError(res, "Data not found", Codes.NOT_FOUND, Messages.NOT_FOUND);
          return;
        }
        ResponseHandler.sendSuccess(res, result, Codes.OK, Messages.DATA_RETRIEVED_SUCCESS);
        return;
      } 
      else if(req.query.page == -1){
          const result = await LibraryModel.find();
          ResponseHandler.sendSuccess(res , result , Codes.OK , Messages.DATA_RETRIEVED_SUCCESS);
      }
        else {
        let page = req.query.page || 1
        let query = {}
        if(req.query.searchKey){
          query = {
            $or: [
              { title: { $regex: req.query.searchKey, $options: 'i' } },
              { description: { $regex: req.query.searchKey, $options: 'i' } }
            ]
          }
        }
        let limit = 10
        const skip = (page - 1) * limit
        console.log(query)
        const result = await LibraryModel.find(query).skip(skip).limit(limit);
        const totalItem = await LibraryModel.countDocuments()
        const totalPages = Math.ceil(totalItem / limit)
        const results = { result, totalPages }
        ResponseHandler.sendSuccess(res, results, Codes.OK, Messages.DATA_RETRIEVED_SUCCESS);
        return;
      }
    } catch (error) {
      ResponseHandler.sendError(res, error, Codes.INTERNAL_SERVER_ERROR, Messages.INTERNAL_SERVER_ERROR);
      next(error);
      return;
    }
  },

  updateLibrary: async (req, res, next) => {
    try {
      if (req.query.id) {
        const result = await LibraryModel.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!result) {
          ResponseHandler.sendError(res, "Data not found", Codes.NOT_FOUND, Messages.NOT_FOUND);
          return;
        }
        ResponseHandler.sendSuccess(res, result, Codes.OK, Messages.DATA_UPDATED_SUCCESS);
        return;
      } else {
        ResponseHandler.sendError(res, "ID not provided", Codes.BAD_REQUEST, Messages.BAD_REQUEST);
        return;
      }
    } catch (error) {
      ResponseHandler.sendError(res, error, Codes.INTERNAL_SERVER_ERROR, Messages.INTERNAL_SERVER_ERROR);
      next(error);
    }
  },

  deleteLibrary: async (req, res, next) => {
    try {
      if (req.query.id) {
        const result = await LibraryModel.findByIdAndDelete(req.query.id);
        if (!result) {
          ResponseHandler.sendError(res, "Data not found", Codes.NOT_FOUND, Messages.NOT_FOUND);
          return;
        }
        ResponseHandler.sendSuccess(res, result, Codes.OK, Messages.DATA_RETRIEVED_SUCCESS);
        return;
      }else {
        ResponseHandler.sendError(res, "ID not provided", Codes.BAD_REQUEST, Messages.BAD_REQUEST);
        return;
      }
    } catch (error) {
      ResponseHandler.sendError(res, error, Codes.INTERNAL_SERVER_ERROR, Messages.INTERNAL_SERVER_ERROR);
      next(error);
    }
  }
}
              