ServerEvents.recipes(event => {
event.custom({
    "type": "tconstruct:casting_table",
    "fluid": {
      "name": "forgedingears:liquid_blue_methamphetamine",
      "amount": 250
    },
    "result": "forgedingears:blue_meth",
    "cooling_time": 200
  }).id('forgedingears:blue_meth')

event.custom({
    "type": "tconstruct:casting_table",
    "fluid": {
      "name": "forgedingears:liquid_methamphetamine",
      "amount": 250
    },
    "result": "forgedingears:white_meth",
    "cooling_time": 200
  }).id('forgedingears:white_meth')

event.custom({
    "type": "tconstruct:casting_table",
    "cast": {
      "item": "minecraft:prismarine_bricks"
    },
    "cast_consumed": true,
    "fluid": {
      "tag": "tconstruct:molten_cobalt",
      "amount": 180
    },
    "result": "minecraft:heart_of_the_sea",
    "cooling_time": 160
  }).id('forgedingears:heartsea')
  
  event.custom({
    "type": "tconstruct:casting_table",
    "cast": {
      "item": "minecraft:bone"
    },
    "cast_consumed": true,
    "fluid": {
      "tag": "tconstruct:molten_bronze",
      "amount": 180
    },
    "result": "minecraft:nautilus_shell",
    "cooling_time": 160
  }).id('forgedingears:shell')
  
  event.custom({
    "type": "tconstruct:casting_basin",
    "cast": {
      "item": "minecraft:purpur_block"
    },
    "cast_consumed": true,
    "fluid": {
      "tag": "tconstruct:ender_slime",
      "amount": 1000
    },
    "result": "minecraft:shulker_shell",
    "cooling_time": 160
  }).id('forgedingears:shshell')
  
  event.custom({
    "type": "tconstruct:casting_basin",
    "cast": {
      "item": "minecraft:skeleton_skull"
    },
    "cast_consumed": true,
    "fluid": {
      "name": "minecraft:water",
      "amount": 500
    },
    "result": "tconstruct:stray_head",
    "cooling_time": 20
  }).id('forgedingears:stray')
  
  event.custom({
    "type": "tconstruct:casting_basin",
    "cast": {
      "item": "minecraft:bone_block"
    },
    "cast_consumed": true,
    "fluid": {
      "name": "minecraft:milk",
      "amount": 2000
    },
    "result": "minecraft:skeleton_skull",
    "cooling_time": 20
  }).id('forgedingears:skel')
  
  event.custom({
    "type": "tconstruct:casting_basin",
    "cast": {
      "item": "tconstruct:blaze_head"
    },
    "cast_consumed": true,
    "fluid": {
      "name": "tconstruct:molten_ender",
      "amount": 500
    },
    "result": "tconstruct:enderman_head",
    "cooling_time": 20
  }).id('forgedingears:ednerer')
  
  event.custom({
    "type": "tconstruct:casting_basin",
    "cast": {
      "tag": "minecraft:wool"
    },
    "cast_consumed": true,
    "fluid": {
      "name": "tconstruct:venom",
      "amount": 100
    },
    "result": "minecraft:cobweb",
    "cooling_time": 100
  }).id('forgedingears:web')

  event.remove({id: "tconstruct:smeltery/casting/amethyst/shard_gold_cast"})
  event.remove({id: "tconstruct:smeltery/casting/amethyst/shard_sand_cast"})
  event.remove({id: "tconstruct:smeltery/casting/amethyst/block"})

  event.custom({
    "type": "tconstruct:casting_table",
    "cast": {
      "item": "tconstruct:gem_cast"
    },
    "cast_consumed": false,
    "fluid": {
      "name": "tconstruct:molten_amethyst",
      "amount": 100
    },
    "result": "iceandfire:amythest_gem",
    "cooling_time": 20
  }).id('forgedingears:ameshard')

  event.custom({
    "type": "tconstruct:casting_basin",
    "fluid": {
      "name": "tconstruct:molten_amethyst",
      "amount": 1000
    },
    "result": "iceandfire:amythest_block",
    "cooling_time": 40
  }).id('forgedingears:ameblock')

  event.remove({id: "tinkers_reforged:smeltery/alloy/proto_lava"})
  event.custom({
    "type": "tconstruct:alloy",
    "inputs": [
      {
        "name": "tconstruct:molten_ender",
        "amount": 750
      },
      {
        "name": "tinkers_reforged:molten_chorus",
        "amount": 810
      },
      {
        "name": "tconstruct:blazing_blood",
        "amount": 2000
      }
    ],
    "result": {
      "fluid": "tinkers_reforged:molten_proto_lava",
      "amount": 50
    },
    "temperature": 1700
  }).id('forgedingears:protolava')

  event.remove({id: "tinkers_reforged:smeltery/alloy/blazing_copper"})
  event.custom({
    "type": "tconstruct:alloy",
    "inputs": [
      {
        "name": "tconstruct:molten_copper",
        "amount": 810
      },
      {
        "name": "tconstruct:blazing_blood",
        "amount": 1000
      }
    ],
    "result": {
      "fluid": "tinkers_reforged:molten_blazing_copper",
      "amount": 200
    },
    "temperature": 1400
  }).id('forgedingears:blcopper')
  
  // Melting Recipe for Tinkers' Reforged Kepu
  event.custom({
    "type": "tconstruct:melting",
    "ingredient": {
      "item": "tinkers_reforged:raw_kepu"
    },
    "result": {
      "fluid": "tinkers_reforged:molten_kepu",
      "amount": 90
    },
    "temperature": 1300,
    "time": 200
  }).id('forgedingears:rkepu');
  
  // Melting Recipe for Tinkers' Reforged Kepu Block
  event.custom({
    "type": "tconstruct:melting",
    "ingredient": {
      "item": "tinkers_reforged:raw_kepu_block"
    },
    "result": {
      "fluid": "tinkers_reforged:molten_kepu",
      "amount": 810
    },
    "temperature": 1300,
    "time": 600
  }).id('forgedingears:rkepub');


// Alloying Recipe for Amethyst Bronze
  event.remove({id: "tconstruct:smeltery/alloys/molten_amethyst_bronze"})
  event.custom({
    "type": "tconstruct:alloy",
    "inputs": [
      {
        "name": "tconstruct:molten_bronze",
        "amount": 90
      },
      {
        "name": "tconstruct:molten_amethyst",
        "amount": 100
      }
    ],
    "result": {
      "fluid": "tconstruct:molten_amethyst_bronze",
      "amount": 90
    },
    "temperature": 700
  }).id('forgedingears:amethyst_bronze');
  
  // Melting Recipe for Glass
  event.custom({
    "type": "tconstruct:melting",
    "ingredient": {
      "item": "forgedingears:glass_batch"
    },
    "result": {
      "fluid": "tconstruct:molten_glass",
      "amount": 50
    },
    "temperature": 750,
    "time": 240
  }).id('forgedingears:glass');


})