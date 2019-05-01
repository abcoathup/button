const Button = artifacts.require('Button')
const TestBuxx = artifacts.require('TESTBUXX')

contract('Button', function([admin, anotherAccount, buxxAccount]) {
  let buxx;
  let button;
  const buttonFee = 230
  
  beforeEach(async function() {
    buxx = await TestBuxx.new(0, "TestBuxx", 0, "BUX", {from: buxxAccount});
    await buxx.mint(anotherAccount, 230, {from: buxxAccount})
    button = await Button.new(buxx.address)
  });

  describe('Button functions', function() {
    it('push', async function() {
        var _pushes = await button.pushes();
        assert.equal(0, _pushes);
        await buxx.methods['transfer(address,uint256,bytes)'](button.address, buttonFee, "0x", {from: anotherAccount} )
        const balance = await buxx.balanceOf(button.address);
        assert.equal(balance, buttonFee);
        _pushes = await button.pushes();
        assert.equal(1, _pushes);
    })
  });
});