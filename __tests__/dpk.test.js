const {faker} = require("@faker-js/faker");
const { deterministicPartitionKey } = require("../dpk");

const TRIVIAL_PARTITION_KEY = process.env.TRIVIAL_PARTITION_KEY;
const MAX_PARTITION_KEY_LENGTH = parseInt(process.env.MAX_PARTITION_KEY_LENGTH);


describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it('Testing Deterministic Partition key with string event', () => {
    const result = deterministicPartitionKey(faker.datatype.string())
    expect(typeof result).toBe("string")
  })

  it('Testing Deterministic Partition key with null event', () => {
    const result = deterministicPartitionKey()
    expect(result).toBe(TRIVIAL_PARTITION_KEY)
  })

  it('Testing Deterministic Partition key with undefined event', () => {
    const result = deterministicPartitionKey(undefined)
    expect(result).toBe(TRIVIAL_PARTITION_KEY)
  })

  it('Testing Deterministic Partition key with 0 (falsy) event', () => {
    const result = deterministicPartitionKey(0)
    expect(result).toBe(TRIVIAL_PARTITION_KEY)
  })

  it('Testing Deterministic Partition key with empty string (falsy) event', () => {
    const result = deterministicPartitionKey("")
    expect(result).toBe(TRIVIAL_PARTITION_KEY)
  })


  it('Testing Deterministic Partition key with 0 (falsy) event', () => {
    const result = deterministicPartitionKey(false)
    expect(result).toBe(TRIVIAL_PARTITION_KEY)
  })

  it('Testing Deterministic Partition key with valid boolean', () => {
    const result = deterministicPartitionKey(true)
    expect(typeof result).toBe("string")
  })

  it('Testing Deterministic Partition key with object without partitionKey', () => {
    const result = deterministicPartitionKey({
      someAttribute: 'someValue'
    })
    expect(typeof result).toBe("string")
  })

  it('Testing Deterministic Partition key with object with partitionKey lower or equal than MAX available value', () => {
    const partitionValue = faker.datatype.string(MAX_PARTITION_KEY_LENGTH)
    const result = deterministicPartitionKey({
      partitionKey: partitionValue
    })
    expect(result).toBe(partitionValue)
  })

  it('Testing Deterministic Partition key with object with partitionKey bigger than MAX available value', () => {
    const partitionValue = faker.datatype.string(MAX_PARTITION_KEY_LENGTH+1)
    const result = deterministicPartitionKey({
      partitionKey: partitionValue
    })
    expect(typeof result).toBe("string")
    expect(result).not.toBe(partitionValue)
  })

  it('Testing Deterministic Partition key with object with partitionKey falsy', () => {
    const result = deterministicPartitionKey({
      partitionKey: false
    })
    expect(typeof result).toBe("string")
  })

  it('Testing Deterministic Partition key with object with partitionKey true', () => {
    const result = deterministicPartitionKey({
      partitionKey: true
    })
    expect(typeof result).toBe("string")
  })


});
