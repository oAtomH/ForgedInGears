BlockEvents.rightClicked(event => {
    if ((event.player.mainHandItem.id == "forgedingears:mechanical_fire_dragon_heart") && 
        (event.block.id == "forgedingears:empty_dragonforge_fire_core") && 
        event.player.isCrouching()) {
            event.server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} iceandfire:dragonforge_fire_core_disabled`);
            event.item.setCount(event.item.getCount() - 1);
    }
});
BlockEvents.rightClicked(event => {
    if ((event.player.mainHandItem.id == "forgedingears:mechanical_ice_dragon_heart") && 
        (event.block.id == "forgedingears:empty_dragonforge_ice_core") && 
        event.player.isCrouching()) {
            event.server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} iceandfire:dragonforge_fire_ice_disabled`);
            event.item.setCount(event.item.getCount() - 1);
    }
});
BlockEvents.rightClicked(event => {
    if ((event.player.mainHandItem.id == "forgedingears:mechanical_lightning_dragon_heart") && 
        (event.block.id == "forgedingears:empty_dragonforge_lightning_core") && 
        event.player.isCrouching()) {
            event.server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} iceandfire:dragonforge_fire_lightning_disabled`);
            event.item.setCount(event.item.getCount() - 1);
    }
});
BlockEvents.broken(event => {
    if (event.block.id == 'forgedingears:meteorite') {
        if (Math.random() < 0.5) {
            let explosion = event.block.createExplosion();
            explosion.strength(1);
            explosion.damagesTerrain(false);
            explosion.explode();
        }
        event.block.set('forgedingears:cobbled_meteorite');
        event.cancel();
    }
});
BlockEvents.broken(event => {
    if (event.block.id == 'forgedingears:obsidiorite') {
        if (Math.random() < 0.78) {
            let explosion = event.block.createExplosion();
            explosion.strength(2);
            explosion.damagesTerrain(false);
            explosion.explode();
        }
        event.block.set('forgedingears:cobbled_obsidiorite');
        event.cancel();
    }
});
BlockEvents.broken(event => {
    if (event.block.id == 'forgedingears:jadarite_ore') {
        if (Math.random() < 0.54) {
            let explosion = event.block.createExplosion();
            explosion.strength(3);
            explosion.damagesTerrain(true);
            explosion.destroysTerrain(true);
            explosion.explode();
        } else {
            event.block.popItemFromFace('forgedingears:jadarite_gem', event.player.facing.opposite);
        }
    }
});
BlockEvents.broken(event => {
    if (event.block.id == 'forgedingears:element_zero_ore') {
        event.cancel();
        if (event.player == null) {
            event.block.drops.forEach(item => event.block.popItem(item));
        } else {
            let drops = event.block.getDrops(event.player, event.player.mainHandItem);
            drops.forEach(item => event.block.popItemFromFace(item, event.player.facing.opposite));
        }
        event.block.set('minecraft:bedrock');
    }
});
// Load necessary Java class for BlockHitResult
const $bhr = Java.loadClass('net.minecraft.world.phys.BlockHitResult');
BlockEvents.rightClicked(event => {
    // Check the current state of the block and the item in the player's hand
    if (event.player.mainHandItem.id == "forgedingears:wet_straw") {
        let vec3 = new Vec3d(event.player.rayTrace().hitX, event.player.rayTrace().hitY, event.player.rayTrace().hitZ);
        const hitResult = new $bhr(vec3, event.facing, event.block.pos, false);

        // Check if the interaction is happening on the UP side
        if (hitResult.getDirection().name() == "UP") {
            if (event.block.id == "forgedingears:wet_straw") {
                event.item.setCount(event.item.getCount() - 1);
                event.block.set("forgedingears:wet_straw_block_layer_2");
                event.cancel(); // Prevent placing another block
            } else if (event.block.id == "forgedingears:wet_straw_block_layer_2") {
                event.item.setCount(event.item.getCount() - 1);
                event.block.set("forgedingears:wet_straw_block_layer_3");
                event.cancel(); // Prevent placing another block
            } else if (event.block.id == "forgedingears:wet_straw_block_layer_3") {
                event.item.setCount(event.item.getCount() - 1);
                event.block.set("forgedingears:wet_straw_block_layer_4");
                event.cancel(); // Prevent placing another block
            } else if (event.block.id == "forgedingears:wet_straw_block_layer_4") {
                event.item.setCount(event.item.getCount() - 1);
                event.block.set("forgedingears:wet_straw_block_layer_5");
                event.cancel(); // Prevent placing another block
            } else if (event.block.id == "forgedingears:wet_straw_block_layer_5") {
                event.item.setCount(event.item.getCount() - 1);
                event.block.set("forgedingears:wet_straw_block_layer_6");
                event.cancel(); // Prevent placing another block
            } else if (event.block.id == "forgedingears:wet_straw_block_layer_6") {
                event.item.setCount(event.item.getCount() - 1);
                event.block.set("forgedingears:wet_straw_block_layer_7");
                event.cancel(); // Prevent placing another block
            } else if (event.block.id == "forgedingears:wet_straw_block_layer_7") {
                event.item.setCount(event.item.getCount() - 1);
                event.block.set("forgedingears:wet_straw_block_layer_8");
                event.cancel(); // Prevent placing another block
            }
        }
    }
});
