StartupEvents.registry('block', event => {
    event.create('primitive_chest').soundType('wood').blockEntity(entityInfo => {
        entityInfo.inventory(9,1)
        entityInfo.rightClickOpensInventory()
    })
})
// lorem ipsum a