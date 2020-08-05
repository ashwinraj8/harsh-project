let express = require('express');
const Leaders = require('./../models/leader')
let router  = express.Router();


router.get('/leader',ensureAuthenticated,async (req, res) => {
    
    const leaders = await Leaders.find().sort({ createdAt: 'desc' })
    let name = req.user.name
      let email = req.user.email
    //console.log(articles);
   
    res.render('home/index', { leaders: leaders, admin:admin,name:name,email:email})
  })

module.exports = router