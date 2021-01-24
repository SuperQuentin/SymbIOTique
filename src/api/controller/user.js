const User = require('../../model/user')
const mongoose = require('mongoose')

module.exports.all = (req, res) => {
    User.find({}, (err, doc) => {
        if (doc) {
            console.log('From db : ' + doc)
            res.status(200).json({
                users : doc
            })
        }
        else{
            res.status(404).json({
                error: 'users not found'
            })
        }
        if(err) {
            console.error(err)
            if(err){
                res.status(500).json({error: 'an error occurred during the research'})
            }
        }
    }).populate("devices")
}

module.exports.find = (req,res) => 
{
    const id = req.params.id

    User.findById(id, (err, doc) => {
        if (doc) {
            console.log('From db : ' + doc)
            res.status(200).json({
                user : doc
            })
        }
        else {
            res.status(404).json({
                error: 'user not found'
            })
        }

        if (err) {
            console.error(err)
            if(err){
                res.status(500).json({error: 'an error occurred during the research'})
            }
        }
    }).populate("devices")
}


module.exports.create = (req,res) =>
{
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        ...req.body
    })

    console.log(user)

    user
    .save((err, doc) => {
        if (doc) {
            console.log(doc),
            res.status(200).json({
                createdUser : doc
            })
        }
        if (err) {
            console.error(err)
            if(err.code === 11000){
                res.status(500).json({error: "user already existe with the same username"})
            }
            else {
                res.status(500).json({error: 'user hasn\'t been create'})
            }
        }
    })
}

module.exports.update = (req,res) =>
{
    User.findOneAndUpdate({_id: req.body.id}, req.body, {new: true},(err, doc) => {
        if (doc) {
            console.log(doc)
            res.status(200).json({
                updatedUser : doc
            })
        }
        if (err) {
            console.error(err)
            if(err){
                res.status(500).json({error: 'user hasn\'t been update'})
            }
        }
    })
}

module.exports.delete = (req,res) =>
{
    User.deleteOne({_id: req.body.id}, (err, doc) => {
        if (doc) {
            console.log(doc)
            if (doc.deletedCount === 1) {
                res.status(200).json({
                    message : `user ${req.body.id} has been delete`
                })
            }
            else {
                res.status(404).json({
                    error: 'user not found'
                })
            }
        }
        if (err) {
            console.error(err)
            if(err){
                res.status(500).json({error: 'an error occurred during the delete'})
            }
        }
    })
}

module.exports.addDevice = (req,res) => {
    User.findByIdAndUpdate(req.body.id, {
        $push: { devices: req.body.deviceId}
    },{new: true},
    (err, doc) => {
        if (doc) {
            console.log(doc)
            res.status(200).json({
                updatedUser : doc
            })
        }
        if (err) {
            console.error(err)
            if(err){
                res.status(500).json({error: 'device hasn\'t been add to user'})
            }
        }
    })
}
module.exports.removeDevice = (req,res) => {
    User.findByIdAndUpdate(req.body.id, {
        $pull: { devices: req.body.deviceId}
    },{new: true},
    (err, doc) => {
        if (doc) {
            console.log(doc)
            res.status(200).json({
                updatedUser : doc
            })
        }
        if (err) {
            console.error(err)
            if(err){
                res.status(500).json({error: 'device hasn\'t been add to user'})
            }
        }
    })
}