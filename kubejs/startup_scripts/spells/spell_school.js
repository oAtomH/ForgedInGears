StartupEvents.registry("attribute", event => {
	// Use the `spell` type for these attributes and set all the values needed. The default value has to be higher than the minimum value and lower than the maximum value.
	event.create("potion_effect_spell_power", "irons_spells_js:spell").setDefaultValue(1.0).setMinimumValue(0.0).setMaximumValue(10.0)
	event.create("potion_effect_spell_resistance", "irons_spells_js:spell").setDefaultValue(1.0).setMinimumValue(0.0).setMaximumValue(10.0)
})
EntityJSEvents.attributes(event => {
    event.allTypes.forEach(type => {
        event.modify(type, (a) => {
            a.add('kubejs:potion_effect_spell_power')
            a.add('kubejs:potion_effect_spell_resistance')
        })
    })
})
StartupEvents.registry("irons_spellbooks:schools", event => {
	// This creates a school named `Test` with the ID `kubejs:test`.
	// You can use the ID of this school in any spell you create, or to change the school of an existing spell using the Iron's Spells server config.
	event.create("potion_effect")
		.setName(Component.of("Potion Effects").aqua()) // This sets what the school will be displayed as. This needs to be a Component.
		.setFocus("kubejs:potion_effect_focus") // The focus needs to be an item tag. You can add this same tag to an item to make it the focus.
		.setPowerAttribute("kubejs:potion_effect_spell_power") // This sets the power attribute.
		.setResistanceAttribute("kubejs:potion_effect_spell_resistance") // This sets the resistance attribute.
		.setDefaultCastSound('minecraft:entity.chicken.death') // You can also set a default cast sound for each spell in the school.
})