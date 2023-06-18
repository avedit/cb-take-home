const { deterministicPartitionKey } = require("./dpk");

const generateReallyLongString = (initChar) => {
  const length = 300;
  let string = initChar;
  for (let i = 0; i < length; i++) {
    string += initChar;
  }
  return string;
};

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const defaultKey = deterministicPartitionKey();
    expect(defaultKey).toBe("0");
  });

  it("Returns the default partition key if provided a string value in partitionKey", () => {
    const partitionKey = deterministicPartitionKey({
      partitionKey: "test_key",
    });
    expect(partitionKey).toBe("test_key");
  });
  it("Returns the object of what we passed in string form.", () => {
    const partitionKey = deterministicPartitionKey({
      partitionKey: { key: "value" },
    });
    expect(partitionKey).toBe('{"key":"value"}');
  });
  it("Returns the object of what we passed in string form.", () => {
    const partitionKey = deterministicPartitionKey({
      partitionKey: { key: true },
    });
    expect(partitionKey).toBe('{"key":true}');
  });
  it("Returns a 128 char string for a object w/o key input.", () => {
    const partitionKey = deterministicPartitionKey({
      key: "value",
    });
    expect(partitionKey.length).toBe(128);
  });
  it("Should return default key for undefined input.", () => {
    const partitionKey = deterministicPartitionKey(undefined);
    expect(partitionKey).toBe("0");
  });
  it("Should return default key for null input.", () => {
    const partitionKey = deterministicPartitionKey(null);
    expect(partitionKey).toBe("0");
  });
  it("Should return 128 length string for string/number input.", () => {
    const partitionKey = deterministicPartitionKey(123);
    expect(partitionKey.length).toBe(128);
  });
  it("Should return 128 length string for string/number input.", () => {
    const partitionKey = deterministicPartitionKey("text");
    expect(partitionKey.length).toBe(128);
  });
  it("Should return 128 length string for very long input", () => {
    const partitionKey = deterministicPartitionKey(
      generateReallyLongString("z")
    );
    expect(partitionKey.length).toBe(128);
  });
});
