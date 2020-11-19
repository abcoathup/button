const truffleAssert = require('truffle-assertions');
const Button = artifacts.require('Button');
const TESTBUXX = artifacts.require('TESTBUXX');

contract('TESTBUXX', (accounts) => {
  let contractTESTBUXX = null;
  let contractButton = null;
  beforeEach(async () => {
    contractTESTBUXX = await TESTBUXX.new(231, 'j194nn', 11, 'r5ssyg', {
      from: accounts[0],
    });
    contractButton = await Button.new(accounts[8], {from: accounts[0]});
  });

  it('Should fail mint(address,uint256) when NOT comply with: msg.sender == admin', async () => {
    let result = await truffleAssert.fails(
      contractTESTBUXX.mint(accounts[4], 10, {from: accounts[9]}),
      'revert',
    );
  });
  it('Should fail transfer(address,uint256) when NOT comply with: to != 0x0', async () => {
    let result = await truffleAssert.fails(
      contractTESTBUXX.methods[
        'transfer(address,uint256)'
      ]('0x0000000000000000000000000000000000000000', 231, {from: accounts[0]}),
      'revert',
    );
  });
  it('Should fail transferFrom(address,address,uint256) when NOT comply with: to != 0x0', async () => {
    let result = await truffleAssert.fails(
      contractTESTBUXX.transferFrom(
        accounts[3],
        '0x0000000000000000000000000000000000000000',
        3,
        {from: accounts[0]},
      ),
      'revert',
    );
  });
  it('Should fail transfer(address,uint,bytes,string) when NOT comply with: to != 0x0', async () => {
    let result = await truffleAssert.fails(
      contractTESTBUXX.methods[
        'transfer(address,uint256,bytes,string)'
      ](
        '0x0000000000000000000000000000000000000000',
        0,
        [
          25,
          102,
          15,
          151,
          100,
          107,
          83,
          202,
          38,
          110,
          102,
          69,
          168,
          217,
          240,
          242,
          13,
          110,
          10,
          213,
          57,
          154,
          190,
          110,
          167,
          170,
          158,
          10,
          124,
          65,
          138,
          40,
        ],
        'r5ssyg',
        {from: accounts[0]},
      ),
      'revert',
    );
  });
  it('Should fail transfer(address,uint,bytes,string) when NOT comply with: to != 0x0', async () => {
    let result = await truffleAssert.fails(
      contractTESTBUXX.methods[
        'transfer(address,uint256,bytes,string)'
      ](
        '0x0000000000000000000000000000000000000000',
        230,
        [
          208,
          135,
          230,
          85,
          193,
          196,
          176,
          34,
          111,
          142,
          155,
          100,
          200,
          166,
          160,
          125,
          224,
          250,
          244,
          25,
          115,
          117,
          183,
          127,
          114,
          95,
          137,
          207,
          125,
          141,
          20,
          109,
        ],
        'j194nn',
        {from: accounts[0]},
      ),
      'revert',
    );
  });
  it('Should fail transfer(address,uint,bytes) when NOT comply with: to != 0x0', async () => {
    let result = await truffleAssert.fails(
      contractTESTBUXX.methods[
        'transfer(address,uint256,bytes)'
      ](
        '0x0000000000000000000000000000000000000000',
        0,
        [
          221,
          100,
          129,
          185,
          16,
          101,
          136,
          203,
          244,
          169,
          205,
          14,
          160,
          57,
          190,
          238,
          207,
          101,
          215,
          118,
          135,
          195,
          234,
          139,
          42,
          243,
          142,
          144,
          185,
          72,
          50,
          9,
        ],
        {from: accounts[0]},
      ),
      'revert',
    );
  });
  it('Should fail transfer(address,uint,bytes) when NOT comply with: to != 0x0', async () => {
    let result = await truffleAssert.fails(
      contractTESTBUXX.methods[
        'transfer(address,uint256,bytes)'
      ](
        '0x0000000000000000000000000000000000000000',
        231,
        [
          232,
          210,
          115,
          242,
          221,
          161,
          232,
          213,
          53,
          138,
          177,
          132,
          67,
          11,
          143,
          41,
          105,
          75,
          165,
          245,
          149,
          234,
          4,
          21,
          0,
          224,
          54,
          84,
          189,
          152,
          174,
          64,
        ],
        {from: accounts[0]},
      ),
      'revert',
    );
  });
});
