# random message to send in chat
execute if score $rdm meteor matches 1..2 run tellraw @a ["","\n",{"text":"A celestial body has descended.","color":"gray"},"\n"]
execute if score $rdm meteor matches 3..4 run tellraw @a ["","\n",{"text":"The sky has gifted us with a visitor.","color":"gray"},"\n"]
execute if score $rdm meteor matches 5..6 run tellraw @a ["","\n",{"text":"A shooting star has landed.","color":"gray"},"\n"]
execute if score $rdm meteor matches 7..8 run tellraw @a ["","\n",{"text":"A piece of the heavens has fallen.","color":"gray"},"\n"]
execute if score $rdm meteor matches 9..10 run tellraw @a ["","\n",{"text":"The sky has granted us a fallen star.","color":"gray"},"\n"]
execute if score $rdm meteor matches 11..12 run tellraw @a ["","\n",{"text":"An otherworldly object has arrived.","color":"gray"},"\n"]
execute if score $rdm meteor matches 13..14 run tellraw @a ["","\n",{"text":"A mysterious object has landed amoung us.","color":"gray"},"\n"]
execute if score $rdm meteor matches 15..16 run tellraw @a ["","\n",{"text":"Odin's fire rains down.","color":"gray"},"\n"]
execute if score $rdm meteor matches 17..18 run tellraw @a ["","\n",{"text":"A star has made its way to earch.","color":"gray"},"\n"]
execute if score $rdm meteor matches 19..20 run tellraw @a ["","\n",{"text":"Varda sends a gift.","color":"gray"},"\n"]

# meteor on
scoreboard players set $active meteor 1

# find random player
tag @r[nbt={Dimension:"minecraft:overworld"}] add meteor_chosen

# summon armour stand at the random player
execute at @a[tag=meteor_chosen] run summon armor_stand ~ ~ ~ {Silent:1b,Invulnerable:1b,Small:1b,Marker:1b,Invisible:1b,Tags:["meteor_landing_spot"],DisabledSlots:4144959}

# remove tag from the random player
tag @a[tag=meteor_chosen] remove meteor_chosen

# randomly place the armour stand within 150 blocks of player
execute as @e[type=armor_stand,tag=meteor_landing_spot] at @s run spreadplayers ~ ~ 0 75 false @s
# force load that area (to ensure that it happens even if player doesnt see it)
execute as @e[type=armor_stand,tag=meteor_landing_spot] at @s run forceload add ~ ~


# Meteor 1 (smallest)
execute if score $rdm meteor matches 1..4 at @e[type=armor_stand,tag=meteor_landing_spot] run summon fireball ~ ~120 ~ {Fire:4000,HasVisualFire:1b,ExplosionPower:12b,power:[0.0,-.22,0.0],Tags:["meteor"]}

# Meteor 2
execute if score $rdm meteor matches 5..8 at @e[type=armor_stand,tag=meteor_landing_spot] run summon fireball ~1 ~120 ~ {Fire:4000,HasVisualFire:1b,ExplosionPower:12b,power:[0.0,-.22,0.0],Tags:["meteor"]}
execute if score $rdm meteor matches 5..8 at @e[type=armor_stand,tag=meteor_landing_spot] run summon fireball ~ ~120 ~1 {Fire:4000,HasVisualFire:1b,ExplosionPower:12b,power:[0.0,-.22,0.0],Tags:["meteor"]}

# Meteor 3
execute if score $rdm meteor matches 9..12 at @e[type=armor_stand,tag=meteor_landing_spot] run summon fireball ~1 ~120 ~ {Fire:4000,HasVisualFire:1b,ExplosionPower:12b,power:[0.0,-.22,0.0],Tags:["meteor"]}
execute if score $rdm meteor matches 9..12 at @e[type=armor_stand,tag=meteor_landing_spot] run summon fireball ~ ~120 ~ {Fire:4000,HasVisualFire:1b,ExplosionPower:12b,power:[0.0,-.22,0.0],Tags:["meteor"]}
execute if score $rdm meteor matches 9..12 at @e[type=armor_stand,tag=meteor_landing_spot] run summon fireball ~ ~120 ~1 {Fire:4000,HasVisualFire:1b,ExplosionPower:12b,power:[0.0,-.22,0.0],Tags:["meteor"]}

# Meteor 4
execute if score $rdm meteor matches 13..17 at @e[type=armor_stand,tag=meteor_landing_spot] run summon fireball ~1 ~120 ~ {Fire:4000,HasVisualFire:1b,ExplosionPower:12b,power:[0.0,-.22,0.0],Tags:["meteor"]}
execute if score $rdm meteor matches 13..17 at @e[type=armor_stand,tag=meteor_landing_spot] run summon fireball ~ ~120 ~1 {Fire:4000,HasVisualFire:1b,ExplosionPower:12b,power:[0.0,-.22,0.0],Tags:["meteor"]}
execute if score $rdm meteor matches 13..17 at @e[type=armor_stand,tag=meteor_landing_spot] run summon fireball ~-1 ~120 ~ {Fire:4000,HasVisualFire:1b,ExplosionPower:12b,power:[0.0,-.22,0.0],Tags:["meteor"]}
execute if score $rdm meteor matches 13..17 at @e[type=armor_stand,tag=meteor_landing_spot] run summon fireball ~ ~120 ~-1 {Fire:4000,HasVisualFire:1b,ExplosionPower:12b,power:[0.0,-.22,0.0],Tags:["meteor"]}

# Meteor 5 (largest)
execute if score $rdm meteor matches 18..20 at @e[type=armor_stand,tag=meteor_landing_spot] run summon fireball ~1 ~120 ~ {Fire:4000,HasVisualFire:1b,ExplosionPower:12b,power:[0.0,-.22,0.0],Tags:["meteor"]}
execute if score $rdm meteor matches 18..20 at @e[type=armor_stand,tag=meteor_landing_spot] run summon fireball ~ ~120 ~1 {Fire:4000,HasVisualFire:1b,ExplosionPower:12b,power:[0.0,-.22,0.0],Tags:["meteor"]}
execute if score $rdm meteor matches 18..20 at @e[type=armor_stand,tag=meteor_landing_spot] run summon fireball ~ ~120 ~ {Fire:4000,HasVisualFire:1b,ExplosionPower:12b,power:[0.0,-.22,0.0],Tags:["meteor"]}
execute if score $rdm meteor matches 18..20 at @e[type=armor_stand,tag=meteor_landing_spot] run summon fireball ~-1 ~120 ~ {Fire:4000,HasVisualFire:1b,ExplosionPower:12b,power:[0.0,-.22,0.0],Tags:["meteor"]}
execute if score $rdm meteor matches 18..20 at @e[type=armor_stand,tag=meteor_landing_spot] run summon fireball ~ ~120 ~-1 {Fire:4000,HasVisualFire:1b,ExplosionPower:12b,power:[0.0,-.22,0.0],Tags:["meteor"]}

# play sound
execute as @e[type=armor_stand,tag=meteor_landing_spot] at @s run playsound minecraft:entity.lightning_bolt.thunder master @a[distance=..200] ~ ~ ~ 6 2 1
execute as @e[type=armor_stand,tag=meteor_landing_spot] at @s run playsound minecraft:entity.lightning_bolt.thunder master @a[distance=..200] ~ ~ ~ 6 0 1
execute as @e[type=armor_stand,tag=meteor_landing_spot] at @s run playsound minecraft:entity.ender_dragon.ambient master @a[distance=..200] ~ ~ ~ 6 0 1



# pick a new day for meteor to summon
function forgedingears:find/pick_day