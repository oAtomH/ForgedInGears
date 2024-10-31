WorldgenEvents.remove(event => {
    event.removeOres(ore => {
        ore.blocks = ['tinkers_reforged:red_beryl_ore','tinkers_reforged:deepslate_red_beryl_ore','tinkers_reforged:deepslate_epidote_ore','tinkers_reforged:deepslate_hureaulite_ore','tinkers_reforged:kepu_ore']
		ore.worldgenLayer = ('underground_ores')
    })
})
WorldgenEvents.add(event => {
	const { anchors } = event
  
	event.addOre(ore => {
		ore.id = 'forgedingears:red_beryl_gen'
		ore.addTarget('#forge:andesite', 'forgedingears:red_beryl_ore')

		ore.count([30, 45])
		  .squared()
		  .triangleHeight(
			anchors.aboveBottom(-32),
			anchors.absolute(96)
		  )
		ore.size = 4
		ore.noSurface = 0.3 
		ore.worldgenLayer = 'underground_ores'
		ore.chance = 0
	  })
	event.addOre(ore => {
		ore.id = 'forgedingears:hureaulite_gen'
		ore.addTarget('#forge:diorite', 'forgedingears:hureaulite_ore')	

		ore.count([30, 45])
		  .squared()
		  .triangleHeight(
			anchors.aboveBottom(-32),
			anchors.absolute(96)
		  )
		ore.size = 4
		ore.noSurface = 0.3
		ore.worldgenLayer = 'underground_ores'
		ore.chance = 0
	  })
	event.addOre(ore => {
		ore.id = 'forgedingears:epidote_gen'
		ore.addTarget('#forge:granite', 'forgedingears:epidote_ore')

		ore.count([30, 45])
		  .squared()
		  .triangleHeight(
			anchors.aboveBottom(-32),
			anchors.absolute(96)
		  )
		ore.size = 4
		ore.noSurface = 0.3
		ore.worldgenLayer = 'underground_ores'
		ore.chance = 0
	  })
	event.addOre(ore => {
		ore.id = 'forgedingears:tuff_red_beryl_gen'
		ore.addTarget('minecraft:tuff', 'forgedingears:tuff_red_beryl_ore')

		ore.count([25, 40])
		  .squared()
		  .triangleHeight(
			anchors.aboveBottom(-32),
			anchors.absolute(10)
		  )
		ore.size = 6
		ore.noSurface = 0  
		ore.worldgenLayer = 'underground_ores'
		ore.chance = 0
	  })
	event.addOre(ore => {
		ore.id = 'forgedingears:tuff_hureaulite_gen'
		ore.addTarget('minecraft:tuff', 'forgedingears:tuff_hureaulite_ore')

		ore.count([25, 40])
		  .squared()
		  .triangleHeight(
			anchors.aboveBottom(-32),
			anchors.absolute(10)
		  )
		ore.size = 6
		ore.noSurface = 0  
		ore.worldgenLayer = 'underground_ores'
		ore.chance = 0
	  })
	event.addOre(ore => {
		ore.id = 'forgedingears:tuff_epidote_gen'
		ore.addTarget('minecraft:tuff', 'forgedingears:tuff_epidote_ore')

		ore.count([25, 40])
		  .squared()
		  .triangleHeight(
			anchors.aboveBottom(-32),
			anchors.absolute(10)
		  )
		ore.size = 6
		ore.noSurface = 0  
		ore.worldgenLayer = 'underground_ores'
		ore.chance = 0
	  })
})