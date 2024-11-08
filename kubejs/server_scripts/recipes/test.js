ServerEvents.recipes(e => {
    e.custom({
        "type": "lychee:block_interacting",
        "ghost": false,
        "contextual": [
          {
            "type": "direction",
            "secret": false,
            "description": "testing direction",
            "direction": "north"
          }
        ],
        "post": [
          {
            "type": "add_item_cooldown",
            "s": 4
          },
          {
            "type": "set_item",
            "contextual": [
              {
                "type": "is_sneaking"
              }
            ],
            "target": "minecraft:iron_ingot",
            "item": "minecraft:diamond",
            "count": 1
          },
          {
            "type": "drop_item",
            "contextual": [
              {
                "type": "not",
                "contextual": {
                  "type": "is_sneaking"
                }
              }
            ],
            "item": "minecraft:diamond"
          },
          {
            "type": "drop_xp",
            "contextual": [
              {
                "type": "not",
                "contextual": {
                  "type": "is_sneaking"
                }
              }
            ],
            "xp": 20
          }
        ],
        "max_repeats": 2,
        "item_in": {
          "item": "minecraft:coal"
        },
        "block_in": "minecraft:stone"
      }
      )
})