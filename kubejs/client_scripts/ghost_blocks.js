// Load necessary Java class for BlockHitResult
const $bhr = Java.loadClass('net.minecraft.world.phys.BlockHitResult');
BlockEvents.rightClicked(event => {
    // Check the current state of the block and the item in the player's hand
    if (event.player.mainHandItem.id == "forgedingears:wet_straw") {
        let vec3 = new Vec3d(event.player.rayTrace().hitX, event.player.rayTrace().hitY, event.player.rayTrace().hitZ);
        const hitResult = new $bhr(vec3, event.facing, event.block.pos, false);

        // Check if the interaction is happening on the UP side
        if (hitResult.getDirection().name() == "UP") {
            // Get the current facing direction of the block
            let currentFacing = event.block.properties.facing;

            if (event.block.id == "forgedingears:wet_straw") {
                event.block.set("forgedingears:wet_straw_block_layer_2", { facing: currentFacing });
                event.cancel(); // Prevent placing another block
            } else if (event.block.id == "forgedingears:wet_straw_block_layer_2") {
                event.block.set("forgedingears:wet_straw_block_layer_3", { facing: currentFacing });
                event.cancel(); // Prevent placing another block
            } else if (event.block.id == "forgedingears:wet_straw_block_layer_3") {
                event.block.set("forgedingears:wet_straw_block_layer_4", { facing: currentFacing });
                event.cancel(); // Prevent placing another block
            } else if (event.block.id == "forgedingears:wet_straw_block_layer_4") {
                event.block.set("forgedingears:wet_straw_block_layer_5", { facing: currentFacing });
                event.cancel(); // Prevent placing another block
            } else if (event.block.id == "forgedingears:wet_straw_block_layer_5") {
                event.block.set("forgedingears:wet_straw_block_layer_6", { facing: currentFacing });
                event.cancel(); // Prevent placing another block
            } else if (event.block.id == "forgedingears:wet_straw_block_layer_6") {
                event.block.set("forgedingears:wet_straw_block_layer_7", { facing: currentFacing });
                event.cancel(); // Prevent placing another block
            } else if (event.block.id == "forgedingears:wet_straw_block_layer_7") {
                event.block.set("forgedingears:wet_straw_block_layer_8", { facing: currentFacing });
                event.cancel(); // Prevent placing another block
            }
        }
    }
});
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
        event.cancel();
    } else if (event.level.getBlock(bx, by, bz + 1) == surroundingBlock) {
        event.cancel();
    } else if (event.level.getBlock(bx - 1, by, bz) == surroundingBlock) {
        event.cancel();
    } else if (event.level.getBlock(bx + 1, by, bz) == surroundingBlock) {
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
            event.cancel();
        } else if (event.level.getBlock(bx, by, bz - 1) == surroundingBlock) {
            event.cancel();
        } else if (event.level.getBlock(bx + 1, by, bz) == surroundingBlock) {
            event.cancel();
        } else if (event.level.getBlock(bx - 1, by, bz) == surroundingBlock) {
            event.cancel();
        }
});
