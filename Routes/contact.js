const express = require("express");
const contact = require("../Controllers/contact");
const isAthenticated = require("../Middlewares/Auth");
const router = express.Router();
const {
  newContact,
  getAllContacts,
  getContactById,
  deleteContact,
  updateContact,
  getContactByUserId
} = contact;

//Contact Routes
//@api name:create contact
//@api method:post
//@api endpoint:api/contact/new

router.post("/new", isAthenticated, newContact);

//@api name:get all contact
//@api method:get
//@api endpoint:api/contact/
router.get("/", getAllContacts);

//@api name:get all contact
//@api method:get
//@api endpoint:api/contact/:id
router.get("/:id", getContactById);

//@api name:get all contact
//@api method:delete
//@api endpoint:api/contact/:id
router.delete("/:id", deleteContact);

//@api name:update contact by id
//@api method:put
//@api endpoint:api/contact/:id
router.put("/:id", updateContact);

//@api name:get contact by user id
//@api method:get
//@api endpoint:api/contact/userid/:id
router.get("/userid/:id",getContactByUserId)

module.exports = router;
