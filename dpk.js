const crypto = require("crypto");

const createHash = (data) =>
  crypto.createHash("sha3-512").update(data).digest("hex");

exports.deterministicPartitionKey = (event) => {
  const DEFAULT_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) {
    candidate = event?.partitionKey || createHash(JSON.stringify(event));
  }

  if (candidate && typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  } else if (!candidate) {
    candidate = DEFAULT_PARTITION_KEY;
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createHash(candidate);
  }
  return candidate;
};
