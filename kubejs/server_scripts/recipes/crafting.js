ServerEvents.recipes(e => {
    e.shaped('minecraft:bundle', [
        'AA',
        'BB'
    ], {
        A: 'forgedingears:leather_strip',
        B: 'forgedingears:leather_sheet'
    }).id('forgedingears:bund')
    e.remove({ output: 'iceandfire:dragon_meal'})
    e.remove({ output: 'iceandfire:sickly_dragon_meal'})
    e.shaped('iceandfire:sickly_dragon_meal', [
        'APA',
        'BQB',
        'APA'
    ], {
        A: 'minecraft:fermented_spider_eye',
        B: 'minecraft:poisonous_potato',
        P: 'minecraft:rotten_flesh',
        Q: 'minecraft:fermented_spider_eye'
    }).id('forgedingears:sdragmeal')
    e.remove({ output: 'farmersdelight:skillet'})
    e.shaped('farmersdelight:skillet', [
        '  A',
        ' B ',
        'C  '
    ], {
        A: Item.of('tinkers_reforged:large_round_plate', '{Material: "tconstruct:iron"}'),
        B: Item.of('tconstruct:round_plate', '{Material: "tconstruct:iron"}'),
        C: Item.of('tconstruct:tough_handle', '{Material: "materialis:brass"}')
    }).id('forgedingears:skillet')
    e.remove({ output: 'farmersdelight:cooking_pot'})
    e.shaped('farmersdelight:cooking_pot', [
        'ABA',
        'CDC',
        'CEC'
    ], {
        A: Item.of('tconstruct:round_plate', '{Material: "materialis:brass"}'),
        B: 'minecraft:stick',
        C: 'create:iron_sheet',
        D: 'minecraft:water_bucket',
        E: Item.of('tinkers_reforged:large_round_plate', '{Material: "tconstruct:iron"}'),
    }).id('forgedingears:cooking_pot')
    e.remove({ output: 'farmersdelight:stove'})
    e.shaped('farmersdelight:stove', [
        'AAA',
        'BDB',
        'BCB'
    ], {
        A: 'create:iron_sheet',
        B: 'minecraft:bricks',
        C: 'minecraft:campfire',
        D: 'minecraft:air'
    }).id('forgedingears:stove')
    e.remove({ output: 'tconstruct:plate_shield'})
    e.shaped('tconstruct:plate_shield', [
        'AA ',
        'BB ',
        'AA '
    ], {
        A: Item.of('tconstruct:large_plate', '{Material: "tconstruct:cobalt"}'),
        B: 'minecraft:crimson_stem'
    }).id('forgedingears:pshield')
    e.remove({ output: 'tconstruct:plate_helmet'})
    e.shaped('tconstruct:plate_helmet', [
        'DAD',
        'ABA',
        'CCC'
    ], {
        A: Item.of('tinkers_reforged:large_round_plate', { Material: "tconstruct:cobalt" }),
        B: Item.of('tconstruct:large_plate', { Material: "tconstruct:cobalt" }),
        C: 'minecraft:chain',
        D: 'minecraft:air'
    }).id('forgedingears:phelmet')
    e.remove({ output: 'tconstruct:plate_chestplate'})
    e.shaped('tconstruct:plate_chestplate', [
        'ABA',
        'ABA',
        'CAC'
    ], {
        A: Item.of('tconstruct:large_plate', { Material: "tconstruct:cobalt" }),
        B: Item.of('tinkers_reforged:large_round_plate', { Material: "tconstruct:cobalt" }),
        C: 'minecraft:chain'
    }).id('forgedingears:pchestplate')
    e.remove({ output: 'tconstruct:plate_leggings'})
    e.shaped('tconstruct:plate_leggings', [
        'AAA',
        'B B',
        'C C'
    ], {
        A: Item.of('tinkers_reforged:large_round_plate', { Material: "tconstruct:cobalt" }),
        B: Item.of('tconstruct:large_plate', { Material: "tconstruct:cobalt" }),
        C: 'minecraft:chain'
    }).id('forgedingears:pleggings')
    e.remove({ output: 'tconstruct:plate_boots'})
    e.shaped('tconstruct:plate_boots', [
        'A A',
        'B B',
        'B B'
    ], {
        A: Item.of('tconstruct:round_plate', { Material: "tconstruct:cobalt" }),
        B: Item.of('tconstruct:large_plate', { Material: "tconstruct:cobalt" })
    }).id('forgedingears:pboots')  
    e.remove({ output: 'tconstruct:travelers_shield'})

    e.shaped('tconstruct:travelers_shield', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#minecraft:logs_that_burn',
        B: Item.of('tconstruct:large_plate', { Material: "tconstruct:copper" })
    }).id('forgedingears:tshield')
    e.remove({ output: 'tconstruct:travelers_helmet'})

    e.shaped(Item.of('tconstruct:travelers_helmet'), [
        'ADA',
        'BAB',
        'CDC'
    ], {
        A: 'forgedingears:leather_strip',
        B: '#forge:glass_panes/colorless',
        C: Item.of('tconstruct:round_plate', { Material: "tconstruct:copper" }),
        D: 'minecraft:air',
    }).id('forgedingears:thelmet')
    
    e.remove({ output: 'tconstruct:travelers_chestplate'})
    
    e.shaped(Item.of('tconstruct:travelers_chestplate'), [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'forgedingears:leather_strip',
        B: 'minecraft:air',
        C: 'forgedingears:small_leather_sheet',
        D: Item.of('tconstruct:large_plate', { Material: "tconstruct:copper" }),
        E: 'forgedingears:leather_sheet',
        F: Item.of('tconstruct:round_plate', { Material: "tconstruct:copper" })
    }).id('forgedingears:tchestplate')
    
    e.remove({ output: 'tconstruct:travelers_leggings'})
    
    e.shaped(Item.of('tconstruct:travelers_leggings'), [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'forgedingears:leather_sheet',
        B: Item.of('tconstruct:large_plate', { Material: "tconstruct:copper" }),
        C: Item.of('tconstruct:round_plate', { Material: "tconstruct:copper" }),
        D: 'minecraft:air',
        E: 'forgedingears:leather_strip',
        F: 'minecraft:air'
    }).id('forgedingears:tleggings')
    
    e.remove({ output: 'tconstruct:travelers_boots'})
    
    e.shaped(Item.of('tconstruct:travelers_boots'), [
        'BBB',
        'ABA',
        'CBC'
    ], {
        A: Item.of('tconstruct:round_plate', { Material: "tconstruct:copper" }),
        B: 'minecraft:air',
        C: 'forgedingears:leather_sheet'
    }).id('forgedingears:tboots')
    e.remove({ output: 'minecraft:chest'})
    e.shaped(Item.of('minecraft:chest'), [
        'ACA',
        'ABA',
        'CCC'
    ], {
        A: '#forgedingears:lumber',
        B: 'minecraft:air',
        C: '#minecraft:wooden_slabs'
    }).id('forgedingears:chest')
    e.remove({ output: 'minecraft:torch'})
    e.shaped(Item.of('minecraft:torch'), [
        'ABA',
        'ACA',
        'ADA'
    ], {
        A: 'minecraft:air',
        B: 'forgedingears:charcoal_powder',
        C: 'survivalistessentials:cloth',
        D: 'minecraft:stick'
    }).id('forgedingears:torch')
    e.remove({ output: 'survivalistessentials:plant_string'})
    e.shapeless('forgedingears:plant_cordage', ['forgedingears:straw', 'forgedingears:straw', 'forgedingears:straw', 'forgedingears:straw']).id('forgedingears:plant_cordage')
    e.remove({ output: 'farmersdelight:canvas'})
    e.shaped('2x farmersdelight:canvas', [
        'BAB',
        'ABA',
        'BAB'
    ], {
        A: 'minecraft:air',
        B: 'forgedingears:plant_cordage'
    }).id('forgedingears:canvas')
    // Tinkers' Pattern
    e.remove({ output: 'tconstruct:pattern' })
    e.shaped('tconstruct:pattern', [
        'ACA',
        'CDC',
        'ACA'
    ], {
        A: 'minecraft:stick',
        C: '#forgedingears:lumber',
        D: 'farmersdelight:canvas'
    }).id('forgedingears:pattern')
    e.remove({ output: 'tconstruct:part_chest' })
    e.shaped('tconstruct:part_chest', [
        ' P ',
        'SCS',
        'SLS'
    ], {
        P: 'tconstruct:pattern',
        L: '#forgedingears:lumber',
        C: 'minecraft:chest',
        S: 'minecraft:stick'
    }).id('forgedingears:part_chest')
    e.remove({ output: 'tconstruct:tinkers_chest' })
    e.shaped('tconstruct:tinkers_chest', [
        ' P ',
        'SCS',
        'SLS'
    ], {
        P: 'tconstruct:pattern',
        L: '#forgedingears:lumber',
        C: 'minecraft:chest',
        S: 'forgedingears:skyroot_lumber'
    }).id('forgedingears:tinkers_chest')
    e.remove({ output: 'natprog:flint_hatchet'})
    e.shaped('survivalistessentials:flint_hatchet', [
        'AB',
        'CD'
    ], {
        A: 'minecraft:flint',
        B: 'forgedingears:plant_cordage',
        C: 'minecraft:stick',
        D: 'survivalistessentials:rock_stone'
    }).id('forgedingears:crude_hatchet')
    e.shaped('forgedingears:bone_saw_blade', [
        'AB',
        'CD'
    ], {
        A: 'minecraft:stick',
        B: 'minecraft:flint',
        C: 'forgedingears:plant_cordage',
        D: 'natprog:flint'
    }).id('forgedingears:bone_saw_blade')
    e.remove({ output: 'survivalistessentials:saw_handle'})
    e.shaped('survivalistessentials:saw_handle', [
        'AB',
        'CD'
    ], {
        A: 'minecraft:stick',
        B: 'forgedingears:plant_cordage',
        C: 'minecraft:stick',
        D: 'minecraft:stick'
    }).id('forgedingears:saw_handle')
    e.remove({ output: 'survivalistessentials:crude_saw'})
    e.shaped('survivalistessentials:crude_saw', [
        'AB',
        'CD'
    ], {
        A: 'survivalistessentials:crude_saw_blade',
        B: 'forgedingears:plant_cordage',
        C: 'forgedingears:plant_cordage',
        D: 'survivalistessentials:saw_handle'
    }).id('forgedingears:crude_saw')
    e.remove({ output: 'minecraft:crafting_table'})
    e.shaped('minecraft:crafting_table', [
        'AB',
        'CD'
    ], {
        A: 'survivalistessentials:crude_saw',
        B: 'survivalistessentials:crude_hatchet',
        C: '#minecraft:logs',
        D: '#forgedingears:lumbers'
    }).id('forgedingears:crafting_table')
    e.remove({ output: 'minecraft:book'})
    e.shaped('minecraft:book', [
        'APB',
        'PPP',
        'BPA'
    ], {
        A: 'minecraft:string',
        B: 'forgedingears:leather_sheet',
        P: 'minecraft:paper'
    }).id('forgedingears:book')
    e.remove({ output: 'minecraft:flint_and_steel', type: 'minecraft:crafting_shapeless' })
    e.shapeless('minecraft:flint_and_steel', [
        'survivalistessentials:flint_shard',
        Item.of('tconstruct:round_plate', { Material: "materialis:aluminum" })
    ]).id('firestarter')
    e.shaped('forgedingears:small_leather_hide', [
        'ABA'
    ], {
        B: 'minecraft:leather',
        A: 'minecraft:string'
    }).id('forgedingears:small_leather_hide')
    e.shaped('forgedingears:leather_hide', [
        'ABA',
        'BAC',
        'ACC'
    ], {
        A: 'minecraft:leather',
        B: 'minecraft:string',
        C: 'minecraft:air'
    }).id('forgedingears:leather_hide')
    e.shaped('forgedingears:large_leather_hide', [
        'AAB',
        'ABA',
        'BAA'
    ], {
        A: 'minecraft:leather',
        B: 'minecraft:string'
    }).id('forgedingears:large_leather_hide')



    e.remove({ output: 'create:fluid_tank' })
    e.shaped('create:fluid_tank', [
        'ACA',
        'BDB',
        'ACA'
    ], {
        A: '#forge:nuggets/copper',
        B: 'create:copper_sheet',
        C: '#forge:glass_panes/colorless',
        D: 'minecraft:barrel'
    }).id('forgedingears:fluid_tank_new');
    
    e.remove({ output: 'create:mechanical_saw' })
    e.shaped('create:mechanical_saw', [
        'ABA',
        'CDC',
        'EEE'
    ], {
        A: Item.of('tconstruct:small_blade', '{Material: "tinkers_reforged:duralumin"}'),
        B: Item.of('tinkers_reforged:large_round_plate', '{Material: "tinkers_reforged:duralumin" }'),
        C: 'create:shaft',
        D: 'create:andesite_casing',
        E: 'forgedingears:andesite_alloy_sheet'
    }).id('forgedingears:mechanical_saw_new');
    
    e.remove({ output: 'create:mechanical_drill' })
    e.shaped('create:mechanical_drill', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'minecraft:air',
        B: Item.of('tconstruct:round_plate', { Material: "tconstruct:iron" }),
        C: Item.of('create:andesite_alloy'),
        D: Item.of('tconstruct:large_plate', { Material: "tconstruct:iron" }),
        E: Item.of('create:andesite_casing'),
    }).id('forgedingears:mechanical_drill_new');
        
    // Water Wheel
    e.remove({ output: 'create:water_wheel' })
    e.shaped('create:water_wheel', [
        'LLL',
        'LGL',
        'LLL'
    ], {
        L: '#forgedingears:lumber',
        G: 'create:gearbox'
    }).id('forgedingears:water_wheel_new');
    
    // Large Water Wheel
    e.remove({ output: 'create:large_water_wheel' })
    e.shaped('create:large_water_wheel', [
        'LPL',
        'LWL',
        'LPL'
    ], {
        L: '#forgedingears:lumber',
        P: '#minecraft:planks',
        W: 'create:water_wheel'
    }).id('forgedingears:large_water_wheel_new');
    
    // Propeller
    e.remove({ output: 'create:propeller' })
    e.shaped('create:propeller', [
        'INI',
        'NGN',
        'INI'
    ], {
        I: 'minecraft:iron_nugget',
        N: Item.of('tconstruct:small_blade', { Material: "tconstruct:iron" }),
        G: 'create:andesite_alloy'
    }).id('forgedingears:propeller_new');
    
    // Millstone
    e.remove({ output: 'create:millstone' })
    e.shaped('create:millstone', [
        'IRI',
        'LCL',
        'SSS'
    ], {
        I: Item.of('tconstruct:round_plate', { Material: "tconstruct:rock#andesite" }),
        R: 'create:cogwheel',
        L: '#forgedingears:lumber',
        C: 'create:andesite_casing',
        S: '#forge:stone'
    }).id('forgedingears:millstone_new');
    
    // Mechanical Mixer
    e.remove({ output: 'create:mechanical_mixer' })
    e.shaped('create:mechanical_mixer', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'forgedingears:andesite_alloy_sheet',
        B: 'create:piston_extension_pole',
        C: 'create:cogwheel',
        D: 'create:andesite_casing',
        E: 'minecraft:air',
        F: 'create:whisk'
    }).id('forgedingears:mmixer')
    
    // Whisk
    e.remove({ output: 'create:whisk' })
    e.shaped('create:whisk', [
        'ASA',
        'ICI',
        'IWI'
    ], {
        A: 'minecraft:air',
        S: 'create:shaft',
        I: 'tinkers_reforged:aluminum_nugget',
        C: 'create:andesite_alloy',
        W: 'tinkers_reforged:aluminum_ingot'
    }).id('forgedingears:whisk')
    
    // Hand Crank
    e.remove({ output: 'create:hand_crank' })
    e.shaped('create:hand_crank', [
        'AAB',
        'CCD',
        'BAA'
    ], {
        A: 'minecraft:air',
        B: 'create:shaft',
        C: '#forgedingears:lumber',
        D: 'create:andesite_alloy'
    }).id('forgedingears:hand_crank')
    
    // Cogwheel
    e.remove({ output: 'create:cogwheel' })
    e.shaped('create:cogwheel', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:air',
        B: '#minecraft:wooden_buttons',
        C: 'create:shaft'
    }).id('forgedingears:cogwheel')
    
    // Large Cogwheel
    e.remove({ output: 'create:large_cogwheel' })
    e.shaped('create:large_cogwheel', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:air',
        B: '#forgedingears:lumber',
        C: 'create:cogwheel'
    }).id('forgedingears:large_cogwheel')
    
    // Mechanical Press
    e.remove({ output: 'create:mechanical_press' })
    e.shaped('create:mechanical_press', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'forgedingears:andesite_alloy_sheet',
        B: 'create:piston_extension_pole',
        C: 'create:shaft',
        D: 'create:andesite_casing',
        E: Item.of('tconstruct:large_plate', '{Material:"tinkers_reforged:duralumin"}'),
        F: Item.of('tinkers_reforged:large_round_plate', '{Material:"tinkers_reforged:duralumin"}')
    }).id('forgedingears:mechanical_press')
    
    // Spout
    e.remove({ output: 'create:spout' })
    e.shaped('create:spout', [
        'ABA',
        'CDC',
        'FEF'
    ], {
        A: 'forgedingears:andesite_alloy_sheet',
        B: 'create:fluid_tank',
        C: 'create:copper_sheet',
        D: 'create:fluid_pipe',
        E: 'minecraft:dried_kelp',
        F: 'minecraft:air'
    }).id('forgedingears:spout')
    
    // Item Drain
    e.remove({ output: 'create:item_drain' })
    e.shaped('create:item_drain', [
        'ABA',
        'CDC',
        'CCC'
    ], {
        A: 'forgedingears:andesite_alloy_sheet',
        B: 'minecraft:iron_bars',
        C: 'create:copper_sheet',
        D: 'create:copper_casing'
    }).id('forgedingears:item_drain')
    
    // Display Link
    e.remove({ output: 'create:display_link' })
    e.shaped('create:display_link', [
        'ABC',
        'DEF'
    ], {
        A: 'vintageimprovements:copper_spring',
        B: 'create:electron_tube',
        C: 'create:brass_sheet',
        D: 'create:andesite_alloy',
        E: 'create:brass_casing',
        F: 'minecraft:redstone',
    }).id('forgedingears:display_link')
    
    // Cart Assembler
    e.remove({ output: 'create:cart_assembler' })
    e.shaped('create:cart_assembler', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:iron_sheet',
        B: 'minecraft:stone_slab',
        C: 'minecraft:redstone',
        D: 'create:andesite_alloy',
        E: '#forgedingears:lumber',
        F: 'forgedingears:andesite_alloy_nugget'
    }).id('forgedingears:cart_assembler')
    
    // Linear Chassis
    e.remove({ output: 'create:linear_chassis' })
    e.shaped('2x create:linear_chassis', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'create:andesite_alloy',
        B: 'create:iron_sheet',
        C: '#forgedingears:lumber',
        D: '#minecraft:logs_that_burn'
    }).id('forgedingears:linear_chassis')
    
    // Radial Chassis
    e.remove({ output: 'create:radial_chassis' })
    e.shaped('3x create:radial_chassis', [
        'ABA',
        'DCD',
        'ABA'
    ], {
        A: 'create:andesite_alloy',
        B: '#forgedingears:lumber',
        C: '#minecraft:planks',
        D: 'create:iron_sheet'
    }).id('forgedingears:radial_chassis')
    
    // Sticker
    e.remove({ output: 'create:sticker' })
    e.shaped('create:sticker', [
        'ABA',
        'CDC',
        'EEE'
    ], {
        A: 'create:andesite_alloy',
        B: 'minecraft:slime_ball',
        C: 'minecraft:redstone',
        D: 'minecraft:piston',
        E: '#forge:stone'
    }).id('forgedingears:sticker')
    
    // Contraption Controls
    e.remove({ output: 'create:contraption_controls' })
    e.shaped('create:contraption_controls', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:electron_tube',
        B: 'create:iron_sheet',
        C: 'forgedingears:andesite_alloy_sheet',
        D: '#minecraft:planks',
        E: 'create:andesite_alloy',
        F: 'minecraft:stone_slab'
    }).id('forgedingears:contraption_controls')
    
    // Portable Storage Interface
    e.remove({ output: 'create:portable_storage_interface' })
    e.shaped('create:portable_storage_interface', [
        'ABC',
        'DEA',
        'ABC'
    ], {
        A: 'create:iron_sheet',
        B: 'create:andesite_alloy',
        C: 'forgedingears:andesite_alloy_nugget',
        D: 'create:andesite_casing',
        E: 'create:chute'
    }).id('forgedingears:portable_storage_interface')
    
    // Redstone Contact
    e.remove({ output: 'create:redstone_contact' })
    e.shaped('create:redstone_contact', [
        'ABA',
        'CDC',
        'EEE'
    ], {
        A: 'forgedingears:andesite_alloy_nugget',
        B: 'create:iron_sheet',
        C: 'minecraft:redstone',
        D: 'create:andesite_alloy',
        E: '#forge:stone'
    }).id('forgedingears:redstone_contact')
    
    // Mechanical Roller
    e.remove({ output: 'create:mechanical_roller' })
    e.shaped('2x create:mechanical_roller', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:andesite_alloy',
        B: 'create:andesite_casing',
        C: 'create:iron_sheet',
        D: 'create:shaft',
        E: 'minecraft:air',
        F: 'create:crushing_wheel'
    }).id('forgedingears:mechanical_roller')
    
    // Sail Frame
    e.remove({ output: 'create:sail_frame' })
    e.shaped('create:sail_frame', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'forgedingears:andesite_alloy_nugget',
        B: 'minecraft:stick',
        C: 'minecraft:air'
    }).id('forgedingears:sail_frame')
    
    // White Sail
    e.remove({ output: 'create:white_sail' })
    e.shaped('create:white_sail', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'minecraft:string',
        B: 'forgedingears:andesite_alloy_nugget',
        C: '#minecraft:wool',
        D: 'create:sail_frame'
    }).id('forgedingears:white_sail')
    
    // Sequenced Gearshift
    e.remove({ output: 'create:sequenced_gearshift' })
    e.shaped('create:sequenced_gearshift', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'minecraft:redstone',
        B: 'create:electron_tube',
        C: 'create:shaft',
        D: 'create:brass_casing',
        E: 'create:cogwheel'
    }).id('forgedingears:sequenced_gearshift')
    
    // Track Station
    e.remove({ output: 'create:track_station' })
    e.shaped('create:track_station', [
        'ABB',
        'CDC',
        'EFE'
    ], {
        A: 'minecraft:stick',
        B: 'minecraft:air',
        C: 'forgedingears:andesite_alloy_nugget',
        D: 'minecraft:compass',
        E: 'create:iron_sheet',
        F: 'create:railway_casing'
    }).id('forgedingears:track_station')
    
    // Track Signal
    e.remove({ output: 'create:track_signal' })
    e.shaped('create:track_signal', [
        'ABB',
        'CCC',
        'DED'
    ], {
        A: 'create:electron_tube',
        B: 'minecraft:air',
        C: 'minecraft:redstone',
        D: 'create:iron_sheet',
        E: 'create:railway_casing'
    }).id('forgedingears:track_signal')
    
    // Track Observer
    e.remove({ output: 'create:track_observer' })
    e.shaped('create:track_observer', [
        'AAA',
        'BCB',
        'DED'
    ], {
        A: '#forgedingears:lumber',
        B: 'minecraft:redstone',
        C: 'minecraft:observer',
        D: 'create:iron_sheet',
        E: 'create:railway_casing'
    }).id('forgedingears:track_observer')
    
    // Analog Lever
    e.remove({ output: 'create:analog_lever' })
    e.shaped('create:analog_lever', [
        'ABA',
        'ACA',
        'ADA'
    ], {
        A: 'minecraft:air',
        B: 'minecraft:stick',
        C: 'minecraft:redstone',
        D: 'create:andesite_alloy'
    }).id('forgedingears:analog_lever')
    
    // Train Controls
    e.remove({ output: 'create:controls' })
    e.shaped('create:controls', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:analog_lever',
        B: 'create:precision_mechanism',
        C: 'forgedingears:aluminum_sheet',
        D: '#forgedingears:lumber',
        E: 'create:brass_sheet',
        F: 'create:railway_casing'
    }).id('forgedingears:controls')
    
    // Andesite Funnel
    e.remove({ output: 'create:andesite_funnel' })
    e.shaped('create:andesite_funnel', [
        'AAA',
        'BCB',
        'DCD'
    ], {
        A: 'create:andesite_alloy',
        B: 'minecraft:redstone',
        C: 'minecraft:dried_kelp',
        D: 'forgedingears:andesite_alloy_nugget'
    }).id('forgedingears:andesite_funnel')
    
    // Brass Funnel
    e.remove({ output: 'create:brass_funnel' })
    e.shaped('create:brass_funnel', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:brass_sheet',
        B: 'create:crafter_slot_cover',
        C: 'minecraft:redstone',
        D: 'minecraft:dried_kelp',
        E: 'create:brass_sheet',
        F: 'minecraft:dried_kelp'
    }).id('forgedingears:brass_funnel')
    
    // Andesite Tunnel
    e.remove({ output: 'create:andesite_tunnel' })
    e.shaped('create:andesite_tunnel', [
        'ABA',
        'CDC',
        'EDE'
    ], {
        A: 'create:andesite_alloy',
        B: 'create:andesite_alloy_block',
        C: 'forgedingears:andesite_alloy_nugget',
        D: 'minecraft:dried_kelp',
        E: 'forgedingears:andesite_alloy_nugget'
    }).id('forgedingears:andesite_tunnel')
    
    // Brass Tunnel
    e.remove({ output: 'create:brass_tunnel' })
    e.shaped('create:brass_tunnel', [
        'ABA',
        'ACA',
        'ACA'
    ], {
        A: 'create:brass_sheet',
        B: 'create:crafter_slot_cover',
        C: 'minecraft:dried_kelp'
    }).id('forgedingears:brass_tunnel')
    
    // Content Observer
    e.remove({ output: 'create:content_observer' })
    e.shaped('create:content_observer', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:brass_sheet',
        B: 'create:crafter_slot_cover',
        C: 'minecraft:redstone',
        D: 'minecraft:observer',
        E: 'create:iron_sheet',
        F: 'create:brass_casing'
    }).id('forgedingears:content_observer')
    
    // Stockpile Switch
    e.remove({ output: 'create:stockpile_switch' })
    e.shaped('create:stockpile_switch', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:brass_sheet',
        B: 'create:crafter_slot_cover',
        C: 'create:electron_tube',
        D: 'create:brass_casing',
        E: 'minecraft:redstone',
        F: 'create:brass_sheet'
    }).id('forgedingears:stockpile_switch')
    
    // Display Board
    e.remove({ output: 'create:display_board' })
    e.shaped('create:display_board', [
        'ABA',
        'CDC',
        'AAA'
    ], {
        A: 'forgedingears:andesite_alloy_nugget',
        B: 'create:electron_tube',
        C: 'create:andesite_alloy',
        D: 'create:cogwheel'
    }).id('forgedingears:display_board')
    
    // Nixie Tube
    e.remove({ output: 'create:nixie_tube' })
    e.shaped('2x create:nixie_tube', [
        'ABA',
        'CBC',
        'DBD'
    ], {
        A: 'create:electron_tube',
        B: 'minecraft:air',
        C: 'create:copper_sheet',
        D: 'forgedingears:aluminum_sheet'
    }).id('forgedingears:nixie_tube')
    
    // Rose Quartz Lamp
    e.remove({ output: 'create:rose_quartz_lamp' })
    e.shaped('create:rose_quartz_lamp', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'forgedingears:andesite_alloy_nugget',
        B: 'create:polished_rose_quartz',
        C: 'minecraft:redstone_lamp'
    }).id('forgedingears:rose_quartz_lamp')
    
    // Redstone Link
    e.remove({ output: 'create:redstone_link' })
    e.shaped('create:redstone_link', [
        'BAA',
        'CDE',
        'FGF'
    ], {
        A: 'minecraft:air',
        B: 'minecraft:redstone_torch',
        C: 'create:copper_sheet',
        D: 'create:crafter_slot_cover',
        E: 'minecraft:redstone',
        F: 'create:brass_sheet',
        G: '#forgedingears:lumber'
    }).id('forgedingears:redstone_link')
    
    // Copper Backtank
    e.remove({ output: 'create:copper_backtank' })
    e.shaped('create:copper_backtank', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'vintageimprovements:small_copper_spring',
        B: 'create:shaft',
        C: 'create:cogwheel',
        D: 'create:fluid_tank',
        E: 'create:copper_sheet',
        F: 'minecraft:copper_ingot'
    }).id('forgedingears:copper_backtank')
    
    // Copper Diving Helmet
    e.remove({ output: 'create:copper_diving_helmet' })
    e.shaped('create:copper_diving_helmet', [
        'AAA',
        'BCB',
        'ADA'
    ], {
        A: 'create:copper_sheet',
        B: 'minecraft:copper_ingot',
        C: 'create:fluid_tank',
        D: 'minecraft:air'
    }).id('forgedingears:copper_diving_helmet')
    
    // Brown Toolbox
    e.remove({ output: 'create:brown_toolbox' })
    e.shaped('create:brown_toolbox', [
        'ABA',
        'CDC',
        'EEE'
    ], {
        A: 'forgedingears:andesite_alloy_nugget',
        B: 'create:golden_sheet',
        C: '#forgedingears:lumber',
        D: 'create:cogwheel',
        E: 'create:golden_sheet'
    }).id('forgedingears:brown_toolbox')
    
    // Schematicannon
    e.remove({ output: 'create:schematicannon' })
    e.shaped('create:schematicannon', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'minecraft:air',
        B: 'create:chute',
        C: '#forgedingears:lumber',
        D: 'create:smart_chute',
        E: 'create:iron_sheet',
        F: Item.of('tinkers_reforged:large_round_plate', '{Material: "tconstruct:iron"}'),
    }).id('forgedingears:schematicannon')
    
    // Gearbox
    e.remove({ output: 'create:gearbox' })
    e.shaped('create:gearbox', [
        'ABA',
        'CEC',
        'ABA'
    ], {
        A: 'forgedingears:andesite_alloy_nugget',
        B: 'create:cogwheel',
        C: 'create:shaft',
        E: 'create:andesite_casing'
    }).id('forgedingears:aagearboxa')
    
    // Clutch
    e.remove({ output: 'create:clutch' })
    e.shaped('create:clutch', [
        'ABA',
        'DCD',
        'AEA'
    ], {
        A: 'minecraft:air',
        B: 'minecraft:lever',
        C: 'create:andesite_casing',
        D: 'minecraft:redstone',
        E: 'create:shaft'
    }).id('forgedingears:clutch')
    
    // Gearshift
    e.remove({ output: 'create:gearshift' })
    e.shaped('create:gearshift', [
        'ABA',
        'DCD',
        'AEA'
    ], {
        A: 'minecraft:air',
        B: 'minecraft:redstone',
        C: 'create:andesite_casing',
        D: 'create:cogwheel',
        E: 'create:shaft'
    }).id('forgedingears:gearshift')
    
    // Chain
    e.remove({ output: 'minecraft:chain' })
    e.shaped('minecraft:chain', [
        'ABB',
        'BAB',
        'BBA'
    ], {
        A: 'minecraft:air',
        B: 'minecraft:iron_nugget'
    }).id('forgedingears:chain')
    
    // Encased Chain Drive
    e.remove({ output: 'create:encased_chain_drive' })
    e.shaped('create:encased_chain_drive', [
        'ABA',
        'DCD',
        'ABA'
    ], {
        A: 'minecraft:air',
        B: 'create:shaft',
        C: 'create:andesite_casing',
        D: 'minecraft:chain'
    }).id('forgedingears:encased_chain_drive')
    
    // Adjustable Chain Gearshift
    e.remove({ output: 'create:adjustable_chain_gearshift' })
    e.shaped('create:adjustable_chain_gearshift', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: 'minecraft:air',
        B: 'create:electron_tube',
        C: 'minecraft:redstone',
        D: 'create:encased_chain_drive'
    }).id('forgedingears:adjustable_chain_gearshift')
    
    // Nozzle
    e.remove({ output: 'create:nozzle' })
    e.shaped('create:nozzle', [
        'ABA',
        'AAA',
        'CCC'
    ], {
        A: '#forge:string',
        B: 'forgedingears:andesite_alloy_nugget',
        C: 'create:andesite_alloy'
    }).id('forgedingears:nozzle')
    
    // Basin
    e.remove({ output: 'create:basin' })
    e.shaped('create:basin', [
        'SAS',
        'LAL',
        'LRL'
    ], {
        A: 'minecraft:air',
        L: 'create:andesite_alloy',
        S: 'forgedingears:andesite_alloy_nugget',
        R: Item.of('tconstruct:large_plate', '{Material:"forgedingears:andesite_alloy"}')
    }).id('forgedingears:basin')
    
    // Depot
    e.remove({ output: 'create:depot' })
    e.shaped('create:depot', [
        'AAA',
        'CBC',
        'CDC'
    ], {
        A: 'minecraft:air',
        B: 'create:andesite_alloy',
        C: 'forgedingears:andesite_alloy_nugget',
        D: 'create:andesite_casing'
    }).id('forgedingears:depot')
    
    // Weighted Ejector
    e.remove({ output: 'create:weighted_ejector' })
    e.shaped('create:weighted_ejector', [
        'BAB',
        'BEB',
        'CDC'
    ], {
        A: 'create:iron_sheet',
        B: 'forgedingears:andesite_alloy_nugget',
        C: 'create:shaft',
        D: 'create:depot',
        E: 'create:golden_sheet'
    }).id('forgedingears:weighted_ejector')
    
    // Hopper
    e.remove({ output: 'minecraft:hopper' })
    e.shaped('minecraft:hopper', [
        'BAB',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:air',
        B: 'create:andesite_alloy',
        C: '#forge:chests/wooden'
    }).id('forgedingears:hopper')
    
    // Chute
    e.remove({ output: 'create:chute' })
    e.shaped('create:chute', [
        'BAB',
        'CAC',
        'CAC'
    ], {
        A: 'minecraft:air',
        B: 'tinkers_reforged:aluminum_ingot',
        C: 'forgedingears:aluminum_sheet'
    }).id('forgedingears:chute')
    
    // Smart Chute
    e.remove({ output: 'create:smart_chute' })
    e.shaped('create:smart_chute', [
        'BCB',
        'DED',
        'AFA'
    ], {
        A: 'minecraft:air',
        B: 'create:brass_ingot',
        C: 'create:brass_sheet',
        D: 'create:electron_tube',
        E: 'create:chute',
        F: 'forgedingears:aluminum_sheet'
    }).id('forgedingears:smart_chute')
    
    // Compass
    e.remove({ output: 'minecraft:compass' })
    e.shaped('minecraft:compass', [
        'DDD',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:air',
        B: 'create:sturdy_sheet',
        C: Item.of('tconstruct:tool_handle', '{Material:"tconstruct:iron"}'),
        D: 'minecraft:redstone'
    }).id('forgedingears:compass')
    
    // Speedometer
    e.remove({ output: 'create:speedometer' })
    e.shaped('create:speedometer', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'tinkers_reforged:aluminum_nugget',
        B: 'minecraft:compass',
        C: 'create:shaft',
        D: 'create:andesite_casing',
        E: 'forgedingears:andesite_alloy_nugget',
        F: 'create:andesite_alloy'
    }).id('forgedingears:speedometer')
    
    // Stressometer
    e.remove({ output: 'create:stressometer' })
    e.shaped('create:stressometer', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:copper_nugget',
        B: 'minecraft:compass',
        C: 'create:shaft',
        D: 'create:andesite_casing',
        E: 'forgedingears:andesite_alloy_nugget',
        F: 'create:andesite_alloy'
    }).id('forgedingears:stressometer')
    
    // Mechanical Pump
    e.remove({ output: 'create:mechanical_pump' })
    e.shaped('create:mechanical_pump', [
        'ABA',
        'CDE',
        'AAA'
    ], {
        A: 'create:copper_nugget',
        B: 'create:cogwheel',
        C: 'minecraft:copper_ingot',
        D: 'create:fluid_pipe',
        E: 'create:copper_sheet'
    }).id('forgedingears:mechanical_pump')
    
    // Smart Fluid Pipe
    e.remove({ output: 'create:smart_fluid_pipe' })
    e.shaped('create:smart_fluid_pipe', [
        'ABA',
        'CDC',
        'EAE'
    ], {
        A: 'create:brass_sheet',
        B: 'create:crafter_slot_cover',
        C: 'create:electron_tube',
        D: 'create:fluid_pipe',
        E: 'minecraft:air'
    }).id('forgedingears:smart_fluid_pipe')
    
    // Fluid Valve
    e.remove({ output: 'create:fluid_valve' })
    e.shaped('create:fluid_valve', [
        'ABA',
        'CDC',
        'AAA'
    ], {
        A: 'create:copper_sheet',
        B: Item.of('tconstruct:round_plate', '{Material:"tconstruct:iron"}'),
        C: 'create:shaft',
        D: 'create:fluid_pipe'
    }).id('forgedingears:fluid_valve')
    
    // Hose Pulley
    e.remove({ output: 'create:hose_pulley' })
    e.shaped('create:hose_pulley', [
        'ABA',
        'CDE',
        'EFE'
    ], {
        A: 'create:copper_casing',
        B: 'forgedingears:copper_mechanism',
        C: 'create:shaft',
        D: 'farmersdelight:rope',
        E: 'create:copper_sheet',
        F: 'create:fluid_pipe'
    }).id('forgedingears:hose_pulley')
    
    // Steam Engine
    e.remove({ output: 'create:steam_engine' })
    e.shaped('create:steam_engine', [
        'LPL',
        'MAI',
        'SBS'
    ], {
        L: Item.of('tinkers_reforged:large_round_plate', '{Material: "materialis:brass"}'),
        P: 'createindustry:engine_chamber',
        M: 'create:precision_mechanism',
        A: Item.of('tconstruct:hammer_head', '{Material:"forgedingears:andesite_alloy"}'),
        I: Item.of('tconstruct:round_plate', '{Material:"tconstruct:pig_iron"}'),
        S: 'create:copper_sheet',
        B: 'minecraft:copper_block'
    }).id('forgedingears:steam_engine')
    
    // Mechanical Piston
    e.remove({ output: 'create:mechanical_piston' })
    e.shaped('create:mechanical_piston', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:iron_sheet',
        B: '#minecraft:planks',
        C: 'create:shaft',
        D: 'create:andesite_casing',
        E: 'forgedingears:andesite_alloy_nugget',
        F: 'create:piston_extension_pole'
    }).id('forgedingears:mechanical_piston')
    
    // Gantry Carriage
    e.remove({ output: 'create:gantry_carriage' })
    e.shaped('create:gantry_carriage', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:andesite_alloy',
        B: 'minecraft:slime_ball',
        C: 'create:andesite_casing',
        D: 'create:shaft',
        E: 'create:cogwheel',
        F: 'create:shaft'
    }).id('forgedingears:gantry_carriage')
    
    // Basic Burner
    e.remove({ output: 'createlowheated:basic_burner' })
    e.shaped('createlowheated:basic_burner', [
        'BAB',
        'CAC',
        'DED'
    ], {
        A: 'minecraft:air',
        B: Item.of('tconstruct:round_plate', '{Material: "materialis:aluminum"}'),
        C: Item.of('tconstruct:large_plate', '{Material: "materialis:aluminum"}'),
        D: 'create:andesite_alloy',
        E: 'forgedingears:andesite_alloy_sheet'
    }).id('forgedingears:basic_burner')
    
    // Windmill Bearing
    e.remove({ output: 'create:windmill_bearing' })
    e.shaped('create:windmill_bearing', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:iron_sheet',
        B: 'create:turntable',
        C: Item.of('tconstruct:round_plate', '{Material: "tconstruct:iron"}'),
        D: 'create:andesite_casing',
        E: 'forgedingears:andesite_alloy_nugget',
        F: 'create:shaft'
    }).id('forgedingears:windmill_bearing')
    
    // Mechanical Bearing
    e.remove({ output: 'create:mechanical_bearing' })
    e.shaped('create:mechanical_bearing', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:iron_sheet',
        B: 'create:turntable',
        C: '#forgedingears:lumber',
        D: 'create:andesite_casing',
        E: 'create:andesite_alloy',
        F: 'create:shaft'
    }).id('forgedingears:mechanical_bearing')
    
    // Clockwork Bearing
    e.remove({ output: 'create:clockwork_bearing' })
    e.shaped('create:clockwork_bearing', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:iron_sheet',
        B: 'create:turntable',
        C: 'create:crafter_slot_cover',
        D: 'create:brass_casing',
        E: 'create:brass_sheet',
        F: 'create:shaft'
    }).id('forgedingears:clockwork_bearing')
    
    // Rope Pulley
    e.remove({ output: 'create:rope_pulley' })
    e.shaped('create:rope_pulley', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:andesite_alloy',
        B: 'create:andesite_casing',
        C: 'farmersdelight:rope',
        D: 'create:shaft',
        E: 'forgedingears:andesite_alloy_nugget',
        F: 'create:iron_sheet'
    }).id('forgedingears:rope_pulley')
    
    // Elevator Pulley
    e.remove({ output: 'create:elevator_pulley' })
    e.shaped('create:elevator_pulley', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:electron_tube',
        B: 'create:brass_casing',
        C: 'create:belt_connector',
        D: 'create:shaft',
        E: 'create:andesite_alloy',
        F: Item.of('tconstruct:large_plate', '{Material:"tconstruct:iron"}')
    }).id('forgedingears:elevator_pulley')
    
    // Rope
    e.remove({ output: 'farmersdelight:rope' })
    e.shaped('farmersdelight:rope', [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: 'forgedingears:straw',
        B: 'minecraft:string'
    }).id('forgedingears:rope')
    
    // Safety Net
    e.remove({ output: 'farmersdelight:safety_net' })
    e.shaped('2x farmersdelight:safety_net', [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: 'minecraft:air',
        B: 'farmersdelight:rope'
    }).id('forgedingears:safety_net')
    
    // Ice and Fire Copper Block
    e.remove({ output: 'iceandfire:copper_block' })
    
    // Ice and Fire Copper Ingot
    e.remove({ id: 'iceandfire:copper_ingot' })
    e.remove({ id: 'iceandfire:copper_block_to_ingots' })
    
    // Ice and Fire Copper Ingot to Nuggets
    e.remove({ id: 'iceandfire:copper_ingot_to_nuggets' })
    e.remove({ id: 'tconstruct:common/materials/copper_nugget_from_ingot' })
    
    // Item Vault
    e.remove({ output: 'create:item_vault'})
    e.shaped('create:item_vault', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'minecraft:iron_nugget',
        B: 'create:iron_sheet',
        C: 'minecraft:iron_nugget',
        D: 'minecraft:barrel',
        E: Item.of('tinkers_reforged:large_round_plate', '{Material: "tconstruct:iron"}'),
        F: 'minecraft:iron_nugget'
    }).id('forgedingears:item_vault')
    
    // Brass Hand
    e.remove({ output: 'create:brass_hand'})
    e.shaped('create:brass_hand', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'minecraft:air',
        B: Item.of('materialis:wrench_head', '{Material: "materialis:brass"}'),
        C: 'create:brass_sheet',
        D: Item.of('tconstruct:bow_limb', '{Material: "materialis:brass"}'),
        E: 'create:andesite_alloy'
    }).id('forgedingears:brass_hand')
    
    // Empty Blaze Burner
    e.remove({ output: 'create:empty_blaze_burner'})
    e.shaped('create:empty_blaze_burner', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: Item.of('tconstruct:tool_handle', '{Material: "tconstruct:iron"}'),
        B: 'create:iron_sheet',
        C: 'minecraft:netherrack'
    }).id('forgedingears:empty_blaze_burner')
    
    // Deployer
    e.remove({ output: 'create:deployer'})
    e.shaped('create:deployer', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'forgedingears:andesite_alloy_sheet',
        B: 'create:brass_hand',
        C: 'create:andesite_alloy',
        D: 'create:piston_extension_pole',
        E: 'create:shaft',
        F: 'create:andesite_casing'
    }).id('forgedingears:deployer')
    
    // Encased Fan
    e.remove({ output: 'create:encased_fan'})
    e.shaped('create:encased_fan', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'forgedingears:andesite_alloy_sheet',
        B: 'create:iron_sheet',
        C: 'create:shaft',
        D: 'create:propeller',
        E: 'create:andesite_casing'
    }).id('forgedingears:encased_fan')
    
    // Fluid Pipe
    e.remove({ output: 'create:fluid_pipe'})
    e.shaped('2x create:fluid_pipe', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'create:copper_sheet',
        B: 'create:copper_nugget',
        C: 'minecraft:air'
    }).id('forgedingears:fluid_pipe')
    
    // Mechanical Crafter
    e.remove({ output: 'create:mechanical_crafter'})
    e.shaped('2x create:mechanical_crafter', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:brass_sheet',
        B: 'create:crafter_slot_cover',
        C: 'create:brass_sheet',
        D: 'tconstruct:crafting_station',
        E: 'create:cogwheel',
        F: 'create:brass_casing'
    }).id('forgedingears:mechanical_crafter')
    
    // Portable Fluid Interface
    e.remove({ output: 'create:portable_fluid_interface'})
    e.shaped('create:portable_fluid_interface', [
        'ABC',
        'DEF',
        'ABC'
    ], {
        A: 'create:copper_sheet',
        B: 'minecraft:redstone',
        C: 'minecraft:dried_kelp',
        D: 'forgedingears:copper_mechanism',
        E: 'create:copper_casing',
        F: 'create:fluid_pipe'
    }).id('forgedingears:portable_fluid_interface')
    
    // Rotation Speed Controller
    e.remove({ output: 'create:rotation_speed_controller'})
    e.shaped('create:rotation_speed_controller', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:brass_sheet',
        B: 'iceandfire:chain',
        C: 'create:shaft',
        D: 'create:precision_mechanism',
        E: 'create:brass_ingot',
        F: 'create:brass_casing'
    }).id('forgedingears:rotation_speed_controller')
    
    // Wrench
    e.remove({ output: 'create:wrench'})
    e.shaped('create:wrench', [
        'ABC',
        'ADE',
        'CBC'
    ], {
        A: 'create:golden_sheet',
        B: Ingredient.of([
          Item.of('tconstruct:tough_handle','{Material:"tconstruct:wood#acacia"}'),
          Item.of('tconstruct:tough_handle','{Material:"tconstruct:wood#oak"}'),
          Item.of('tconstruct:tough_handle','{Material:"tconstruct:wood#birch"}'),
          Item.of('tconstruct:tough_handle','{Material:"tconstruct:wood#crimson"}'),
          Item.of('tconstruct:tough_handle','{Material:"tconstruct:wood#dark_oak"}'),
          Item.of('tconstruct:tough_handle','{Material:"tconstruct:wood#jungle"}'),
          Item.of('tconstruct:tough_handle','{Material:"tconstruct:wood#spruce"}'),
          Item.of('tconstruct:tough_handle','{Material:"tconstruct:wood#warped"}'), 
        ]),
        C: 'minecraft:air',
        D: 'forgedingears:andesite_alloy_nugget',
        E: 'create:cogwheel'
    }).id('forgedingears:wrench_manual_only')

    // Andesite Alloy Mixture
    e.remove({ id: 'create:milling/andesite'})
    e.custom({"type": "farmersdelight:cutting","ingredients": [{"item": "minecraft:andesite"}],"tool": {"tag": "survivalistessentials:pickaxe_tools"},"result": [{"item": "forgedingears:andesite_powder","chance": 0.2}]}).id('forgedingears:andesite_powder')
    e.shaped('forgedingears:andesite_alloy_mixture', [
        'AAA',
        'A B',
        'BBB'
    ], {
        A: 'forgedingears:andesite_powder',
        B: 'create:zinc_nugget'
    }).id('forgedingears:andesite_alloy_mixture')

    // Andesite Alloy
    e.remove({ id: 'create:mixing/andesite_alloy_from_zinc'})
    e.remove({ id: 'create:mixing/andesite_alloy'})
    e.remove({output: 'create:andesite_alloy', type: "minecraft:crafting" })
    e.smelting('create:andesite_alloy', 'forgedingears:andesite_alloy_mixture').cookingTime(1200).id('forgedingears:andesite_alloy')

    //Seared Heater
    e.remove({output: 'tconstruct:seared_heater', type: "minecraft:crafting" })
    e.smelting('tconstruct:seared_heater', 'forgedingears:uncooked_heater').cookingTime(12000).id('forgedingears:cook_heater')
    e.shaped('forgedingears:uncooked_heater', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'forgedingears:grout_brick',
        B: 'minecraft:furnace'
    }).id('forgedingears:uncooked_heater')

    //Seared Melter
    e.remove({output: 'tconstruct:seared_melter', type: "minecraft:crafting" })
    e.smelting('tconstruct:seared_melter', 'forgedingears:uncooked_seared_melter').cookingTime(16000).id('forgedingears:cook_seared_melter')
    e.shaped('forgedingears:uncooked_seared_melter', [
        'BGB',
        'BGB',
        'SSS'
    ], {
        B: 'forgedingears:grout_brick',
        G: 'forgedingears:grout_glass',
        S: 'forgedingears:grout_bricks'
    }).id('forgedingears:uncooked_seared_melter')

    //Seared Table
    e.smelting('tconstruct:seared_table', 'forgedingears:uncooked_casting_table').cookingTime(6000).id('forgedingears:cook_seared_table')
    e.shaped('forgedingears:uncooked_casting_table', [
        'BGB',
        'B B',
        'B B'
    ], {
        B: 'forgedingears:grout_brick',
        G: 'forgedingears:grout_bricks'
    }).id('forgedingears:uncooked_seared_table')

    //Seared Faucet
    e.smelting('tconstruct:seared_faucet', 'forgedingears:uncooked_faucet').cookingTime(6000).id('forgedingears:cook_seared_faucet')
    e.shaped('forgedingears:uncooked_faucet', [
        '   ',
        'B B',
        ' B '
    ], {
        B: 'forgedingears:grout_brick'
    }).id('forgedingears:uncooked_faucet')

    //Grout Glass
    e.shaped('forgedingears:grout_glass', [
        'ABA',
        'CBC',
        'ABA'
    ], {
        A: 'forgedingears:grout_brick',
        B: 'forgedingears:glass_batch',
        C: 'forgedingears:grout_bricks'
    }).id('forgedingears:grout_glass')

    //Grout Bricks
    e.shaped('forgedingears:grout_bricks', [
        'SBS',
        'B B',
        'SBS'
    ], {
        S: 'forgedingears:straw',
        B: 'forgedingears:grout_brick'
    }).id('forgedingears:grout_bricks')

    //Sand Paper
    e.remove({output: 'create:sand_paper'})
    e.shapeless('create:sand_paper', ['minecraft:paper', 'forgedingears:andesite_powder', 'forgedingears:glass_batch', 'minecraft:honeycomb']).id('forgedingears:sand_paper')

    //Red Sand Paper
    e.remove({output: 'create:red_sand_paper'})
    e.shapeless('create:red_sand_paper', ['minecraft:paper', 'tinkers_reforged:aluminum_dust', 'forgedingears:red_phosphorus', 'forgedingears:glass_batch', Item.of('create:super_glue')]).damageIngredient(Item.of('create:super_glue').ignoreNBT()).id('forgedingears:red_sand_paper')


})



ServerEvents.recipes(e => {
    e.shaped('forgedingears:bow_drill', [
        ' BP',
        'BAH',
        '  L'
    ], {
        A: Item.of('tconstruct:bowstring', '{Material:"tconstruct:string"}'),
        B: Ingredient.of([
            Item.of('tconstruct:bow_limb','{Material:"tconstruct:wood#acacia"}'),
            Item.of('tconstruct:bow_limb','{Material:"tconstruct:wood#oak"}'),
            Item.of('tconstruct:bow_limb','{Material:"tconstruct:wood#birch"}'),
            Item.of('tconstruct:bow_limb','{Material:"tconstruct:wood#crimson"}'),
            Item.of('tconstruct:bow_limb','{Material:"tconstruct:wood#dark_oak"}'),
            Item.of('tconstruct:bow_limb','{Material:"tconstruct:wood#jungle"}'),
            Item.of('tconstruct:bow_limb','{Material:"tconstruct:wood#spruce"}'),
            Item.of('tconstruct:bow_limb','{Material:"tconstruct:wood#warped"}'), 
        ]),
        P: Ingredient.of([
            Item.of('tconstruct:round_plate','{Material:"tconstruct:rock#andesite"}'),
            Item.of('tconstruct:round_plate','{Material:"tconstruct:rock#blackstone"}'),
            Item.of('tconstruct:round_plate','{Material:"tconstruct:rock#deepslate"}'),
            Item.of('tconstruct:round_plate','{Material:"tconstruct:rock#diorite"}'),
            Item.of('tconstruct:round_plate','{Material:"tconstruct:rock#granite"}'),
            Item.of('tconstruct:round_plate','{Material:"tconstruct:rock#stone"}'),
            Item.of('tconstruct:round_plate','{Material:"tconstruct:flint"}'),
            Item.of('tconstruct:round_plate','{Material:"tconstruct:bone"}'), 
          ]),
        H: Ingredient.of([
            Item.of('tconstruct:tough_handle','{Material:"tconstruct:wood#acacia"}'),
            Item.of('tconstruct:tough_handle','{Material:"tconstruct:wood#oak"}'),
            Item.of('tconstruct:tough_handle','{Material:"tconstruct:wood#birch"}'),
            Item.of('tconstruct:tough_handle','{Material:"tconstruct:wood#crimson"}'),
            Item.of('tconstruct:tough_handle','{Material:"tconstruct:wood#dark_oak"}'),
            Item.of('tconstruct:tough_handle','{Material:"tconstruct:wood#jungle"}'),
            Item.of('tconstruct:tough_handle','{Material:"tconstruct:wood#spruce"}'),
            Item.of('tconstruct:tough_handle','{Material:"tconstruct:wood#warped"}'), 
          ]),
        L: '#forgedingears:lumber'
    }).id('forgedingears:bow_drill_manual_only')
})
ServerEvents.recipes(e => {
    e.shaped(Item.of('forgedingears:match_box', '{Damage:30,tic_broken:0b,tic_modifiers:[{level:1s,name:"tconstruct:firestarter"}],tic_persistent:{},tic_stats:{"tconstruct:durability":31.0f}}'), [
        'MPP',
        'RDR',
        'PPP'
    ], {
        M: 'forgedingears:match',
        P: 'tconstruct:pattern',
        R: 'create:red_sand_paper',
        D: 'minecraft:orange_dye'
    }).id('forgedingears:match_box_manual_only')
})

ServerEvents.recipes(e => {
    e.remove({ output: 'iceandfire:deathworm_red_helmet'})
    e.shaped(Item.of('forgedingears:death_worm_helmet', '{Damage:0,tic_broken:0b,tic_modifiers:[{level:1s,name:"tconstruct:embellishment"},{level:1s,name:"tconstruct:blast_protection"}],tic_persistent:{"tconstruct:embellishment":"forgedingears:death_worm_chitin#red"},tic_stats:{"tconstruct:armor":1.5f,"tconstruct:armor_toughness":0.3f,"tconstruct:durability":120.0f},tic_upgrades:[{level:1s,name:"tconstruct:embellishment"}],tic_volatile_data:{defense:2}}'), [
        'CLC',
        'C C',
        'M M'
    ], {
        C: 'iceandfire:deathworm_chitin_red',
        L: 'forgedingears:leather_sheet',
        M: 'forgedingears:small_leather_sheet'
    }).id('forgedingears:red_death_worm_helmet')
    e.remove({ output: 'iceandfire:deathworm_red_chestplate'})
    e.shaped(Item.of('forgedingears:death_worm_chestplate', '{Damage:0,tic_broken:0b,tic_modifiers:[{level:1s,name:"tconstruct:embellishment"},{level:3s,name:"tconstruct:blast_protection"}],tic_persistent:{"tconstruct:embellishment":"forgedingears:death_worm_chitin#red"},tic_stats:{"tconstruct:armor":3.0f,"tconstruct:armor_toughness":0.8f,"tconstruct:durability":240.0f},tic_upgrades:[{level:1s,name:"tconstruct:embellishment"}],tic_volatile_data:{defense:2}}'), [
        'CMC',
        'SCS',
        'CCC'
    ], {
        C: 'iceandfire:deathworm_chitin_red',
        S: 'forgedingears:leather_strip',
        M: 'forgedingears:small_leather_sheet'
    }).id('forgedingears:red_death_worm_chestplate')
    e.remove({ output: 'iceandfire:deathworm_red_leggings'})
    e.shaped(Item.of('forgedingears:death_worm_leggings', '{Damage:0,tic_broken:0b,tic_modifiers:[{level:1s,name:"tconstruct:embellishment"},{level:2s,name:"tconstruct:blast_protection"}],tic_persistent:{"tconstruct:embellishment":"forgedingears:death_worm_chitin#red"},tic_stats:{"tconstruct:armor":2.5f,"tconstruct:armor_toughness":0.7f,"tconstruct:durability":200.0f},tic_upgrades:[{level:1s,name:"tconstruct:embellishment"}],tic_volatile_data:{defense:2}}'), [
        'SLS',
        'CCC',
        'C C'
    ], {
        C: 'iceandfire:deathworm_chitin_red',
        S: 'forgedingears:leather_strip',
        L: 'forgedingears:leather_sheet'
    }).id('forgedingears:red_death_worm_leggings')
    e.remove({ output: 'iceandfire:deathworm_red_boots'})
    e.shaped(Item.of('forgedingears:death_worm_boots', '{Damage:0,tic_broken:0b,tic_modifiers:[{level:1s,name:"tconstruct:embellishment"},{level:1s,name:"tconstruct:blast_protection"}],tic_persistent:{"tconstruct:embellishment":"forgedingears:death_worm_chitin#red"},tic_stats:{"tconstruct:armor":2.0f,"tconstruct:armor_toughness":0.2f,"tconstruct:durability":160.0f},tic_upgrades:[{level:1s,name:"tconstruct:embellishment"}],tic_volatile_data:{defense:2}}'), [
        'M M',
        'C C',
        'C C'
    ], {
        C: 'iceandfire:deathworm_chitin_red',
        M: 'forgedingears:small_leather_sheet'
    }).id('forgedingears:red_death_worm_boots')
})

ServerEvents.recipes(e => {
    e.remove({ output: 'iceandfire:deathworm_yellow_helmet'})
    e.shaped(Item.of('forgedingears:death_worm_helmet', '{Damage:0,tic_broken:0b,tic_modifiers:[{level:1s,name:"tconstruct:embellishment"},{level:1s,name:"tconstruct:blast_protection"}],tic_persistent:{"tconstruct:embellishment":"forgedingears:death_worm_chitin#yellow"},tic_stats:{"tconstruct:armor":1.5f,"tconstruct:armor_toughness":0.3f,"tconstruct:durability":120.0f},tic_upgrades:[{level:1s,name:"tconstruct:embellishment"}],tic_volatile_data:{defense:2}}'), [
        'CLC',
        'C C',
        'M M'
    ], {
        C: 'iceandfire:deathworm_chitin_yellow',
        L: 'forgedingears:leather_sheet',
        M: 'forgedingears:small_leather_sheet'
    }).id('forgedingears:yellow_death_worm_helmet')
    e.remove({ output: 'iceandfire:deathworm_yellow_chestplate'})
    e.shaped(Item.of('forgedingears:death_worm_chestplate', '{Damage:0,tic_broken:0b,tic_modifiers:[{level:1s,name:"tconstruct:embellishment"},{level:3s,name:"tconstruct:blast_protection"}],tic_persistent:{"tconstruct:embellishment":"forgedingears:death_worm_chitin#yellow"},tic_stats:{"tconstruct:armor":3.0f,"tconstruct:armor_toughness":0.8f,"tconstruct:durability":240.0f},tic_upgrades:[{level:1s,name:"tconstruct:embellishment"}],tic_volatile_data:{defense:2}}'), [
        'CMC',
        'SCS',
        'CCC'
    ], {
        C: 'iceandfire:deathworm_chitin_yellow',
        S: 'forgedingears:leather_strip',
        M: 'forgedingears:small_leather_sheet'
    }).id('forgedingears:yellow_death_worm_chestplate')
    e.remove({ output: 'iceandfire:deathworm_yellow_leggings'})
    e.shaped(Item.of('forgedingears:death_worm_leggings', '{Damage:0,tic_broken:0b,tic_modifiers:[{level:1s,name:"tconstruct:embellishment"},{level:2s,name:"tconstruct:blast_protection"}],tic_persistent:{"tconstruct:embellishment":"forgedingears:death_worm_chitin#yellow"},tic_stats:{"tconstruct:armor":2.5f,"tconstruct:armor_toughness":0.7f,"tconstruct:durability":200.0f},tic_upgrades:[{level:1s,name:"tconstruct:embellishment"}],tic_volatile_data:{defense:2}}'), [
        'SLS',
        'CCC',
        'C C'
    ], {
        C: 'iceandfire:deathworm_chitin_yellow',
        S: 'forgedingears:leather_strip',
        L: 'forgedingears:leather_sheet'
    }).id('forgedingears:yellow_death_worm_leggings')
    e.remove({ output: 'iceandfire:deathworm_yellow_boots'})
    e.shaped(Item.of('forgedingears:death_worm_boots', '{Damage:0,tic_broken:0b,tic_modifiers:[{level:1s,name:"tconstruct:embellishment"},{level:1s,name:"tconstruct:blast_protection"}],tic_persistent:{"tconstruct:embellishment":"forgedingears:death_worm_chitin#yellow"},tic_stats:{"tconstruct:armor":2.0f,"tconstruct:armor_toughness":0.2f,"tconstruct:durability":160.0f},tic_upgrades:[{level:1s,name:"tconstruct:embellishment"}],tic_volatile_data:{defense:2}}'), [
        'M M',
        'C C',
        'C C'
    ], {
        C: 'iceandfire:deathworm_chitin_yellow',
        M: 'forgedingears:small_leather_sheet'
    }).id('forgedingears:yellow_death_worm_boots')
})

ServerEvents.recipes(e => {
    e.remove({ output: 'iceandfire:deathworm_white_helmet'})
    e.shaped(Item.of('forgedingears:death_worm_helmet', '{Damage:0,tic_broken:0b,tic_modifiers:[{level:1s,name:"tconstruct:embellishment"},{level:1s,name:"tconstruct:blast_protection"}],tic_persistent:{"tconstruct:embellishment":"forgedingears:death_worm_chitin#white"},tic_stats:{"tconstruct:armor":1.5f,"tconstruct:armor_toughness":0.3f,"tconstruct:durability":120.0f},tic_upgrades:[{level:1s,name:"tconstruct:embellishment"}],tic_volatile_data:{defense:2}}'), [
        'CLC',
        'C C',
        'M M'
    ], {
        C: 'iceandfire:deathworm_chitin_white',
        L: 'forgedingears:leather_sheet',
        M: 'forgedingears:small_leather_sheet'
    }).id('forgedingears:white_death_worm_helmet')
    e.remove({ output: 'iceandfire:deathworm_white_chestplate'})
    e.shaped(Item.of('forgedingears:death_worm_chestplate', '{Damage:0,tic_broken:0b,tic_modifiers:[{level:1s,name:"tconstruct:embellishment"},{level:3s,name:"tconstruct:blast_protection"}],tic_persistent:{"tconstruct:embellishment":"forgedingears:death_worm_chitin#white"},tic_stats:{"tconstruct:armor":3.0f,"tconstruct:armor_toughness":0.8f,"tconstruct:durability":240.0f},tic_upgrades:[{level:1s,name:"tconstruct:embellishment"}],tic_volatile_data:{defense:2}}'), [
        'CMC',
        'SCS',
        'CCC'
    ], {
        C: 'iceandfire:deathworm_chitin_white',
        S: 'forgedingears:leather_strip',
        M: 'forgedingears:small_leather_sheet'
    }).id('forgedingears:white_death_worm_chestplate')
    e.remove({ output: 'iceandfire:deathworm_white_leggings'})
    e.shaped(Item.of('forgedingears:death_worm_leggings', '{Damage:0,tic_broken:0b,tic_modifiers:[{level:1s,name:"tconstruct:embellishment"},{level:2s,name:"tconstruct:blast_protection"}],tic_persistent:{"tconstruct:embellishment":"forgedingears:death_worm_chitin#white"},tic_stats:{"tconstruct:armor":2.5f,"tconstruct:armor_toughness":0.7f,"tconstruct:durability":200.0f},tic_upgrades:[{level:1s,name:"tconstruct:embellishment"}],tic_volatile_data:{defense:2}}'), [
        'SLS',
        'CCC',
        'C C'
    ], {
        C: 'iceandfire:deathworm_chitin_white',
        S: 'forgedingears:leather_strip',
        L: 'forgedingears:leather_sheet'
    }).id('forgedingears:white_death_worm_leggings')
    e.remove({ output: 'iceandfire:deathworm_white_boots'})
    e.shaped(Item.of('forgedingears:death_worm_boots', '{Damage:0,tic_broken:0b,tic_modifiers:[{level:1s,name:"tconstruct:embellishment"},{level:1s,name:"tconstruct:blast_protection"}],tic_persistent:{"tconstruct:embellishment":"forgedingears:death_worm_chitin#white"},tic_stats:{"tconstruct:armor":2.0f,"tconstruct:armor_toughness":0.2f,"tconstruct:durability":160.0f},tic_upgrades:[{level:1s,name:"tconstruct:embellishment"}],tic_volatile_data:{defense:2}}'), [
        'M M',
        'C C',
        'C C'
    ], {
        C: 'iceandfire:deathworm_chitin_white',
        M: 'forgedingears:small_leather_sheet'
    }).id('forgedingears:white_death_worm_boots')
})


ServerEvents.recipes(e => {
  e.remove({ output: 'survivalistessentials:mortar_and_pestle'})
  e.remove({ output: 'endrem:undead_eye'})
  e.remove({ output: 'iceandfire:dragon_meal'})
  e.remove({ output: 'minecraft:glass_pane'})
  e.remove({ output: 'minecraft:white_stained_glass_pane'})
  e.remove({ output: 'minecraft:orange_stained_glass_pane'})
  e.remove({ output: 'minecraft:magenta_stained_glass_pane'})
  e.remove({ output: 'minecraft:light_blue_stained_glass_pane'})
  e.remove({ output: 'minecraft:yellow_stained_glass_pane'})
  e.remove({ output: 'minecraft:lime_stained_glass_pane'})
  e.remove({ output: 'minecraft:pink_stained_glass_pane'})
  e.remove({ output: 'minecraft:gray_stained_glass_pane'})
  e.remove({ output: 'minecraft:light_gray_stained_glass_pane'})
  e.remove({ output: 'minecraft:cyan_stained_glass_pane'})
  e.remove({ output: 'minecraft:purple_stained_glass_pane'})
  e.remove({ output: 'minecraft:blue_stained_glass_pane'})
  e.remove({ output: 'minecraft:brown_stained_glass_pane'})
  e.remove({ output: 'minecraft:green_stained_glass_pane'})
  e.remove({ output: 'minecraft:red_stained_glass_pane'})
  e.remove({ output: 'minecraft:black_stained_glass_pane'})
  e.remove({ output: 'minecraft:glass'})
  e.remove({ output: 'minecraft:white_stained_glass'})
  e.remove({ output: 'minecraft:orange_stained_glass'})
  e.remove({ output: 'minecraft:magenta_stained_glass'})
  e.remove({ output: 'minecraft:light_blue_stained_glass'})
  e.remove({ output: 'minecraft:yellow_stained_glass'})
  e.remove({ output: 'minecraft:lime_stained_glass'})
  e.remove({ output: 'minecraft:pink_stained_glass'})
  e.remove({ output: 'minecraft:gray_stained_glass'})
  e.remove({ output: 'minecraft:light_gray_stained_glass'})
  e.remove({ output: 'minecraft:cyan_stained_glass'})
  e.remove({ output: 'minecraft:purple_stained_glass'})
  e.remove({ output: 'minecraft:blue_stained_glass'})
  e.remove({ output: 'minecraft:brown_stained_glass'})
  e.remove({ output: 'minecraft:green_stained_glass'})
  e.remove({ output: 'minecraft:red_stained_glass'})
  e.remove({ output: 'minecraft:black_stained_glass'})
  e.remove({ output: 'minecraft:tinted_glass'})
  e.remove({ output: 'minecraft:white_concrete_powder'})
  e.remove({ output: 'minecraft:orange_concrete_powder'})
  e.remove({ output: 'minecraft:magenta_concrete_powder'})
  e.remove({ output: 'minecraft:light_blue_concrete_powder'})
  e.remove({ output: 'minecraft:yellow_concrete_powder'})
  e.remove({ output: 'minecraft:lime_concrete_powder'})
  e.remove({ output: 'minecraft:pink_concrete_powder'})
  e.remove({ output: 'minecraft:gray_concrete_powder'})
  e.remove({ output: 'minecraft:light_gray_concrete_powder'})
  e.remove({ output: 'minecraft:cyan_concrete_powder'})
  e.remove({ output: 'minecraft:purple_concrete_powder'})
  e.remove({ output: 'minecraft:blue_concrete_powder'})
  e.remove({ output: 'minecraft:brown_concrete_powder'})
  e.remove({ output: 'minecraft:green_concrete_powder'})
  e.remove({ output: 'minecraft:red_concrete_powder'})
  e.remove({ output: 'minecraft:black_concrete_powder'})
  e.remove({ output: 'minecraft:white_concrete'})
  e.remove({ output: 'minecraft:orange_concrete'})
  e.remove({ output: 'minecraft:magenta_concrete'})
  e.remove({ output: 'minecraft:light_blue_concrete'})
  e.remove({ output: 'minecraft:yellow_concrete'})
  e.remove({ output: 'minecraft:lime_concrete'})
  e.remove({ output: 'minecraft:pink_concrete'})
  e.remove({ output: 'minecraft:gray_concrete'})
  e.remove({ output: 'minecraft:light_gray_concrete'})
  e.remove({ output: 'minecraft:cyan_concrete'})
  e.remove({ output: 'minecraft:purple_concrete'})
  e.remove({ output: 'minecraft:blue_concrete'})
  e.remove({ output: 'minecraft:brown_concrete'})
  e.remove({ output: 'minecraft:green_concrete'})
  e.remove({ output: 'minecraft:red_concrete'})
  e.remove({ output: 'minecraft:black_concrete'})
  e.remove({ output: 'minecraft:tinted_glass'})
  e.remove({ output: /minecraft.*helmet/})
  e.remove({ output: /minecraft.*chestplate/})
  e.remove({ output: /minecraft.*leggings/})
  e.remove({ output: /minecraft.*boots/})
  e.remove({ output: /minecraft.*sword/})
  e.remove({ output: /minecraft.*pickaxe/})
  e.remove({ output: /minecraft.*axe/})
  e.remove({ output: /minecraft.*shovel/})
  e.remove({ output: /minecraft.*hoe/})
  e.remove({ output: /iceandfire.*metal/})
  e.remove({ output: /iceandfire.*sword/})
  e.remove({ output: /iceandfire.*pickaxe/})
  e.remove({ output: /iceandfire.*axe/})
  e.remove({ output: /iceandfire.*shovel/})
  e.remove({ output: /iceandfire.*hoe/})
  e.remove({ output: 'minecraft:glass', type: "minecraft:crafting" })
  e.remove({ output: 'minecraft:glass', type: "minecraft:smelting" })
  e.remove({ output: 'minecraft:glass', type: "create:splashing" })
  e.remove({ output: 'minecraft:obsidian', type: "create:splashing" })
  e.remove({ output: 'minecraft:iron_nugget', type: "create:splashing" })
  e.remove({ output: 'minecraft:gold_nugget', type: "create:splashing" })
  e.remove({ output: 'create:copper_nugget', type: "create:splashing" })
  e.remove({ output: 'create:zinc_nugget', type: "create:splashing" })
  e.remove({ output: 'minecraft:chainmail_helmet'})
  e.remove({ output: 'minecraft:chainmail_chestplate'})
  e.remove({ output: 'minecraft:chainmail_leggings'})
  e.remove({ output: 'minecraft:chainmail_boots'})
  e.remove({ output: 'minecraft:iron_nugget', type: "minecraft:crafting" })
  e.remove({ output: 'minecraft:iron_nugget', type: "minecraft:smelting" })
  e.remove({ output: 'minecraft:gold_nugget', type: "minecraft:crafting" })
  e.remove({ output: 'minecraft:gold_nugget', type: "minecraft:smelting" })
  e.remove({ output: 'iceandfire:silver_nugget', type: "minecraft:crafting" })
  e.remove({ output: 'iceandfire:silver_nugget', type: "minecraft:smelting" })
  e.remove({ output: 'iceandfire:silver_nugget', type: "minecraft:crafting" })
  e.remove({ output: 'iceandfire:silver_nugget', type: "minecraft:smelting" })
  e.remove({ output: 'minecraft:coal', type: "minecraft:smelting" })
  e.remove({ output: 'minecraft:coal', type: "create:blasting" })
  e.remove({ output: 'minecraft:iron_ingot', type: "minecraft:smelting" })
  e.remove({ output: 'minecraft:iron_ingot', type: "create:blasting" })
  e.remove({ output: 'minecraft:gold_ingot', type: "minecraft:smelting" })
  e.remove({ output: 'minecraft:gold_ingot', type: "create:blasting" })
  e.remove({ output: 'minecraft:copper_ingot', type: "minecraft:smelting" })
  e.remove({ output: 'minecraft:copper_ingot', type: "create:blasting" })
  e.remove({ output: 'minecraft:diamond', type: "minecraft:smelting" })
  e.remove({ output: 'minecraft:diamond', type: "create:blasting" })
  e.remove({ output: 'minecraft:emerald', type: "minecraft:smelting" })
  e.remove({ output: 'minecraft:emerald', type: "create:blasting" })
  e.remove({ output: 'minecraft:quartz', type: "minecraft:smelting" })
  e.remove({ output: 'minecraft:quartz', type: "create:blasting" })
  e.remove({ output: 'create:zinc_ingot', type: "minecraft:smelting" })
  e.remove({ output: 'create:zinc_ingot', type: "create:blasting" })
  e.remove({ output: 'minecraft:redstone', type: "minecraft:smelting" })
  e.remove({ output: 'minecraft:redstone', type: "create:blasting" })
  e.remove({ output: 'minecraft:lapis_lazuli', type: "minecraft:smelting" })
  e.remove({ output: 'minecraft:lapis_lazuli', type: "create:blasting" })
  e.remove({ output: 'tconstruct:cobalt_ingot', type: "minecraft:smelting" })
  e.remove({ output: 'tconstruct:cobalt_ingot', type: "create:blasting" })
  e.remove({ output: 'tinkers_reforged:aluminum_ingot', type: "minecraft:smelting" })
  e.remove({ output: 'tinkers_reforged:aluminum_ingot', type: "create:blasting" })
  e.remove({ output: 'tinkers_reforged:kepu_ingot', type: "minecraft:smelting" })
  e.remove({ output: 'tinkers_reforged:kepu_ingot', type: "create:blasting" })
  e.remove({ output: 'tinkers_reforged:epidote_gem', type: "minecraft:smelting" })
  e.remove({ output: 'tinkers_reforged:epidote_gem', type: "create:blasting" })
  e.remove({ output: 'tinkers_reforged:hureaulite_gem', type: "minecraft:smelting" })
  e.remove({ output: 'tinkers_reforged:hureaulite_gem', type: "create:blasting" })
  e.remove({ output: 'tinkers_reforged:red_beryl_gem', type: "minecraft:smelting" })
  e.remove({ output: 'tinkers_reforged:red_beryl_gem', type: "create:blasting" })
  e.remove({ output: 'iceandfire:copper_ingot', type: "minecraft:smelting" })
  e.remove({ output: 'iceandfire:copper_ingot', type: "create:blasting" })
  e.remove({ output: 'iceandfire:silver_ingot', type: "minecraft:smelting" })
  e.remove({ output: 'iceandfire:silver_ingot', type: "create:blasting" })
  e.remove({ output: 'iceandfire:amythest_gem', type: "minecraft:smelting" })
  e.remove({ output: 'iceandfire:amythest_gem', type: "create:blasting" })
  e.remove({ id: 'iceandfire:amythest_block_to_gems'})
  e.remove({ id: 'twilightforest:giant_log_to_oak_planks'})
  e.remove({ id: 'tconstruct:smeltery/melting/glass/bottle'})
  e.remove({ id: 'tconstruct:smeltery/melting/glass/block'})
  e.remove({ id: 'tconstruct:smeltery/melting/glass/pane'})
  e.remove({ id: 'tconstruct:smeltery/melting/glass/sand_cast'})
  e.remove({ id: 'tconstruct:smeltery/melting/glass/sand'})
  e.remove({ id: 'tconstruct:tools/materials/melting/glass'})
  e.remove({ id: 'minecraft:end_crystal'})
  e.remove({ id: 'minecraft:beacon'})
  e.remove({ id: 'minecraft:daylight_detector'})
  e.remove({ id: 'minecraft:glass_bottle'})
  e.remove({ id: 'survivalistessentials:cobblestone_from_rocks'})
  e.remove({ id: 'tinkers_reforged:smeltery/alloy/gausum'})
  e.remove({ id: 'tconstruct:smeltery/alloys/molten_obsidian_from_soup'})
})
ServerEvents.recipes(e => {
    const loglike = {
        "forgedingears:oak_lumber": "minecraft:stripped_oak_log",
        "forgedingears:acacia_lumber": "minecraft:stripped_acacia_log",
        "forgedingears:dark_oak_lumber": "minecraft:stripped_dark_oak_log",
        "forgedingears:birch_lumber": "minecraft:stripped_birch_log",
        "forgedingears:jungle_lumber": "minecraft:stripped_jungle_log",
        "forgedingears:spruce_lumber": "minecraft:stripped_spruce_log",
        "forgedingears:mangrove_lumber": "minecraft:stripped_mangrove_log",
        "forgedingears:crimson_lumber": "minecraft:stripped_crimson_stem",
        "forgedingears:warped_lumber": "minecraft:stripped_warped_stem",
        "forgedingears:greenheart_lumber": "tconstruct:stripped_greenheart_log",
        "forgedingears:skyroot_lumber": "tconstruct:stripped_skyroot_log",
        "forgedingears:bloodshroom_lumber": "tconstruct:stripped_bloodshroom_log",
        "forgedingears:enderbark_lumber": "tconstruct:stripped_enderbark_log"
    }
    const planklike = {
        "forgedingears:oak_lumber": "minecraft:oak_planks",
        "forgedingears:acacia_lumber": "minecraft:acacia_planks",
        "forgedingears:dark_oak_lumber": "minecraft:dark_oak_planks",
        "forgedingears:birch_lumber": "minecraft:birch_planks",
        "forgedingears:jungle_lumber": "minecraft:jungle_planks",
        "forgedingears:spruce_lumber": "minecraft:spruce_planks",
        "forgedingears:mangrove_lumber": "minecraft:mangrove_planks",
        "forgedingears:crimson_lumber": "minecraft:crimson_planks",
        "forgedingears:warped_lumber": "minecraft:warped_planks",
        "forgedingears:greenheart_lumber": "tconstruct:greenheart_planks",
        "forgedingears:skyroot_lumber": "tconstruct:skyroot_planks",
        "forgedingears:bloodshroom_lumber": "tconstruct:bloodshroom_planks",
        "forgedingears:enderbark_lumber": "tconstruct:enderbark_planks"
    }
    Object.keys(planklike).forEach(planks => {
        e.shaped(Item.of('tconstruct:part_builder', `{texture:"${planklike[planks]}"}`), [
            'PPP',
            'LPL',
            'L L'
        ], {
            P: 'tconstruct:pattern',
            L: planks
        }).id(`forgedingears:part_builder_${planklike[planks].split(':')[1]}`)
    })
    e.shaped('tconstruct:part_builder', [
        'PPP',
        'LPL',
        'L L'
    ], {
        P: 'tconstruct:pattern',
        L: Ingredient.of([
            "forgedingears:oak_lumber",
            "forgedingears:acacia_lumber",
            "forgedingears:dark_oak_lumber",
            "forgedingears:birch_lumber",
            "forgedingears:jungle_lumber",
            "forgedingears:spruce_lumber",
            "forgedingears:mangrove_lumber",
            "forgedingears:crimson_lumber",
            "forgedingears:warped_lumber",
            "forgedingears:greenheart_lumber",
            "forgedingears:skyroot_lumber",
            "forgedingears:bloodshroom_lumber",
            "forgedingears:enderbark_lumber"
        ])
    }).id(`forgedingears:part_builder`)
    Object.keys(loglike).forEach(lumber => {
        e.shaped(Item.of('tconstruct:crafting_station', `{texture:"${loglike[lumber]}"}`), [
            'PPP',
            'LCL',
            'L L'
        ], {
            P: 'tconstruct:pattern',
            C: 'minecraft:crafting_table',
            L: lumber
        }).id(`forgedingears:crafting_station_${loglike[lumber].split(':')[1]}`)
    })
    e.shaped('tconstruct:crafting_station', [
        'PPP',
        'LCL',
        'L L'
    ], {
        P: 'tconstruct:pattern',
        C: 'minecraft:crafting_table',
        L: Ingredient.of([
            "forgedingears:oak_lumber",
            "forgedingears:acacia_lumber",
            "forgedingears:dark_oak_lumber",
            "forgedingears:birch_lumber",
            "forgedingears:jungle_lumber",
            "forgedingears:spruce_lumber",
            "forgedingears:mangrove_lumber",
            "forgedingears:crimson_lumber",
            "forgedingears:warped_lumber",
            "forgedingears:greenheart_lumber",
            "forgedingears:skyroot_lumber",
            "forgedingears:bloodshroom_lumber",
            "forgedingears:enderbark_lumber"
        ])
    }).id(`forgedingears:crafting_station`)
    Object.keys(planklike).forEach(planks => {
            e.shaped(Item.of('tconstruct:tinker_station', `{texture:"${planklike[planks]}"}`), [
                'PPP',
                'LSL',
                'L L'
            ], {
                P: 'tconstruct:pattern',
                S: '#forgedingears:stripped_logs',
                L: planks
            }).id(`forgedingears:tinker_station_${planklike[planks].split(':')[1]}`)
    })
    e.shaped('tconstruct:tinker_station', [
        'PPP',
        'LSL',
        'L L'
    ], {
        P: 'tconstruct:pattern',
        S: '#forgedingears:stripped_logs',
        L: Ingredient.of([
            "forgedingears:oak_lumber",
            "forgedingears:acacia_lumber",
            "forgedingears:dark_oak_lumber",
            "forgedingears:birch_lumber",
            "forgedingears:jungle_lumber",
            "forgedingears:spruce_lumber",
            "forgedingears:mangrove_lumber",
            "forgedingears:crimson_lumber",
            "forgedingears:warped_lumber",
            "forgedingears:greenheart_lumber",
            "forgedingears:skyroot_lumber",
            "forgedingears:bloodshroom_lumber",
            "forgedingears:enderbark_lumber"
        ])
    }).id(`forgedingears:tinker_station`)
})