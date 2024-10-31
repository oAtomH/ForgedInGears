# turn off
scoreboard players set $active meteor 0

# puts armour stand on the ground
execute as @e[type=armor_stand,tag=meteor_landing_spot] at @s run spreadplayers ~ ~ 0 1 false @s
execute as @e[type=armor_stand,tag=meteor_landing_spot] at @s run tp ~ ~-1 ~

# place meteor type
#   allest meteor (most common)
execute if score $rdm meteor matches 1..4 at @e[type=armor_stand,tag=meteor_landing_spot] run place template forgedingears:meteorite1 ~-3 ~-7 ~-3

# Slightly larger meteor
execute if score $rdm meteor matches 5..8 at @e[type=armor_stand,tag=meteor_landing_spot] run place template forgedingears:meteorite2 ~-3 ~-6 ~-3

# Mid-sized meteor
execute if score $rdm meteor matches 9..12 at @e[type=armor_stand,tag=meteor_landing_spot] run place template forgedingears:meteorite3 ~-3 ~-5 ~-3

# Large meteor
execute if score $rdm meteor matches 13..17 at @e[type=armor_stand,tag=meteor_landing_spot] run place template forgedingears:meteorite4 ~-3 ~-4 ~-3

# Largest meteor (very rare)
execute if score $rdm meteor matches 18..20 at @e[type=armor_stand,tag=meteor_landing_spot] run place template forgedingears:meteorite5 ~-3 ~-3 ~-3


# place AEC 
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon area_effect_cloud ~ ~ ~ {Duration:100,Tags:["clean_up"]}


# add fire to the ground with magme cubes and fire
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}
execute at @e[type=armor_stand,tag=meteor_landing_spot] run summon marker ~ ~ ~ {Tags:["debris"]}

# delay the spread so the ground can settle
schedule function forgedingears:summon/delayed_debris 25t

