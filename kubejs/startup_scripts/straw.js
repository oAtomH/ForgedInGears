StartupEvents.registry('block', event => {
    event.create('forgedingears:wet_straw').box(0, 0, 0, 16, 2, 16).material("grass").hardness(0.2).grassSoundType()
    event.create('forgedingears:wet_straw_block_layer_2').box(0, 0, 0, 16, 4, 16).material("grass").hardness(0.2).grassSoundType()
    event.create('forgedingears:wet_straw_block_sleeping_bag').box(0, 0, 0, 16, 4, 16).material("grass").grassSoundType()
    event.create('forgedingears:wet_straw_block_layer_3').box(0, 0, 0, 16, 6, 16).material("grass").hardness(0.2).grassSoundType()
    event.create('forgedingears:wet_straw_block_layer_4').box(0, 0, 0, 16, 8, 16).material("grass").hardness(0.2).grassSoundType()
    event.create('forgedingears:wet_straw_block_layer_5').box(0, 0, 0, 16, 10, 16).material("grass").hardness(0.2).grassSoundType()
    event.create('forgedingears:wet_straw_block_layer_6').box(0, 0, 0, 16, 12, 16).material("grass").hardness(0.2).grassSoundType()
    event.create('forgedingears:wet_straw_block_layer_7').box(0, 0, 0, 16, 14, 16).material("grass").hardness(0.2).grassSoundType()
    event.create('forgedingears:straw_block').material("grass").hardness(0.2).grassSoundType()
}) 
StartupEvents.registry('item', event => {
    event.create('forgedingears:straw')
})
StartupEvents.registry("block", (e) => {
    e.create("forgedingears:wet_straw_block_layer_8")
    .box(0, 0, 0, 16, 16, 16)
    .material("grass")
    .hardness(0.2)
    .grassSoundType()
    .randomTick(e => {
        const block = e.block;
        const level = e.level;
    
        if (Math.random() > 64/1125) {
            return; // did not enter pre-oxidation
        }
        
        // a and b with same definition as on the wiki
        let a = 8; let b = 0;
        // this is where you count into a and b - next lines assume they're properly counted
        const c = (b+1)/(a+1); // same formula as on wiki
        const m = block.id == "forgedingears:wet_straw_block_layer_8" ? 0.75 : 1;
    
        if (Math.random() > m * c * c) {
            return; // did not exit pre-oxidation
        }
    
        level.setBlockAndUpdate(block.pos, Block.id("forgedingears:straw_block").getBlockState());
    })
  })