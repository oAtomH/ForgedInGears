// place this file under kubejs/server_scripts
// https://github.com/Creators-of-Create/Create/blob/mc1.18/dev/src/main/java/com/simibubi/create/content/contraptions/ContraptionMovementSetting.java
const ContraptionMovementSetting = Java.loadClass('com.simibubi.create.content.contraptions.ContraptionMovementSetting');

// register method from ContraptionMovementSettings has 2 overloads,
// so we specify the exact function signature to prevent ambiguity
const register = ContraptionMovementSetting['register(net.minecraft.resources.ResourceLocation,java.util.function.Supplier)'];

// Create provides 3 types of movement:
// MOVABLE: Block can be part of a contraption and the cart can be picked up with a wrench.
//          Most blocks behave this way by default.
// NO_PICKUP: Block can be moved, but if it is part of a cart contraption the cart can not be picked up.
//            Spawners and Budding Amethysts work like this by default.
// UNMOVABLE: Block can not become part of a create contraption.
//            Obsidian works like this by default.
const MOVABLE = ContraptionMovementSetting.MOVABLE;
const NO_PICKUP = ContraptionMovementSetting.NO_PICKUP;
const UNMOVABLE = ContraptionMovementSetting.UNMOVABLE;

const setCreateMovableMode = (blockID, moveMode) => register(new ResourceLocation(blockID), () => moveMode);

let isMovable = true;
const testBlock = 'create:mechanical_saw';

ServerEvents.loaded(event => {
      setCreateMovableMode(testBlock, UNMOVABLE);
});

BlockEvents.placed(event => {
      const { block} = event
      if (block.id != 'create:mechanical_saw') return
      let face = block.properties['facing']
      let axis = false
      let flipped = false
      switch (face) {
          case Direction.NORTH: { axis = false; flipped = true; break }
          case Direction.SOUTH: { axis = false; flipped = false; break }
          case Direction.WEST: { axis = true; flipped = true; break }
          case Direction.EAST: { axis = true; flipped = false; break }
          default: return
      }
      block.set('create:mechanical_saw', { facing: Direction.UP, axis_along_first: axis, flipped: flipped })
  })