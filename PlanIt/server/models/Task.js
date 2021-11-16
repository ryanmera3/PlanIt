import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId
export const TaskSchema = new Schema(
  {
    name: { type: String, required: true },
    weight: { type: Number, required: true },
    isComplete: { type: Boolean, default: false },
    sprintId: { type: ObjectId, ref: 'Sprint', required: true },
    projectId: { type: ObjectId, ref: 'Project', required: true },
    creator: { type: Object },
    creatorId: { type: ObjectId, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
TaskSchema.virtual('sprint', {
  localField: 'sprintId',
  foreignField: '_id',
  justOne: true,
  ref: 'Sprint'
})
TaskSchema.virtual('project', {
  localField: 'projectId',
  foreignField: '_id',
  justOne: true,
  ref: 'Project'
})
