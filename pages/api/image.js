export default (req, res) => {
  const imageURL = 'https://i.imgur.com/tylMDzE.jpg';  // Replace with your own image URL
  res.status(200).json({ url: imageURL });
};
