module.exports = {
  createCategory: async (req, res, next) => {
    try {
      const result = await CategoryModel(req.body).save();
      return;
    } catch (error) {
      console.log(error)
      return;
    }
  },

  getCategory: async (req, res, next) => {
    try {
      if (req.query.id) {
        const result = await CategoryModel.findById(req.query.id);
        return;
      } else {
        res.status(200)
        return;
      }
    } catch (error) {
      
      return;
    }
  },

  updateCategory: async (req, res, next) => {
    try {
      if (req.query.id) {
        const result = await CategoryModel.findByIdAndUpdate(req.query.id, req.body, { new: true });
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

  deleteCategory: async (req, res, next) => {
    try {
      if (req.query.id) {
        const result = await CategoryModel.findByIdAndDelete(req.query.id);
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
              