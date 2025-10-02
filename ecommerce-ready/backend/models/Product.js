import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String }
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);
