scoreboard objectives add meteor dummy

scoreboard objectives add Meteor_Frequency trigger
scoreboard players enable @a Meteor_Frequency

scoreboard players set frequency meteor 2

# if a time hasn't been chosen yet pick one
execute unless score $daystilmeteor meteor matches 1.. run schedule function forgedingears:find/pick_day 20t


# first time loading message
execute unless score $daystilmeteor meteor matches 1.. run tellraw @a ["","\n",{"text":"Meteor Datapack Loaded: ","color":"gold"},"\n",{"text":"Set its frequency: ","color":"gray"},{"text":"[1] ","color":"aqua","clickEvent":{"action":"run_command","value":"/function forgedingears:frequency/1"},"hoverEvent":{"action":"show_text","contents":[{"text":"Every 20-60 Days","color":"gray"}]}},{"text":"[2] ","color":"aqua","clickEvent":{"action":"run_command","value":"/function forgedingears:frequency/2"},"hoverEvent":{"action":"show_text","contents":[{"text":"Every 50-100 Days","color":"gray"}]}},{"text":"[3] ","color":"aqua","clickEvent":{"action":"run_command","value":"/function forgedingears:frequency/3"},"hoverEvent":{"action":"show_text","contents":[{"text":"Every 70-200 Days","color":"gray"}]}},{"text":"[4] ","color":"aqua","clickEvent":{"action":"run_command","value":"/function forgedingears:frequency/4"},"hoverEvent":{"action":"show_text","contents":[{"text":"Every 100-350 Days","color":"gray"}]}},{"text":"[5] ","color":"aqua","clickEvent":{"action":"run_command","value":"/function forgedingears:frequency/5"},"hoverEvent":{"action":"show_text","contents":[{"text":"Every 250-500 Days","color":"gray"}]}},"\n"]