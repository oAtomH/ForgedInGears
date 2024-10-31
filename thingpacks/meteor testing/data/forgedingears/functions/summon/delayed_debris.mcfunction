# spread debris around
execute as @e[type=armor_stand,tag=meteor_landing_spot] at @s run spreadplayers ~ ~ 2 13 false @e[type=marker,tag=debris]

# kill any debris that are on leaves (to prevent them floating after tree has burnt down)
execute as @e[type=marker,tag=debris] at @s if block ~ ~-1 ~ #leaves run kill @s

# set blocks
execute at @e[type=marker,tag=debris] run setblock ~ ~-2 ~ lava
execute at @e[type=marker,tag=debris] run setblock ~ ~-1 ~ fire
execute at @e[type=marker,tag=debris] run fill ~4 ~-1 ~4 ~-4 ~-1 ~-4 iceandfire:chared_dirt replace minecraft:dirt
execute at @e[type=marker,tag=debris] run fill ~4 ~-1 ~4 ~-4 ~-1 ~-4 iceandfire:chared_grass replace minecraft:grass
execute at @e[type=marker,tag=debris] run fill ~4 ~-1 ~4 ~-4 ~-1 ~-4 iceandfire:chared_stone replace minecraft:stone
execute at @e[type=marker,tag=debris] run fill ~4 ~-1 ~4 ~-4 ~-1 ~-4 iceandfire:chared_cobblestone replace minecraft:cobblestone
execute at @e[type=marker,tag=debris] run fill ~4 ~-1 ~4 ~-4 ~-1 ~-4 iceandfire:chared_gravel replace minecraft:gravel
execute at @e[type=marker,tag=debris] run fill ~4 ~-1 ~4 ~-4 ~-1 ~-4 iceandfire:chared_dirt_path replace minecraft:dirt_path

execute as @e[type=marker,tag=debris] run scoreboard players add $marker_count meteor 1

# kill debris markers
kill @e[type=marker,tag=debris]


# kill armour stand
kill @e[type=armor_stand,tag=meteor_landing_spot]

# remove forceloaded chunk
execute at @e[type=area_effect_cloud,tag=clean_up] run forceload remove ~ ~
