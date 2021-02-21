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

router.route('/Celebrity').get(getCelebrity);
router.route('/Celebrity/:id').get(getSingleCelebrity);
router.route('/admin/Celebrity/new').post(newCelebrity);

router.route('/admin/Celebrity/:id').put(updateCelebrity)
                                  .delete(deleteCelebrity);
module.exports = router;