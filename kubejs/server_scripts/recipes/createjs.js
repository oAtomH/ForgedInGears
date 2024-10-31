ServerEvents.recipes(e => {
    e.remove({id: "create:filling/blaze_cake"})
    e.remove({id: "econstruct:create/filling/blaze_cake_from_spouting_blazing_blood_on_blaze_cake_base"})
    {
    let TI = 'create:blaze_cake_base'
    e.recipes.create.sequenced_assembly([
        Item.of('create:blaze_cake').withChance(1)
    ], TI, [
        e.recipes.createFilling(TI, [TI, Fluid.of('tconstruct:blazing_blood', 200)]),
        e.recipes.createFilling(TI, [TI, Fluid.of('minecraft:lava', 500)])
    ]).transitionalItem(TI).loops(5).id('forgedingears:blaze_cake')
    }

    
    {
    let TI = 'forgedingears:white_meth'
    e.recipes.create.sequenced_assembly([
        Item.of('minecraft:diamond').withChance(1)
    ], TI, [
        e.recipes.createDeploying(TI, [TI, 'forgedingears:zinc_dust']),
        e.recipes.createPressing(TI, TI),
        e.recipes.createFilling(TI, [TI, Fluid.of('forgedingears:liquid_blue_methamphetamine', 100)]),
        e.recipes.createFilling(TI, [TI, Fluid.of('tinkers_reforged:molten_blazing_copper', 20)])
    ]).transitionalItem(TI).loops(5).id('forgedingears:diamond')
    }


    {
    let TI = 'create:andesite_casing' // making a variable to store the transitional item makes the code more readable
    e.recipes.create.sequenced_assembly([
        Item.of('create:gearbox').withChance(1)
    ], TI, [
        e.recipes.createDeploying(TI, [TI, 'create:cogwheel'])
    ]).transitionalItem(TI).loops(3).id('forgedingears:gearbox') // set the transitional item and the number of loops
    }


    {
    let TI = 'create:andesite_casing' // making a variable to store the transitional item makes the code more readable
    e.recipes.create.sequenced_assembly([
        Item.of('create:encased_chain_drive').withChance(1)
    ], TI, [
        e.recipes.createDeploying(TI, [TI, 'minecraft:iron_nugget'])
    ]).transitionalItem(TI).loops(3).id('forgedingears:encased_chain_drive') // set the transitional item and the number of loops
    }

    {
    let TI = 'tconstruct:ichor_slime_ball' // making a variable to store the transitional item makes the code more readable
    e.recipes.create.sequenced_assembly([
        Item.of('forgedingears:amberlite_cluster').withChance(1)
    ], TI, [
        e.recipes.createDeploying(TI, [TI, 'tconstruct:ichor_slime_crystal']),
        e.recipes.createFilling(TI, [TI, Fluid.of('tinkers_reforged:molten_ferobolt', 200)]),
        e.recipes.createDeploying(TI, [TI, 'tconstruct:queens_slime_nugget']),
    ]
    ).transitionalItem(TI).loops(3).id('forgedingears:amberlite_cluster') // set the transitional item and the number of loops
    }

    e.remove({ id: 'create:crafting/materials/rose_quartz'})
    {
    let TI = 'minecraft:quartz' // making a variable to store the transitional item makes the code more readable
    e.recipes.create.sequenced_assembly([
        Item.of('create:rose_quartz').withChance(1)
    ], TI, [
        e.recipes.createFilling(TI, [TI, Fluid.of('minecraft:water', 500)]),
        e.recipes.createDeploying(TI, [TI, 'minecraft:redstone']),
        e.recipes.createFilling(TI, [TI, Fluid.of('minecraft:lava', 200)]),
        e.recipes.createDeploying(TI, [TI, 'forgedingears:aluminosilicate_catalyst']),
    ]
    ).transitionalItem(TI).loops(2).id('forgedingears:rose_quartz') // set the transitional item and the number of loops
    }

    e.remove({ id: 'tconstruct:smeltery/casting/seared/smeltery_controller'})
    {
      let TI = 'tconstruct:seared_bricks' // making a variable to store the transitional item makes the code more readable
      e.recipes.create.sequenced_assembly([
          Item.of('forgedingears:incomplete_seared_controller').withChance(1)
      ], TI, [
          e.recipes.createFilling(TI, [TI, Fluid.of('tconstruct:molten_copper', 270)]),
          e.recipes.createFilling(TI, [TI, Fluid.of('tconstruct:molten_glass', 100)]),
          e.recipes.createDeploying(TI, [TI, 'create:fluid_pipe']),
          e.recipes.createDeploying(TI, [TI, 'create:electron_tube']),
      ]
      ).transitionalItem(TI).loops(6).id('forgedingears:incomplete_seared_controller') // set the transitional item and the number of loops
      e.recipes.create.deploying('tconstruct:smeltery_controller', ['forgedingears:incomplete_seared_controller', 'forgedingears:copper_mechanism'])
      }


    e.remove({ id: 'tconstruct:smeltery/seared/drain'})
    e.remove({ id: 'tconstruct:smeltery/seared/drain_retextured'})
    {
      let TI = 'forgedingears:incomplete_seared_drain'
      e.recipes.create.sequenced_assembly([
          Item.of('tconstruct:seared_drain').withChance(1)
      ], '#tconstruct:seared_blocks', [
          e.recipes.createDeploying(TI, [TI, 'create:fluid_pipe']),
          e.recipes.createDeploying(TI, [TI, Item.of('tconstruct:round_plate', '{Material:"tconstruct:copper"}')]),
          e.recipes.createFilling(TI, [TI, Fluid.of('tconstruct:molten_copper', 90)])
      ]).transitionalItem(TI).loops(4).id('forgedingears:seared_drain')
    }

    e.remove({ id: 'tconstruct:smeltery/seared/chute'})
    e.remove({ id: 'tconstruct:smeltery/seared/chute_retextured'})
    {
      let TI = 'forgedingears:incomplete_seared_chute'
      e.recipes.create.sequenced_assembly([
          Item.of('tconstruct:seared_chute').withChance(1)
      ], '#tconstruct:seared_blocks', [
          e.recipes.createDeploying(TI, [TI, 'create:chute']),
          e.recipes.createDeploying(TI, [TI, Item.of('tconstruct:round_plate', '{Material:"tconstruct:copper"}')]),
          e.recipes.createFilling(TI, [TI, Fluid.of('tconstruct:molten_copper', 90)])
      ]).transitionalItem(TI).loops(4).id('forgedingears:seared_chute')
    }

    e.remove({ id: 'tconstruct:smeltery/seared/duct'})
    e.remove({ id: 'tconstruct:smeltery/seared/duct_retextured'})
    {
      let TI = 'forgedingears:incomplete_seared_duct'
      e.recipes.create.sequenced_assembly([
          Item.of('tconstruct:seared_duct').withChance(1)
      ], '#tconstruct:seared_blocks', [
          e.recipes.createDeploying(TI, [TI, 'create:filter']),
          e.recipes.createCutting(TI , TI),
          e.recipes.createDeploying(TI, [TI, Item.of('tconstruct:round_plate', '{Material:"materialis:brass"}')])
      ]).transitionalItem(TI).loops(4).id('forgedingears:seared_duct')
    }

    e.remove({ id: 'tconstruct:smeltery/scorched/drain'})
    e.remove({ id: 'tconstruct:smeltery/scorched/drain_retextured'})
    {
      let TI = 'forgedingears:incomplete_scorched_drain'
      e.recipes.create.sequenced_assembly([
          Item.of('tconstruct:scorched_drain').withChance(1)
      ], '#tconstruct:scorched_blocks', [
          e.recipes.createDeploying(TI, [TI, 'create:fluid_pipe']),
          e.recipes.createDeploying(TI, [TI, 'create:powdered_obsidian']),
          e.recipes.createFilling(TI, [TI, Fluid.of('tconstruct:molten_obsidian', 90)])
      ]).transitionalItem(TI).loops(4).id('forgedingears:scorched_drain')
    }

    e.remove({ id: 'tconstruct:smeltery/scorched/chute'})
    e.remove({ id: 'tconstruct:smeltery/scorched/chute_retextured'})
    {
      let TI = 'forgedingears:incomplete_scorched_chute'
      e.recipes.create.sequenced_assembly([
          Item.of('tconstruct:scorched_chute').withChance(1)
      ], '#tconstruct:scorched_blocks', [
          e.recipes.createDeploying(TI, [TI, 'create:chute']),
          e.recipes.createDeploying(TI, [TI, 'create:powdered_obsidian']),
          e.recipes.createFilling(TI, [TI, Fluid.of('tconstruct:molten_copper', 90)])
      ]).transitionalItem(TI).loops(4).id('forgedingears:scorched_chute')
    }

    e.remove({ id: 'tconstruct:smeltery/scorched/duct'})
    e.remove({ id: 'tconstruct:smeltery/scorched/duct_retextured'})
    {
      let TI = 'forgedingears:incomplete_scorched_duct'
      e.recipes.create.sequenced_assembly([
          Item.of('tconstruct:scorched_duct').withChance(1)
      ], '#tconstruct:scorched_blocks', [
          e.recipes.createDeploying(TI, [TI, 'create:filter']),
          e.recipes.createCutting(TI , TI),
          e.recipes.createDeploying(TI, [TI, Item.of('tconstruct:round_plate', '{Material:"materialis:brass"}')])
      ]).transitionalItem(TI).loops(4).id('forgedingears:scorched_duct')
    }

    e.remove({ id: 'tconstruct:smeltery/casting/scorched/foundry_controller'})
    {
      let TI = "tconstruct:scorched_bricks"

      e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": TI},
        "loops": 8,
        "results": [{"item": "forgedingears:incomplete_scorched_controller"}],
        "sequence": [
          {
            "type": "create:filling",
            "ingredients": [{"item": TI},{"fluid": "minecraft:lava","amount": 500}],
            "results": [{"item": TI}]
          },
          {
            "type": "create:deploying",
            "ingredients": [{"item": TI}, {"item": "create:powdered_obsidian"}],
            "results": [{"item": TI}]
          },
          {
            "type":"vintageimprovements:pressurizing",
            "heatRequirement": "superheated",
            "secondaryFluidInputs": 1,
            "ingredients": [{"item": TI},{"fluid": "tconstruct:molten_quartz","amount": 180}],
            "results": [{"item": TI}]
          },
          {
            "type": "create:deploying",
            "ingredients": [{"item": TI}, {"item": "create:fluid_pipe"}],
            "results": [{"item": TI}]
          },
          {
          "type": "vintageimprovements:curving",
          "ingredients": [{"item": TI}],
          "results": [{"item": TI}]
          },
          {
            "type": "create:deploying",
            "ingredients": [{"item": TI}, {"item": "forgedingears:obsidian_tube"}],
            "results": [{"item": TI}]
          }],"transitionalItem": {"item": TI}}).id('forgedingears:incomplete_scorched_controller')
      e.recipes.create.deploying(Item.of('tconstruct:foundry_controller', '{texture:"tconstruct:scorched_bricks"}'), ['forgedingears:incomplete_scorched_controller', 'forgedingears:steel_mechanism'])
    }

    e.remove({ output: 'create:precision_mechanism'})
    {
      let TI = 'create:incomplete_precision_mechanism'
      e.recipes.create.sequenced_assembly([
        Item.of('create:precision_mechanism').withChance(120.0),
        Item.of('2x create:golden_sheet').withChance(8.0),
        Item.of('3x create:andesite_alloy').withChance(8.0),
        Item.of('2x econstruct:brass_cogwheel').withChance(5.0),
        Item.of('2x create:shaft').withChance(2.0),
        Item.of('3x create:crushed_raw_gold').withChance(2.0),
        Item.of('7x gold_nugget').withChance(3.0)
      ], 'create:brass_sheet', [
          e.recipes.createCutting(TI , TI),
          e.recipes.createDeploying(TI, [TI, 'create:electron_tube']),
          e.recipes.createDeploying(TI, [TI, 'econstruct:brass_cogwheel']),
          e.recipes.createFilling(TI, [TI, Fluid.of('tconstruct:molten_gold', 180)]),
          e.recipes.createDeploying(TI, [TI, 'vintageimprovements:small_brass_spring']),
          e.recipes.createPressing(TI , TI),
      ]).transitionalItem(TI).loops(4).id('forgedingears:precision_mechanism')
    }

    e.remove({ output: 'create:mechanical_arm'})
    {
      let TI = 'create:brass_casing'
      e.recipes.create.sequenced_assembly([
        Item.of('create:mechanical_arm').withChance(1.0)
      ], TI, [
        
          e.recipes.createDeploying(TI, [TI, 'econstruct:brass_cogwheel']),
          e.recipes.createDeploying(TI, [TI, 'vintageimprovements:brass_spring']),
          e.recipes.createCutting(TI , TI),
          e.recipes.createFilling(TI, [TI, Fluid.of('minecraft:lava', 600)]),
          e.recipes.createDeploying(TI, [TI, 'create:precision_mechanism']),
          e.recipes.createPressing(TI , TI)
      ]).transitionalItem(TI).loops(2).id('forgedingears:mechanical_arm')
    }

    e.remove({ output: 'tconstruct:seared_fuel_tank'})
    {
      let TI = Item.of('forgedingears:incomplete_seared_tank', "{display:{Name:'{\"text\":\"Incomplete Seared Fuel Tank\",\"color\":\"gray\",\"italic\":false}'}}")
      e.recipes.create.sequenced_assembly([
        Item.of('tconstruct:seared_fuel_tank').withChance(1.0)
      ], 'tconstruct:seared_bricks', [
          e.recipes.createDeploying(TI, [TI, 'tconstruct:seared_brick']),
          e.recipes.createDeploying(TI, [TI, 'tconstruct:clear_glass_pane']),
          e.recipes.createFilling(TI, [TI, Fluid.of('tconstruct:molten_glass', 100)]),
      ]).transitionalItem(TI).loops(2).id('forgedingears:seared_fuel_tank')
    }
    e.remove({ output: 'tconstruct:seared_fuel_gauge'})
    {
      let TI = Item.of('forgedingears:incomplete_seared_gauge', "{display:{Name:'{\"text\":\"Incomplete Seared Fuel Gauge\",\"color\":\"gray\",\"italic\":false}'}}")
      e.recipes.create.sequenced_assembly([
        Item.of('tconstruct:seared_fuel_gauge').withChance(1.0)
      ], 'tconstruct:clear_glass', [
          e.recipes.createDeploying(TI, [TI, 'tconstruct:seared_brick']),
          e.recipes.createDeploying(TI, [TI, 'tconstruct:clear_glass_pane']),
          e.recipes.createFilling(TI, [TI, Fluid.of('tconstruct:molten_glass', 100)]),
      ]).transitionalItem(TI).loops(2).id('forgedingears:seared_fuel_gauge')
    }
    e.remove({ output: 'tconstruct:seared_ingot_tank'})
    {
      let TI = Item.of('forgedingears:incomplete_seared_tank', "{display:{Name:'{\"text\":\"Incomplete Seared Ingot Tank\",\"color\":\"gray\",\"italic\":false}'}}")
      e.recipes.create.sequenced_assembly([
        Item.of('tconstruct:seared_ingot_tank').withChance(1.0)
      ], 'tconstruct:seared_bricks', [
          e.recipes.createDeploying(TI, [TI, 'tconstruct:clear_glass_pane']),
          e.recipes.createDeploying(TI, [TI, 'tconstruct:seared_brick']),
      ]).transitionalItem(TI).loops(2).id('forgedingears:seared_ingot_tank')
    }
    e.remove({ output: 'tconstruct:seared_ingot_gauge'})
    {
      let TI = Item.of('forgedingears:incomplete_seared_gauge', "{display:{Name:'{\"text\":\"Incomplete Seared Ingot Gauge\",\"color\":\"gray\",\"italic\":false}'}}")
      e.recipes.create.sequenced_assembly([
        Item.of('tconstruct:seared_ingot_gauge').withChance(1.0)
      ], 'tconstruct:clear_glass', [
          e.recipes.createDeploying(TI, [TI, 'tconstruct:clear_glass_pane']),
          e.recipes.createDeploying(TI, [TI, 'tconstruct:seared_brick']),
      ]).transitionalItem(TI).loops(2).id('forgedingears:seared_ingot_gauge')
    }




    
    
    e.remove({ output: 'tconstruct:scorched_fuel_tank'})
    {
      let TI = Item.of('forgedingears:incomplete_scorched_tank', "{display:{Name:'{\"text\":\"Incomplete Scorched Fuel Tank\",\"color\":\"gray\",\"italic\":false}'}}")
      e.recipes.create.sequenced_assembly([
        Item.of('tconstruct:scorched_fuel_tank').withChance(1.0)
      ], 'tconstruct:scorched_bricks', [
          e.recipes.createDeploying(TI, [TI, 'tconstruct:scorched_brick']),
          e.recipes.createDeploying(TI, [TI, 'tconstruct:clear_glass_pane']),
          e.recipes.createFilling(TI, [TI, Fluid.of('tconstruct:molten_glass', 100)]),
      ]).transitionalItem(TI).loops(2).id('forgedingears:scorched_fuel_tank')
    }
    e.remove({ output: 'tconstruct:scorched_fuel_gauge'})
    {
      let TI = Item.of('forgedingears:incomplete_scorched_gauge', "{display:{Name:'{\"text\":\"Incomplete Scorched Fuel Gauge\",\"color\":\"gray\",\"italic\":false}'}}")
      e.recipes.create.sequenced_assembly([
        Item.of('tconstruct:scorched_fuel_gauge').withChance(1.0)
      ], 'tconstruct:clear_glass', [
          e.recipes.createDeploying(TI, [TI, 'tconstruct:scorched_brick']),
          e.recipes.createDeploying(TI, [TI, 'tconstruct:clear_glass_pane']),
          e.recipes.createFilling(TI, [TI, Fluid.of('tconstruct:molten_glass', 100)]),
      ]).transitionalItem(TI).loops(2).id('forgedingears:scorched_fuel_gauge')
    }
    e.remove({ output: 'tconstruct:scorched_ingot_tank'})
    {
      let TI = Item.of('forgedingears:incomplete_scorched_tank', "{display:{Name:'{\"text\":\"Incomplete Scorched Ingot Tank\",\"color\":\"gray\",\"italic\":false}'}}")
      e.recipes.create.sequenced_assembly([
        Item.of('tconstruct:scorched_ingot_tank').withChance(1.0)
      ], 'tconstruct:scorched_bricks', [
          e.recipes.createDeploying(TI, [TI, 'tconstruct:clear_glass_pane']),
          e.recipes.createDeploying(TI, [TI, 'tconstruct:scorched_brick']),
      ]).transitionalItem(TI).loops(2).id('forgedingears:scorched_ingot_tank')
    }
    e.remove({ output: 'tconstruct:scorched_ingot_gauge'})
    {
      let TI = Item.of('forgedingears:incomplete_scorched_gauge', "{display:{Name:'{\"text\":\"Incomplete Scorched Ingot Gauge\",\"color\":\"gray\",\"italic\":false}'}}")
      e.recipes.create.sequenced_assembly([
        Item.of('tconstruct:scorched_ingot_gauge').withChance(1.0)
      ], 'tconstruct:clear_glass', [
          e.recipes.createDeploying(TI, [TI, 'tconstruct:clear_glass_pane']),
          e.recipes.createDeploying(TI, [TI, 'tconstruct:scorched_brick']),
      ]).transitionalItem(TI).loops(2).id('forgedingears:scorched_ingot_gauge')
    }


    e.remove({ output: 'create:electron_tube'})
    {
      let TI = 'forgedingears:aluminum_sheet'
      e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": TI},
        "loops": 3,
        "results": [
          {"item": "create:electron_tube","chance": 12.0},
          {"item": "2x create:rose_quartz","chance": 5.0},
          {"item": "5x minecraft:redstone","chance": 3.0}
        ],
        "sequence": [
          {
            "type": "create:cutting",
            "ingredients": [{"item": TI}],
            "results": [{"item": TI}]
          },
          {
            "type": "create:deploying",
            "ingredients": [{"item": TI}, {"item": "create:super_glue"}],
            "results": [{"item": TI}],
            "keepHeldItem": true
          },
          {
            "type": "create:deploying",
            "ingredients": [{"item": TI}, {"item": "create:polished_rose_quartz"}],
            "results": [{"item": TI}],
            "keepHeldItem": false
          },
          {
            "type": "create:pressing",
            "ingredients": [{"item": TI}],
            "results": [{"item": TI}]
          }],"transitionalItem": {"item": TI}}).id('forgedingears:electron_tube')
        }

      e.remove({ output: 'create:super_glue'})
        {
          let TI = 'forgedingears:aluminum_sheet'
          e.recipes.create.sequenced_assembly([
            'create:super_glue'
          ], TI, [
              e.recipes.createPressing(TI , TI),
              e.recipes.createFilling(TI, [TI, Fluid.of('tconstruct:earth_slime', 250)]),
              e.recipes.createDeploying(TI, [TI, Item.of('tconstruct:round_plate', '{Material:"materialis:aluminum"}')]),
              e.recipes.createCutting(TI , TI),
          ]).transitionalItem(TI).loops(4).id('forgedingears:super_glue')
        }


        { 
          let TI = "minecraft:quartz"
          e.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": TI },
            "loops": 10,
            "results": [{"item": "forgedingears:obsidian_quartz"}],
            "sequence": [
              {
                "type": "create:deploying",
                "ingredients": [
                  { "item": TI },
                  { "item": "create:powdered_obsidian" }
                ],
                "results": [{ "item": TI }],
                "keepHeldItem": false
              },
              {
                "type":"vintageimprovements:pressurizing",
                "ingredients": [{"item": TI},{"fluid": "forgedingears:methanol","amount": 250  }],
                "results": [{"item": TI}]
              },
              {
                "type": "create:filling",
                "ingredients": [
                  { "item": TI },
                  { "fluid": "tconstruct:molten_obsidian", "amount": 50 }
                ],
                "results": [{ "item": TI }]
              },
              {
                "type": "create:deploying",
                "ingredients": [
                  { "item": TI },
                  { "item": "create:powdered_obsidian" }
                ],
                "results": [{ "item": TI }],
                "keepHeldItem": false
              },
              {
                "type":"vintageimprovements:pressurizing",
                "ingredients": [{"item": TI},{"fluid": "minecraft:lava","amount": 100  }],
                "results": [{"item": TI}]
              }
            ],"transitionalItem": {"item": TI}}).id('forgedingears:obsidian_quartz')
            e.custom({
              "type":"vintageimprovements:polishing",
              "speed_limits": 2,
              "ingredients": [ {"item": "forgedingears:obsidian_quartz"}],
              "results": [{"item": "forgedingears:polished_obsidian_quartz","count": 1}],
              "processingTime": 2000
            }).id('forgedingears:polished_obsidian_quartz')
        }
        { 
          let TI = "forgedingears:incomplete_obsidian_tube"
          e.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "forgedingears:steel_sheet" },
            "loops": 4,
            "results": [{"item": "forgedingears:obsidian_tube"}],
            "sequence": [
              {
                "type": "create:filling",
                "ingredients": [
                  { "item": TI },
                  { "fluid": "minecraft:lava", "amount": 100 }
                ],
                "results": [{ "item": TI }]
              },
              {
                "type": "create:deploying",
                "ingredients": [
                  { "item": TI },
                  { "item": "forgedingears:polished_obsidian_quartz" }
                ],
                "results": [{ "item": TI }],
                "keepHeldItem": false
              },
              {
                "type": "create:deploying",
                "ingredients": [
                  { "item": TI },
                  { "item": "vintageimprovements:small_copper_spring" }
                ],
                "results": [{ "item": TI }],
                "keepHeldItem": false
              },
              {
                "type": "create:deploying",
                "ingredients": [
                  { "item": TI },
                  { "item": "minecraft:redstone" }
                ],
                "results": [{ "item": TI }],
                "keepHeldItem": false
              },
              {
                "type": "vintageimprovements:hammering",
                "hammerBlows": 2,
                "ingredients": [{"item": TI}],
                "results": [{"item": TI}]
              }
            ],"transitionalItem": {"item": TI}}).id('forgedingears:obsidian_tube')
        }
        { 
          let TI = "forgedingears:incomplete_copper_mechanism"
          e.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:copper_sheet" },
            "loops": 12,
            "results": [{"item": "forgedingears:copper_mechanism", "chance": 12},{"item": "create:copper_sheet", "chance": 2},{"item": "minecraft:copper_ingot", "chance": 1}],
            "sequence": [
              {
                "type": "create:deploying",
                "ingredients": [
                  { "item": TI },
                  { "item": "vintageimprovements:small_copper_spring" }
                ],
                "results": [{ "item": TI }],
                "keepHeldItem": false
              },
              {
                "type": "create:deploying",
                "ingredients": [
                  { "item": TI },
                  { "item": "create:copper_valve_handle" }
                ],
                "results": [{ "item": TI }],
                "keepHeldItem": false
              },
              {
                "type": "create:filling",
                "ingredients": [
                  { "item": TI },
                  { "fluid": "minecraft:water", "amount": 250 }
                ],
                "results": [{ "item": TI }]
              },
              {
                "type": "create:deploying",
                "ingredients": [
                  { "item": TI },
                  { "item": "tconstruct:copper_can" }
                ],
                "results": [{ "item": TI }],
                "keepHeldItem": false
              },
              {
                "type": "create:cutting",
                "ingredients": [{"item": TI}],
                "results": [{"item": TI}]
              },
              {
                "type": "create:deploying",
                "ingredients": [
                  { "item": TI },
                  { "item": "create:cogwheel" }
                ],
                "results": [{ "item": TI }],
                "keepHeldItem": false
              },
              {
                "type": "create:filling",
                "ingredients": [
                  { "item": TI },
                  { "fluid": "tconstruct:molten_copper", "amount": 180 }
                ],
                "results": [{ "item": TI }]
              },
            ],"transitionalItem": {"item": TI}}).id('forgedingears:copper_mechanism')
        }



            

    
    // TNT
    e.remove({output: 'minecraft:tnt'})
    e.recipes.create.mechanical_crafting('minecraft:tnt', [
      'RSSR',
      'RGGR',
      'RGGR',
      'RSSR'
    ], {
      R: 'forgedingears:red_phosphorus',
      S: 'minecraft:gunpowder',
      G: 'minecraft:sand'
    }).id('forgedingears:tnt')


    // EFLN ball
    e.remove({ output: 'tconstruct:efln_ball' })
    e.shaped('tconstruct:efln_ball', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'minecraft:flint',
        B: 'forgedingears:cyanide',
        C: 'minecraft:tnt',
        D: 'survivalistessentials:flint_shard'
    }).id('forgedingears:efln_ball')

    e.recipes.create.mechanical_crafting('iceandfire:dragonarmor_copper_head', [
        'L L',
        'LPL',
        ' R '
      ], {
        P: Item.of('tconstruct:large_plate', '{Material:"tconstruct:copper"}'),
        R: Item.of('tconstruct:round_plate', '{Material:"tconstruct:copper"}'),
        L: Item.of('tinkers_reforged:large_round_plate', '{Material:"tconstruct:copper"}')
      }).id('forgedingears:dragonarmor_copper_head')
    e.recipes.create.mechanical_crafting('iceandfire:dragonarmor_copper_neck', [
        ' P ',
        'LPL',
        'RPR'
      ], {
        P: Item.of('tconstruct:large_plate', '{Material:"tconstruct:copper"}'),
        R: Item.of('tconstruct:round_plate', '{Material:"tconstruct:copper"}'),
        L: Item.of('tinkers_reforged:large_round_plate', '{Material:"tconstruct:copper"}')
      }).id('forgedingears:dragonarmor_copper_neck')
    e.recipes.create.mechanical_crafting('iceandfire:dragonarmor_copper_body', [
        'PR RP',
        'LL LL',
        ' L L ',
        ' R R '
      ], {
        P: Item.of('tconstruct:large_plate', '{Material:"tconstruct:copper"}'),
        R: Item.of('tconstruct:round_plate', '{Material:"tconstruct:copper"}'),
        L: Item.of('tinkers_reforged:large_round_plate', '{Material:"tconstruct:copper"}')
      }).id('forgedingears:dragonarmor_copper_body')
    e.recipes.create.mechanical_crafting('iceandfire:dragonarmor_copper_tail', [
        ' R ',
        ' P ',
        'RPR',
        'L L'
      ], {
        P: Item.of('tconstruct:large_plate', '{Material:"tconstruct:copper"}'),
        R: Item.of('tconstruct:round_plate', '{Material:"tconstruct:copper"}'),
        L: Item.of('tinkers_reforged:large_round_plate', '{Material:"tconstruct:copper"}')
      }).id('forgedingears:dragonarmor_copper_tail')



    e.recipes.create.mechanical_crafting('iceandfire:dragonarmor_iron_head', [
        'L L',
        'LPL',
        ' R '
      ], {
        P: Item.of('tconstruct:large_plate', '{Material:"tconstruct:iron"}'),
        R: Item.of('tconstruct:round_plate', '{Material:"tconstruct:iron"}'),
        L: Item.of('tinkers_reforged:large_round_plate', '{Material:"tconstruct:iron"}')
      }).id('forgedingears:dragonarmor_iron_head')
    e.recipes.create.mechanical_crafting('iceandfire:dragonarmor_iron_neck', [
        ' P ',
        'LPL',
        'RPR'
      ], {
        P: Item.of('tconstruct:large_plate', '{Material:"tconstruct:iron"}'),
        R: Item.of('tconstruct:round_plate', '{Material:"tconstruct:iron"}'),
        L: Item.of('tinkers_reforged:large_round_plate', '{Material:"tconstruct:iron"}')
      }).id('forgedingears:dragonarmor_iron_neck')
    e.recipes.create.mechanical_crafting('iceandfire:dragonarmor_iron_body', [
        'PR RP',
        'LL LL',
        ' L L ',
        ' R R '
      ], {
        P: Item.of('tconstruct:large_plate', '{Material:"tconstruct:iron"}'),
        R: Item.of('tconstruct:round_plate', '{Material:"tconstruct:iron"}'),
        L: Item.of('tinkers_reforged:large_round_plate', '{Material:"tconstruct:iron"}')
      }).id('forgedingears:dragonarmor_iron_body')
    e.recipes.create.mechanical_crafting('iceandfire:dragonarmor_iron_tail', [
        ' R ',
        ' P ',
        'RPR',
        'L L'
      ], {
        P: Item.of('tconstruct:large_plate', '{Material:"tconstruct:iron"}'),
        R: Item.of('tconstruct:round_plate', '{Material:"tconstruct:iron"}'),
        L: Item.of('tinkers_reforged:large_round_plate', '{Material:"tconstruct:iron"}')
      }).id('forgedingears:dragonarmor_iron_tail')

    e.remove({ output: 'iceandfire:dragonarmor_copper_head'})
    e.remove({ output: 'iceandfire:dragonarmor_copper_neck'})
    e.remove({ output: 'iceandfire:dragonarmor_copper_body'})
    e.remove({ output: 'iceandfire:dragonarmor_copper_tail'})
    e.remove({ output: 'iceandfire:dragonarmor_iron_head'})
    e.remove({ output: 'iceandfire:dragonarmor_iron_neck'})
    e.remove({ output: 'iceandfire:dragonarmor_iron_body'})
    e.remove({ output: 'iceandfire:dragonarmor_iron_tail'})
    e.remove({ output: 'iceandfire:dragonarmor_dragonsteel_fire_head'})
    e.remove({ output: 'iceandfire:dragonarmor_dragonsteel_fire_neck'})
    e.remove({ output: 'iceandfire:dragonarmor_dragonsteel_fire_body'})
    e.remove({ output: 'iceandfire:dragonarmor_dragonsteel_fire_tail'})
    e.remove({ output: 'iceandfire:dragonarmor_dragonsteel_ice_head'})
    e.remove({ output: 'iceandfire:dragonarmor_dragonsteel_ice_neck'})
    e.remove({ output: 'iceandfire:dragonarmor_dragonsteel_ice_body'})
    e.remove({ output: 'iceandfire:dragonarmor_dragonsteel_ice_tail'})
    e.remove({ output: 'iceandfire:dragonarmor_dragonsteel_lightning_head'})
    e.remove({ output: 'iceandfire:dragonarmor_dragonsteel_lightning_neck'})
    e.remove({ output: 'iceandfire:dragonarmor_dragonsteel_lightning_body'})
    e.remove({ output: 'iceandfire:dragonarmor_dragonsteel_lightning_tail'})



    e.remove({ output: 'iceandfire:dragonarmor_gold_head'})
    e.remove({ output: 'iceandfire:dragonarmor_gold_neck'})
    e.remove({ output: 'iceandfire:dragonarmor_gold_body'})
    e.remove({ output: 'iceandfire:dragonarmor_gold_tail'})
    e.remove({ output: 'iceandfire:dragonarmor_silver_head'})
    e.remove({ output: 'iceandfire:dragonarmor_silver_neck'})
    e.remove({ output: 'iceandfire:dragonarmor_silver_body'})
    e.remove({ output: 'iceandfire:dragonarmor_silver_tail'})
    e.remove({ output: 'iceandfire:dragonarmor_diamond_head'})
    e.remove({ output: 'iceandfire:dragonarmor_diamond_neck'})
    e.remove({ output: 'iceandfire:dragonarmor_diamond_body'})
    e.remove({ output: 'iceandfire:dragonarmor_diamond_tail'})


    e.remove({ output: 'create:crushing_wheel'})
    e.recipes.create.mechanical_crafting('create:crushing_wheel', [
      '  AAA  ',
      ' ABCBA ',
      'ABCDCBA',
      'ACDEDCA',
      'ABCDCBA',
      ' ABCBA ',
      '  AAA  '
    ], {
      A: 'forgedingears:andesite_alloy_sheet',
      B: 'minecraft:stick',
      C: '#forgedingears:lumber',
      D: Item.of('tconstruct:large_plate', '{Material:"forgedingears:andesite_alloy"}'),
      E: 'create:shaft'
    }).id('forgedingears:crushing_wheel')




    e.remove({ id: "tconstruct:tables/tinkers_forge"})
    e.remove({ id: "tconstruct:tables/tinkers_anvil"})
    e.remove({ id: "tconstruct:tables/scorched_forge"})
    e.remove({ id: "tconstruct:tables/scorched_anvil"})
    e.recipes.create.mechanical_crafting('tconstruct:scorched_anvil', [
      'SIIIS',
      ' III ',
      '  C  ',
      ' CBC ',
      ' CBC '
    ], {
      S: 'forgedingears:steel_sheet',
      I: 'forgedingears:steel_ingot',
      C: 'tconstruct:scorched_brick',
      B: 'tconstruct:scorched_bricks'
    }).id('forgedingears:tinkers_anvil')

    e.recipes.create.mixing(['forgedingears:small_cured_leather_hide'], ['forgedingears:small_leather_hide', 'forgedingears:saltpeter', Fluid.of('minecraft:water', 100)]).lowheated().id('forgedingears:small_cured_leather_hide')
    e.recipes.create.splashing('forgedingears:small_soaked_leather_hide', 'forgedingears:small_cured_leather_hide').id('forgedingears:small_soaked_leather_hide')
    e.recipes.create.mixing(['forgedingears:small_limed_leather_hide'], ['forgedingears:small_soaked_leather_hide', '2x forgedingears:calcium_carbonate']).lowheated().id('forgedingears:small_limed_leather_hide')
    e.custom({"type": "farmersdelight:cutting","ingredients": [{"item": "forgedingears:small_limed_leather_hide"}],"tool": {"tag": "survivalistessentials:knife_tools"},"result": [{"item": "forgedingears:small_scraped_leather_hide","count": 1}]}).id('forgedingears:small_scraped_leather_hide')
    e.recipes.create.deploying('forgedingears:small_tanned_leather_hide', ['forgedingears:small_scraped_leather_hide', 'survivalistessentials:plant_paste']).id('forgedingears:small_tanned_leather_hide')
    e.recipes.create.deploying('forgedingears:small_leather_sheet', ['forgedingears:small_tanned_leather_hide', 'minecraft:honeycomb']).id('forgedingears:small_leather_sheet')
    e.recipes.create.deploying('forgedingears:small_leather_sheet', ['forgedingears:small_tanned_leather_hide', 'minecraft:honeycomb_block']).keepHeldItem().id('forgedingears:small_leather_sheet_keep')

    e.recipes.create.mixing(['forgedingears:cured_leather_hide'], ['forgedingears:leather_hide', 'forgedingears:saltpeter', Fluid.of('minecraft:water', 100)]).lowheated().id('forgedingears:cured_leather_hide')
    e.recipes.create.splashing('forgedingears:soaked_leather_hide', 'forgedingears:cured_leather_hide').id('forgedingears:soaked_leather_hide')
    e.recipes.create.mixing(['forgedingears:limed_leather_hide'], ['forgedingears:soaked_leather_hide', '2x forgedingears:calcium_carbonate']).lowheated().id('forgedingears:limed_leather_hide')
    e.custom({"type": "farmersdelight:cutting","ingredients": [{"item": "forgedingears:limed_leather_hide"}],"tool": {"tag": "survivalistessentials:knife_tools"},"result": [{"item": "forgedingears:scraped_leather_hide","count": 1}]}).id('forgedingears:scraped_leather_hide')
    e.recipes.create.deploying('forgedingears:tanned_leather_hide', ['forgedingears:scraped_leather_hide', 'survivalistessentials:plant_paste']).id('forgedingears:tanned_leather_hide')
    e.recipes.create.deploying('forgedingears:leather_sheet', ['forgedingears:tanned_leather_hide', 'minecraft:honeycomb']).id('forgedingears:leather_sheet')
    e.recipes.create.deploying('forgedingears:leather_sheet', ['forgedingears:tanned_leather_hide', 'minecraft:honeycomb_block']).keepHeldItem().id('forgedingears:leather_sheet_keep')

    e.recipes.create.mixing(['forgedingears:large_cured_leather_hide'], ['forgedingears:large_leather_hide', 'forgedingears:saltpeter', Fluid.of('minecraft:water', 100)]).lowheated().id('forgedingears:large_cured_leather_hide')
    e.recipes.create.splashing('forgedingears:large_soaked_leather_hide', 'forgedingears:large_cured_leather_hide').id('forgedingears:large_soaked_leather_hide')
    e.recipes.create.mixing(['forgedingears:large_limed_leather_hide'], ['forgedingears:large_soaked_leather_hide', '2x forgedingears:calcium_carbonate']).lowheated().id('forgedingears:large_limed_leather_hide')
    e.custom({"type": "farmersdelight:cutting","ingredients": [{"item": "forgedingears:large_limed_leather_hide"}],"tool": {"tag": "survivalistessentials:knife_tools"},"result": [{"item": "forgedingears:large_scraped_leather_hide","count": 1}]}).id('forgedingears:large_scraped_leather_hide')
    e.recipes.create.deploying('forgedingears:large_tanned_leather_hide', ['forgedingears:large_scraped_leather_hide', 'survivalistessentials:plant_paste']).id('forgedingears:large_tanned_leather_hide')
    e.recipes.create.deploying('forgedingears:large_leather_sheet', ['forgedingears:large_tanned_leather_hide', 'minecraft:honeycomb']).id('forgedingears:large_leather_sheet')
    e.recipes.create.deploying('forgedingears:large_leather_sheet', ['forgedingears:large_tanned_leather_hide', 'minecraft:honeycomb_block']).keepHeldItem().id('forgedingears:large_leather_sheet_keep')

    e.remove({ id: 'survivalistessentials:plant_paste'})
    e.recipes.create.compacting(['survivalistessentials:plant_paste'], [Fluid.of('minecraft:water', 100), '8x forgedingears:wet_straw'])

    e.custom({"type": "farmersdelight:cutting","ingredients": [{"item": "forgedingears:small_leather_sheet"}],"tool": {"tag": "survivalistessentials:knife_tools"},"result": [{"item": "forgedingears:leather_strip","count": 2}]}).id('forgedingears:leather_strip_small')
    e.custom({"type": "farmersdelight:cutting","ingredients": [{"item": "forgedingears:leather_sheet"}],"tool": {"tag": "survivalistessentials:knife_tools"},"result": [{"item": "forgedingears:leather_strip","count": 4}]}).id('forgedingears:leather_strip')
    e.custom({"type": "farmersdelight:cutting","ingredients": [{"item": "forgedingears:large_leather_sheet"}],"tool": {"tag": "survivalistessentials:knife_tools"},"result": [{"item": "forgedingears:leather_strip","count": 6}]}).id('forgedingears:leather_strip_large')

    e.remove({ id: 'tconstruct:smeltery/sand_cast'})
    e.custom({"type": "farmersdelight:cutting","ingredients": [{"item": "minecraft:sand"}],"tool": {"tag": "survivalistessentials:shovel_tools"},"result": [{"item": "tconstruct:sand_cast","count": 2,"chance": 0.9}]}).id('forgedingears:sand_cast')
    e.remove({ id: 'tconstruct:smeltery/red_sand_cast'})
    e.custom({"type": "farmersdelight:cutting","ingredients": [{"item": "minecraft:red_sand"}],"tool": {"tag": "survivalistessentials:shovel_tools"},"result": [{"item": "tconstruct:red_sand_cast","count": 2,"chance": 0.9}]}).id('forgedingears:red_sand_cast')
    e.remove({ id: 'tconstruct:smeltery/seared/seared_brick'})
    e.remove({ id: 'tconstruct:smeltery/seared/seared_brick_kiln'})
    e.custom({"type": "farmersdelight:cutting","ingredients": [{"item": "tconstruct:grout"}],"tool": {"item": "survivalistessentials:crude_saw"},"result": [{"item": "forgedingears:grout_brick","chance": 0.75}]}).id('forgedingears:grout_brick')
    e.recipes.create.compacting('minecraft:paper', ['2x farmersdelight:tree_bark', Fluid.of('minecraft:water', 50)])
})



ServerEvents.recipes(e => {
  e.recipes.create.crushing('5x minecraft:bone_meal', 'tconstruct:necrotic_bone').processingTime(300).id('forgedingears:bmealn')
  e.recipes.create.crushing('5x minecraft:bone_meal', 'iceandfire:troll_tusk').processingTime(300).id('forgedingears:bmealt')
  e.recipes.create.crushing('5x minecraft:bone_meal', '#iceandfire:mob_skulls').processingTime(300).id('forgedingears:bmeals')
  e.recipes.create.milling(Item.of('minecraft:bone_meal').withChance(0.25), 'minecraft:bone').processingTime(500).id('forgedingears:bmeal')
  e.recipes.create.crushing(['3x minecraft:bone_meal', Item.of('2x minecraft:bone_meal').withChance(0.65)], 'minecraft:bone').processingTime(500).id('forgedingears:bmeal2')
  e.custom({"type": "farmersdelight:cutting","ingredients": [{"item": "minecraft:gravel"}],"tool": {"tag": "survivalistessentials:knife_tools"},"result": [{"item": "create:zinc_nugget","count": 1,"chance": 0.2}]}).id('forgedingears:zinc_from_gravel')
  e.recipes.create.compacting('minecraft:bone_block', [Fluid.of('minecraft:milk', 125), '9x minecraft:bone_meal'])
  e.recipes.create.mixing('endrem:witch_eye', ['iceandfire:hippocampus_fin', 'iceandfire:cyclops_eye', 'iceandfire:cockatrice_eye', 'iceandfire:hippogryph_talon', 'iceandfire:pixie_wings', 'iceandfire:siren_tear', '#forge:scales/fire_dragon', '#forge:scales/ice_dragon', '#forge:scales/lightning_dragon']).superheated()
  e.recipes.create.pressing([Item.of('tconstruct:pattern').withChance(0.8)], '#forgedingears:lumber')
  e.recipes.create.filling('forgedingears:mud_bottle', [Fluid.of('forgedingears:mud', 250), 'minecraft:glass_bottle'])
  e.recipes.create.emptying([Fluid.of('forgedingears:mud', 250), 'minecraft:glass_bottle'], 'forgedingears:mud_bottle')
  e.recipes.create.sandpaper_polishing(Item.of('tinkers_reforged:aluminum_nugget').withChance(1), 'create:crushed_raw_aluminum')
  e.remove({ id: "tconstruct:smeltery/alloys/molten_brass"})
  e.remove({ id: "create:mixing/brass_ingot"})
  e.recipes.create.mixing([Fluid.of('tconstruct:molten_brass', 3)], [Fluid.of('tconstruct:molten_copper', 2), Fluid.of('tconstruct:molten_zinc', 1)]).heated().id('forgedingears:molten_brass')
  e.recipes.create.mixing([Fluid.of('tconstruct:molten_bronze', 9)], [Fluid.of('tconstruct:molten_copper', 7), 'forgedingears:white_phosphorus', Fluid.of('tconstruct:molten_silver', 2)]).heated().id('forgedingears:molten_bronze')
  e.recipes.create.mixing([Fluid.water(50)], [Ingredient.of(['minecraft:big_dripleaf', '#minecraft:saplings'])]).id('forgedingears:water_50')
  e.recipes.create.mixing([Fluid.water(100)], [Ingredient.of(['minecraft:kelp', '#minecraft:leaves'])]).id('forgedingears:water_100')
  e.recipes.create.mixing([Fluid.water(250)], [Ingredient.of(['minecraft:cactus', 'minecraft:sea_grass'])]).id('forgedingears:water_250')
  e.remove({ output: "create:chromatic_compound"})
  e.recipes.create.mixing(['2x create:chromatic_compound'], ['forgedingears:polished_obsidian_quartz', 'forgedingears:saltpeter', 'minecraft:glowstone_dust', '5x create:experience_nugget', Fluid.of('tconstruct:ender_slime', 1000)]).superheated()
  e.recipes.create.mixing(['tinkers_reforged:duralumin_ingot'], ['2x forgedingears:zinc_dust', 'forgedingears:saltpeter', 'forgedingears:glass_batch', Fluid.of('tconstruct:molten_aluminum', 120), Fluid.of('tconstruct:molten_copper', 90)]).lowheated().id('forgedingears:duralumin_ingot')
  e.recipes.create.mixing([Fluid.of('forgedingears:mud', 250)], ['2x minecraft:dirt', Fluid.water(250)]).id('forgedingears:mud')
  e.recipes.create.pressing('forgedingears:andesite_alloy_sheet', 'create:andesite_alloy').id('forgedingears:andesite_alloy_sheet')
  e.recipes.create.pressing('forgedingears:aluminum_sheet', 'tinkers_reforged:aluminum_ingot').id('forgedingears:aluminum_sheet')
  e.recipes.create.milling('4x forgedingears:calcium_carbonate', 'minecraft:calcite').processingTime(200).id('forgedingears:calcium_carbonate')
  e.recipes.create.milling('2x forgedingears:white_phosphorus', 'minecraft:smooth_basalt').processingTime(200).id('forgedingears:white_phosphorus_1')
  e.recipes.create.milling('forgedingears:white_phosphorus', 'minecraft:basalt').processingTime(200).id('forgedingears:white_phosphorus_2')
  e.recipes.create.milling('forgedingears:saltpeter', '#minecraft:dirt').processingTime(200).id('forgedingears:saltpeter')
  e.recipes.create.milling('5x forgedingears:charcoal_powder', 'minecraft:charcoal').processingTime(200).id('forgedingears:charcoal_powder_1')
  e.recipes.create.crushing('8x forgedingears:charcoal_powder', 'minecraft:charcoal').processingTime(200).id('forgedingears:charcoal_powder_2')
  e.recipes.create.mixing(['2x forgedingears:glass_batch'], ['3x forgedingears:calcium_carbonate', '2x forgedingears:charcoal_powder', 'minecraft:sand']).id('forgedingears:glass_batch')
})

ServerEvents.recipes(e => {
  e.remove({ output: "iceandfire:dragonscale_red"})
  e.recipes.create.compacting('iceandfire:dragonscale_red', '9x iceandfire:dragonscales_red').id('forgedingears:dragonforgefirescales1')
  e.remove({ output: "iceandfire:dragonscale_gray"})
  e.recipes.create.compacting('iceandfire:dragonscale_gray', '9x iceandfire:dragonscales_gray').id('forgedingears:dragonforgefirescales2')
  e.remove({ output: "iceandfire:dragonscale_green"})
  e.recipes.create.compacting('iceandfire:dragonscale_green', '9x iceandfire:dragonscales_green').id('forgedingears:dragonforgefirescales3')
  e.remove({ output: "iceandfire:dragonscale_bronze"})
  e.recipes.create.compacting('iceandfire:dragonscale_bronze', '9x iceandfire:dragonscales_bronze').id('forgedingears:dragonforgefirescales4')
  e.remove({ output: "iceandfire:dragonforge_fire_brick"})
  e.recipes.create.compacting('iceandfire:dragonforge_fire_brick', ['tconstruct:seared_bricks', 'iceandfire:dragonscale_bronze', 'iceandfire:dragonscale_green', 'iceandfire:dragonscale_gray', 'iceandfire:dragonscale_red']).id('forgedingears:dragonforgefirescales4')
  e.remove({ output: "iceandfire:dragonforge_fire_input"})
  e.recipes.create.mechanical_crafting('iceandfire:dragonforge_fire_input', [
    ' BSB ',
    'BBCBB',
    'SC CS',
    'BBCBB',
    ' BSB '
  ], {
    B: 'iceandfire:dragonforge_fire_brick',
    S: 'forgedingears:steel_sheet',
    C: 'create:smart_chute'
  }).id('forgedingears:dragonforgefireaperture')
  e.remove({ output: "iceandfire:dragonforge_fire_core_disabled"})
  e.recipes.create.mechanical_crafting('forgedingears:empty_dragonforge_fire_core', [
    'ABCAB',
    'DEFGH',
    'CF FC',
    'AIFJB',
    'DHCDH'
  ], {
    A: 'iceandfire:dragonscales_bronze',
    B: 'iceandfire:dragonscales_gray',
    C: 'forgedingears:steel_sheet',
    D: 'iceandfire:dragonscales_green',
    E: 'iceandfire:dragonscale_red',
    F: 'tconstruct:seared_brick',
    G: 'iceandfire:dragonscale_green',
    H: 'iceandfire:dragonscales_red',
    I: 'iceandfire:dragonscale_gray',
    J: 'iceandfire:dragonscale_bronze'
  }).id('forgedingears:dragonforgefirecore')
  e.custom({
    "type":"vintageimprovements:vacuumizing",
    "ingredients": [{"item": "forgedingears:processed_fire_dragon_flesh"}],
    "results": [{"item": "minecraft:rotten_flesh"},{"fluid": "minecraft:lava", "amount": 50}],
    "processingTime": 1000})
  { 
    let TI = "iceandfire:fire_dragon_flesh"
    e.custom({
      "type": "create:sequenced_assembly",
      "ingredient": {"item": TI },
      "loops": 12,
      "results": [{"item": "forgedingears:processed_fire_dragon_flesh"}],
      "sequence": [
        {"type": "create:cutting",
          "ingredients": [{"item": TI}],
          "results": [{"item": TI}]
        },
        {
          "type":"vintageimprovements:pressurizing",
          "ingredients": [{"item": TI},{"fluid": "tconstruct:blood","amount": 30  }],
          "results": [{"item": TI}]
        },
        {"type": "vintageimprovements:vibrating",
          "ingredients": [{"item": TI}],
          "results": [{"item": TI}]
        },
        {"type": "create:pressing",
        "ingredients": [{"item": TI}],
        "results": [{"item": TI}]
        }
      ],"transitionalItem": {"item": TI}}).id('forgedingears:fire_dragon_flesh')}
  { 
    let TI = "forgedingears:processed_fire_dragon_flesh"
    e.custom({
      "type": "create:sequenced_assembly",
      "ingredient": {"item": TI },
      "loops": 8,
      "results": [{"item": "forgedingears:unstable_fire_dragon_heart"}],
      "sequence": [
        {
          "type":"vintageimprovements:pressurizing",
          "ingredients": [{"item": TI},{"fluid": "minecraft:lava","amount": 125  }],
          "results": [{"item": TI}]
        },
        {"type": "create:cutting",
          "ingredients": [{"item": TI}],
          "results": [{"item": TI}]
        },
        {"type": "vintageimprovements:vibrating",
        "ingredients": [{"item": TI}],
        "results": [{"item": TI}]
        },
        {
        "type": "create:deploying",
        "ingredients": [
          { "item": TI },
          { "tag": "forge:scales/fire_dragon" }
        ],
        "results": [{ "item": TI }],
        "keepHeldItem": false
        },
        {"type": "vintageimprovements:curving",
        "ingredients": [{"item": TI}],
        "results": [{"item": TI}]
        },
        {
        "type": "create:deploying",
        "ingredients": [
          { "item": TI },
          { "item": "iceandfire:fire_lily" }
        ],
        "results": [{ "item": TI }],
        "keepHeldItem": false
        }
      ],"transitionalItem": {"item": TI}}).id('forgedingears:seqfireheart')}
  { 
    let TI = "forgedingears:unstable_fire_dragon_heart"
    e.custom({
      "type": "create:sequenced_assembly",
      "ingredient": {"item": TI },
      "loops": 5,
      "results": [{"item": "forgedingears:mechanical_fire_dragon_heart"}],
      "sequence": [
        {
          "type": "create:filling",
          "ingredients": [
            { "item": TI },
            { "fluid": "minecraft:lava", "amount": 200 }
          ],
          "results": [{ "item": TI }]
        },
        {"type": "create:cutting",
          "ingredients": [{"item": TI}],
          "results": [{"item": TI}]
        },
        {
        "type": "create:deploying",
        "ingredients": [
          { "item": TI },
          { "item": "forgedingears:steel_mechanism" }
        ],
        "results": [{ "item": TI }],
        "keepHeldItem": false
        },
        {
        "type": "create:deploying",
        "ingredients": [
          { "item": TI },
          { "item": "forgedingears:obsidian_tube" }
        ],
        "results": [{ "item": TI }],
        "keepHeldItem": false
        },
        {
          "type": "vintageimprovements:hammering",
          "hammerBlows": 4,
          "ingredients": [{"item": TI}],
          "results": [{"item": TI}]
        }
      ],"transitionalItem": {"item": TI}}).id('forgedingears:mechfireheart')}
})
ServerEvents.recipes(e => {
  e.remove({ output: "iceandfire:dragonscale_blue"})
  e.recipes.create.compacting('iceandfire:dragonscale_blue', '9x iceandfire:dragonscales_blue').id('forgedingears:dragonforgeicescales1')
  e.remove({ output: "iceandfire:dragonscale_white"})
  e.recipes.create.compacting('iceandfire:dragonscale_white', '9x iceandfire:dragonscales_white').id('forgedingears:dragonforgeicescales2')
  e.remove({ output: "iceandfire:dragonscale_silver"})
  e.recipes.create.compacting('iceandfire:dragonscale_silver', '9x iceandfire:dragonscales_silver').id('forgedingears:dragonforgeicescales3')
  e.remove({ output: "iceandfire:dragonscale_sapphire"})
  e.recipes.create.compacting('iceandfire:dragonscale_sapphire', '9x iceandfire:dragonscales_sapphire').id('forgedingears:dragonforgeicescales4')
  e.remove({ output: "iceandfire:dragonforge_ice_brick"})
  e.recipes.create.compacting('iceandfire:dragonforge_ice_brick', ['tconstruct:seared_bricks', 'iceandfire:dragonscale_sapphire', 'iceandfire:dragonscale_silver', 'iceandfire:dragonscale_white', 'iceandfire:dragonscale_blue']).id('forgedingears:dragonforgeicescales4')
  e.remove({ output: "iceandfire:dragonforge_ice_input"})
  e.recipes.create.mechanical_crafting('iceandfire:dragonforge_ice_input', [
    ' BSB ',
    'BBCBB',
    'SC CS',
    'BBCBB',
    ' BSB '
  ], {
    B: 'iceandfire:dragonforge_ice_brick',
    S: 'forgedingears:steel_sheet',
    C: 'create:smart_chute'
  }).id('forgedingears:dragonforgeiceaperture')
  e.remove({ output: "iceandfire:dragonforge_ice_core_disabled"})
  e.recipes.create.mechanical_crafting('forgedingears:empty_dragonforge_ice_core', [
    'ABCAB',
    'DEFDE',
    'CF FC',
    'ABFAB',
    'DECDE'
  ], {
    A: 'iceandfire:dragonscales_sapphire',
    B: 'iceandfire:dragonscales_white',
    C: 'forgedingears:steel_sheet',
    D: 'iceandfire:dragonscales_silver',
    E: 'iceandfire:dragonscale_blue',
    F: 'tconstruct:seared_brick'
  }).id('forgedingears:dragonforgeicecore')
  e.custom({
    "type":"vintageimprovements:vacuumizing",
    "ingredients": [{"item": "forgedingears:processed_ice_dragon_flesh"}],
    "results": [{"item": "minecraft:rotten_flesh"},{"fluid": "minecraft:lava", "amount": 50}],
    "processingTime": 1000})
  { 
    let TI = "iceandfire:ice_dragon_flesh"
    e.custom({
      "type": "create:sequenced_assembly",
      "ingredient": {"item": TI },
      "loops": 12,
      "results": [{"item": "forgedingears:processed_ice_dragon_flesh"}],
      "sequence": [
        {"type": "create:cutting",
          "ingredients": [{"item": TI}],
          "results": [{"item": TI}]
        },
        {
          "type":"vintageimprovements:pressurizing",
          "ingredients": [{"item": TI},{"fluid": "tconstruct:blood","amount": 30  }],
          "results": [{"item": TI}]
        },
        {"type": "vintageimprovements:vibrating",
          "ingredients": [{"item": TI}],
          "results": [{"item": TI}]
        },
        {"type": "create:pressing",
        "ingredients": [{"item": TI}],
        "results": [{"item": TI}]
        }
      ],"transitionalItem": {"item": TI}}).id('forgedingears:ice_dragon_flesh')}
  { 
    let TI = "forgedingears:processed_ice_dragon_flesh"
    e.custom({
      "type": "create:sequenced_assembly",
      "ingredient": {"item": TI },
      "loops": 8,
      "results": [{"item": "forgedingears:unstable_ice_dragon_heart"}],
      "sequence": [
        {
          "type":"vintageimprovements:pressurizing",
          "ingredients": [{"item": TI},{"fluid": "minecraft:lava","amount": 125  }],
          "results": [{"item": TI}]
        },
        {"type": "create:cutting",
          "ingredients": [{"item": TI}],
          "results": [{"item": TI}]
        },
        {"type": "vintageimprovements:vibrating",
        "ingredients": [{"item": TI}],
        "results": [{"item": TI}]
        },
        {
        "type": "create:deploying",
        "ingredients": [
          { "item": TI },
          { "tag": "forge:scales/ice_dragon" }
        ],
        "results": [{ "item": TI }],
        "keepHeldItem": false
        },
        {"type": "vintageimprovements:curving",
        "ingredients": [{"item": TI}],
        "results": [{"item": TI}]
        },
        {
        "type": "create:deploying",
        "ingredients": [
          { "item": TI },
          { "item": "iceandfire:frost_lily" }
        ],
        "results": [{ "item": TI }],
        "keepHeldItem": false
        }
      ],"transitionalItem": {"item": TI}}).id('forgedingears:seqiceheart')}
  { 
    let TI = "forgedingears:unstable_ice_dragon_heart"
    e.custom({
      "type": "create:sequenced_assembly",
      "ingredient": {"item": TI },
      "loops": 5,
      "results": [{"item": "forgedingears:mechanical_ice_dragon_heart"}],
      "sequence": [
        {
          "type": "create:filling",
          "ingredients": [
            { "item": TI },
            { "fluid": "minecraft:lava", "amount": 200 }
          ],
          "results": [{ "item": TI }]
        },
        {"type": "create:cutting",
          "ingredients": [{"item": TI}],
          "results": [{"item": TI}]
        },
        {
        "type": "create:deploying",
        "ingredients": [
          { "item": TI },
          { "item": "forgedingears:steel_mechanism" }
        ],
        "results": [{ "item": TI }],
        "keepHeldItem": false
        },
        {
        "type": "create:deploying",
        "ingredients": [
          { "item": TI },
          { "item": "forgedingears:obsidian_tube" }
        ],
        "results": [{ "item": TI }],
        "keepHeldItem": false
        },
        {
          "type": "vintageimprovements:hammering",
          "hammerBlows": 4,
          "ingredients": [{"item": TI}],
          "results": [{"item": TI}]
        }
      ],"transitionalItem": {"item": TI}}).id('forgedingears:mechiceheart')}
})
ServerEvents.recipes(e => {
  e.remove({ output: "iceandfire:dragonscale_electric"})
  e.recipes.create.compacting('iceandfire:dragonscale_electric', '9x iceandfire:dragonscales_electric').id('forgedingears:dragonforgeicescales1')
  e.remove({ output: "iceandfire:dragonscale_amythest"})
  e.recipes.create.compacting('iceandfire:dragonscale_amythest', '9x iceandfire:dragonscales_amythest').id('forgedingears:dragonforgeicescales2')
  e.remove({ output: "iceandfire:dragonscale_black"})
  e.recipes.create.compacting('iceandfire:dragonscale_black', '9x iceandfire:dragonscales_black').id('forgedingears:dragonforgeicescales3')
  e.remove({ output: "iceandfire:dragonscale_copper"})
  e.recipes.create.compacting('iceandfire:dragonscale_copper', '9x iceandfire:dragonscales_copper').id('forgedingears:dragonforgeicescales4')
  e.remove({ output: "iceandfire:dragonforge_lightning_brick"})
  e.recipes.create.compacting('iceandfire:dragonforge_lightning_brick', ['tconstruct:seared_bricks', 'iceandfire:dragonscale_copper', 'iceandfire:dragonscale_black', 'iceandfire:dragonscale_amythest', 'iceandfire:dragonscale_electric']).id('forgedingears:dragonforgelightningscales4')
  e.remove({ output: "iceandfire:dragonforge_lightning_input"})
  e.recipes.create.mechanical_crafting('iceandfire:dragonforge_lightning_input', [
    ' BSB ',
    'BBCBB',
    'SC CS',
    'BBCBB',
    ' BSB '
  ], {
    B: 'iceandfire:dragonforge_lightning_brick',
    S: 'forgedingears:steel_sheet',
    C: 'create:smart_chute'
  }).id('forgedingears:dragonforgelightningaperture')
  e.remove({ output: "iceandfire:dragonforge_lightning_core_disabled"})
  e.recipes.create.mechanical_crafting('forgedingears:empty_dragonforge_lightning_core', [
    'ABCAB',
    'DEFDE',
    'CF FC',
    'ABFAB',
    'DECDE'
  ], {
    A: 'iceandfire:dragonscales_copper',
    B: 'iceandfire:dragonscales_amythest',
    C: 'forgedingears:steel_sheet',
    D: 'iceandfire:dragonscales_black',
    E: 'iceandfire:dragonscale_electric',
    F: 'tconstruct:seared_brick'
  }).id('forgedingears:dragonforgelightningcore')
  e.custom({
    "type":"vintageimprovements:vacuumizing",
    "ingredients": [{"item": "forgedingears:processed_lightning_dragon_flesh"}],
    "results": [{"item": "minecraft:rotten_flesh"},{"fluid": "minecraft:lava", "amount": 50}],
    "processingTime": 1000})
  { 
    let TI = "iceandfire:lightning_dragon_flesh"
    e.custom({
      "type": "create:sequenced_assembly",
      "ingredient": {"item": TI },
      "loops": 12,
      "results": [{"item": "forgedingears:processed_lightning_dragon_flesh"}],
      "sequence": [
        {"type": "create:cutting",
          "ingredients": [{"item": TI}],
          "results": [{"item": TI}]
        },
        {
          "type":"vintageimprovements:pressurizing",
          "ingredients": [{"item": TI},{"fluid": "tconstruct:blood","amount": 30  }],
          "results": [{"item": TI}]
        },
        {"type": "vintageimprovements:vibrating",
          "ingredients": [{"item": TI}],
          "results": [{"item": TI}]
        },
        {"type": "create:pressing",
        "ingredients": [{"item": TI}],
        "results": [{"item": TI}]
        }
      ],"transitionalItem": {"item": TI}}).id('forgedingears:lightning_dragon_flesh')}
  { 
    let TI = "forgedingears:processed_lightning_dragon_flesh"
    e.custom({
      "type": "create:sequenced_assembly",
      "ingredient": {"item": TI },
      "loops": 8,
      "results": [{"item": "forgedingears:unstable_lightning_dragon_heart"}],
      "sequence": [
        {
          "type":"vintageimprovements:pressurizing",
          "ingredients": [{"item": TI},{"fluid": "minecraft:lava","amount": 125  }],
          "results": [{"item": TI}]
        },
        {"type": "create:cutting",
          "ingredients": [{"item": TI}],
          "results": [{"item": TI}]
        },
        {"type": "vintageimprovements:vibrating",
        "ingredients": [{"item": TI}],
        "results": [{"item": TI}]
        },
        {
        "type": "create:deploying",
        "ingredients": [
          { "item": TI },
          { "tag": "forge:scales/lightning_dragon" }
        ],
        "results": [{ "item": TI }],
        "keepHeldItem": false
        },
        {"type": "vintageimprovements:curving",
        "ingredients": [{"item": TI}],
        "results": [{"item": TI}]
        },
        {
        "type": "create:deploying",
        "ingredients": [
          { "item": TI },
          { "item": "iceandfire:lightning_lily" }
        ],
        "results": [{ "item": TI }],
        "keepHeldItem": false
        }
      ],"transitionalItem": {"item": TI}}).id('forgedingears:seqlightningheart')}
  { 
    let TI = "forgedingears:unstable_lightning_dragon_heart"
    e.custom({
      "type": "create:sequenced_assembly",
      "ingredient": {"item": TI },
      "loops": 5,
      "results": [{"item": "forgedingears:mechanical_lightning_dragon_heart"}],
      "sequence": [
        {
          "type": "create:filling",
          "ingredients": [
            { "item": TI },
            { "fluid": "minecraft:lava", "amount": 200 }
          ],
          "results": [{ "item": TI }]
        },
        {"type": "create:cutting",
          "ingredients": [{"item": TI}],
          "results": [{"item": TI}]
        },
        {
        "type": "create:deploying",
        "ingredients": [
          { "item": TI },
          { "item": "forgedingears:steel_mechanism" }
        ],
        "results": [{ "item": TI }],
        "keepHeldItem": false
        },
        {
        "type": "create:deploying",
        "ingredients": [
          { "item": TI },
          { "item": "forgedingears:obsidian_tube" }
        ],
        "results": [{ "item": TI }],
        "keepHeldItem": false
        },
        {
          "type": "vintageimprovements:hammering",
          "hammerBlows": 4,
          "ingredients": [{"item": TI}],
          "results": [{"item": TI}]
        }
      ],"transitionalItem": {"item": TI}}).id('forgedingears:mechlightningheart')}
})
ServerEvents.recipes(e => {
  {
    let TI = 'tconstruct:ichor_slime_crystal_block'
    e.recipes.create.sequenced_assembly([
      Item.of('tconstruct:budding_ichor_slime_crystal').withChance(1)
    ], TI, [
        e.recipes.createDeploying(TI, [TI, 'tconstruct:ichor_slime_crystal']),
        e.recipes.createDeploying(TI, [TI, 'tconstruct:ichor_slime']),
        e.recipes.createCutting(TI , TI),
        e.recipes.createFilling(TI, [TI, Fluid.of('minecraft:lava', 500)]),
        e.recipes.createDeploying(TI, [TI, 'minecraft:bone_meal'])
    ]).transitionalItem(TI).loops(4).id('forgedingears:budding_ichor')
  }
  {
    let TI = 'tconstruct:earth_slime_crystal_block'
    e.recipes.create.sequenced_assembly([
      Item.of('tconstruct:budding_earth_slime_crystal').withChance(1)
    ], TI, [
        e.recipes.createDeploying(TI, [TI, 'tconstruct:earth_slime_crystal']),
        e.recipes.createDeploying(TI, [TI, 'minecraft:slime_ball']),
        e.recipes.createCutting(TI , TI),
        e.recipes.createFilling(TI, [TI, Fluid.of('tconstruct:earth_slime', 500)]),
        e.recipes.createDeploying(TI, [TI, 'minecraft:bone_meal'])
    ]).transitionalItem(TI).loops(4).id('forgedingears:budding_earth')
  }
  {
    let TI = 'tconstruct:sky_slime_crystal_block'
    e.recipes.create.sequenced_assembly([
      Item.of('tconstruct:budding_sky_slime_crystal').withChance(1)
    ], TI, [
        e.recipes.createDeploying(TI, [TI, 'tconstruct:sky_slime_crystal']),
        e.recipes.createDeploying(TI, [TI, 'tconstruct:sky_slime']),
        e.recipes.createCutting(TI , TI),
        e.recipes.createFilling(TI, [TI, Fluid.of('tconstruct:sky_slime', 500)]),
        e.recipes.createDeploying(TI, [TI, 'minecraft:bone_meal'])
    ]).transitionalItem(TI).loops(4).id('forgedingears:budding_sky')
  }
  {
    let TI = 'tconstruct:ender_slime_crystal_block'
    e.recipes.create.sequenced_assembly([
      Item.of('tconstruct:budding_ender_slime_crystal').withChance(1)
    ], TI, [
        e.recipes.createDeploying(TI, [TI, 'tconstruct:ender_slime_crystal']),
        e.recipes.createDeploying(TI, [TI, 'tconstruct:ender_slime']),
        e.recipes.createCutting(TI , TI),
        e.recipes.createFilling(TI, [TI, Fluid.of('tconstruct:ender_slime', 500)]),
        e.recipes.createDeploying(TI, [TI, 'minecraft:bone_meal'])
    ]).transitionalItem(TI).loops(4).id('forgedingears:budding_ender')
  }
  { 
    let TI = "forgedingears:incomplete_steel_mechanism"
    e.custom({
      "type": "create:sequenced_assembly",
      "ingredient": {"item": "forgedingears:steel_sheet" },
      "loops": 6,
      "results": [{"item": "forgedingears:steel_mechanism", "chance": 110}, {"item": "forgedingears:steel_sheet", "chance": 30}, {"item": "forgedingears:polished_obsidian_quartz", "chance": 10}],
      "sequence": [
        {"type": "create:cutting",
        "ingredients": [{"item": TI}],
        "results": [{"item": TI}]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            { "item": TI },
            { "item": "vintageimprovements:steel_wire" }
          ],
          "results": [{ "item": TI }],
          "keepHeldItem": false
        },
        {
          "type": "create:deploying",
          "ingredients": [
            { "item": TI },
            { "item": "econstruct:seared_cogwheel" }
          ],
          "results": [{ "item": TI }],
          "keepHeldItem": false
        },
        {
          "type": "vintageimprovements:hammering",
          "hammerBlows": 3,
          "ingredients": [{"item": TI}],
          "results": [{"item": TI}]
        },
        {
          "type": "create:filling",
          "ingredients": [
            { "item": TI },
            { "fluid": "tconstruct:molten_steel", "amount": 45 }
          ],
          "results": [{ "item": TI }]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            { "item": TI },
            { "item": "vintageimprovements:small_steel_spring" }
          ],
          "results": [{ "item": TI }],
          "keepHeldItem": false
        },
        {"type": "vintageimprovements:curving",
        "ingredients": [{"item": TI}],
        "results": [{"item": TI}]
        }
      ],"transitionalItem": {"item": TI}}).id('forgedingears:steel_mechanism')
  }

})
