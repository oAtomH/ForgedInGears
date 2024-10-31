BlockEvents.leftClicked(event => {
	if (event.block.id == "forgedingears:neutrum_ore")
	{
		event.player.potionEffects.add('forgedingears:radiation', 121, 0, false, true)
	}
})
BlockEvents.broken(event => {
	if (event.block.id == "forgedingears:neutrum_ore")
	{
		event.player.potionEffects.add('forgedingears:radiation', 121, 1, false, true)
	}
})
PlayerEvents.tick(event => {
	let player = event.player
	if (player.ticksExisted % 20 != 0) return
	if (player.headArmorItem == 'tconstruct:slime_helmet' && player.chestArmorItem == 'tconstruct:slime_chestplate' && player.legsArmorItem == 'tconstruct:slime_leggings' && player.feetArmorItem == 'tconstruct:slime_boots') return
	let radioactiveBlockPos = BlockPos.findClosestMatch(player.block.pos, 3, 3, pos => event.level.getBlock(pos).hasTag("forgedingears:radioactive"))
	radioactiveBlockPos.ifPresent(() => player.potionEffects.add('forgedingears:radiation', 21, 2, false, true))
	if (player.inventory.find("#forgedingears:radioactive") > -1) player.potionEffects.add('forgedingears:radiation', 201, 3, false, true)
  })
  
  ServerEvents.tags('block', event => {
	event.add("forgedingears:radioactive", "forgedingears:neutrum_ore")
  })
  
  ServerEvents.tags('item', event => {
	event.add("forgedingears:radioactive", "forgedingears:neutrum_ore")
  })