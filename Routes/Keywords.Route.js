
const express = require("express");
const router = express.Router();

const KeywordsController = require("../Controllers/Keywords.Controller")

router.post("/" ,KeywordsController.createKeywords);
router.get("/" ,KeywordsController.getKeywords);
router.put("/" ,KeywordsController.updateKeywords);
router.delete("/" ,KeywordsController.deleteKeywords);

module.exports = router;
              