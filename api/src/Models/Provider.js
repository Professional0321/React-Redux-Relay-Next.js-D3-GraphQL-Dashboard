const BaseModel = require("./BaseModel");

class Provider extends BaseModel {
  constructor(db) {
    super();

    this.db = db;

    this.schema = new this.db.mongoose.Schema({
      _id: {
        type: this.db.mongoose.Schema.Types.ObjectId,
        auto: true
      },
      whenCreated: {
        type: Date,
        default: Date.now,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getValidator("whenCreated")
      },
      whenUpdated: {
        type: Date,
        default: Date.now,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getValidator("whenUpdated")
      },
      name: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getValidator("name")
      },
      profile: {
        type: this.db.mongoose.Schema.Types.Mixed,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getValidator("profile")
      },
      accessToken: {
        type: String,
        validate: this.getValidator("accessToken")
      },
      refreshToken: {
        type: String,
        validate: this.getValidator("refreshToken")
      }
    });

    this.schema
      .virtual("id")
      .get(function() {
        return this._id.toString();
      })
      .set(function(id) {
        this.set("_id", this.db.ObjectId(id));
      });

    this.schema.pre("save", function() {
      this.whenUpdated = Date.now();
    });

    this.model = this.db.mongoose.model("Provider", this.schema);
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "model.provider";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["db"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }
}

module.exports = Provider;
