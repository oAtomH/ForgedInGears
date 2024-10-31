const $DamageSource = Java.loadClass(`net.minecraft.world.damagesource.DamageSource`)

/** Register effects */
StartupEvents.registry('mob_effect', event => {
    // Register radiation effect
    event.create('forgedingears:radiation')
        // Change the name to be "Radiation", in green
        .displayName(Component.red("Radiation"))
        // Set a tick event to apply the action
        .effectTick((entity, lvl) => global.radiationEffect(entity, lvl))
        // Set the color of the effect
        .color(Color.RED)
        // Set whether the effect is harmful
        .harmful();
})

/**
 * Applies the radiation effect.
 * Damages the entity (likely player) with 2 HP (1 hearts) per 10 ticks.
 *
 * @param {Internal.Entity} entity The entity to apply the effect to
 * @param {number} lvl The level of the effect
 */
global.radiationEffect = (entity, lvl) => {
    // Create damage source
    let damageSource = new $DamageSource('radiation')
    // Check if the global is run on the client. If so, return
    if (entity.level.clientSide) return;
    // Damage based on level 
    entity.attack(damageSource, lvl * 0.5 + 0.2);
}
