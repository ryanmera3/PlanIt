import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId
export const NotesSchema = new Schema(
  {
    body: { type: String, required: true },
    taskId: { type: ObjectId, ref: 'Sprint', required: true },
    projectId: { type: ObjectId, ref: 'Project', required: true },
    creatorId: { type: ObjectId, ref: 'Profile', required: true },
    creator: { type: Object }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
NotesSchema.virtual('task', {
  localField: 'taskId',
  foreignField: '_id',
  justOne: true,
  ref: 'Task'
})
NotesSchema.virtual('project', {
  localField: 'projectId',
  foreignField: '_id',
  justOne: true,
  ref: 'Project'
})
