const express = require('express')
const { response } = require('../app')
const router = express.Router();

const { 
    getCelebrity, 
    newCelebrity, 
    getSingleCelebrity, 
    updateCelebrity,
    deleteCelebrity
 } = require('../controllers/CelebrityController')

 const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')
router.route('/Celebrity').get(getCelebrity);
router.route('/Celebrity/:celebid').get(getSingleCelebrity);
router.route('/admin/Celebrity/new').post(isAuthenticatedUser, authorizeRoles('admin'),newCelebrity);

router.route('/admin/Celebrity/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateCelebrity)
                                  .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteCelebrity);
module.exports = router;