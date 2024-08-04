// routes/ComplaintRoutes.js
const express = require("express");
const router = express.Router();
const complaintController = require("../controllers/complaint");

// Define routes

router.post("/", complaintController.createComplaint);
router.get("/", complaintController.getComplaints);
router.get("/:id", complaintController.getComplaintById);
router.put("/:id", complaintController.updateComplaint);
router.delete("/:id", complaintController.deleteComplaint);

module.exports = router;
