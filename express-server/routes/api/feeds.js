const express = require("express");
const router = express.Router();
const passport = require("passport");

const Feed = require("../../models/Feed");


router.get("/test", (req, res) => {
    res.json({msg: "api works well"});
})
// $router /api/feeds/create POST
router.post("/create", passport.authenticate("jwt", {session: false}), (req, res) => {
    const feedObj = {};
    if (req.body.name) feedObj.name = req.body.name;
    if (req.body.tag) feedObj.name = req.body.tag;
    if (req.body.avatar) feedObj.name = req.body.avatar;
    if (req.body.text) feedObj.name = req.body.text;
    if (req.body.imgs) {
        feedObj.imgs = req.body.imgs.split("|");
    }
    
    feedObj.user_id = req.user.id;


    // save feed
    new Feed(feedObj).save().then(feed => {
        res.json(feed);
    });

    if(!req.body || req.body.create){

        return res.render('error',{error:'No feed found',title:'error'});
    }

    Feed(feedObj).create({

        feedPost: req.body.create,
        author: req.session.user.id
    },function(err, create){
        if(err) return res.render('error',{error:'error with create feed',title:'error'});

        console.log('Created Feed');
        res.redirect('/self/latest' + create._id);
    });
});

// $router /api/feeds/concern/latest
//  Get latest feed by following id  from request
router.get("/concern/latest:id", passport.authenticate("jwt", {session: false}), (req, res) => {



})

// $router /api/feeds/self/latest
// get personal feed by user id from token (reference :user's router get current)
router.get("/self/latest:id", passport.authenticate("jwt", {session: false}), (req, res) => {

    Feed(feedObj).find({_id:req.params.id},function(err,create){
        User.findOne({_id:create.author},function(err,user){
            res.render('lasets',{username:users.username,content:create.create})
        });
    });
})

// Get lasets feeds from recomment user_id from the req
router.get("/recommend/latest", passport.authenticate("jwt", {session: false}), (req, res) => {

})

module.exports = router;