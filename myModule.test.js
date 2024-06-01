let {sum} = require(`./myModule`);
let {expect} = require('chai');
describe (`Sum function`, ()=>{
    it (`works`,()=>{
        expect(sum(1,2)).to.equal(3)
    } )
    it (`secondTest`, ()=>{
        expect(sum(1,2)).to.equal(3)
    })
})