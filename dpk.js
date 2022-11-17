const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (!event) {
    candidate = TRIVIAL_PARTITION_KEY;
  } else {
    const data = JSON.stringify(event)
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }

  return candidate;
};


console.log(this.deterministicPartitionKey('2'))
console.log(this.deterministicPartitionKey('4'))

console.log(this.deterministicPartitionKey('6'))
console.log(this.deterministicPartitionKey('7'))
console.log(this.deterministicPartitionKey())
console.log(this.deterministicPartitionKey(7))
console.log(this.deterministicPartitionKey('78'))
console.log(this.deterministicPartitionKey('feafe'))
console.log(this.deterministicPartitionKey('fea83'))
console.log(this.deterministicPartitionKey(82))