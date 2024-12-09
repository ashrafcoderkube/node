const { Codes, Messages } = require("../Utils/httpCodesAndMessages");
const ResponseHandler = require("../Utils/responseHandler");
const TutorialsModel = require("../Models/Tutorials.Model");

module.exports = {
  getFeaturedTutorials: async (req, res, next) => {
    try {
      const result = await TutorialsModel.aggregate([
        { $sample: { size: 6 } },
      ]);

      const tutorials = await TutorialsModel.populate(result, [
        { path: "category", select: "name" }, 
        { path: "difficulty", select: "name" }, 
      ]);


      if (!tutorials || tutorials.length === 0) {
        ResponseHandler.sendError(
          res,
          "Data not found",
          Codes.NOT_FOUND,
          Messages.NOT_FOUND
        );
        return;
      }

      ResponseHandler.sendSuccess(
        res,
        tutorials,
        Codes.OK,
        Messages.DATA_RETRIEVED_SUCCESS
      );
    } catch (error) {
      ResponseHandler.sendError(
        res,
        error.message,
        Codes.INTERNAL_SERVER_ERROR,
        Messages.INTERNAL_SERVER_ERROR
      );
      next(error);
    }
  },
};
