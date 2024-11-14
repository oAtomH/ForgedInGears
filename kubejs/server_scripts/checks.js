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
            explosion.strength(2);
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
            explosion.strength(3);
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
            explosion.strength(4);
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
const $bhr = Java.loadClass('net.minecraft.world.phys.BlockHitResult');
BlockEvents.rightClicked(event => {
    if (event.player.mainHandItem.id == "forgedingears:wet_straw") {
        let vec3 = new Vec3d(event.player.rayTrace().hitX, event.player.rayTrace().hitY, event.player.rayTrace().hitZ);
        const hitResult = new $bhr(vec3, event.facing, event.block.pos, false);

        if (hitResult.getDirection().name() == "UP") {
            let currentFacing = event.block.properties.facing;

            if (event.block.id == "forgedingears:wet_straw") {
                event.item.setCount(event.item.getCount() - 1);
                event.block.set("forgedingears:wet_straw_block_layer_2", { facing: currentFacing });
                event.cancel();
            } else if (event.block.id == "forgedingears:wet_straw_block_layer_2") {
                event.item.setCount(event.item.getCount() - 1);
                event.block.set("forgedingears:wet_straw_block_layer_3", { facing: currentFacing });
                event.cancel();
            } else if (event.block.id == "forgedingears:wet_straw_block_layer_3") {
                event.item.setCount(event.item.getCount() - 1);
                event.block.set("forgedingears:wet_straw_block_layer_4", { facing: currentFacing });
                event.cancel();
            } else if (event.block.id == "forgedingears:wet_straw_block_layer_4") {
                event.item.setCount(event.item.getCount() - 1);
                event.block.set("forgedingears:wet_straw_block_layer_5", { facing: currentFacing });
                event.cancel();
            } else if (event.block.id == "forgedingears:wet_straw_block_layer_5") {
                event.item.setCount(event.item.getCount() - 1);
                event.block.set("forgedingears:wet_straw_block_layer_6", { facing: currentFacing });
                event.cancel();
            } else if (event.block.id == "forgedingears:wet_straw_block_layer_6") {
                event.item.setCount(event.item.getCount() - 1);
                event.block.set("forgedingears:wet_straw_block_layer_7", { facing: currentFacing });
                event.cancel();
            } else if (event.block.id == "forgedingears:wet_straw_block_layer_7") {
                event.item.setCount(event.item.getCount() - 1);
                event.block.set("forgedingears:wet_straw_block_layer_8", { facing: currentFacing });
                event.cancel();
            }
        }
    }
});
