StartupEvents.registry('block', event => {
    event.create('primitive_chest').soundType('wood').blockEntity(entityInfo => {
        entityInfo.inventory(9,1)
        entityInfo.rightClickOpensInventory()
    })
})

//this is a test for github repository asujoasuoduaosa test 2307 23761 auhasduyhgygu9adsg9y7as