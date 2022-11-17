const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it('Returns the hashed key when given an input', () => {
    const trivialKey = deterministicPartitionKey('2');
    expect(trivialKey).toBe('306bff8a719aa21b04a0b06841e495a569922a7188671d1e59c1629820c977e15f0e2024b98f7484869e5ed13a6ee0b0e7eef56eab4d927dbe2e6035d78387b0');
  });
  it('Returns the hashed key when given an input', () => {
    const trivialKey = deterministicPartitionKey('4');
    expect(trivialKey).toBe('1a9a787eb17c91f1600bc71b452bee9fd9acf0db52a720b252defeaab3ed0df3f9e8988d8caaf8ad9edd29615d4e26562ff60e1c0eb59440c981ed106bd323ad');
  });
  it('Returns the hashed key when given an input', () => {
    const trivialKey = deterministicPartitionKey('6');
    expect(trivialKey).toBe('79747e2dca569f599feb0689a886803722bfc0e27367cf46b64e4525d54899ef1b6e5f652515067faad201116a89110985cfb118e2e7731475410e043d7680a8');
  });
  it('Returns the hashed key when given an input', () => {
    const trivialKey = deterministicPartitionKey('7');
    expect(trivialKey).toBe('227e9c03c28d6cc49151d7fcf029278725912f35ac30967db7ab0abde2327abdd33fc2e534f43d350088e474a984c2f4dd4be56bd33db2d47edd40f7b34bfc6f');
  });
  it('Returns the hashed key when given an input', () => {
    const trivialKey = deterministicPartitionKey(7);
    expect(trivialKey).toBe('72ce921155976b88a4a4bf39a4127c4d9e272eccde35ee864963da855f32330c0f8075aafc3a3aadecf498ee7b5e2f9ee3529ea46d97ee0795bd548b41463771');
  });
  it('Returns the hashed key when given an input', () => {
    const trivialKey = deterministicPartitionKey('78');
    expect(trivialKey).toBe('03fe437a7112bcb5d1b8cb582bff666be8f049a88ad32face9a515854ae281091e4320b2a7ade2d3680e40e31d5952f1b7400ee2211387e9023685a4ee6aa673');
  });
  it('Returns the hashed key when given an input', () => {
    const trivialKey = deterministicPartitionKey('feafe');
    expect(trivialKey).toBe('6cf0fb8bed4a62f8e68a8ab8fc1457591cbb0465508fe30507a38d200e2f2fbe35ddef18d74846156c1e77c3f13272069ac76879c7c414659e66ccf9c9d1c191');
  });
  it('Returns the hashed key when given an input', () => {
    const trivialKey = deterministicPartitionKey('fea83');
    expect(trivialKey).toBe('3435550fa4205fd7f2f84d9a641812269b7980e380dea4ce425b6c4e7d0166ea08abbe4a21648744b968d7b6d6598bbf2f6d4118c23bfbfde36fcd993113e3ed');
  });
  it('Returns the hashed key when given an input', () => {
    const trivialKey = deterministicPartitionKey(82);
    expect(trivialKey).toBe('3fb7bdf3b6de54d828da3c15b3cb1253e085e51c20c3f986598852f7b241a8d8683292383a577a6fee12e5756101d1b934e990bd243be4f60b69aa1e3e7c2b17');
  });
});