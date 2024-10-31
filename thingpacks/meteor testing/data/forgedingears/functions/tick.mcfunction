# if admin changes frequency to numbers that aren't supported change it to default
execute if score frequency meteor matches 6.. run scoreboard players set frequency meteor 2
execute if score frequency meteor matches ..0 run scoreboard players set frequency meteor 2
# enable trigger
scoreboard players enable @a Meteor_Frequency
# anyone who triggers this can view frequency chang msg
execute as @a[scores={Meteor_Frequency=1..}] run function forgedingears:frequency_change

# if meteors actived run commands
execute if score $active meteor matches 1 run function forgedingears:summon/running_cmds

# if meteors dont exist any more turn it off
execute if score $active meteor matches 1 unless entity @e[type=fireball,tag=meteor] run function forgedingears:summon/conclude



# store time of day into a score
execute store result score $timeofday meteor run time query daytime

# if time of day is 20 (right in the morning) IF A PLAYER IS ONLINE remove 1 day for next meteor
execute if score $timeofday meteor matches 20 if entity @a run scoreboard players remove $daystilmeteor meteor 1


# if the day timer is up pick a random time of that day to summon it
execute if score $daystilmeteor meteor matches 0 run function forgedingears:find/pick_time

# if the random time chosen is the same as the day summon meteor (if a player is in the overworld)
execute if score $daystilmeteor meteor matches ..-1 if score $timetilmeteor meteor = $timeofday meteor if entity @a[nbt={Dimension:"minecraft:overworld"}] run function forgedingears:summon/summon


# NON RNG randomizer (for random meteor look)
scoreboard players add $rdm meteor 1
execute if score $rdm meteor matches 21.. run scoreboard players set $rdm meteor 1


# camp fire steam/smoke from meteor
execute as @e[type=area_effect_cloud,tag=hot_meteor] at @s positioned ~ ~1.25 ~ run function forgedingears:smoke_particles
