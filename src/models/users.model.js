// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({

    user_name: {
      type: String,
      unique: true,
      required: true,
      lowercase: true
    },
    display_name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
