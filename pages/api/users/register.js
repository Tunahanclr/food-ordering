import User from "../../../models/User";
import dbConnect from "../../../util/dbConnect";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
  await dbConnect();
  const body = req.body;
  const user = await User.findOne({ email: body.email });
  if (user) {
    res.status(400).json({ message: "User already exists" });
    return;
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(body.password, salt);
    body.password = hash;
    const newUser = await User.create(body);
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
  }
};

export default handler;
