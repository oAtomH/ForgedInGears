WorldgenEvents.add(event => {
	const { anchors } = event
  
	event.addOre(ore => {
		ore.id = 'forgedingears:brillarite_gen'
		ore.addTarget('minecraft:lava', 'forgedingears:brillarite_ore')
		ore.biomes = '#minecraft:nether'
		ore.count([2, 6])
		  .squared()
		  .uniformHeight(
			anchors.absolute(33),
			anchors.absolute(34)
		  )
		ore.size = 3
		ore.noSurface = 0.6
		ore.worldgenLayer = 'underground_ores'
	  })

	  event.addOre(ore => {
		ore.id = 'forgedingears:jadarite_gen'
		ore.addTarget('minecraft:netherrack', 'forgedingears:jadarite_ore')
		ore.biomes = '#minecraft:nether'
		ore.count([15, 25])
		  .squared()
		  .uniformHeight(
			anchors.absolute(124),
			anchors.absolute(127)
		  )
		ore.size = 18
		ore.noSurface = 0
		ore.worldgenLayer = 'underground_ores'
	  })

	  event.addOre(ore => {
		ore.id = 'forgedingears:element_zero_gen'
		ore.addTarget('minecraft:bedrock', 'forgedingears:element_zero_ore')

		ore.count([5, 10])
		  .squared()
		  .uniformHeight(
			anchors.absolute(-63),
			anchors.absolute(-61)
		  )
		ore.size = 4
		ore.noSurface = 0 
		ore.worldgenLayer = 'underground_ores'
	  })
	  event.addOre(ore => {
		ore.id = 'forgedingears:selenium_gen'
		ore.biomes = {id: `minecraft:end_highlands`, id: `minecraft:end_midlands`, id: `minecraft:end_barrens`}
		ore.addTarget('minecraft:end_stone', 'forgedingears:selenium_ore')
		ore.count([3, 7])
		  .squared()
		  .triangleHeight(
			anchors.aboveBottom(0),
			anchors.absolute(48)
		  )
		ore.size = 5
		ore.noSurface = 0
		ore.worldgenLayer = 'underground_ores'
	  })
	  event.addOre(ore => {
		ore.id = 'forgedingears:kepu_gen'
		ore.biomes = {id: `minecraft:end_highlands`, id: `minecraft:end_midlands`, id: `minecraft:small_end_islands`, id: `minecraft:end_barrens`}
		ore.addTarget('minecraft:end_stone', 'tinkers_reforged:kepu_ore')
		ore.count([8, 13])
		  .squared()
		  .triangleHeight(
			anchors.aboveBottom(24),
			anchors.absolute(72)
		  )
		ore.size = 5
		ore.noSurface = 0
		ore.worldgenLayer = 'underground_ores'
	  })
	  event.addOre(ore => {
		ore.id = 'forgedingears:neutrum_gen'
		ore.addTarget('minecraft:end_stone', 'forgedingears:neutrum_ore')
		ore.biomes = {id: `minecraft:the_end`}
		ore.count([8, 14])
		  .squared()
		  .uniformHeight(
			anchors.aboveBottom(24),
			anchors.absolute(80)
		  )
		ore.size = 3
		ore.noSurface = 0.3
		ore.worldgenLayer = 'underground_ores'
	  })
	  event.addOre(ore => {
		ore.id = 'forgedingears:neutrum_gen_2'
		ore.biomes = {id: `minecraft:end_highlands`, id: `minecraft:end_midlands`, id: `minecraft:small_end_islands`, id: `minecraft:end_barrens`}
		ore.addTarget('minecraft:end_stone', 'forgedingears:neutrum_ore')
		ore.count([5, 9])
		  .squared()
		  .triangleHeight(
			anchors.aboveBottom(14),
			anchors.absolute(96)
		  )
		ore.size = 3
		ore.noSurface = 0
		ore.worldgenLayer = 'underground_ores'
	  })
	  event.addOre(ore => {
		ore.id = 'forgedingears:arcanium_gen'
		ore.biomes = '#minecraft:nether'
		ore.addTarget('minecraft:netherrack', 'forgedingears:arcanium_ore')
		ore.count([6, 11])
		  .squared()
		  .triangleHeight(
			anchors.aboveBottom(0),
			anchors.absolute(32)
		  )
		ore.size = 3
		ore.noSurface = 0.4
		ore.worldgenLayer = 'underground_ores'
	  })
	  event.addOre(ore => {
		ore.id = 'forgedingears:valyrium_gen'
		ore.biomes = '#minecraft:nether'
		ore.addTarget('minecraft:netherrack', 'forgedingears:valyrium_ore')
		ore.count([2, 3])
		  .squared()
		  .triangleHeight(
			anchors.absolute(0),
			anchors.absolute(128)
		  )
		ore.size = 3
		ore.noSurface = 0
		ore.worldgenLayer = 'underground_ores'
	  })
	  event.addOre(ore => {
		ore.id = 'forgedingears:vibranium_gen'
		ore.biomes = ['minecraft:desert','minecraft:jungle','minecraft:sparse_jungle','minecraft:bamboo_jungle']
		ore.addTarget('minecraft:stone', 'forgedingears:vibranium_ore')
		ore.count([3, 5])
		  .squared()
		  .triangleHeight(
			anchors.absolute(30),
			anchors.absolute(80)
		  )
		ore.size = 4
		ore.noSurface = 0
		ore.worldgenLayer = 'underground_ores'
	  })
})