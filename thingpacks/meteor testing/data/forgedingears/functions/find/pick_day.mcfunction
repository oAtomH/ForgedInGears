# depending on frequency chosen, choose highest and lowest amount of days it can be for RNG
execute if score frequency meteor matches 1 run scoreboard players set high math 64
execute if score frequency meteor matches 1 run scoreboard players set low math 16

execute if score frequency meteor matches 2 run scoreboard players set high math 96
execute if score frequency meteor matches 2 run scoreboard players set low math 32

execute if score frequency meteor matches 3 run scoreboard players set high math 128
execute if score frequency meteor matches 3 run scoreboard players set low math 64

execute if score frequency meteor matches 4 run scoreboard players set high math 160
execute if score frequency meteor matches 4 run scoreboard players set low math 96

execute if score frequency meteor matches 5 run scoreboard players set high math 256
execute if score frequency meteor matches 5 run scoreboard players set low math 128

# too choose random number between selected amount
function math:rng/range

# make days till meteor hits the same as chosen rng number
scoreboard players operation $daystilmeteor meteor = out math


