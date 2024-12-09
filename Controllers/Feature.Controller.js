const { Codes, Messages } = require("../Utils/httpCodesAndMessages");
const ResponseHandler = require("../Utils/responseHandler");
const TutorialsModel = require("../Models/Tutorials.Model");

module.exports = {
  getFeaturedTutorials: async (req, res, next) => {
    try {
      const result = await TutorialsModel.aggregate([
        { $sample: { size: 6 } },
        {
          $lookup: {
            from: "categories", // Name of the collection in the database for `category`
            localField: "category", // Field in `TutorialsModel` referencing the category
            foreignField: "_id", // Field in `categories` that matches `category`
            as: "category", // Name of the resulting array field
          },
        },
        {
          $lookup: {
            from: "difficulties", // Name of the collection in the database for `difficulty`
            localField: "difficulty", // Field in `TutorialsModel` referencing the difficulty
            foreignField: "_id", // Field in `difficulties` that matches `difficulty`
            as: "difficulty", // Name of the resulting array field
          },
        },
        {
          $project: {
            "category._id": 0, // Optionally hide fields, like `_id`, in the category
            "difficulty._id": 0, // Optionally hide fields in the difficulty
          },
        },
      ]);

      if (!result || result.length === 0) {
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
