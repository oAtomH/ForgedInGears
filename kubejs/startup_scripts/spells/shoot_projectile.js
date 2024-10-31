StartupEvents.registry('irons_spellbooks:spells', event => {
    event.create('shoot_projectile')
        .setCastTime(1)                           // Cast time in ticks
        .setCooldownSeconds(3)                    // Spell cooldown in seconds
        .setManaCostPerLevel(20)                   // How much additional mana is needed per level
        .setCastType('instant')                 // Cast type can be "continuous", "long", "instant", or "none"
        .setSchool('kubejs:potion_effect')       // The school type. This is the ID of the school you want to use
        .setMinRarity('common')                      // The minimum rarity of the spell. Can be "common", "uncommon", "rare", "epic", or "legendary"
        .setMaxLevel(5)                            // The maximum level
        .setStartSound('item.honey_bottle.drink')  // The sound to be played when you start casting the spell. Used for long spells
        .setFinishSound('item.honey_bottle.drink') // Plays when the spell has finished casting
        .onCast(ctx => global.shoot_projectile(ctx))       // The function to be called when the spell is cast
        .setAllowLooting(true)                     // Setting this to false will disallow looting the spell from mobs or chests
        .needsLearning(false)                      // Usually this one is used for Eldritch spells
        .canBeCraftedBy(player => true)
})

global.shoot_projectile = (/** @type {Internal.CustomSpell$CastContext} */ ctx) => {
    let /** @type {Internal.ServerPlayer} */ player = ctx.entity;
    player.tell('BOOM')
    let arrow = player.block.createEntity("minecraft:arrow")
    arrow.setPos(player.x, player.y+1.5, player.z)
    arrow.setMotionY(player.lookAngle.y() * 0.1)
    arrow.setMotionX(player.lookAngle.x() * 2.5)
    arrow.setMotionZ(player.lookAngle.z() * 2.5)
    arrow.spawn()
}