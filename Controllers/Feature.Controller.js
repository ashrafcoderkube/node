const { Codes, Messages } = require("../Utils/httpCodesAndMessages");
const ResponseHandler = require("../Utils/responseHandler");
const TutorialsModel = require("../Models/Tutorials.Model");

module.exports = {
  getFeaturedTutorials: async (req, res) => {
    try {
      // const tutorials = await TutorialsModel.aggregate([
      //   { $sample: { size: 6 } },
      // ]);

      const result = await TutorialsModel.aggregate([{ $sample: { size: 6 } }]);

      if (!result) {
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
        result,
        Codes.OK,
        Messages.DATA_RETRIEVED_SUCCESS
      );
      return;
    } catch (error) {
      ResponseHandler.sendError(
        res,
        error,
        Codes.INTERNAL_SERVER_ERROR,
        Messages.INTERNAL_SERVER_ERROR
      );
      next(error);
      return;
    }
  },
};
