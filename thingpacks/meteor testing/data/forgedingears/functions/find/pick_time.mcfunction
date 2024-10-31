# make it -1 so it doesnt spam this function
scoreboard players set $daystilmeteor meteor -1


scoreboard players set high math 24000
scoreboard players set low math 9000

# too choose random number between 50 - 250
function math:rng/range

# make days till meteor hits the same as chosen rng number
scoreboard players operation $timetilmeteor meteor = out math


