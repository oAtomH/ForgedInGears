const woolColors = {
    "minecraft:white_wool": "white",
    "minecraft:orange_wool": "orange",
    "minecraft:magenta_wool": "magenta",
    "minecraft:light_blue_wool": "light_blue",
    "minecraft:yellow_wool": "yellow",
    "minecraft:lime_wool": "lime",
    "minecraft:pink_wool": "pink",
    "minecraft:gray_wool": "gray",
    "minecraft:light_gray_wool": "light_gray",
    "minecraft:cyan_wool": "cyan",
    "minecraft:purple_wool": "purple",
    "minecraft:blue_wool": "blue",
    "minecraft:brown_wool": "brown",
    "minecraft:green_wool": "green",
    "minecraft:red_wool": "red",
    "minecraft:black_wool": "black"
};
BlockEvents.rightClicked(event => {
    const itemId = event.player.mainHandItem.id;
    const woolColor = woolColors[itemId];

    if (!woolColor || event.block.id != "forgedingears:wet_straw") return;

    const bx = event.block.getX();
    const by = event.block.getY();
    const bz = event.block.getZ();
    const surroundingBlock = `forgedingears:wet_straw_block_layer_2`;

    if (event.level.getBlock(bx, by, bz - 1) == surroundingBlock) {
        event.item.setCount(event.item.getCount() - 1);
        event.server.runCommandSilent(`setblock ${bx} ${by} ${bz - 1} travelersbackpack:${woolColor}_sleeping_bag[part=head,facing=north]`);
        event.server.runCommandSilent(`setblock ${bx} ${by} ${bz} travelersbackpack:${woolColor}_sleeping_bag[part=foot,facing=north]`);
        event.cancel();
    } else if (event.level.getBlock(bx, by, bz + 1) == surroundingBlock) {
        event.item.setCount(event.item.getCount() - 1);
        event.server.runCommandSilent(`setblock ${bx} ${by} ${bz + 1} travelersbackpack:${woolColor}_sleeping_bag[part=head,facing=south]`);
        event.server.runCommandSilent(`setblock ${bx} ${by} ${bz} travelersbackpack:${woolColor}_sleeping_bag[part=foot,facing=south]`);
        event.cancel();
    } else if (event.level.getBlock(bx - 1, by, bz) == surroundingBlock) {
        event.item.setCount(event.item.getCount() - 1);
        event.server.runCommandSilent(`setblock ${bx - 1} ${by} ${bz} travelersbackpack:${woolColor}_sleeping_bag[part=head,facing=west]`);
        event.server.runCommandSilent(`setblock ${bx} ${by} ${bz} travelersbackpack:${woolColor}_sleeping_bag[part=foot,facing=west]`);
        event.cancel();
    } else if (event.level.getBlock(bx + 1, by, bz) == surroundingBlock) {
        event.item.setCount(event.item.getCount() - 1);
        event.server.runCommandSilent(`setblock ${bx + 1} ${by} ${bz} travelersbackpack:${woolColor}_sleeping_bag[part=head,facing=east]`);
        event.server.runCommandSilent(`setblock ${bx} ${by} ${bz} travelersbackpack:${woolColor}_sleeping_bag[part=foot,facing=east]`);
        event.cancel();
    }
});
BlockEvents.rightClicked(event => {
    const itemId = event.player.mainHandItem.id;
    const woolColor = woolColors[itemId];

    if (!woolColor || event.block.id != "forgedingears:wet_straw_block_layer_2") return;

        const bx = event.block.getX();
        const by = event.block.getY();
        const bz = event.block.getZ();
        const surroundingBlock = `forgedingears:wet_straw`;
    
        if (event.level.getBlock(bx, by, bz + 1) == surroundingBlock) {
            event.item.setCount(event.item.getCount() - 1);
            event.server.runCommandSilent(`setblock ${bx} ${by} ${bz + 1} travelersbackpack:${woolColor}_sleeping_bag[part=foot,facing=north]`);
            event.server.runCommandSilent(`setblock ${bx} ${by} ${bz} travelersbackpack:${woolColor}_sleeping_bag[part=head,facing=north]`);
            event.cancel();
        } else if (event.level.getBlock(bx, by, bz - 1) == surroundingBlock) {
            event.item.setCount(event.item.getCount() - 1); 
            event.server.runCommandSilent(`setblock ${bx} ${by} ${bz - 1} travelersbackpack:${woolColor}_sleeping_bag[part=foot,facing=south]`);
            event.server.runCommandSilent(`setblock ${bx} ${by} ${bz} travelersbackpack:${woolColor}_sleeping_bag[part=head,facing=south]`);
            event.cancel();
        } else if (event.level.getBlock(bx + 1, by, bz) == surroundingBlock) {
            event.item.setCount(event.item.getCount() - 1);
            event.server.runCommandSilent(`setblock ${bx + 1} ${by} ${bz} travelersbackpack:${woolColor}_sleeping_bag[part=foot,facing=west]`);
            event.server.runCommandSilent(`setblock ${bx} ${by} ${bz} travelersbackpack:${woolColor}_sleeping_bag[part=head,facing=west]`);
            event.cancel();
        } else if (event.level.getBlock(bx - 1, by, bz) == surroundingBlock) {
            event.item.setCount(event.item.getCount() - 1);
            event.server.runCommandSilent(`setblock ${bx - 1} ${by} ${bz} travelersbackpack:${woolColor}_sleeping_bag[part=foot,facing=east]`);
            event.server.runCommandSilent(`setblock ${bx} ${by} ${bz} travelersbackpack:${woolColor}_sleeping_bag[part=head,facing=east]`);
            event.cancel();
        }
});
