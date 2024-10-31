ServerEvents.tags('item', event => {
    event.remove('forge:ingots/copper', 'iceandfire:copper_ingot')
    event.add('createlowheated:burner_starters', 'forgedingears:bow_drill')
    event.add('createlowheated:burner_starters', 'forgedingears:match_box')
  })
ServerEvents.tags('block', event => {
  	event.remove('minecraft:needs_stone_tool', 'minecraft:iron_ore')
  	event.add('minecraft:needs_iron_tool', 'minecraft:iron_ore')
})