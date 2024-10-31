### Cloud Notes ###
# Newton-Raphson, 4 iterations approach
#
# low = lower range
# high = upper range
# out = random number between range


scoreboard players add high math 1
scoreboard players operation #range math = high math
scoreboard players operation #range math -= low math

scoreboard players operation #m1 math = #range math
scoreboard players remove #m1 math 1
function math:rng/zprivate/next_int
scoreboard players operation out math += low math

scoreboard players reset #m1 math
scoreboard players remove high math 1