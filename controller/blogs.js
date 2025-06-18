const Blogs = require('../models/blogs');

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

module.exports.getDelete= async (req, res) => {
    const {id} = req.query;
  await Blogs.deleteOne({_id: id});//previously instead of id we have to use new ObjectId(id) but here mongoose automatically converts the string to ObjectId
    res.redirect('/blogs');
}