
const express = require("express");
const router = express.Router();

router.post("/" ,TypeController.createType);
router.get("/" ,TypeController.getType);
router.put("/" ,TypeController.updateType);
router.delete("/" ,TypeController.deleteType);

module.exports = router;
              