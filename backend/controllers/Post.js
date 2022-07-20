import Post from '../models/Post.js'

const postAJob = async(req,res) => {
  const {
    company,
    jobTitle,
    jobDescription,
    skills,
    salary,
    jobType
  } = req.body;
  const newPost = new Post({
    userId : req.user._id,
    company,
    jobTitle,
    jobDescription,
    skills,
    salary,
    jobType
  })

  const createdPost = await newPost.save();
  res.status(200).json(createdPost);
}

const getAllJobs = async(req,res) => {
  const data = await Post.find({}).populate('User','userId');
  res.json(data)
}