// routes/AnnouncementRoutes.js
const express = require("express");
const router = express.Router();
const announcementController = require("../controllers/announcements");
const authorization = require("../middlewares/authorization");

// Define routes

router.post("/", announcementController.createAnnouncement);
router.get("/", announcementController.getAnnouncements);
router.get("/:id", announcementController.getAnnouncementById);
router.put("/:id", announcementController.updateAnnouncement);
router.delete("/:id", announcementController.deleteAnnouncement);

module.exports = router;
