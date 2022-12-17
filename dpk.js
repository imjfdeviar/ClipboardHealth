const crypto = require("crypto");
require('dotenv').config()

function createHash(data){
  return crypto.createHash("sha3-512").update(data).digest("hex")
}

exports.deterministicPartitionKey = (event) => {
  const MAX_PARTITION_KEY_LENGTH = parseInt(process.env.MAX_PARTITION_KEY_LENGTH);
  let candidate = process.env.TRIVIAL_PARTITION_KEY;

  if (!event) {
    return candidate;
  }

  if (!event.partitionKey) {
    return createHash(JSON.stringify(event));
  }

  candidate = event.partitionKey;
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return createHash(candidate);
  }

  return candidate;
};