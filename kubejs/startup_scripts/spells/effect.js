StartupEvents.registry('irons_spellbooks:spells', event => {
	event.create('effect')
		.setCastTime(0)                           // Cast time in ticks
		.setCooldownSeconds(3)                    // Spell cooldown in seconds
		.setManaCostPerLevel(20)                   // How much additional mana is needed per level
		.setCastType('instant')                 // Cast type can be "continuous", "long", "instant", or "none"
		.setSchool('kubejs:potion_effect')       // The school type. This is the ID of the school you want to use
		.setMinRarity('common')                      // The minimum rarity of the spell. Can be "common", "uncommon", "rare", "epic", or "legendary"
		.setMaxLevel(5)                            // The maximum level
		.setStartSound('item.honey_bottle.drink')  // The sound to be played when you start casting the spell. Used for long spells
		.setFinishSound('item.honey_bottle.drink') // Plays when the spell has finished casting
		.onCast(ctx => global.effect(ctx))       // The function to be called when the spell is cast
		.setAllowLooting(true)                     // Setting this to false will disallow looting the spell from mobs or chests
		.needsLearning(false)                      // Usually this one is used for Eldritch spells
		.canBeCraftedBy(player => true)
})

global.effect = (/** @type {Internal.CustomSpell$CastContext} */ ctx) => {
	let /** @type {Internal.ServerPlayer} */ player = ctx.entity;
	player.potionEffects.add("minecraft:speed", 60, ctx.spellLevel, false, true)
}