import express from "express";

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  try {
    const users = await req.db?.user.findAll();

    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
});

userRouter.post("/", async (req, res) => {
  try {
    const { body } = req;
    const { firstName, lastName, type } = body;
    let { familyId } = body;

    let family;

    if (!familyId) {
      family = await req.db?.family.create();
      familyId = family?.id;
    }

    const user = await req.db?.user.create({
      firstName,
      lastName,
      type,
      familyId,
    });

    res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
});

export default userRouter;
