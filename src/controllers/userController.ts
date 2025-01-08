import { Request, Response } from 'express';
import { User, Thought } from '../models/index.js';

export const getAllUsers = async (_: Request, res: Response) => {
  try {
    const users = await User.find().populate('thoughts').populate('friends');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.userId)
      .populate('thoughts')
      .populate('friends');

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json(user);
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json(updatedUser);
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);

    if (!deletedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Remove user's thoughts
    await Thought.deleteMany({ _id: { $in: deletedUser.thoughts } });

    res.status(200).json({ message: 'User and associated thoughts deleted' });
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};

export const addFriend = async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    );

    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json(updatedUser);
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};

export const removeFriend = async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $pull: { friends: req.params.friendId } },
      { new: true }
    );

    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json(updatedUser);
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};
