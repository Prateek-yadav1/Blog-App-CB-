const Blogs = require('../models/blogs');
const Actors = require('../models/actors');


module.exports.getBlogs=async (req,res)=>{
  let blogs=await Blogs.find({});
  console.log(blogs);
    res.render('blogs',{
        blogs
    });
}

module.exports.postBlogs= async (req, res) => {
    const { title,actor, content } = req.body;
    console.log(title);
    console.log(content);
    console.log(actor);

    try {
        await Blogs.create({ title,actor, content }); // <-- Save to MongoDB
          res.redirect('/blogs');
    } catch (err) {
        console.error('Error saving blog:', err);
        res.status(500).send('Error saving blog');
    }
}

module.exports.getUpdate= async (req, res) => {
const {id} = req.query;
let blog=await Blogs.find({_id:id});
res.render('updateBlogs',{blog:blog[0]});// blog:blog[0] is used to send the first element of the array blog to the updateBlogs view
}

module.exports.postUpdate= async (req, res) => {
const {title,actor,content,id}=req.body;
let blog=await Blogs.findOne({_id:id});

blog.title=title;
blog.actor=actor;
blog.content=content;
await blog.save();
res.redirect('/blogs');
}

module.exports.getUpdateActor= async (req, res) => {
const {id} = req.query;
let actor=await Actors.find({_id:id});
res.render('updateActors',{actor:actor[0]});// actor:actor[0] is used to send the first element of the array actor to the updateActors view
}

module.exports.postUpdateActor= async (req, res) => {
const {name,image,age,id}=req.body;
let actor=await Actors.findOne({_id:id});

actor.name=name;
actor.image=image;
actor.age=age;
await actor.save();
res.redirect('/actors');
}

module.exports.getDetails= async (req, res) => {
const {id} = req.query;
let blog=await Blogs.findOne({_id:id});
console.log(blog.title);
    console.log(blog.content);
    console.log(blog.actor);
res.render('details',{blog});}

module.exports.getActors= async (req, res) => {
let actors=await Actors.find({});

res.render('actors',{actors});
}

module.exports.postActors= async (req, res) => {
    const{ name, image, age } = req.body;
await Actors.create({ name, image, age });
    res.redirect('/actors');

}

module.exports.getDelete= async (req, res) => {
    const {id} = req.query;
  await Blogs.deleteOne({_id: id});//previously instead of id we have to use new ObjectId(id) but here mongoose automatically converts the string to ObjectId
    res.redirect('/blogs');
}
module.exports.getDeleteActor= async (req, res) => {
    const {id} = req.query;
  await Actors.deleteOne({_id: id});//previously instead of id we have to use new ObjectId(id) but here mongoose automatically converts the string to ObjectId
    res.redirect('/actors');
}