BlockEvents.rightClicked(event => {
if ((event.player.mainHandItem.id == "survivalistessentials:rock_stone") || (event.player.offHandItem.id == "survivalistessentials:rock_stone")) {
        event.cancel()
    }
})
ItemEvents.rightClicked(event => {
    // Verify if both main hand and offhand hold a rock
    if ((event.player.mainHandItem === 'survivalistessentials:rock_stone') && (event.player.offHandItem === 'survivalistessentials:rock_stone') && (event.player.facing == 'down')) {
        debounceFlag = true
        event.player.give('survivalistessentials:flint_shard')
        if (Math.random() < 0.5) {
            event.player.mainHandItem.count--
        } else {
            event.player.offHandItem.count--
        }
        event.player.sendInventoryUpdate()
        event.server.runCommandSilent(`execute as ${event.player.username} run playsound survivalistessentials:knapping @s ${event.player.x} ${event.player.y} ${event.player.z} 0.5 0.5`)
    }
})