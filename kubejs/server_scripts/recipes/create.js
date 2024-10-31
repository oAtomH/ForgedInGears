ServerEvents.recipes(e => {
  e.custom({
    "type": "create:haunting",
    "ingredients": [
      { "item": "minecraft:netherrack" }
    ],
    "results": [
      { "item": "minecraft:crimson_nylium", "chance": 0.5 },
      { "item": "minecraft:warped_nylium", "chance": 0.5 }
    ]
  }).id('forgedingears:hauntnyl')
  
  // Recipe: Create Splashing
  e.custom({
    "type": "create:splashing",
    "ingredients": [
      { "item": "minecraft:grass" }
    ],
    "results": [
      { "item": "minecraft:seagrass", "chance": 0.75 },
      { "item": "minecraft:wheat_seeds", "chance": 0.25 },
      { "item": "minecraft:beetroot_seeds", "chance": 0.1 }
    ]
  }).id('forgedingears:splgrass')
  
  // Recipe: Create Crushing
  e.custom({
    "type": "create:crushing",
    "ingredients": [
      { "item": "create:scorchia" }
    ],
    "results": [
      { "item": "iceandfire:ash", "count": 2, "chance": 0.6 },
      { "item": "minecraft:coal", "count": 1, "chance": 0.2 },
      { "item": "create:scoria", "count": 1, "chance": 0.05 }
    ],
    "processingTime": 100
  }).id('forgedingears:crushscorch')
  e.custom({
    "type": "create:mixing",
    "recipe": "grout",
    "ingredients": [
      { "item": "minecraft:sand" },
      { "item": "minecraft:sand" },
      { "item": "minecraft:gravel" },
      { "item": "createindustry:limesand" },
      { "item": "forgedingears:andesite_powder" },
      { "item": "forgedingears:andesite_powder" },
      { "item": "minecraft:bone_meal" },
      { "item": "minecraft:clay_ball" },
      { "fluid": "forgedingears:mud", "amount": 1000 }
    ],
    "results": [{ "item": "tconstruct:grout" }]
  }).id("forgedingears:grout")
  e.custom({
    "type": "create:mixing",
    "recipe": "nether_grout",
    "ingredients": [
      { "item": "forgedingears:red_phosphorus" },
      { "item": "forgedingears:charcoal_powder" },
      { "item": "createindustry:fireclay_ball"},
      { "item": "create:powdered_obsidian" },
      { "item": "minecraft:soul_sand" },
      { "item": "iceandfire:ash" },
      { "fluid": "tconstruct:magma", "amount": 1000 }
    ],
    "results": [{ "item": "tconstruct:nether_grout" }],
    "heatRequirement": "heated",
    "processingTime": 600
  }).id("forgedingears:nether_grout")
  e.custom({
    "type": "create:mixing",
    "recipe": "polandmix",
    "ingredients": [
      { "item": "minecraft:polished_andesite" },
      { "fluid": "minecraft:lava", "amount": 25 }
    ],
    "results": [
      { "item": "create:andesite_alloy", "chance": 0.05 },
      { "item": "minecraft:iron_nugget", "chance": 0.8 },
      { "item": "create:copper_nugget", "chance": 0.8 },
      { "item": "minecraft:gold_nugget", "chance": 0.8 },
      { "item": "create:zinc_nugget", "chance": 0.8 }
    ],
    "heatRequirement": "heated"
  }).id("forgedingears:andesite_alloy")
  e.custom({
    "type": "create:mixing",
    "recipe": "glowstonemix",
    "ingredients": [
      { "item": "minecraft:prismarine_crystals" },
      { "item": "create:cinder_flour" },
      { "item": "create:cinder_flour" },
      { "item": "create:cinder_flour" },
      { "item": "create:cinder_flour" },
      { "item": "minecraft:torch" },
      { "fluid": "minecraft:lava", "amount": 100 }
    ],
    "results": [{ "item": "minecraft:glowstone_dust", "chance": 1.0, "count": 8 }],
    "heatRequirement": "heated"
  }).id("forgedingears:glowstone_dust")
  e.custom({
    "type": "createsifter:sifting",
    "ingredients": [
      {
        "item": "minecraft:gravel"
      },
      {
        "item": "createsifter:string_mesh"
      }
    ],
    "processingTime": 500,
    "results": [
      {
        "chance": 0.3,
        "item": "create:zinc_nugget"
      },
      {
        "chance": 0.7,
        "item": "survivalistessentials:rock_stone"
      }
    ],
    "waterlogged": true
  })



e.remove({ id: 'tinkers_reforged:smeltery/alloy/duralumin' })
e.remove({ id: 'create:milling/bone' })
e.remove({ id: 'create:milling/calcite' })
e.remove({ id: 'create:compat/tconstruct/milling/necrotic_bone' })
e.remove({ id: 'iceandfire:troll_tusk_bonemeal' })
e.remove({ id: 'iceandfire:dragon_skull_bonemeal' })
e.remove({ id: 'minecraft:bone_meal' })
e.remove({ id: 'minecraft:bone_meal_from_bone_block' })
e.remove({ id: 'tconstruct:smeltery/seared/grout_multiple' })
e.remove({ id: 'tconstruct:smeltery/seared/grout' })
e.remove({ id: 'tconstruct:smeltery/scorched/nether_grout' })
e.remove({ id: 'farmersdelight:cutting/gravel' })
e.remove({ id: /tuff/})
e.remove({ output: 'minecraft:bone_block' })
e.remove({ output: 'endrem:witch_eye' })
e.remove({ output: 'minecraft:bucket' })
e.remove({ output: 'tconstruct:scorched_brick' })
e.remove({ output: 'tconstruct:scorched_brick' })
})