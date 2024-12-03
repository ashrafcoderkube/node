
// Importing HTTP status codes and messages from utilities
const { Codes, Messages } = require("../Utils/httpCodesAndMessages");
// Importing the response handler utility for managing API responses
const ResponseHandler = require("../Utils/responseHandler");
const KeywordsModel = require("../Models/Keywords.Model");

module.exports = {
  createKeywords: async (req, res, next) => {
    try {
      const result = await KeywordsModel(req.body).save();
      ResponseHandler.sendSuccess(res, result, Codes.CREATED, Messages.DATA_CREATED_SUCCESS);
      return;
    } catch (error) {
      ResponseHandler.sendError(res, error, Codes.INTERNAL_SERVER_ERROR, Messages.INTERNAL_SERVER_ERROR);
      next(error);
      return;
    }
  },

  getKeywords: async (req, res, next) => {
    try {
      if (req.query.id) {
        const result = await KeywordsModel.findById(req.query.id);
        if (!result) {
          ResponseHandler.sendError(res, "Data not found", Codes.NOT_FOUND, Messages.NOT_FOUND);
          return;
        }
        ResponseHandler.sendSuccess(res, result, Codes.OK, Messages.DATA_RETRIEVED_SUCCESS);
        return;
      } else {
        let page = req.query.page || 1
        let limit = 10
        const skip = (page - 1) * limit
        const result = await KeywordsModel.find().skip(skip).limit(limit);
        const totalItem = await KeywordsModel.countDocuments()
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

  updateKeywords: async (req, res, next) => {
    try {
      if (req.query.id) {
        const result = await KeywordsModel.findByIdAndUpdate(req.query.id, req.body, { new: true });
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

  deleteKeywords: async (req, res, next) => {
    try {
      if (req.query.id) {
        const result = await KeywordsModel.findByIdAndDelete(req.query.id);
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
              