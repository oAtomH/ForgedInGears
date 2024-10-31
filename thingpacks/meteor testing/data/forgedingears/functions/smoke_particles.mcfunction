# camp fire steam/smoke from meteor
execute positioned ~ ~1 ~ run particle minecraft:campfire_signal_smoke ~ ~ ~ 0 .0725 0 1 0 force
execute positioned ~1 ~1 ~ run particle minecraft:campfire_signal_smoke ~ ~ ~ 0 .0725 0 1 0 force
execute positioned ~2 ~1 ~ run particle minecraft:campfire_signal_smoke ~ ~ ~ 0 .0725 0 1 0 force
execute positioned ~-2 ~1 ~ run particle minecraft:campfire_signal_smoke ~ ~ ~ 0 .0725 0 1 0 force
execute positioned ~-2 ~1 ~ run particle minecraft:campfire_signal_smoke ~ ~ ~ 0 .0725 0 1 0 force
execute positioned ~ ~1 ~1 run particle minecraft:campfire_signal_smoke ~ ~ ~ 0 .0725 0 1 0 force
execute positioned ~ ~1 ~2 run particle minecraft:campfire_signal_smoke ~ ~ ~ 0 .0725 0 1 0 force
execute positioned ~ ~1 ~-2 run particle minecraft:campfire_signal_smoke ~ ~ ~ 0 .0725 0 1 0 force
execute positioned ~ ~1 ~-2 run particle minecraft:campfire_signal_smoke ~ ~ ~ 0 .0725 0 1 0 force
execute positioned ~-1.5 ~1 ~1.5 run particle minecraft:campfire_signal_smoke ~ ~ ~ 0 .0725 0 1 0 force
execute positioned ~1.5 ~1 ~-1.5 run particle minecraft:campfire_signal_smoke ~ ~ ~ 0 .0725 0 1 0 force
execute positioned ~1.5 ~1 ~1.5 run particle minecraft:campfire_signal_smoke ~ ~ ~ 0 .0725 0 1 0 force
execute positioned ~-1.5 ~1 ~-1.5 run particle minecraft:campfire_signal_smoke ~ ~ ~ 0 .0725 0 1 0 force

# kill area effect cloud if player gets close to it
execute if entity @a[gamemode=!spectator,distance=..4] run kill @s