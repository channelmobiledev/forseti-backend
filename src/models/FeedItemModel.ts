import { Service } from 'typedi';
import mongoose, { Schema } from 'mongoose';

@Service()
export class FeedModelService {
  private model: any;

  constructor() {
    this.init();
  }

  private init() {
    const FeedSchema = new Schema({
      _id: Schema.Types.ObjectId,
      __v: Schema.Types.Number,
      user: {
        name: {
          type: String,
          minlength: [1, 'Field must not be empty'],
          required: true
        },
        avatar: {
          type: String,
          minlength: [1, 'Field must not be empty'],
          required: true
        }
      },
      post: {
        id: Number,
        title: {
          type: String,
          minlength: [1, 'Field must not be empty'],
          required: true
        },
        photo: {
          type: String,
          minlength: [1, 'Field must not be empty'],
          required: true
        }
      }
    });

    this.model = mongoose.model('FeedModel', FeedSchema);
  }

  getInstance() {
    return this.model;
  }
}
