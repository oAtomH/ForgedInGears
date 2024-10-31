JEIEvents.hideItems(e => {
  e.hide('tconstruct:tinkers_anvil')
  e.hide('tconstruct:scorched_anvil')
  e.hide('tinkersurvival:mortar_and_pestle')
  e.hide('tconstruct:crafting_station')
  e.hide('tconstruct:part_builder')
  e.hide('tconstruct:tinker_station')
  e.hide('iceandfire:dragon_meal')
  e.hide('tconstruct:lavawood')
  e.hide('tconstruct:lavawood_slab')
  e.hide('tconstruct:lavawood_stairs')
  e.hide('minecraft:glass_pane')
  e.hide('minecraft:white_stained_glass_pane')
  e.hide('minecraft:orange_stained_glass_pane')
  e.hide('minecraft:magenta_stained_glass_pane')
  e.hide('minecraft:light_blue_stained_glass_pane')
  e.hide('minecraft:yellow_stained_glass_pane')
  e.hide('minecraft:lime_stained_glass_pane')
  e.hide('minecraft:pink_stained_glass_pane')
  e.hide('minecraft:gray_stained_glass_pane')
  e.hide('minecraft:light_gray_stained_glass_pane')
  e.hide('minecraft:cyan_stained_glass_pane')
  e.hide('minecraft:purple_stained_glass_pane')
  e.hide('minecraft:blue_stained_glass_pane')
  e.hide('minecraft:brown_stained_glass_pane')
  e.hide('minecraft:green_stained_glass_pane')
  e.hide('minecraft:red_stained_glass_pane')
  e.hide('minecraft:black_stained_glass_pane')
  e.hide('minecraft:glass')
  e.hide('minecraft:white_stained_glass')
  e.hide('minecraft:orange_stained_glass')
  e.hide('minecraft:magenta_stained_glass')
  e.hide('minecraft:light_blue_stained_glass')
  e.hide('minecraft:yellow_stained_glass')
  e.hide('minecraft:lime_stained_glass')
  e.hide('minecraft:pink_stained_glass')
  e.hide('minecraft:gray_stained_glass')
  e.hide('minecraft:light_gray_stained_glass')
  e.hide('minecraft:cyan_stained_glass')
  e.hide('minecraft:purple_stained_glass')
  e.hide('minecraft:blue_stained_glass')
  e.hide('minecraft:brown_stained_glass')
  e.hide('minecraft:green_stained_glass')
  e.hide('minecraft:red_stained_glass')
  e.hide('minecraft:black_stained_glass')
  e.hide('minecraft:tinted_glass')
  e.hide('minecraft:white_concrete_powder')
  e.hide('minecraft:orange_concrete_powder')
  e.hide('minecraft:magenta_concrete_powder')
  e.hide('minecraft:light_blue_concrete_powder')
  e.hide('minecraft:yellow_concrete_powder')
  e.hide('minecraft:lime_concrete_powder')
  e.hide('minecraft:pink_concrete_powder')
  e.hide('minecraft:gray_concrete_powder')
  e.hide('minecraft:light_gray_concrete_powder')
  e.hide('minecraft:cyan_concrete_powder')
  e.hide('minecraft:purple_concrete_powder')
  e.hide('minecraft:blue_concrete_powder')
  e.hide('minecraft:brown_concrete_powder')
  e.hide('minecraft:green_concrete_powder')
  e.hide('minecraft:red_concrete_powder')
  e.hide('minecraft:black_concrete_powder')
  e.hide('minecraft:white_concrete')
  e.hide('minecraft:orange_concrete')
  e.hide('minecraft:magenta_concrete')
  e.hide('minecraft:light_blue_concrete')
  e.hide('minecraft:yellow_concrete')
  e.hide('minecraft:lime_concrete')
  e.hide('minecraft:pink_concrete')
  e.hide('minecraft:gray_concrete')
  e.hide('minecraft:light_gray_concrete')
  e.hide('minecraft:cyan_concrete')
  e.hide('minecraft:purple_concrete')
  e.hide('minecraft:blue_concrete')
  e.hide('minecraft:brown_concrete')
  e.hide('minecraft:green_concrete')
  e.hide('minecraft:red_concrete')
  e.hide('minecraft:black_concrete')

  e.hide('minecraft:splash_potion')
  e.hide('minecraft:potion')
  e.hide('minecraft:lingering_potion')
  e.hide(/minecraft.*helmet/)
  e.hide(/minecraft.*chestplate/)
  e.hide(/minecraft.*leggings/)
  e.hide(/minecraft.*boots/)
  e.hide(/minecraft.*sword/)
  e.hide(/minecraft.*pickaxe/)
  e.hide(/minecraft.*axe/)
  e.hide(/minecraft.*shovel/)
  e.hide(/minecraft.*hoe/)
  e.hide(/iceandfire.*metal/)
  e.hide(/iceandfire.*sword/)
  e.hide(/iceandfire.*pickaxe/)
  e.hide(/iceandfire.*axe/)
  e.hide(/iceandfire.*shovel/)
  e.hide(/iceandfire.*hoe/)
  e.hide(/itemfilters.*/)
  e.hide(/ftbquests.*/)
})

JEIEvents.addItems(e => {
  e.add(Item.of('tconstruct:scorched_anvil', {texture: "forgedingears:steel_block"}))
  e.add('tconstruct:crafting_station')
  e.add('tconstruct:part_builder')
  e.add('tconstruct:tinker_station')
})
