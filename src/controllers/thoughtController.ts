import { Request, Response } from 'express';
import { Thought, User } from '../models/index.js';

export const getAllThoughts = async (_: Request, res: Response) => {
  try {
    const thoughts = await Thought.find();
    res.status(200).json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getThoughtById = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);

    if (!thought) {
      res.status(404).json({ message: 'Thought not found' });
      return;
    }

    res.status(200).json(thought);
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};

export const createThought = async (req: Request, res: Response) => {
  try {
    const newThought = await Thought.create(req.body);

    // Push thought ID to the associated user's "thoughts" field
    await User.findByIdAndUpdate(req.body.userId, {
      $push: { thoughts: newThought._id },
    });

    res.status(201).json(newThought);
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};

export const updateThought = async (req: Request, res: Response) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedThought) {
      res.status(404).json({ message: 'Thought not found' });
      return;
    }

    res.status(200).json(updatedThought);
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};

export const deleteThought = async (req: Request, res: Response) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);

    if (!deletedThought) {
      res.status(404).json({ message: 'Thought not found' });
      return;
    }

    // Remove the thought ID from the associated user's "thoughts" field
    await User.findOneAndUpdate(
      { thoughts: req.params.thoughtId },
      { $pull: { thoughts: req.params.thoughtId } }
    );

    res.status(200).json({ message: 'Thought deleted' });
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};

export const addReaction = async (req: Request, res: Response) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } }, // req.body should include { reactionBody, username }
      { new: true, runValidators: true }
    );

    if (!updatedThought) {
      res.status(404).json({ message: 'Thought not found' });
      return;
    }

    res.status(200).json(updatedThought);
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};

export const deleteReaction = async (req: Request, res: Response) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    );

    if (!updatedThought) {
      res.status(404).json({ message: 'Thought not found' });
      return;
    }

    res.status(200).json(updatedThought);
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};
