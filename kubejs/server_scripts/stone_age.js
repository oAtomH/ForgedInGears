BlockEvents.rightClicked(event => {
if ((event.player.mainHandItem.id == "survivalistessentials:rock_stone") || (event.player.offHandItem.id == "survivalistessentials:rock_stone")) {
        event.cancel()
    }
})
let debounceFlag = false
ItemEvents.rightClicked(event => {
    if (debounceFlag) return // Prevents double-trigger
    let mainHandItem = event.player.getHeldItem('main_hand')
    let offHandItem = event.player.getHeldItem('off_hand')

    // Verify if both main hand and offhand hold a rock
    if (mainHandItem.id === 'survivalistessentials:rock_stone' && offHandItem.id === 'survivalistessentials:rock_stone' && event.player.facing == 'down') {
        debounceFlag = true
        if (Math.random() < 0.5) {
            mainHandItem.count--
        } else {
            offHandItem.count--
        }
        event.player.give('survivalistessentials:flint_shard')
        event.player.sendInventoryUpdate()
        event.server.runCommandSilent(`execute as ${event.player.username} run playsound survivalistessentials:knapping @s ${event.player.x} ${event.player.y} ${event.player.z} 0.5 0.5`)
        event.server.schedule(1, () => debounceFlag = false)
    }
})