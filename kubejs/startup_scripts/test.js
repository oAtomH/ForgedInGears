StartupEvents.registry('item', event => {
    event.create('forgedingears:incomplete_seared_controller').modelJson({
		"credit": "Made with Blockbench",
		"parent": "block/block",
		"texture_size": [128, 128],
		"textures": {
			"0": "forgedingears:item/incomplete_seared_controller",
			"particle": "forgedingears:item/incomplete_seared_controller"
		},
		"elements": [
			{
				"from": [16, 16, 16],
				"to": [8, 9, 9],
				"faces": {
					"north": {"uv": [3.75, 3.5, 3.75, 3.5], "texture": "#0"},
					"east": {"uv": [0.125, 2.25, 1, 3.125], "texture": "#0"},
					"south": {"uv": [0.875, 6.5, 1.75, 7.375], "texture": "#0"},
					"west": {"uv": [3.375, 3.75, 3.375, 3.75], "texture": "#0"},
					"up": {"uv": [0.875, 0.875, 1.875, 1.75], "texture": "#0"},
					"down": {"uv": [3.5, 3.75, 3.5, 3.75], "texture": "#0"}
				}
			},
			{
				"name": "brick",
				"from": [0, 0, 0],
				"to": [16, 16, 16],
				"faces": {
					"north": {"uv": [0, 0, 2, 2], "texture": "#0", "cullface": "north"},
					"east": {"uv": [0, 6.375, 2, 8.375], "texture": "#0", "cullface": "east"},
					"south": {"uv": [0, 2.125, 2, 4.125], "texture": "#0", "cullface": "south"},
					"west": {"uv": [0, 0, 2, 2], "texture": "#0", "cullface": "west"},
					"up": {"uv": [0, 4.25, 2, 6.25], "texture": "#0", "cullface": "up"},
					"down": {"uv": [0, 0, 2, 2], "texture": "#0", "cullface": "down"}
				}
			},
			{
				"name": "inside1",
				"from": [-2, 8, 0],
				"to": [0, 13, 5],
				"rotation": {"angle": 0, "axis": "y", "origin": [8, 8, 8]},
				"faces": {
					"north": {"uv": [3, 4.625, 3.625, 4.875], "rotation": 90, "texture": "#0"},
					"east": {"uv": [0, 0, 0, 0], "texture": "#0"},
					"south": {"uv": [3, 5, 3.625, 5.25], "rotation": 90, "texture": "#0"},
					"west": {"uv": [3, 4.625, 3.625, 5.25], "texture": "#0"},
					"up": {"uv": [3, 5, 3.625, 5.25], "rotation": 90, "texture": "#0"},
					"down": {"uv": [3, 4.625, 3.625, 4.875], "rotation": 270, "texture": "#0"}
				}
			},
			{
				"name": "straight1",
				"from": [-4, 12, 1],
				"to": [-1, 18, 4],
				"rotation": {"angle": 0, "axis": "y", "origin": [8, 8, 8]},
				"faces": {
					"north": {"uv": [2.25, 4.5, 2.625, 5.25], "rotation": 180, "texture": "#0"},
					"east": {"uv": [2.25, 4.5, 2.625, 5.25], "rotation": 180, "texture": "#0"},
					"south": {"uv": [2.25, 4.5, 2.625, 5.25], "texture": "#0"},
					"west": {"uv": [2.25, 4.5, 2.625, 5.25], "texture": "#0"}
				}
			},
			{
				"name": "corner1",
				"from": [-4, 9, 1],
				"to": [-1, 12, 4],
				"rotation": {"angle": 0, "axis": "y", "origin": [8, 8, 8]},
				"faces": {
					"north": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 180, "texture": "#0"},
					"east": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 180, "texture": "#0"},
					"south": {"uv": [2.625, 4.875, 3, 5.25], "texture": "#0"},
					"west": {"uv": [2.625, 4.875, 3, 5.25], "texture": "#0"},
					"up": {"uv": [0, 0, 0, 0], "rotation": 270, "texture": "#0"},
					"down": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 270, "texture": "#0"}
				}
			},
			{
				"name": "corner2",
				"from": [-4, 18, 1],
				"to": [-1, 21, 4],
				"rotation": {"angle": 0, "axis": "y", "origin": [8, 8, 8]},
				"faces": {
					"north": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 90, "texture": "#0"},
					"east": {"uv": [0, 0, 0, 0], "texture": "#0"},
					"south": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 90, "texture": "#0"},
					"west": {"uv": [2.625, 4.875, 3, 5.25], "texture": "#0"},
					"up": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 90, "texture": "#0"},
					"down": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 270, "texture": "#0"}
				}
			},
			{
				"name": "straight3",
				"from": [-1, 18, 1],
				"to": [10, 21, 4],
				"faces": {
					"north": {"uv": [2.25, 3.25, 2.625, 4.625], "rotation": 270, "texture": "#0"},
					"south": {"uv": [2.25, 3.25, 2.625, 4.625], "rotation": 270, "texture": "#0"},
					"up": {"uv": [2.25, 3.25, 2.625, 4.625], "rotation": 90, "texture": "#0"},
					"down": {"uv": [2.25, 3.25, 2.625, 4.625], "rotation": 270, "texture": "#0"}
				}
			},
			{
				"name": "corner4",
				"from": [10, 18, 1],
				"to": [13, 21, 4],
				"rotation": {"angle": 0, "axis": "x", "origin": [8, 8, 8]},
				"faces": {
					"north": {"uv": [2.625, 4.875, 3, 5.25], "texture": "#0"},
					"east": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 90, "texture": "#0"},
					"south": {"uv": [0, 0, 0, 0], "texture": "#0"},
					"west": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 90, "texture": "#0"},
					"up": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 180, "texture": "#0"},
					"down": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 180, "texture": "#0"}
				}
			},
			{
				"name": "spoke",
				"from": [11, 16, 2],
				"to": [12, 18, 3],
				"rotation": {"angle": 0, "axis": "y", "origin": [8, 8, 8]},
				"faces": {
					"north": {"uv": [2.5, 4.875, 2.625, 5.125], "texture": "#0"},
					"east": {"uv": [2.5, 4.875, 2.625, 5.125], "rotation": 180, "texture": "#0"},
					"south": {"uv": [2.5, 4.875, 2.625, 5.125], "rotation": 180, "texture": "#0"},
					"west": {"uv": [2.5, 4.875, 2.625, 5.125], "texture": "#0"},
					"up": {"uv": [0, 0, 0, 0], "texture": "#0"},
					"down": {"uv": [0, 0, 0, 0], "rotation": 180, "texture": "#0"}
				}
			},
			{
				"name": "straight4",
				"from": [10, 18, 4],
				"to": [13, 21, 11],
				"faces": {
					"east": {"uv": [2.25, 4.375, 2.625, 5.25], "rotation": 270, "texture": "#0"},
					"west": {"uv": [2.25, 4.375, 2.625, 5.25], "rotation": 270, "texture": "#0"},
					"up": {"uv": [2.25, 4.375, 2.625, 5.25], "texture": "#0"},
					"down": {"uv": [2.25, 4.375, 2.625, 5.25], "texture": "#0"}
				}
			},
			{
				"name": "corner4",
				"from": [10, 18, 11],
				"to": [13, 21, 14],
				"rotation": {"angle": 0, "axis": "y", "origin": [8, 8, 8]},
				"faces": {
					"north": {"uv": [0, 0, 0, 0], "texture": "#0"},
					"east": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 90, "texture": "#0"},
					"south": {"uv": [2.625, 4.875, 3, 5.25], "texture": "#0"},
					"west": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 90, "texture": "#0"},
					"up": {"uv": [2.625, 4.875, 3, 5.25], "texture": "#0"},
					"down": {"uv": [2.625, 4.875, 3, 5.25], "texture": "#0"}
				}
			},
			{
				"name": "straight5",
				"from": [10, 11, 11],
				"to": [13, 18, 14],
				"faces": {
					"north": {"uv": [2.25, 4.375, 2.625, 5.25], "rotation": 180, "texture": "#0"},
					"east": {"uv": [2.25, 4.375, 2.625, 5.25], "rotation": 180, "texture": "#0"},
					"south": {"uv": [2.25, 4.375, 2.625, 5.25], "texture": "#0"},
					"west": {"uv": [2.25, 4.375, 2.625, 5.25], "texture": "#0"}
				}
			},
			{
				"name": "inside2",
				"from": [9, 9, 10],
				"to": [14, 11, 15],
				"rotation": {"angle": 0, "axis": "x", "origin": [8, 8, 8]},
				"faces": {
					"north": {"uv": [3, 4.625, 3.625, 4.875], "texture": "#0"},
					"east": {"uv": [3, 4.625, 3.625, 4.875], "texture": "#0"},
					"south": {"uv": [3, 5, 3.625, 5.25], "rotation": 180, "texture": "#0"},
					"west": {"uv": [3, 5, 3.625, 5.25], "rotation": 180, "texture": "#0"},
					"up": {"uv": [3, 4.625, 3.625, 5.25], "rotation": 180, "texture": "#0"},
					"down": {"uv": [0, 0, 0, 0], "texture": "#0"}
				}
			},
			{
				"name": "handle",
				"from": [12, 4, -1],
				"to": [13, 6, 0],
				"faces": {
					"north": {"uv": [2.5, 1.375, 2.625, 1.625], "texture": "#0", "cullface": "north"},
					"east": {"uv": [2.5, 1.375, 2.625, 1.625], "texture": "#0", "cullface": "north"},
					"up": {"uv": [2.5, 1.375, 2.625, 1.5], "texture": "#0", "cullface": "north"},
					"down": {"uv": [2.5, 1.5, 2.625, 1.625], "texture": "#0", "cullface": "north"}
				}
			},
			{
				"name": "vent",
				"from": [4, 2, -0.99],
				"to": [12, 8, 0.01],
				"faces": {
					"north": {"uv": [2.625, 1.125, 3.625, 1.875], "texture": "#0", "cullface": "north"},
					"east": {"uv": [2.625, 1.125, 2.75, 1.875], "texture": "#0", "cullface": "north"},
					"west": {"uv": [3.5, 1.125, 3.625, 1.875], "texture": "#0", "cullface": "north"},
					"up": {"uv": [2.625, 1.125, 3.625, 1.25], "rotation": 180, "texture": "#0", "cullface": "north"},
					"down": {"uv": [2.625, 1.875, 3.625, 1.75], "texture": "#0", "cullface": "north"}
				}
			},
			{
				"name": "window",
				"from": [3, 10, -1],
				"to": [13, 15, 0],
				"faces": {
					"north": {"uv": [2.5, 0.25, 3.75, 0.875], "texture": "#0", "cullface": "north"},
					"east": {"uv": [2.5, 0.25, 2.625, 0.875], "texture": "#0", "cullface": "north"},
					"west": {"uv": [3.625, 0.25, 3.75, 0.875], "texture": "#0", "cullface": "north"},
					"up": {"uv": [2.5, 0.25, 3.75, 0.375], "rotation": 180, "texture": "#0", "cullface": "north"},
					"down": {"uv": [2.5, 0.75, 3.75, 0.875], "rotation": 180, "texture": "#0", "cullface": "north"}
				}
			}
		],
		"groups": [
			{
				"name": "block",
				"origin": [0, 0, 0],
				"color": 0,
				"children": [0, 1]
			},
			{
				"name": "pipe",
				"origin": [8, 28, 8],
				"color": 0,
				"children": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
			},
			{
				"name": "front",
				"origin": [0, 0, 0],
				"color": 0,
				"children": [13, 14, 15]
			}
		],
		"display": {
			"thirdperson_righthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"thirdperson_lefthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_righthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_lefthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"ground": {
				"scale": [0.5, 0.5, 0.5]
			},
			"gui": {
				"rotation": [30, -135, 0],
				"scale": [0.59, 0.59, 0.59]
			}
		}
	})
    event.create('forgedingears:incomplete_scorched_controller').modelJson({
		"credit": "Made with Blockbench",
		"parent": "block/block",
		"texture_size": [128, 128],
		"textures": {
			"0": "forgedingears:item/incomplete_scorched_controller",
			"particle": "forgedingears:item/incomplete_scorched_controller"
		},
		"elements": [
			{
				"from": [16, 16, 16],
				"to": [8, 9, 9],
				"faces": {
					"north": {"uv": [3.75, 3.5, 3.75, 3.5], "texture": "#0"},
					"east": {"uv": [0.125, 2.25, 1, 3.125], "texture": "#0"},
					"south": {"uv": [0.875, 6.5, 1.75, 7.375], "texture": "#0"},
					"west": {"uv": [3.375, 3.75, 3.375, 3.75], "texture": "#0"},
					"up": {"uv": [0.875, 0.875, 1.875, 1.75], "texture": "#0"},
					"down": {"uv": [3.5, 3.75, 3.5, 3.75], "texture": "#0"}
				}
			},
			{
				"name": "brick",
				"from": [0, 0, 0],
				"to": [16, 16, 16],
				"faces": {
					"north": {"uv": [0, 0, 2, 2], "texture": "#0", "cullface": "north"},
					"east": {"uv": [0, 6.375, 2, 8.375], "texture": "#0", "cullface": "east"},
					"south": {"uv": [0, 2.125, 2, 4.125], "texture": "#0", "cullface": "south"},
					"west": {"uv": [0, 0, 2, 2], "texture": "#0", "cullface": "west"},
					"up": {"uv": [0, 4.25, 2, 6.25], "texture": "#0", "cullface": "up"},
					"down": {"uv": [0, 0, 2, 2], "texture": "#0", "cullface": "down"}
				}
			},
			{
				"name": "inside1",
				"from": [-2, 8, 0],
				"to": [0, 13, 5],
				"rotation": {"angle": 0, "axis": "y", "origin": [8, 8, 8]},
				"faces": {
					"north": {"uv": [3, 4.625, 3.625, 4.875], "rotation": 90, "texture": "#0"},
					"east": {"uv": [0, 0, 0, 0], "texture": "#0"},
					"south": {"uv": [3, 5, 3.625, 5.25], "rotation": 90, "texture": "#0"},
					"west": {"uv": [3, 4.625, 3.625, 5.25], "texture": "#0"},
					"up": {"uv": [3, 5, 3.625, 5.25], "rotation": 90, "texture": "#0"},
					"down": {"uv": [3, 4.625, 3.625, 4.875], "rotation": 270, "texture": "#0"}
				}
			},
			{
				"name": "straight1",
				"from": [-4, 12, 1],
				"to": [-1, 18, 4],
				"rotation": {"angle": 0, "axis": "y", "origin": [8, 8, 8]},
				"faces": {
					"north": {"uv": [2.25, 4.5, 2.625, 5.25], "rotation": 180, "texture": "#0"},
					"east": {"uv": [2.25, 4.5, 2.625, 5.25], "rotation": 180, "texture": "#0"},
					"south": {"uv": [2.25, 4.5, 2.625, 5.25], "texture": "#0"},
					"west": {"uv": [2.25, 4.5, 2.625, 5.25], "texture": "#0"}
				}
			},
			{
				"name": "corner1",
				"from": [-4, 9, 1],
				"to": [-1, 12, 4],
				"rotation": {"angle": 0, "axis": "y", "origin": [8, 8, 8]},
				"faces": {
					"north": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 180, "texture": "#0"},
					"east": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 180, "texture": "#0"},
					"south": {"uv": [2.625, 4.875, 3, 5.25], "texture": "#0"},
					"west": {"uv": [2.625, 4.875, 3, 5.25], "texture": "#0"},
					"up": {"uv": [0, 0, 0, 0], "rotation": 270, "texture": "#0"},
					"down": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 270, "texture": "#0"}
				}
			},
			{
				"name": "corner2",
				"from": [-4, 18, 1],
				"to": [-1, 21, 4],
				"rotation": {"angle": 0, "axis": "y", "origin": [8, 8, 8]},
				"faces": {
					"north": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 90, "texture": "#0"},
					"east": {"uv": [0, 0, 0, 0], "texture": "#0"},
					"south": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 90, "texture": "#0"},
					"west": {"uv": [2.625, 4.875, 3, 5.25], "texture": "#0"},
					"up": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 90, "texture": "#0"},
					"down": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 270, "texture": "#0"}
				}
			},
			{
				"name": "straight3",
				"from": [-1, 18, 1],
				"to": [10, 21, 4],
				"faces": {
					"north": {"uv": [2.25, 3.25, 2.625, 4.625], "rotation": 270, "texture": "#0"},
					"south": {"uv": [2.25, 3.25, 2.625, 4.625], "rotation": 270, "texture": "#0"},
					"up": {"uv": [2.25, 3.25, 2.625, 4.625], "rotation": 90, "texture": "#0"},
					"down": {"uv": [2.25, 3.25, 2.625, 4.625], "rotation": 270, "texture": "#0"}
				}
			},
			{
				"name": "corner4",
				"from": [10, 18, 1],
				"to": [13, 21, 4],
				"rotation": {"angle": 0, "axis": "x", "origin": [8, 8, 8]},
				"faces": {
					"north": {"uv": [2.625, 4.875, 3, 5.25], "texture": "#0"},
					"east": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 90, "texture": "#0"},
					"south": {"uv": [0, 0, 0, 0], "texture": "#0"},
					"west": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 90, "texture": "#0"},
					"up": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 180, "texture": "#0"},
					"down": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 180, "texture": "#0"}
				}
			},
			{
				"name": "spoke",
				"from": [11, 16, 2],
				"to": [12, 18, 3],
				"rotation": {"angle": 0, "axis": "y", "origin": [8, 8, 8]},
				"faces": {
					"north": {"uv": [2.5, 4.875, 2.625, 5.125], "texture": "#0"},
					"east": {"uv": [2.5, 4.875, 2.625, 5.125], "rotation": 180, "texture": "#0"},
					"south": {"uv": [2.5, 4.875, 2.625, 5.125], "rotation": 180, "texture": "#0"},
					"west": {"uv": [2.5, 4.875, 2.625, 5.125], "texture": "#0"},
					"up": {"uv": [0, 0, 0, 0], "texture": "#0"},
					"down": {"uv": [0, 0, 0, 0], "rotation": 180, "texture": "#0"}
				}
			},
			{
				"name": "straight4",
				"from": [10, 18, 4],
				"to": [13, 21, 11],
				"faces": {
					"east": {"uv": [2.25, 4.375, 2.625, 5.25], "rotation": 270, "texture": "#0"},
					"west": {"uv": [2.25, 4.375, 2.625, 5.25], "rotation": 270, "texture": "#0"},
					"up": {"uv": [2.25, 4.375, 2.625, 5.25], "texture": "#0"},
					"down": {"uv": [2.25, 4.375, 2.625, 5.25], "texture": "#0"}
				}
			},
			{
				"name": "corner4",
				"from": [10, 18, 11],
				"to": [13, 21, 14],
				"rotation": {"angle": 0, "axis": "y", "origin": [8, 8, 8]},
				"faces": {
					"north": {"uv": [0, 0, 0, 0], "texture": "#0"},
					"east": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 90, "texture": "#0"},
					"south": {"uv": [2.625, 4.875, 3, 5.25], "texture": "#0"},
					"west": {"uv": [2.625, 4.875, 3, 5.25], "rotation": 90, "texture": "#0"},
					"up": {"uv": [2.625, 4.875, 3, 5.25], "texture": "#0"},
					"down": {"uv": [2.625, 4.875, 3, 5.25], "texture": "#0"}
				}
			},
			{
				"name": "straight5",
				"from": [10, 11, 11],
				"to": [13, 18, 14],
				"faces": {
					"north": {"uv": [2.25, 4.375, 2.625, 5.25], "rotation": 180, "texture": "#0"},
					"east": {"uv": [2.25, 4.375, 2.625, 5.25], "rotation": 180, "texture": "#0"},
					"south": {"uv": [2.25, 4.375, 2.625, 5.25], "texture": "#0"},
					"west": {"uv": [2.25, 4.375, 2.625, 5.25], "texture": "#0"}
				}
			},
			{
				"name": "inside2",
				"from": [9, 9, 10],
				"to": [14, 11, 15],
				"rotation": {"angle": 0, "axis": "x", "origin": [8, 8, 8]},
				"faces": {
					"north": {"uv": [3, 4.625, 3.625, 4.875], "texture": "#0"},
					"east": {"uv": [3, 4.625, 3.625, 4.875], "texture": "#0"},
					"south": {"uv": [3, 5, 3.625, 5.25], "rotation": 180, "texture": "#0"},
					"west": {"uv": [3, 5, 3.625, 5.25], "rotation": 180, "texture": "#0"},
					"up": {"uv": [3, 4.625, 3.625, 5.25], "rotation": 180, "texture": "#0"},
					"down": {"uv": [0, 0, 0, 0], "texture": "#0"}
				}
			},
			{
				"name": "handle",
				"from": [12, 4, -1],
				"to": [13, 6, 0],
				"faces": {
					"north": {"uv": [2.5, 1.375, 2.625, 1.625], "texture": "#0", "cullface": "north"},
					"east": {"uv": [2.5, 1.375, 2.625, 1.625], "texture": "#0", "cullface": "north"},
					"up": {"uv": [2.5, 1.375, 2.625, 1.5], "texture": "#0", "cullface": "north"},
					"down": {"uv": [2.5, 1.5, 2.625, 1.625], "texture": "#0", "cullface": "north"}
				}
			},
			{
				"name": "vent",
				"from": [4, 2, -0.99],
				"to": [12, 8, 0.01],
				"faces": {
					"north": {"uv": [2.625, 1.125, 3.625, 1.875], "texture": "#0", "cullface": "north"},
					"east": {"uv": [2.625, 1.125, 2.75, 1.875], "texture": "#0", "cullface": "north"},
					"west": {"uv": [3.5, 1.125, 3.625, 1.875], "texture": "#0", "cullface": "north"},
					"up": {"uv": [2.625, 1.125, 3.625, 1.25], "rotation": 180, "texture": "#0", "cullface": "north"},
					"down": {"uv": [2.625, 1.875, 3.625, 1.75], "texture": "#0", "cullface": "north"}
				}
			},
			{
				"name": "window",
				"from": [3, 10, -1],
				"to": [13, 15, 0],
				"faces": {
					"north": {"uv": [2.5, 0.25, 3.75, 0.875], "texture": "#0", "cullface": "north"},
					"east": {"uv": [2.5, 0.25, 2.625, 0.875], "texture": "#0", "cullface": "north"},
					"west": {"uv": [3.625, 0.25, 3.75, 0.875], "texture": "#0", "cullface": "north"},
					"up": {"uv": [2.5, 0.25, 3.75, 0.375], "rotation": 180, "texture": "#0", "cullface": "north"},
					"down": {"uv": [2.5, 0.75, 3.75, 0.875], "rotation": 180, "texture": "#0", "cullface": "north"}
				}
			}
		],
		"groups": [
			{
				"name": "block",
				"origin": [0, 0, 0],
				"color": 0,
				"children": [0, 1]
			},
			{
				"name": "pipe",
				"origin": [8, 28, 8],
				"color": 0,
				"children": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
			},
			{
				"name": "front",
				"origin": [0, 0, 0],
				"color": 0,
				"children": [13, 14, 15]
			}
		],
		"display": {
			"thirdperson_righthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"thirdperson_lefthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_righthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_lefthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"ground": {
				"scale": [0.5, 0.5, 0.5]
			},
			"gui": {
				"rotation": [30, -135, 0],
				"scale": [0.59, 0.59, 0.59]
			}
		}
	})
	event.create('forgedingears:incomplete_seared_tank', 'create:sequenced_assembly').modelJson({
		"credit": "Made with Blockbench",
		"textures": {
			"0": "forgedingears:block/incomplete_seared_tank",
			"particle": "forgedingears:block/incomplete_seared_tank"
		},
		"elements": [
			{
				"name": "n",
				"from": [0, 1, 0],
				"to": [15, 11, 1],
				"faces": {
					"north": {"uv": [0.33333, 1.66667, 5.33333, 5], "texture": "#0"},
					"east": {"uv": [0.33333, 1.66667, 0.66667, 5], "texture": "#0"},
					"south": {"uv": [0.33333, 1.66667, 5.33333, 5], "texture": "#0"},
					"west": {"uv": [5, 1.66667, 5.33333, 5], "texture": "#0"},
					"up": {"uv": [0.33333, 1.66667, 5.33333, 2], "texture": "#0"},
					"down": {"uv": [0.33333, 4.66667, 5.33333, 5], "texture": "#0"}
				}
			},
			{
				"name": "w",
				"from": [0, 1, 1],
				"to": [1, 14, 16],
				"faces": {
					"north": {"uv": [0.33333, 0.66667, 0.66667, 5], "texture": "#0"},
					"east": {"uv": [0.33333, 0.66667, 5.33333, 5], "texture": "#0"},
					"south": {"uv": [5, 0.66667, 5.33333, 5], "texture": "#0"},
					"west": {"uv": [0.33333, 0.66667, 5.33333, 5], "texture": "#0"},
					"up": {"uv": [0.33333, 0.66667, 5.33333, 1], "rotation": 270, "texture": "#0"},
					"down": {"uv": [0.33333, 4.66667, 5.33333, 5], "rotation": 90, "texture": "#0"}
				}
			},
			{
				"name": "e",
				"from": [15, 1, 0],
				"to": [16, 12, 15],
				"faces": {
					"north": {"uv": [5, 1.33333, 5.33333, 5], "texture": "#0"},
					"east": {"uv": [0.33333, 1.33333, 5.33333, 5], "texture": "#0"},
					"south": {"uv": [0.33333, 1.33333, 0.66667, 5], "texture": "#0"},
					"west": {"uv": [0.33333, 1.33333, 5.33333, 5], "texture": "#0"},
					"up": {"uv": [0.33333, 1.33333, 5.33333, 1.66667], "rotation": 90, "texture": "#0"},
					"down": {"uv": [0.33333, 4.66666, 5.33333, 5], "rotation": 270, "texture": "#0"}
				}
			},
			{
				"name": "s",
				"from": [1, 1, 15],
				"to": [16, 8, 16],
				"faces": {
					"north": {"uv": [0.33333, 2.66667, 5.33333, 5], "texture": "#0"},
					"east": {"uv": [5, 2.66667, 5.33333, 5], "texture": "#0"},
					"south": {"uv": [0.33333, 2.66667, 5.33333, 5], "texture": "#0"},
					"west": {"uv": [0.33333, 2.66667, 0.66667, 5], "texture": "#0"},
					"up": {"uv": [0.33333, 2.66667, 5.33333, 3], "rotation": 180, "texture": "#0"},
					"down": {"uv": [0.33333, 4.66667, 5.33333, 5], "rotation": 180, "texture": "#0"}
				}
			},
			{
				"name": "d",
				"from": [0, 0, 0],
				"to": [16, 1, 16],
				"faces": {
					"north": {"uv": [5.33333, 5, 10.66667, 5.33333], "texture": "#0"},
					"east": {"uv": [5.33333, 5, 10.66667, 5.33333], "texture": "#0"},
					"south": {"uv": [5.33333, 5, 10.66667, 5.33333], "texture": "#0"},
					"west": {"uv": [5.33333, 5, 10.66667, 5.33333], "texture": "#0"},
					"up": {"uv": [5.33333, 0, 10.66667, 5.33333], "texture": "#0"},
					"down": {"uv": [5.33333, 0, 10.66667, 5.33333], "texture": "#0"}
				}
			},
			{
				"from": [1, 1, 1],
				"to": [7, 4, 10],
				"faces": {
					"north": {"uv": [14, 0, 16, 1], "texture": "#0"},
					"east": {"uv": [13, 0, 16, 1], "texture": "#0"},
					"south": {"uv": [14, 0, 16, 1], "texture": "#0"},
					"west": {"uv": [13, 0, 16, 1], "texture": "#0"},
					"up": {"uv": [14, 0, 16, 3], "texture": "#0"},
					"down": {"uv": [14, 0, 16, 3], "texture": "#0"}
				}
			},
			{
				"from": [-1, 2, 7],
				"to": [1, 3, 9],
				"faces": {
					"north": {"uv": [10.66667, 4.66667, 11.33333, 5], "texture": "#0"},
					"east": {"uv": [10.66667, 5, 11.33333, 5.33333], "texture": "#0"},
					"south": {"uv": [10.66667, 4.66667, 11.33333, 5], "texture": "#0"},
					"west": {"uv": [10.66667, 5, 11.33333, 5.33333], "texture": "#0"},
					"up": {"uv": [10.66667, 4.66667, 11.33333, 5.33333], "texture": "#0"},
					"down": {"uv": [10.66667, 4.66667, 11.33333, 5.33333], "texture": "#0"}
				}
			},
			{
				"from": [-1, 0, 7],
				"to": [0, 2, 9],
				"faces": {
					"north": {"uv": [11, 4, 11.33333, 4.66667], "texture": "#0"},
					"east": {"uv": [10.66667, 4, 11.33333, 4.66667], "texture": "#0"},
					"south": {"uv": [10.66667, 4, 11, 4.66667], "texture": "#0"},
					"west": {"uv": [10.66667, 4, 11.33333, 4.66667], "texture": "#0"},
					"up": {"uv": [11, 4, 11.33333, 4.66667], "texture": "#0"},
					"down": {"uv": [10.66667, 4, 11, 4.66667], "texture": "#0"}
				}
			},
			{
				"from": [0, 1, 10],
				"to": [9, 2, 12],
				"faces": {
					"north": {"uv": [13, 5, 16, 5.33333], "texture": "#0"},
					"east": {"uv": [15.33333, 5, 16, 5.33333], "texture": "#0"},
					"south": {"uv": [13, 5, 16, 5.33333], "texture": "#0"},
					"west": {"uv": [3.33333, 4.66667, 4, 5], "texture": "#0"},
					"up": {"uv": [13, 4.66667, 16, 5.33333], "rotation": 180, "texture": "#0"},
					"down": {"uv": [13, 4.66667, 16, 5.33333], "texture": "#0"}
				}
			},
			{
				"from": [7, 1, 0],
				"to": [9, 2, 10],
				"faces": {
					"north": {"uv": [12.33333, 4.33333, 13, 4.66667], "texture": "#0"},
					"east": {"uv": [12.66667, 3.33333, 16, 3.66667], "texture": "#0"},
					"south": {"uv": [12.33333, 4.33333, 13, 4.66667], "texture": "#0"},
					"west": {"uv": [12.66667, 3.33333, 16, 3.66667], "texture": "#0"},
					"up": {"uv": [12.33333, 1.33333, 13, 4.66667], "texture": "#0"}
				}
			},
			{
				"from": [1, 4, 1],
				"to": [5, 5, 6],
				"faces": {
					"north": {"uv": [10.66667, 0, 12, 0.33333], "texture": "#0"},
					"east": {"uv": [10.66667, 0, 12.33333, 0.33333], "texture": "#0"},
					"south": {"uv": [10.66667, 0, 12, 0.33333], "texture": "#0"},
					"west": {"uv": [10.66667, 0, 12.33333, 0.33333], "texture": "#0"},
					"up": {"uv": [10.66667, 0, 12, 1.66667], "texture": "#0"},
					"down": {"uv": [10.66667, 0, 12, 1.66667], "texture": "#0"}
				}
			},
			{
				"from": [7, 0, -1],
				"to": [9, 2, 0],
				"faces": {
					"north": {"uv": [10.66667, 2.66667, 11.33333, 3.33333], "texture": "#0"},
					"east": {"uv": [10.66667, 2.66667, 11, 3.33333], "texture": "#0"},
					"south": {"uv": [10.66667, 2.66667, 11.33333, 3.33333], "texture": "#0"},
					"west": {"uv": [11, 2.66667, 11.33333, 3.33333], "texture": "#0"},
					"up": {"uv": [10.66667, 3, 11.33333, 3.33333], "texture": "#0"},
					"down": {"uv": [10.66667, 3, 11.33333, 3.33333], "texture": "#0"}
				}
			}
		],
		"groups": [
			0,
			1,
			2,
			3,
			4,
			{
				"name": "liquid",
				"origin": [0, 0, 0],
				"color": 0,
				"children": [5, 6, 7, 8, 9, 10, 11]
			}
		],
		"display": {
			"thirdperson_righthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"thirdperson_lefthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_righthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_lefthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"ground": {
				"scale": [0.5, 0.5, 0.5]
			},
			"gui": {
				"rotation": [30, -135, 0],
				"scale": [0.59, 0.59, 0.59]
			}
		}
	})
	event.create('forgedingears:incomplete_scorched_tank', 'create:sequenced_assembly').modelJson({
		"credit": "Made with Blockbench",
		"textures": {
			"0": "forgedingears:block/incomplete_scorched_tank",
			"particle": "forgedingears:block/incomplete_scorched_tank"
		},
		"elements": [
			{
				"name": "n",
				"from": [0, 1, 0],
				"to": [15, 11, 1],
				"faces": {
					"north": {"uv": [0.33333, 1.66667, 5.33333, 5], "texture": "#0"},
					"east": {"uv": [0.33333, 1.66667, 0.66667, 5], "texture": "#0"},
					"south": {"uv": [0.33333, 1.66667, 5.33333, 5], "texture": "#0"},
					"west": {"uv": [5, 1.66667, 5.33333, 5], "texture": "#0"},
					"up": {"uv": [0.33333, 1.66667, 5.33333, 2], "texture": "#0"},
					"down": {"uv": [0.33333, 4.66667, 5.33333, 5], "texture": "#0"}
				}
			},
			{
				"name": "w",
				"from": [0, 1, 1],
				"to": [1, 14, 16],
				"faces": {
					"north": {"uv": [0.33333, 0.66667, 0.66667, 5], "texture": "#0"},
					"east": {"uv": [0.33333, 0.66667, 5.33333, 5], "texture": "#0"},
					"south": {"uv": [5, 0.66667, 5.33333, 5], "texture": "#0"},
					"west": {"uv": [0.33333, 0.66667, 5.33333, 5], "texture": "#0"},
					"up": {"uv": [0.33333, 0.66667, 5.33333, 1], "rotation": 270, "texture": "#0"},
					"down": {"uv": [0.33333, 4.66667, 5.33333, 5], "rotation": 90, "texture": "#0"}
				}
			},
			{
				"name": "e",
				"from": [15, 1, 0],
				"to": [16, 12, 15],
				"faces": {
					"north": {"uv": [5, 1.33333, 5.33333, 5], "texture": "#0"},
					"east": {"uv": [0.33333, 1.33333, 5.33333, 5], "texture": "#0"},
					"south": {"uv": [0.33333, 1.33333, 0.66667, 5], "texture": "#0"},
					"west": {"uv": [0.33333, 1.33333, 5.33333, 5], "texture": "#0"},
					"up": {"uv": [0.33333, 1.33333, 5.33333, 1.66667], "rotation": 90, "texture": "#0"},
					"down": {"uv": [0.33333, 4.66666, 5.33333, 5], "rotation": 270, "texture": "#0"}
				}
			},
			{
				"name": "s",
				"from": [1, 1, 15],
				"to": [16, 8, 16],
				"faces": {
					"north": {"uv": [0.33333, 2.66667, 5.33333, 5], "texture": "#0"},
					"east": {"uv": [5, 2.66667, 5.33333, 5], "texture": "#0"},
					"south": {"uv": [0.33333, 2.66667, 5.33333, 5], "texture": "#0"},
					"west": {"uv": [0.33333, 2.66667, 0.66667, 5], "texture": "#0"},
					"up": {"uv": [0.33333, 2.66667, 5.33333, 3], "rotation": 180, "texture": "#0"},
					"down": {"uv": [0.33333, 4.66667, 5.33333, 5], "rotation": 180, "texture": "#0"}
				}
			},
			{
				"name": "d",
				"from": [0, 0, 0],
				"to": [16, 1, 16],
				"faces": {
					"north": {"uv": [5.33333, 5, 10.66667, 5.33333], "texture": "#0"},
					"east": {"uv": [5.33333, 5, 10.66667, 5.33333], "texture": "#0"},
					"south": {"uv": [5.33333, 5, 10.66667, 5.33333], "texture": "#0"},
					"west": {"uv": [5.33333, 5, 10.66667, 5.33333], "texture": "#0"},
					"up": {"uv": [5.33333, 0, 10.66667, 5.33333], "texture": "#0"},
					"down": {"uv": [5.33333, 0, 10.66667, 5.33333], "texture": "#0"}
				}
			},
			{
				"from": [1, 1, 1],
				"to": [7, 4, 10],
				"faces": {
					"north": {"uv": [14, 0, 16, 1], "texture": "#0"},
					"east": {"uv": [13, 0, 16, 1], "texture": "#0"},
					"south": {"uv": [14, 0, 16, 1], "texture": "#0"},
					"west": {"uv": [13, 0, 16, 1], "texture": "#0"},
					"up": {"uv": [14, 0, 16, 3], "texture": "#0"},
					"down": {"uv": [14, 0, 16, 3], "texture": "#0"}
				}
			},
			{
				"from": [-1, 2, 7],
				"to": [1, 3, 9],
				"faces": {
					"north": {"uv": [10.66667, 4.66667, 11.33333, 5], "texture": "#0"},
					"east": {"uv": [10.66667, 5, 11.33333, 5.33333], "texture": "#0"},
					"south": {"uv": [10.66667, 4.66667, 11.33333, 5], "texture": "#0"},
					"west": {"uv": [10.66667, 5, 11.33333, 5.33333], "texture": "#0"},
					"up": {"uv": [10.66667, 4.66667, 11.33333, 5.33333], "texture": "#0"},
					"down": {"uv": [10.66667, 4.66667, 11.33333, 5.33333], "texture": "#0"}
				}
			},
			{
				"from": [-1, 0, 7],
				"to": [0, 2, 9],
				"faces": {
					"north": {"uv": [11, 4, 11.33333, 4.66667], "texture": "#0"},
					"east": {"uv": [10.66667, 4, 11.33333, 4.66667], "texture": "#0"},
					"south": {"uv": [10.66667, 4, 11, 4.66667], "texture": "#0"},
					"west": {"uv": [10.66667, 4, 11.33333, 4.66667], "texture": "#0"},
					"up": {"uv": [11, 4, 11.33333, 4.66667], "texture": "#0"},
					"down": {"uv": [10.66667, 4, 11, 4.66667], "texture": "#0"}
				}
			},
			{
				"from": [0, 1, 10],
				"to": [9, 2, 12],
				"faces": {
					"north": {"uv": [13, 5, 16, 5.33333], "texture": "#0"},
					"east": {"uv": [15.33333, 5, 16, 5.33333], "texture": "#0"},
					"south": {"uv": [13, 5, 16, 5.33333], "texture": "#0"},
					"west": {"uv": [3.33333, 4.66667, 4, 5], "texture": "#0"},
					"up": {"uv": [13, 4.66667, 16, 5.33333], "rotation": 180, "texture": "#0"},
					"down": {"uv": [13, 4.66667, 16, 5.33333], "texture": "#0"}
				}
			},
			{
				"from": [7, 1, 0],
				"to": [9, 2, 10],
				"faces": {
					"north": {"uv": [12.33333, 4.33333, 13, 4.66667], "texture": "#0"},
					"east": {"uv": [12.66667, 3.33333, 16, 3.66667], "texture": "#0"},
					"south": {"uv": [12.33333, 4.33333, 13, 4.66667], "texture": "#0"},
					"west": {"uv": [12.66667, 3.33333, 16, 3.66667], "texture": "#0"},
					"up": {"uv": [12.33333, 1.33333, 13, 4.66667], "texture": "#0"}
				}
			},
			{
				"from": [1, 4, 1],
				"to": [5, 5, 6],
				"faces": {
					"north": {"uv": [10.66667, 0, 12, 0.33333], "texture": "#0"},
					"east": {"uv": [10.66667, 0, 12.33333, 0.33333], "texture": "#0"},
					"south": {"uv": [10.66667, 0, 12, 0.33333], "texture": "#0"},
					"west": {"uv": [10.66667, 0, 12.33333, 0.33333], "texture": "#0"},
					"up": {"uv": [10.66667, 0, 12, 1.66667], "texture": "#0"},
					"down": {"uv": [10.66667, 0, 12, 1.66667], "texture": "#0"}
				}
			},
			{
				"from": [7, 0, -1],
				"to": [9, 2, 0],
				"faces": {
					"north": {"uv": [10.66667, 2.66667, 11.33333, 3.33333], "texture": "#0"},
					"east": {"uv": [10.66667, 2.66667, 11, 3.33333], "texture": "#0"},
					"south": {"uv": [10.66667, 2.66667, 11.33333, 3.33333], "texture": "#0"},
					"west": {"uv": [11, 2.66667, 11.33333, 3.33333], "texture": "#0"},
					"up": {"uv": [10.66667, 3, 11.33333, 3.33333], "texture": "#0"},
					"down": {"uv": [10.66667, 3, 11.33333, 3.33333], "texture": "#0"}
				}
			}
		],
		"groups": [
			0,
			1,
			2,
			3,
			4,
			{
				"name": "liquid",
				"origin": [0, 0, 0],
				"color": 0,
				"children": [5, 6, 7, 8, 9, 10, 11]
			}
		],
		"display": {
			"thirdperson_righthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"thirdperson_lefthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_righthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_lefthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"ground": {
				"scale": [0.5, 0.5, 0.5]
			},
			"gui": {
				"rotation": [30, -135, 0],
				"scale": [0.59, 0.59, 0.59]
			}
		}
	})
	event.create('forgedingears:incomplete_seared_gauge', 'create:sequenced_assembly').modelJson({
		"credit": "Made with Blockbench",
		"textures": {
			"0": "forgedingears:block/incomplete_seared_gauge",
			"particle": "forgedingears:block/incomplete_seared_gauge"
		},
		"elements": [
			{
				"name": "n",
				"from": [0, 1, 0],
				"to": [15, 11, 1],
				"faces": {
					"north": {"uv": [0.33333, 1.66667, 5.33333, 5], "texture": "#0"},
					"east": {"uv": [0.33333, 1.66667, 0.66667, 5], "texture": "#0"},
					"south": {"uv": [0.33333, 1.66667, 5.33333, 5], "texture": "#0"},
					"west": {"uv": [5, 1.66667, 5.33333, 5], "texture": "#0"},
					"up": {"uv": [0.33333, 1.66667, 5.33333, 2], "texture": "#0"},
					"down": {"uv": [0.33333, 4.66667, 5.33333, 5], "texture": "#0"}
				}
			},
			{
				"name": "w",
				"from": [0, 1, 1],
				"to": [1, 14, 16],
				"faces": {
					"north": {"uv": [0.33333, 0.66667, 0.66667, 5], "texture": "#0"},
					"east": {"uv": [0.33333, 0.66667, 5.33333, 5], "texture": "#0"},
					"south": {"uv": [5, 0.66667, 5.33333, 5], "texture": "#0"},
					"west": {"uv": [0.33333, 0.66667, 5.33333, 5], "texture": "#0"},
					"up": {"uv": [0.33333, 0.66667, 5.33333, 1], "rotation": 270, "texture": "#0"},
					"down": {"uv": [0.33333, 4.66667, 5.33333, 5], "rotation": 90, "texture": "#0"}
				}
			},
			{
				"name": "e",
				"from": [15, 1, 0],
				"to": [16, 12, 15],
				"faces": {
					"north": {"uv": [5, 1.33333, 5.33333, 5], "texture": "#0"},
					"east": {"uv": [0.33333, 1.33333, 5.33333, 5], "texture": "#0"},
					"south": {"uv": [0.33333, 1.33333, 0.66667, 5], "texture": "#0"},
					"west": {"uv": [0.33333, 1.33333, 5.33333, 5], "texture": "#0"},
					"up": {"uv": [0.33333, 1.33333, 5.33333, 1.66667], "rotation": 90, "texture": "#0"},
					"down": {"uv": [0.33333, 4.66666, 5.33333, 5], "rotation": 270, "texture": "#0"}
				}
			},
			{
				"name": "s",
				"from": [1, 1, 15],
				"to": [16, 8, 16],
				"faces": {
					"north": {"uv": [0.33333, 2.66667, 5.33333, 5], "texture": "#0"},
					"east": {"uv": [5, 2.66667, 5.33333, 5], "texture": "#0"},
					"south": {"uv": [0.33333, 2.66667, 5.33333, 5], "texture": "#0"},
					"west": {"uv": [0.33333, 2.66667, 0.66667, 5], "texture": "#0"},
					"up": {"uv": [0.33333, 2.66667, 5.33333, 3], "rotation": 180, "texture": "#0"},
					"down": {"uv": [0.33333, 4.66667, 5.33333, 5], "rotation": 180, "texture": "#0"}
				}
			},
			{
				"name": "d",
				"from": [0, 0, 0],
				"to": [16, 1, 16],
				"faces": {
					"north": {"uv": [5.33333, 5, 10.66667, 5.33333], "texture": "#0"},
					"east": {"uv": [5.33333, 5, 10.66667, 5.33333], "texture": "#0"},
					"south": {"uv": [5.33333, 5, 10.66667, 5.33333], "texture": "#0"},
					"west": {"uv": [5.33333, 5, 10.66667, 5.33333], "texture": "#0"},
					"up": {"uv": [5.33333, 0, 10.66667, 5.33333], "texture": "#0"},
					"down": {"uv": [5.33333, 0, 10.66667, 5.33333], "texture": "#0"}
				}
			},
			{
				"from": [1, 1, 1],
				"to": [7, 4, 10],
				"faces": {
					"north": {"uv": [14, 0, 16, 1], "texture": "#0"},
					"east": {"uv": [13, 0, 16, 1], "texture": "#0"},
					"south": {"uv": [14, 0, 16, 1], "texture": "#0"},
					"west": {"uv": [13, 0, 16, 1], "texture": "#0"},
					"up": {"uv": [14, 0, 16, 3], "texture": "#0"},
					"down": {"uv": [14, 0, 16, 3], "texture": "#0"}
				}
			},
			{
				"from": [9, 0.25, 1],
				"to": [15, 3.25, 10],
				"faces": {
					"north": {"uv": [14, 0, 16, 1], "texture": "#0"},
					"east": {"uv": [13, 0, 16, 1], "texture": "#0"},
					"south": {"uv": [14, 0, 16, 1], "texture": "#0"},
					"west": {"uv": [13, 0, 16, 1], "texture": "#0"},
					"up": {"uv": [14, 0, 16, 3], "texture": "#0"},
					"down": {"uv": [14, 0, 16, 3], "texture": "#0"}
				}
			},
			{
				"from": [-1, 2, 7],
				"to": [1, 3, 9],
				"faces": {
					"north": {"uv": [10.66667, 4.66667, 11.33333, 5], "texture": "#0"},
					"east": {"uv": [10.66667, 5, 11.33333, 5.33333], "texture": "#0"},
					"south": {"uv": [10.66667, 4.66667, 11.33333, 5], "texture": "#0"},
					"west": {"uv": [10.66667, 5, 11.33333, 5.33333], "texture": "#0"},
					"up": {"uv": [10.66667, 4.66667, 11.33333, 5.33333], "texture": "#0"},
					"down": {"uv": [10.66667, 4.66667, 11.33333, 5.33333], "texture": "#0"}
				}
			},
			{
				"from": [-1, 0, 7],
				"to": [0, 2, 9],
				"faces": {
					"north": {"uv": [11, 4, 11.33333, 4.66667], "texture": "#0"},
					"east": {"uv": [10.66667, 4, 11.33333, 4.66667], "texture": "#0"},
					"south": {"uv": [10.66667, 4, 11, 4.66667], "texture": "#0"},
					"west": {"uv": [10.66667, 4, 11.33333, 4.66667], "texture": "#0"},
					"up": {"uv": [11, 4, 11.33333, 4.66667], "texture": "#0"},
					"down": {"uv": [10.66667, 4, 11, 4.66667], "texture": "#0"}
				}
			},
			{
				"from": [0, 1, 10],
				"to": [9, 2, 12],
				"faces": {
					"north": {"uv": [13, 5, 16, 5.33333], "texture": "#0"},
					"east": {"uv": [15.33333, 5, 16, 5.33333], "texture": "#0"},
					"south": {"uv": [13, 5, 16, 5.33333], "texture": "#0"},
					"west": {"uv": [13.66666, 5, 14.33333, 5.33333], "texture": "#0"},
					"up": {"uv": [13, 4.66667, 16, 5.33333], "rotation": 180, "texture": "#0"},
					"down": {"uv": [13, 4.66667, 16, 5.33333], "texture": "#0"}
				}
			},
			{
				"from": [7, 1, 0],
				"to": [9, 2, 10],
				"faces": {
					"north": {"uv": [12.33333, 4.33333, 13, 4.66667], "texture": "#0"},
					"east": {"uv": [12.66667, 3.33333, 16, 3.66667], "texture": "#0"},
					"south": {"uv": [12.33333, 4.33333, 13, 4.66667], "texture": "#0"},
					"west": {"uv": [12.66667, 3.33333, 16, 3.66667], "texture": "#0"},
					"up": {"uv": [12.33333, 1.33333, 13, 4.66667], "texture": "#0"}
				}
			},
			{
				"from": [1, 4, 1],
				"to": [5, 5, 6],
				"faces": {
					"north": {"uv": [10.66667, 0, 12, 0.33333], "texture": "#0"},
					"east": {"uv": [10.66667, 0, 12.33333, 0.33333], "texture": "#0"},
					"south": {"uv": [10.66667, 0, 12, 0.33333], "texture": "#0"},
					"west": {"uv": [10.66667, 0, 12.33333, 0.33333], "texture": "#0"},
					"up": {"uv": [10.66667, 0, 12, 1.66667], "texture": "#0"},
					"down": {"uv": [10.66667, 0, 12, 1.66667], "texture": "#0"}
				}
			},
			{
				"from": [7, 0, -1],
				"to": [9, 2, 0],
				"faces": {
					"north": {"uv": [10.66667, 2.66667, 11.33333, 3.33333], "texture": "#0"},
					"east": {"uv": [10.66667, 2.66667, 11, 3.33333], "texture": "#0"},
					"south": {"uv": [10.66667, 2.66667, 11.33333, 3.33333], "texture": "#0"},
					"west": {"uv": [11, 2.66667, 11.33333, 3.33333], "texture": "#0"},
					"up": {"uv": [10.66667, 3, 11.33333, 3.33333], "texture": "#0"},
					"down": {"uv": [10.66667, 3, 11.33333, 3.33333], "texture": "#0"}
				}
			},
			{
				"from": [9, 1, 10],
				"to": [14, 2, 14],
				"faces": {
					"north": {"uv": [10.66667, 0, 12.33333, 0.33333], "texture": "#0"},
					"east": {"uv": [10.66667, 0, 12, 0.33333], "texture": "#0"},
					"south": {"uv": [10.66667, 0, 12.33333, 0.33333], "texture": "#0"},
					"west": {"uv": [10.66667, 0, 12, 0.33333], "texture": "#0"},
					"up": {"uv": [10.66667, 0, 12, 1.66667], "rotation": 90, "texture": "#0"},
					"down": {"uv": [10.66667, 0, 12, 1.66667], "rotation": 270, "texture": "#0"}
				}
			}
		],
		"groups": [
			0,
			1,
			2,
			3,
			4,
			{
				"name": "liquid",
				"origin": [0, 0, 0],
				"color": 0,
				"children": [5, 6, 7, 8, 9, 10, 11, 12, 13]
			}
		],
		"display": {
			"thirdperson_righthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"thirdperson_lefthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_righthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_lefthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"ground": {
				"scale": [0.5, 0.5, 0.5]
			},
			"gui": {
				"rotation": [30, -135, 0],
				"scale": [0.59, 0.59, 0.59]
			}
		}
	})
	event.create('forgedingears:incomplete_scorched_gauge', 'create:sequenced_assembly').modelJson({
		"credit": "Made with Blockbench",
		"textures": {
			"0": "forgedingears:block/incomplete_scorched_gauge",
			"particle": "forgedingears:block/incomplete_scorched_gauge"
		},
		"elements": [
			{
				"name": "n",
				"from": [0, 1, 0],
				"to": [15, 11, 1],
				"faces": {
					"north": {"uv": [0.33333, 1.66667, 5.33333, 5], "texture": "#0"},
					"east": {"uv": [0.33333, 1.66667, 0.66667, 5], "texture": "#0"},
					"south": {"uv": [0.33333, 1.66667, 5.33333, 5], "texture": "#0"},
					"west": {"uv": [5, 1.66667, 5.33333, 5], "texture": "#0"},
					"up": {"uv": [0.33333, 1.66667, 5.33333, 2], "texture": "#0"},
					"down": {"uv": [0.33333, 4.66667, 5.33333, 5], "texture": "#0"}
				}
			},
			{
				"name": "w",
				"from": [0, 1, 1],
				"to": [1, 14, 16],
				"faces": {
					"north": {"uv": [0.33333, 0.66667, 0.66667, 5], "texture": "#0"},
					"east": {"uv": [0.33333, 0.66667, 5.33333, 5], "texture": "#0"},
					"south": {"uv": [5, 0.66667, 5.33333, 5], "texture": "#0"},
					"west": {"uv": [0.33333, 0.66667, 5.33333, 5], "texture": "#0"},
					"up": {"uv": [0.33333, 0.66667, 5.33333, 1], "rotation": 270, "texture": "#0"},
					"down": {"uv": [0.33333, 4.66667, 5.33333, 5], "rotation": 90, "texture": "#0"}
				}
			},
			{
				"name": "e",
				"from": [15, 1, 0],
				"to": [16, 12, 15],
				"faces": {
					"north": {"uv": [5, 1.33333, 5.33333, 5], "texture": "#0"},
					"east": {"uv": [0.33333, 1.33333, 5.33333, 5], "texture": "#0"},
					"south": {"uv": [0.33333, 1.33333, 0.66667, 5], "texture": "#0"},
					"west": {"uv": [0.33333, 1.33333, 5.33333, 5], "texture": "#0"},
					"up": {"uv": [0.33333, 1.33333, 5.33333, 1.66667], "rotation": 90, "texture": "#0"},
					"down": {"uv": [0.33333, 4.66666, 5.33333, 5], "rotation": 270, "texture": "#0"}
				}
			},
			{
				"name": "s",
				"from": [1, 1, 15],
				"to": [16, 8, 16],
				"faces": {
					"north": {"uv": [0.33333, 2.66667, 5.33333, 5], "texture": "#0"},
					"east": {"uv": [5, 2.66667, 5.33333, 5], "texture": "#0"},
					"south": {"uv": [0.33333, 2.66667, 5.33333, 5], "texture": "#0"},
					"west": {"uv": [0.33333, 2.66667, 0.66667, 5], "texture": "#0"},
					"up": {"uv": [0.33333, 2.66667, 5.33333, 3], "rotation": 180, "texture": "#0"},
					"down": {"uv": [0.33333, 4.66667, 5.33333, 5], "rotation": 180, "texture": "#0"}
				}
			},
			{
				"name": "d",
				"from": [0, 0, 0],
				"to": [16, 1, 16],
				"faces": {
					"north": {"uv": [5.33333, 5, 10.66667, 5.33333], "texture": "#0"},
					"east": {"uv": [5.33333, 5, 10.66667, 5.33333], "texture": "#0"},
					"south": {"uv": [5.33333, 5, 10.66667, 5.33333], "texture": "#0"},
					"west": {"uv": [5.33333, 5, 10.66667, 5.33333], "texture": "#0"},
					"up": {"uv": [5.33333, 0, 10.66667, 5.33333], "texture": "#0"},
					"down": {"uv": [5.33333, 0, 10.66667, 5.33333], "texture": "#0"}
				}
			},
			{
				"from": [1, 1, 1],
				"to": [7, 4, 10],
				"faces": {
					"north": {"uv": [14, 0, 16, 1], "texture": "#0"},
					"east": {"uv": [13, 0, 16, 1], "texture": "#0"},
					"south": {"uv": [14, 0, 16, 1], "texture": "#0"},
					"west": {"uv": [13, 0, 16, 1], "texture": "#0"},
					"up": {"uv": [14, 0, 16, 3], "texture": "#0"},
					"down": {"uv": [14, 0, 16, 3], "texture": "#0"}
				}
			},
			{
				"from": [9, 0.25, 1],
				"to": [15, 3.25, 10],
				"faces": {
					"north": {"uv": [14, 0, 16, 1], "texture": "#0"},
					"east": {"uv": [13, 0, 16, 1], "texture": "#0"},
					"south": {"uv": [14, 0, 16, 1], "texture": "#0"},
					"west": {"uv": [13, 0, 16, 1], "texture": "#0"},
					"up": {"uv": [14, 0, 16, 3], "texture": "#0"},
					"down": {"uv": [14, 0, 16, 3], "texture": "#0"}
				}
			},
			{
				"from": [-1, 2, 7],
				"to": [1, 3, 9],
				"faces": {
					"north": {"uv": [10.66667, 4.66667, 11.33333, 5], "texture": "#0"},
					"east": {"uv": [10.66667, 5, 11.33333, 5.33333], "texture": "#0"},
					"south": {"uv": [10.66667, 4.66667, 11.33333, 5], "texture": "#0"},
					"west": {"uv": [10.66667, 5, 11.33333, 5.33333], "texture": "#0"},
					"up": {"uv": [10.66667, 4.66667, 11.33333, 5.33333], "texture": "#0"},
					"down": {"uv": [10.66667, 4.66667, 11.33333, 5.33333], "texture": "#0"}
				}
			},
			{
				"from": [-1, 0, 7],
				"to": [0, 2, 9],
				"faces": {
					"north": {"uv": [11, 4, 11.33333, 4.66667], "texture": "#0"},
					"east": {"uv": [10.66667, 4, 11.33333, 4.66667], "texture": "#0"},
					"south": {"uv": [10.66667, 4, 11, 4.66667], "texture": "#0"},
					"west": {"uv": [10.66667, 4, 11.33333, 4.66667], "texture": "#0"},
					"up": {"uv": [11, 4, 11.33333, 4.66667], "texture": "#0"},
					"down": {"uv": [10.66667, 4, 11, 4.66667], "texture": "#0"}
				}
			},
			{
				"from": [0, 1, 10],
				"to": [9, 2, 12],
				"faces": {
					"north": {"uv": [13, 5, 16, 5.33333], "texture": "#0"},
					"east": {"uv": [15.33333, 5, 16, 5.33333], "texture": "#0"},
					"south": {"uv": [13, 5, 16, 5.33333], "texture": "#0"},
					"west": {"uv": [13.66666, 5, 14.33333, 5.33333], "texture": "#0"},
					"up": {"uv": [13, 4.66667, 16, 5.33333], "rotation": 180, "texture": "#0"},
					"down": {"uv": [13, 4.66667, 16, 5.33333], "texture": "#0"}
				}
			},
			{
				"from": [7, 1, 0],
				"to": [9, 2, 10],
				"faces": {
					"north": {"uv": [12.33333, 4.33333, 13, 4.66667], "texture": "#0"},
					"east": {"uv": [12.66667, 3.33333, 16, 3.66667], "texture": "#0"},
					"south": {"uv": [12.33333, 4.33333, 13, 4.66667], "texture": "#0"},
					"west": {"uv": [12.66667, 3.33333, 16, 3.66667], "texture": "#0"},
					"up": {"uv": [12.33333, 1.33333, 13, 4.66667], "texture": "#0"}
				}
			},
			{
				"from": [1, 4, 1],
				"to": [5, 5, 6],
				"faces": {
					"north": {"uv": [10.66667, 0, 12, 0.33333], "texture": "#0"},
					"east": {"uv": [10.66667, 0, 12.33333, 0.33333], "texture": "#0"},
					"south": {"uv": [10.66667, 0, 12, 0.33333], "texture": "#0"},
					"west": {"uv": [10.66667, 0, 12.33333, 0.33333], "texture": "#0"},
					"up": {"uv": [10.66667, 0, 12, 1.66667], "texture": "#0"},
					"down": {"uv": [10.66667, 0, 12, 1.66667], "texture": "#0"}
				}
			},
			{
				"from": [7, 0, -1],
				"to": [9, 2, 0],
				"faces": {
					"north": {"uv": [10.66667, 2.66667, 11.33333, 3.33333], "texture": "#0"},
					"east": {"uv": [10.66667, 2.66667, 11, 3.33333], "texture": "#0"},
					"south": {"uv": [10.66667, 2.66667, 11.33333, 3.33333], "texture": "#0"},
					"west": {"uv": [11, 2.66667, 11.33333, 3.33333], "texture": "#0"},
					"up": {"uv": [10.66667, 3, 11.33333, 3.33333], "texture": "#0"},
					"down": {"uv": [10.66667, 3, 11.33333, 3.33333], "texture": "#0"}
				}
			},
			{
				"from": [9, 1, 10],
				"to": [14, 2, 14],
				"faces": {
					"north": {"uv": [10.66667, 0, 12.33333, 0.33333], "texture": "#0"},
					"east": {"uv": [10.66667, 0, 12, 0.33333], "texture": "#0"},
					"south": {"uv": [10.66667, 0, 12.33333, 0.33333], "texture": "#0"},
					"west": {"uv": [10.66667, 0, 12, 0.33333], "texture": "#0"},
					"up": {"uv": [10.66667, 0, 12, 1.66667], "rotation": 90, "texture": "#0"},
					"down": {"uv": [10.66667, 0, 12, 1.66667], "rotation": 270, "texture": "#0"}
				}
			}
		],
		"groups": [
			0,
			1,
			2,
			3,
			4,
			{
				"name": "liquid",
				"origin": [0, 0, 0],
				"color": 0,
				"children": [5, 6, 7, 8, 9, 10, 11, 12, 13]
			}
		],
		"display": {
			"thirdperson_righthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"thirdperson_lefthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_righthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_lefthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"ground": {
				"scale": [0.5, 0.5, 0.5]
			},
			"gui": {
				"rotation": [30, -135, 0],
				"scale": [0.59, 0.59, 0.59]
			}
		}
	})
	event.create('forgedingears:incomplete_seared_drain', 'create:sequenced_assembly').modelJson({
		"credit": "Made with Blockbench",
		"textures": {
			"0": "forgedingears:block/incomplete_seared_drain",
			"particle": "forgedingears:block/incomplete_seared_drain"
		},
		"elements": [
			{
				"name": "brick",
				"from": [0, 0, 0],
				"to": [16, 8, 16],
				"faces": {
					"north": {"uv": [0, 8, 5.33333, 10.66667], "texture": "#0", "cullface": "north"},
					"east": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "east"},
					"south": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "south"},
					"west": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"up": {"uv": [0, 10.66667, 5.33333, 16], "texture": "#0", "cullface": "up"},
					"down": {"uv": [0, 0, 5.33333, 5.33333], "texture": "#0", "cullface": "down"}
				}
			},
			{
				"name": "brick",
				"from": [16, 8, 16],
				"to": [0, 0, 0],
				"faces": {
					"north": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "north"},
					"east": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "east"},
					"south": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "south"},
					"west": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"up": {"uv": [0, 0, 5.33333, 5.33333], "texture": "#0", "cullface": "up"},
					"down": {"uv": [0, 10.66667, 5.33333, 16], "texture": "#0", "cullface": "down"}
				}
			},
			{
				"name": "drain_west",
				"from": [-1, 3.9, 3.9],
				"to": [4, 12.1, 12.1],
				"faces": {
					"north": {"uv": [8, 4, 9.66667, 6.66667], "texture": "#0", "cullface": "west"},
					"south": {"uv": [11.66667, 4, 13.33333, 6.66667], "texture": "#0", "cullface": "west"},
					"west": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "west"},
					"up": {"uv": [9.33333, 2.66667, 12, 4.33333], "rotation": 90, "texture": "#0", "cullface": "west"},
					"down": {"uv": [9.33333, 6.33333, 12, 8], "rotation": 270, "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "drain_east",
				"from": [12, 3.9, 3.9],
				"to": [17, 12.1, 12.1],
				"faces": {
					"north": {"uv": [11.66667, 4, 13.33333, 6.66667], "texture": "#0", "cullface": "east"},
					"east": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "east"},
					"south": {"uv": [8, 4, 9.66667, 6.66667], "texture": "#0", "cullface": "east"},
					"up": {"uv": [9.33333, 2.66667, 12, 4.33333], "rotation": 270, "texture": "#0", "cullface": "east"},
					"down": {"uv": [9.33333, 6.33333, 12, 8], "rotation": 90, "texture": "#0", "cullface": "east"}
				}
			},
			{
				"name": "drain_south",
				"from": [3.9, 3.9, 12],
				"to": [12.1, 12.1, 17],
				"faces": {
					"east": {"uv": [11.66667, 4, 13.33333, 6.66667], "texture": "#0", "cullface": "south"},
					"south": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "south"},
					"west": {"uv": [9.66667, 4, 8, 6.66667], "texture": "#0", "cullface": "south"},
					"up": {"uv": [9.33333, 2.66667, 12, 4.33333], "texture": "#0", "cullface": "south"},
					"down": {"uv": [9.33333, 6.33333, 12, 8], "texture": "#0", "cullface": "south"}
				}
			},
			{
				"name": "drain_top",
				"from": [3.9, 4, 3.9],
				"to": [12.1, 17, 12.1],
				"faces": {
					"north": {"uv": [9.33333, 0.33333, 12, 4.33333], "rotation": 180, "texture": "#0", "cullface": "up"},
					"east": {"uv": [11.66667, 4, 15.66667, 6.66667], "rotation": 90, "texture": "#0", "cullface": "up"},
					"south": {"uv": [9.33333, 6.33333, 12, 10.33333], "texture": "#0", "cullface": "up"},
					"west": {"uv": [5.66667, 4, 9.66667, 6.66667], "rotation": 270, "texture": "#0", "cullface": "up"},
					"up": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "up"}
				}
			},
			{
				"name": "drain_bottom",
				"from": [4, -1, 4],
				"to": [12, 4, 12],
				"faces": {
					"north": {"uv": [9.33333, 6.33333, 12, 7.66667], "rotation": 180, "texture": "#0", "cullface": "down"},
					"east": {"uv": [11.66667, 4, 13.33333, 6.66667], "rotation": 270, "texture": "#0", "cullface": "down"},
					"south": {"uv": [9.33333, 3, 12, 4.33333], "texture": "#0", "cullface": "down"},
					"west": {"uv": [8.33333, 4, 9.66667, 6.66667], "rotation": 90, "texture": "#0", "cullface": "down"},
					"down": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "down"}
				}
			}
		],
		"display": {
			"thirdperson_righthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"thirdperson_lefthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_righthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_lefthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"ground": {
				"scale": [0.5, 0.5, 0.5]
			},
			"gui": {
				"rotation": [30, -135, 0],
				"scale": [0.59, 0.59, 0.59]
			}
		}
	})
	event.create('forgedingears:incomplete_seared_chute', 'create:sequenced_assembly').modelJson({
		"credit": "Made with Blockbench",
		"textures": {
			"0": "forgedingears:block/incomplete_seared_chute",
			"particle": "forgedingears:block/incomplete_seared_chute"
		},
		"elements": [
			{
				"name": "brick",
				"from": [0, 0, 0],
				"to": [16, 8, 16],
				"faces": {
					"north": {"uv": [0, 8, 5.33333, 10.66667], "texture": "#0", "cullface": "north"},
					"east": {"uv": [0, 2.33333, 5.33333, 5.33333], "texture": "#0", "cullface": "east"},
					"south": {"uv": [0, 2.33333, 5.33333, 5.33333], "texture": "#0", "cullface": "south"},
					"west": {"uv": [0, 2.33333, 5.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"up": {"uv": [0, 10.66667, 5.33333, 16], "texture": "#0", "cullface": "up"},
					"down": {"uv": [0, 0, 5.33333, 5.33333], "texture": "#0", "cullface": "down"}
				}
			},
			{
				"name": "brick",
				"from": [16, 8, 16],
				"to": [0, 0, 0],
				"faces": {
					"north": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "north"},
					"east": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "east"},
					"south": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "south"},
					"west": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"up": {"uv": [0, 0, 5.33333, 5.33333], "texture": "#0", "cullface": "up"},
					"down": {"uv": [0, 10.66667, 5.33333, 16], "texture": "#0", "cullface": "down"}
				}
			},
			{
				"name": "chute_west_1",
				"from": [-1, 4, 4],
				"to": [5, 9, 12],
				"faces": {
					"north": {"uv": [7.66667, 3.66667, 9.66667, 5.33333], "texture": "#0", "cullface": "west"},
					"south": {"uv": [12.33333, 3.66667, 14.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"west": {"uv": [9.66667, 3.66667, 12.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"up": {"uv": [9.66667, 1.66667, 12.33333, 3.66667], "rotation": 90, "texture": "#0", "cullface": "west"},
					"down": {"uv": [9.66667, 1.66667, 12.33333, 3.66667], "rotation": 270, "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "chute_west_2",
				"from": [-1, 3, 5],
				"to": [4, 4, 11],
				"faces": {
					"north": {"uv": [8, 3.66667, 9.66667, 4], "texture": "#0", "cullface": "west"},
					"south": {"uv": [8, 6, 9.66667, 6.33333], "texture": "#0", "cullface": "west"},
					"west": {"uv": [10, 5.33333, 12, 5.66667], "texture": "#0", "cullface": "west"},
					"down": {"uv": [10, 2, 12, 3.66667], "rotation": 270, "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "chute_west_3",
				"from": [-1, 2, 6],
				"to": [4, 3, 10],
				"faces": {
					"north": {"uv": [8, 4, 9.66667, 4.33333], "texture": "#0", "cullface": "west"},
					"south": {"uv": [8, 6, 9.66667, 6.33333], "texture": "#0", "cullface": "west"},
					"west": {"uv": [10.33333, 5.66667, 11.66667, 6], "texture": "#0", "cullface": "west"},
					"down": {"uv": [10.33333, 2, 11.66667, 3.66667], "rotation": 270, "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "chute_east_1",
				"from": [11, 4, 4],
				"to": [17, 9, 12],
				"rotation": {"angle": 0, "axis": "y", "origin": [1.75, 4.5, 8]},
				"faces": {
					"north": {"uv": [12.33333, 3.66667, 14.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"east": {"uv": [9.66667, 3.66667, 12.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"south": {"uv": [7.66667, 3.66667, 9.66667, 5.33333], "texture": "#0", "cullface": "west"},
					"up": {"uv": [9.66667, 1.66667, 12.33333, 3.66667], "rotation": 270, "texture": "#0", "cullface": "west"},
					"down": {"uv": [9.66667, 1.66667, 12.33333, 3.66667], "rotation": 90, "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "chute_east_2",
				"from": [12, 3, 5],
				"to": [17, 4, 11],
				"rotation": {"angle": 0, "axis": "y", "origin": [1.75, 4.5, 8]},
				"faces": {
					"north": {"uv": [8, 6, 9.66667, 6.33333], "texture": "#0", "cullface": "west"},
					"east": {"uv": [10, 5.33333, 12, 5.66667], "texture": "#0", "cullface": "west"},
					"south": {"uv": [8, 3.66667, 9.66667, 4], "texture": "#0", "cullface": "west"},
					"down": {"uv": [10, 2, 12, 3.66667], "rotation": 90, "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "chute_east_3",
				"from": [12, 2, 6],
				"to": [17, 3, 10],
				"rotation": {"angle": 0, "axis": "y", "origin": [1.75, 4.5, 8]},
				"faces": {
					"north": {"uv": [8, 6, 9.66667, 6.33333], "texture": "#0", "cullface": "west"},
					"east": {"uv": [10.33333, 5.66667, 11.66667, 6], "texture": "#0", "cullface": "west"},
					"south": {"uv": [8, 4, 9.66667, 4.33333], "texture": "#0", "cullface": "west"},
					"down": {"uv": [10.33333, 2, 11.66667, 3.66667], "rotation": 90, "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "chute_south_1",
				"from": [4, 4, 12],
				"to": [12, 9, 17],
				"rotation": {"angle": 0, "axis": "y", "origin": [14.25, 4.5, 8]},
				"faces": {
					"east": {"uv": [12.33333, 3.66667, 14, 5.33333], "texture": "#0", "cullface": "west"},
					"south": {"uv": [9.66667, 3.66667, 12.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"west": {"uv": [8, 3.66667, 9.66667, 5.33333], "texture": "#0", "cullface": "west"},
					"up": {"uv": [9.66667, 2, 12.33333, 3.66667], "texture": "#0", "cullface": "west"},
					"down": {"uv": [9.66667, 2, 12.33333, 3.66667], "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "chute_south_2",
				"from": [5, 3, 12],
				"to": [11, 4, 17],
				"rotation": {"angle": 0, "axis": "y", "origin": [14.25, 4.5, 8]},
				"faces": {
					"east": {"uv": [8, 6, 9.66667, 6.33333], "texture": "#0", "cullface": "west"},
					"south": {"uv": [10, 5.33333, 12, 5.66667], "texture": "#0", "cullface": "west"},
					"west": {"uv": [8, 3.66667, 9.66667, 4], "texture": "#0", "cullface": "west"},
					"down": {"uv": [10, 2, 12, 3.66667], "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "chute_south_3",
				"from": [6, 2, 12],
				"to": [10, 3, 17],
				"rotation": {"angle": 0, "axis": "y", "origin": [14.25, 4.5, 8]},
				"faces": {
					"east": {"uv": [8, 6, 9.66667, 6.33333], "texture": "#0", "cullface": "west"},
					"south": {"uv": [10.33333, 5.66667, 11.66667, 6], "texture": "#0", "cullface": "west"},
					"west": {"uv": [8, 4, 9.66667, 4.33333], "texture": "#0", "cullface": "west"},
					"down": {"uv": [10.33333, 2, 11.66667, 3.66667], "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "chute_top_1",
				"from": [5, 8, 4],
				"to": [11, 17, 5],
				"faces": {
					"north": {"uv": [10, 0.66667, 12, 3.66667], "rotation": 180, "texture": "#0", "cullface": "up"},
					"east": {"uv": [6.66667, 6, 9.66667, 5.66667], "rotation": 90, "texture": "#0", "cullface": "up"},
					"west": {"uv": [6.66667, 4, 9.66667, 4.33333], "rotation": 270, "texture": "#0", "cullface": "up"},
					"up": {"uv": [9.66667, 3.66667, 12.33333, 4], "texture": "#0", "cullface": "up"}
				}
			},
			{
				"name": "chute_top_2",
				"from": [4, 9, 5],
				"to": [12, 17, 11],
				"faces": {
					"north": {"uv": [15.66667, 3.66667, 16, 6.33333], "rotation": 180, "texture": "#0", "cullface": "up"},
					"east": {"uv": [12.33333, 4, 15, 6], "rotation": 90, "texture": "#0", "cullface": "up"},
					"south": {"uv": [6, 3.66667, 6.33333, 6.33333], "texture": "#0", "cullface": "up"},
					"west": {"uv": [7, 4, 9.66667, 6], "rotation": 270, "texture": "#0", "cullface": "up"},
					"up": {"uv": [6.33333, 1.33333, 9, 3.33333], "texture": "#0", "cullface": "up"}
				}
			},
			{
				"name": "chute_top_3",
				"from": [5, 8, 11],
				"to": [11, 17, 12],
				"faces": {
					"east": {"uv": [6.66667, 4, 9.66667, 4.33333], "rotation": 270, "texture": "#0", "cullface": "up"},
					"south": {"uv": [10, 0.66667, 12, 3.66667], "rotation": 180, "texture": "#0", "cullface": "up"},
					"west": {"uv": [6.66667, 5.66667, 9.66667, 6], "rotation": 90, "texture": "#0", "cullface": "up"},
					"up": {"uv": [9.66667, 3.66667, 12.33333, 4], "rotation": 180, "texture": "#0", "cullface": "up"}
				}
			},
			{
				"name": "chute_bottom_1",
				"from": [5, -1, 4],
				"to": [11, 8, 5],
				"rotation": {"angle": 0, "axis": "y", "origin": [8, 3.25, 8]},
				"faces": {
					"north": {"uv": [10, 6.33333, 12, 9.33333], "texture": "#0", "cullface": "up"},
					"east": {"uv": [6.66667, 5.66667, 9.66667, 6], "rotation": 90, "texture": "#0", "cullface": "up"},
					"west": {"uv": [6.66667, 4.33333, 9.66667, 4], "rotation": 270, "texture": "#0", "cullface": "up"},
					"down": {"uv": [9.66667, 3.66667, 12.33333, 4], "rotation": 180, "texture": "#0", "cullface": "up"}
				}
			},
			{
				"name": "chute_bottom_2",
				"from": [4, -1, 5],
				"to": [12, 4, 11],
				"rotation": {"angle": 0, "axis": "y", "origin": [8, 3.25, 8]},
				"faces": {
					"north": {"uv": [11.66667, 6.66667, 12, 8.33333], "texture": "#0", "cullface": "up"},
					"east": {"uv": [8, 4, 9.66667, 6], "rotation": 90, "texture": "#0", "cullface": "up"},
					"south": {"uv": [10, 6.66667, 10.33333, 8.33333], "rotation": 180, "texture": "#0", "cullface": "up"},
					"west": {"uv": [12.33333, 4, 14, 6], "rotation": 270, "texture": "#0", "cullface": "up"},
					"down": {"uv": [6.33333, 1.33333, 9, 3.33333], "rotation": 180, "texture": "#0", "cullface": "up"}
				}
			},
			{
				"name": "chute_bottom_3",
				"from": [5, -1, 11],
				"to": [11, 8, 12],
				"rotation": {"angle": 0, "axis": "y", "origin": [8, 3.25, 8]},
				"faces": {
					"east": {"uv": [6.66667, 5.66667, 9.66667, 6], "rotation": 270, "texture": "#0", "cullface": "up"},
					"south": {"uv": [10, 0.66667, 12, 3.66667], "texture": "#0", "cullface": "up"},
					"west": {"uv": [6.66667, 4, 9.66667, 4.33333], "rotation": 90, "texture": "#0", "cullface": "up"},
					"down": {"uv": [9.66667, 3.66667, 12.33333, 4], "texture": "#0", "cullface": "up"}
				}
			}
		],
		"display": {
			"thirdperson_righthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"thirdperson_lefthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_righthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_lefthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"ground": {
				"scale": [0.5, 0.5, 0.5]
			},
			"gui": {
				"rotation": [30, -135, 0],
				"scale": [0.59, 0.59, 0.59]
			}
		}
	})
	event.create('forgedingears:incomplete_seared_duct', 'create:sequenced_assembly').modelJson({
		"credit": "Made with Blockbench",
		"textures": {
			"0": "forgedingears:block/incomplete_seared_duct",
			"particle": "forgedingears:block/incomplete_seared_duct"
		},
		"elements": [
			{
				"name": "brick",
				"from": [0, 0, 0],
				"to": [16, 8, 16],
				"faces": {
					"north": {"uv": [0, 8, 5.33333, 10.66667], "texture": "#0", "cullface": "north"},
					"east": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "east"},
					"south": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "south"},
					"west": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"up": {"uv": [0, 10.66667, 5.33333, 16], "texture": "#0", "cullface": "up"},
					"down": {"uv": [0, 0, 5.33333, 5.33333], "texture": "#0", "cullface": "down"}
				}
			},
			{
				"name": "brick",
				"from": [16, 8, 16],
				"to": [0, 0, 0],
				"faces": {
					"north": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "north"},
					"east": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "east"},
					"south": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "south"},
					"west": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"up": {"uv": [0, 0, 5.33333, 5.33333], "texture": "#0", "cullface": "up"},
					"down": {"uv": [0, 10.66667, 5.33333, 16], "texture": "#0", "cullface": "down"}
				}
			},
			{
				"name": "drain_west",
				"from": [-1, 3.9, 3.9],
				"to": [4, 12.1, 12.1],
				"faces": {
					"north": {"uv": [8, 4, 9.66667, 6.66667], "texture": "#0", "cullface": "west"},
					"south": {"uv": [11.66667, 4, 13.33333, 6.66667], "texture": "#0", "cullface": "west"},
					"west": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "west"},
					"up": {"uv": [9.33333, 2.66667, 12, 4.33333], "rotation": 90, "texture": "#0", "cullface": "west"},
					"down": {"uv": [9.33333, 6.33333, 12, 8], "rotation": 270, "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "drain_east",
				"from": [12, 3.9, 3.9],
				"to": [17, 12.1, 12.1],
				"faces": {
					"north": {"uv": [11.66667, 4, 13.33333, 6.66667], "texture": "#0", "cullface": "east"},
					"east": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "east"},
					"south": {"uv": [8, 4, 9.66667, 6.66667], "texture": "#0", "cullface": "east"},
					"up": {"uv": [9.33333, 2.66667, 12, 4.33333], "rotation": 270, "texture": "#0", "cullface": "east"},
					"down": {"uv": [9.33333, 6.33333, 12, 8], "rotation": 90, "texture": "#0", "cullface": "east"}
				}
			},
			{
				"name": "drain_south",
				"from": [3.9, 3.9, 12],
				"to": [12.1, 12.1, 17],
				"faces": {
					"east": {"uv": [11.66667, 4, 13.33333, 6.66667], "texture": "#0", "cullface": "south"},
					"south": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "south"},
					"west": {"uv": [9.66667, 4, 8, 6.66667], "texture": "#0", "cullface": "south"},
					"up": {"uv": [9.33333, 2.66667, 12, 4.33333], "texture": "#0", "cullface": "south"},
					"down": {"uv": [9.33333, 6.33333, 12, 8], "texture": "#0", "cullface": "south"}
				}
			},
			{
				"name": "drain_top",
				"from": [3.9, 4, 3.9],
				"to": [12.1, 17, 12.1],
				"faces": {
					"north": {"uv": [9.33333, 0.33333, 12, 4.33333], "rotation": 180, "texture": "#0", "cullface": "up"},
					"east": {"uv": [11.66667, 4, 15.66667, 6.66667], "rotation": 90, "texture": "#0", "cullface": "up"},
					"south": {"uv": [9.33333, 6.33333, 12, 10.33333], "texture": "#0", "cullface": "up"},
					"west": {"uv": [5.66667, 4, 9.66667, 6.66667], "rotation": 270, "texture": "#0", "cullface": "up"},
					"up": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "up"}
				}
			},
			{
				"name": "drain_bottom",
				"from": [4, -1, 4],
				"to": [12, 4, 12],
				"faces": {
					"north": {"uv": [9.33333, 6.33333, 12, 7.66667], "rotation": 180, "texture": "#0", "cullface": "down"},
					"east": {"uv": [11.66667, 4, 13.33333, 6.66667], "rotation": 270, "texture": "#0", "cullface": "down"},
					"south": {"uv": [9.33333, 3, 12, 4.33333], "texture": "#0", "cullface": "down"},
					"west": {"uv": [8.33333, 4, 9.66667, 6.66667], "rotation": 90, "texture": "#0", "cullface": "down"},
					"down": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "down"}
				}
			}
		],
		"display": {
			"thirdperson_righthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"thirdperson_lefthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_righthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_lefthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"ground": {
				"scale": [0.5, 0.5, 0.5]
			},
			"gui": {
				"rotation": [30, -135, 0],
				"scale": [0.59, 0.59, 0.59]
			}
		}
	})
	event.create('forgedingears:incomplete_scorched_drain', 'create:sequenced_assembly').modelJson({
		"credit": "Made with Blockbench",
		"textures": {
			"0": "forgedingears:block/incomplete_scorched_duct",
			"particle": "forgedingears:block/incomplete_scorched_duct"
		},
		"elements": [
			{
				"name": "brick",
				"from": [0, 0, 0],
				"to": [16, 8, 16],
				"faces": {
					"north": {"uv": [0, 8, 5.33333, 10.66667], "texture": "#0", "cullface": "north"},
					"east": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "east"},
					"south": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "south"},
					"west": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"up": {"uv": [0, 10.66667, 5.33333, 16], "texture": "#0", "cullface": "up"},
					"down": {"uv": [0, 0, 5.33333, 5.33333], "texture": "#0", "cullface": "down"}
				}
			},
			{
				"name": "brick",
				"from": [16, 8, 16],
				"to": [0, 0, 0],
				"faces": {
					"north": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "north"},
					"east": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "east"},
					"south": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "south"},
					"west": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"up": {"uv": [0, 0, 5.33333, 5.33333], "texture": "#0", "cullface": "up"},
					"down": {"uv": [0, 10.66667, 5.33333, 16], "texture": "#0", "cullface": "down"}
				}
			},
			{
				"name": "drain_west",
				"from": [-1, 3.9, 3.9],
				"to": [4, 12.1, 12.1],
				"faces": {
					"north": {"uv": [8, 4, 9.66667, 6.66667], "texture": "#0", "cullface": "west"},
					"south": {"uv": [11.66667, 4, 13.33333, 6.66667], "texture": "#0", "cullface": "west"},
					"west": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "west"},
					"up": {"uv": [9.33333, 2.66667, 12, 4.33333], "rotation": 90, "texture": "#0", "cullface": "west"},
					"down": {"uv": [9.33333, 6.33333, 12, 8], "rotation": 270, "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "drain_east",
				"from": [12, 3.9, 3.9],
				"to": [17, 12.1, 12.1],
				"faces": {
					"north": {"uv": [11.66667, 4, 13.33333, 6.66667], "texture": "#0", "cullface": "east"},
					"east": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "east"},
					"south": {"uv": [8, 4, 9.66667, 6.66667], "texture": "#0", "cullface": "east"},
					"up": {"uv": [9.33333, 2.66667, 12, 4.33333], "rotation": 270, "texture": "#0", "cullface": "east"},
					"down": {"uv": [9.33333, 6.33333, 12, 8], "rotation": 90, "texture": "#0", "cullface": "east"}
				}
			},
			{
				"name": "drain_south",
				"from": [3.9, 3.9, 12],
				"to": [12.1, 12.1, 17],
				"faces": {
					"east": {"uv": [11.66667, 4, 13.33333, 6.66667], "texture": "#0", "cullface": "south"},
					"south": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "south"},
					"west": {"uv": [9.66667, 4, 8, 6.66667], "texture": "#0", "cullface": "south"},
					"up": {"uv": [9.33333, 2.66667, 12, 4.33333], "texture": "#0", "cullface": "south"},
					"down": {"uv": [9.33333, 6.33333, 12, 8], "texture": "#0", "cullface": "south"}
				}
			},
			{
				"name": "drain_top",
				"from": [3.9, 4, 3.9],
				"to": [12.1, 17, 12.1],
				"faces": {
					"north": {"uv": [9.33333, 0.33333, 12, 4.33333], "rotation": 180, "texture": "#0", "cullface": "up"},
					"east": {"uv": [11.66667, 4, 15.66667, 6.66667], "rotation": 90, "texture": "#0", "cullface": "up"},
					"south": {"uv": [9.33333, 6.33333, 12, 10.33333], "texture": "#0", "cullface": "up"},
					"west": {"uv": [5.66667, 4, 9.66667, 6.66667], "rotation": 270, "texture": "#0", "cullface": "up"},
					"up": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "up"}
				}
			},
			{
				"name": "drain_bottom",
				"from": [4, -1, 4],
				"to": [12, 4, 12],
				"faces": {
					"north": {"uv": [9.33333, 6.33333, 12, 7.66667], "rotation": 180, "texture": "#0", "cullface": "down"},
					"east": {"uv": [11.66667, 4, 13.33333, 6.66667], "rotation": 270, "texture": "#0", "cullface": "down"},
					"south": {"uv": [9.33333, 3, 12, 4.33333], "texture": "#0", "cullface": "down"},
					"west": {"uv": [8.33333, 4, 9.66667, 6.66667], "rotation": 90, "texture": "#0", "cullface": "down"},
					"down": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "down"}
				}
			}
		],
		"display": {
			"thirdperson_righthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"thirdperson_lefthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_righthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_lefthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"ground": {
				"scale": [0.5, 0.5, 0.5]
			},
			"gui": {
				"rotation": [30, -135, 0],
				"scale": [0.59, 0.59, 0.59]
			}
		}
	})
	event.create('forgedingears:incomplete_scorched_chute', 'create:sequenced_assembly').modelJson({
		"credit": "Made with Blockbench",
		"textures": {
			"0": "forgedingears:block/incomplete_scorched_chute",
			"particle": "forgedingears:block/incomplete_scorched_chute"
		},
		"elements": [
			{
				"name": "brick",
				"from": [0, 0, 0],
				"to": [16, 8, 16],
				"faces": {
					"north": {"uv": [0, 8, 5.33333, 10.66667], "texture": "#0", "cullface": "north"},
					"east": {"uv": [0, 2.33333, 5.33333, 5.33333], "texture": "#0", "cullface": "east"},
					"south": {"uv": [0, 2.33333, 5.33333, 5.33333], "texture": "#0", "cullface": "south"},
					"west": {"uv": [0, 2.33333, 5.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"up": {"uv": [0, 10.66667, 5.33333, 16], "texture": "#0", "cullface": "up"},
					"down": {"uv": [0, 0, 5.33333, 5.33333], "texture": "#0", "cullface": "down"}
				}
			},
			{
				"name": "brick",
				"from": [16, 8, 16],
				"to": [0, 0, 0],
				"faces": {
					"north": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "north"},
					"east": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "east"},
					"south": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "south"},
					"west": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"up": {"uv": [0, 0, 5.33333, 5.33333], "texture": "#0", "cullface": "up"},
					"down": {"uv": [0, 10.66667, 5.33333, 16], "texture": "#0", "cullface": "down"}
				}
			},
			{
				"name": "chute_west_1",
				"from": [-1, 4, 4],
				"to": [5, 9, 12],
				"faces": {
					"north": {"uv": [7.66667, 3.66667, 9.66667, 5.33333], "texture": "#0", "cullface": "west"},
					"south": {"uv": [12.33333, 3.66667, 14.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"west": {"uv": [9.66667, 3.66667, 12.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"up": {"uv": [9.66667, 1.66667, 12.33333, 3.66667], "rotation": 90, "texture": "#0", "cullface": "west"},
					"down": {"uv": [9.66667, 1.66667, 12.33333, 3.66667], "rotation": 270, "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "chute_west_2",
				"from": [-1, 3, 5],
				"to": [4, 4, 11],
				"faces": {
					"north": {"uv": [8, 3.66667, 9.66667, 4], "texture": "#0", "cullface": "west"},
					"south": {"uv": [8, 6, 9.66667, 6.33333], "texture": "#0", "cullface": "west"},
					"west": {"uv": [10, 5.33333, 12, 5.66667], "texture": "#0", "cullface": "west"},
					"down": {"uv": [10, 2, 12, 3.66667], "rotation": 270, "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "chute_west_3",
				"from": [-1, 2, 6],
				"to": [4, 3, 10],
				"faces": {
					"north": {"uv": [8, 4, 9.66667, 4.33333], "texture": "#0", "cullface": "west"},
					"south": {"uv": [8, 6, 9.66667, 6.33333], "texture": "#0", "cullface": "west"},
					"west": {"uv": [10.33333, 5.66667, 11.66667, 6], "texture": "#0", "cullface": "west"},
					"down": {"uv": [10.33333, 2, 11.66667, 3.66667], "rotation": 270, "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "chute_east_1",
				"from": [11, 4, 4],
				"to": [17, 9, 12],
				"rotation": {"angle": 0, "axis": "y", "origin": [1.75, 4.5, 8]},
				"faces": {
					"north": {"uv": [12.33333, 3.66667, 14.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"east": {"uv": [9.66667, 3.66667, 12.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"south": {"uv": [7.66667, 3.66667, 9.66667, 5.33333], "texture": "#0", "cullface": "west"},
					"up": {"uv": [9.66667, 1.66667, 12.33333, 3.66667], "rotation": 270, "texture": "#0", "cullface": "west"},
					"down": {"uv": [9.66667, 1.66667, 12.33333, 3.66667], "rotation": 90, "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "chute_east_2",
				"from": [12, 3, 5],
				"to": [17, 4, 11],
				"rotation": {"angle": 0, "axis": "y", "origin": [1.75, 4.5, 8]},
				"faces": {
					"north": {"uv": [8, 6, 9.66667, 6.33333], "texture": "#0", "cullface": "west"},
					"east": {"uv": [10, 5.33333, 12, 5.66667], "texture": "#0", "cullface": "west"},
					"south": {"uv": [8, 3.66667, 9.66667, 4], "texture": "#0", "cullface": "west"},
					"down": {"uv": [10, 2, 12, 3.66667], "rotation": 90, "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "chute_east_3",
				"from": [12, 2, 6],
				"to": [17, 3, 10],
				"rotation": {"angle": 0, "axis": "y", "origin": [1.75, 4.5, 8]},
				"faces": {
					"north": {"uv": [8, 6, 9.66667, 6.33333], "texture": "#0", "cullface": "west"},
					"east": {"uv": [10.33333, 5.66667, 11.66667, 6], "texture": "#0", "cullface": "west"},
					"south": {"uv": [8, 4, 9.66667, 4.33333], "texture": "#0", "cullface": "west"},
					"down": {"uv": [10.33333, 2, 11.66667, 3.66667], "rotation": 90, "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "chute_south_1",
				"from": [4, 4, 12],
				"to": [12, 9, 17],
				"rotation": {"angle": 0, "axis": "y", "origin": [14.25, 4.5, 8]},
				"faces": {
					"east": {"uv": [12.33333, 3.66667, 14, 5.33333], "texture": "#0", "cullface": "west"},
					"south": {"uv": [9.66667, 3.66667, 12.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"west": {"uv": [8, 3.66667, 9.66667, 5.33333], "texture": "#0", "cullface": "west"},
					"up": {"uv": [9.66667, 2, 12.33333, 3.66667], "texture": "#0", "cullface": "west"},
					"down": {"uv": [9.66667, 2, 12.33333, 3.66667], "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "chute_south_2",
				"from": [5, 3, 12],
				"to": [11, 4, 17],
				"rotation": {"angle": 0, "axis": "y", "origin": [14.25, 4.5, 8]},
				"faces": {
					"east": {"uv": [8, 6, 9.66667, 6.33333], "texture": "#0", "cullface": "west"},
					"south": {"uv": [10, 5.33333, 12, 5.66667], "texture": "#0", "cullface": "west"},
					"west": {"uv": [8, 3.66667, 9.66667, 4], "texture": "#0", "cullface": "west"},
					"down": {"uv": [10, 2, 12, 3.66667], "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "chute_south_3",
				"from": [6, 2, 12],
				"to": [10, 3, 17],
				"rotation": {"angle": 0, "axis": "y", "origin": [14.25, 4.5, 8]},
				"faces": {
					"east": {"uv": [8, 6, 9.66667, 6.33333], "texture": "#0", "cullface": "west"},
					"south": {"uv": [10.33333, 5.66667, 11.66667, 6], "texture": "#0", "cullface": "west"},
					"west": {"uv": [8, 4, 9.66667, 4.33333], "texture": "#0", "cullface": "west"},
					"down": {"uv": [10.33333, 2, 11.66667, 3.66667], "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "chute_top_1",
				"from": [5, 8, 4],
				"to": [11, 17, 5],
				"faces": {
					"north": {"uv": [10, 0.66667, 12, 3.66667], "rotation": 180, "texture": "#0", "cullface": "up"},
					"east": {"uv": [6.66667, 6, 9.66667, 5.66667], "rotation": 90, "texture": "#0", "cullface": "up"},
					"west": {"uv": [6.66667, 4, 9.66667, 4.33333], "rotation": 270, "texture": "#0", "cullface": "up"},
					"up": {"uv": [9.66667, 3.66667, 12.33333, 4], "texture": "#0", "cullface": "up"}
				}
			},
			{
				"name": "chute_top_2",
				"from": [4, 9, 5],
				"to": [12, 17, 11],
				"faces": {
					"north": {"uv": [15.66667, 3.66667, 16, 6.33333], "rotation": 180, "texture": "#0", "cullface": "up"},
					"east": {"uv": [12.33333, 4, 15, 6], "rotation": 90, "texture": "#0", "cullface": "up"},
					"south": {"uv": [6, 3.66667, 6.33333, 6.33333], "texture": "#0", "cullface": "up"},
					"west": {"uv": [7, 4, 9.66667, 6], "rotation": 270, "texture": "#0", "cullface": "up"},
					"up": {"uv": [6.33333, 1.33333, 9, 3.33333], "texture": "#0", "cullface": "up"}
				}
			},
			{
				"name": "chute_top_3",
				"from": [5, 8, 11],
				"to": [11, 17, 12],
				"faces": {
					"east": {"uv": [6.66667, 4, 9.66667, 4.33333], "rotation": 270, "texture": "#0", "cullface": "up"},
					"south": {"uv": [10, 0.66667, 12, 3.66667], "rotation": 180, "texture": "#0", "cullface": "up"},
					"west": {"uv": [6.66667, 5.66667, 9.66667, 6], "rotation": 90, "texture": "#0", "cullface": "up"},
					"up": {"uv": [9.66667, 3.66667, 12.33333, 4], "rotation": 180, "texture": "#0", "cullface": "up"}
				}
			},
			{
				"name": "chute_bottom_1",
				"from": [5, -1, 4],
				"to": [11, 8, 5],
				"rotation": {"angle": 0, "axis": "y", "origin": [8, 3.25, 8]},
				"faces": {
					"north": {"uv": [10, 6.33333, 12, 9.33333], "texture": "#0", "cullface": "up"},
					"east": {"uv": [6.66667, 5.66667, 9.66667, 6], "rotation": 90, "texture": "#0", "cullface": "up"},
					"west": {"uv": [6.66667, 4.33333, 9.66667, 4], "rotation": 270, "texture": "#0", "cullface": "up"},
					"down": {"uv": [9.66667, 3.66667, 12.33333, 4], "rotation": 180, "texture": "#0", "cullface": "up"}
				}
			},
			{
				"name": "chute_bottom_2",
				"from": [4, -1, 5],
				"to": [12, 4, 11],
				"rotation": {"angle": 0, "axis": "y", "origin": [8, 3.25, 8]},
				"faces": {
					"north": {"uv": [11.66667, 6.66667, 12, 8.33333], "texture": "#0", "cullface": "up"},
					"east": {"uv": [8, 4, 9.66667, 6], "rotation": 90, "texture": "#0", "cullface": "up"},
					"south": {"uv": [10, 6.66667, 10.33333, 8.33333], "rotation": 180, "texture": "#0", "cullface": "up"},
					"west": {"uv": [12.33333, 4, 14, 6], "rotation": 270, "texture": "#0", "cullface": "up"},
					"down": {"uv": [6.33333, 1.33333, 9, 3.33333], "rotation": 180, "texture": "#0", "cullface": "up"}
				}
			},
			{
				"name": "chute_bottom_3",
				"from": [5, -1, 11],
				"to": [11, 8, 12],
				"rotation": {"angle": 0, "axis": "y", "origin": [8, 3.25, 8]},
				"faces": {
					"east": {"uv": [6.66667, 5.66667, 9.66667, 6], "rotation": 270, "texture": "#0", "cullface": "up"},
					"south": {"uv": [10, 0.66667, 12, 3.66667], "texture": "#0", "cullface": "up"},
					"west": {"uv": [6.66667, 4, 9.66667, 4.33333], "rotation": 90, "texture": "#0", "cullface": "up"},
					"down": {"uv": [9.66667, 3.66667, 12.33333, 4], "texture": "#0", "cullface": "up"}
				}
			}
		],
		"display": {
			"thirdperson_righthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"thirdperson_lefthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_righthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_lefthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"ground": {
				"scale": [0.5, 0.5, 0.5]
			},
			"gui": {
				"rotation": [30, -135, 0],
				"scale": [0.59, 0.59, 0.59]
			}
		}
	})
	event.create('forgedingears:incomplete_scorched_duct', 'create:sequenced_assembly').modelJson({
		"credit": "Made with Blockbench",
		"textures": {
			"0": "forgedingears:block/incomplete_scorched_drain",
			"particle": "forgedingears:block/incomplete_scorched_drain"
		},
		"elements": [
			{
				"name": "brick",
				"from": [0, 0, 0],
				"to": [16, 8, 16],
				"faces": {
					"north": {"uv": [0, 8, 5.33333, 10.66667], "texture": "#0", "cullface": "north"},
					"east": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "east"},
					"south": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "south"},
					"west": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"up": {"uv": [0, 10.66667, 5.33333, 16], "texture": "#0", "cullface": "up"},
					"down": {"uv": [0, 0, 5.33333, 5.33333], "texture": "#0", "cullface": "down"}
				}
			},
			{
				"name": "brick",
				"from": [16, 8, 16],
				"to": [0, 0, 0],
				"faces": {
					"north": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "north"},
					"east": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "east"},
					"south": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "south"},
					"west": {"uv": [0, 2.66667, 5.33333, 5.33333], "texture": "#0", "cullface": "west"},
					"up": {"uv": [0, 0, 5.33333, 5.33333], "texture": "#0", "cullface": "up"},
					"down": {"uv": [0, 10.66667, 5.33333, 16], "texture": "#0", "cullface": "down"}
				}
			},
			{
				"name": "drain_west",
				"from": [-1, 3.9, 3.9],
				"to": [4, 12.1, 12.1],
				"faces": {
					"north": {"uv": [8, 4, 9.66667, 6.66667], "texture": "#0", "cullface": "west"},
					"south": {"uv": [11.66667, 4, 13.33333, 6.66667], "texture": "#0", "cullface": "west"},
					"west": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "west"},
					"up": {"uv": [9.33333, 2.66667, 12, 4.33333], "rotation": 90, "texture": "#0", "cullface": "west"},
					"down": {"uv": [9.33333, 6.33333, 12, 8], "rotation": 270, "texture": "#0", "cullface": "west"}
				}
			},
			{
				"name": "drain_east",
				"from": [12, 3.9, 3.9],
				"to": [17, 12.1, 12.1],
				"faces": {
					"north": {"uv": [11.66667, 4, 13.33333, 6.66667], "texture": "#0", "cullface": "east"},
					"east": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "east"},
					"south": {"uv": [8, 4, 9.66667, 6.66667], "texture": "#0", "cullface": "east"},
					"up": {"uv": [9.33333, 2.66667, 12, 4.33333], "rotation": 270, "texture": "#0", "cullface": "east"},
					"down": {"uv": [9.33333, 6.33333, 12, 8], "rotation": 90, "texture": "#0", "cullface": "east"}
				}
			},
			{
				"name": "drain_south",
				"from": [3.9, 3.9, 12],
				"to": [12.1, 12.1, 17],
				"faces": {
					"east": {"uv": [11.66667, 4, 13.33333, 6.66667], "texture": "#0", "cullface": "south"},
					"south": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "south"},
					"west": {"uv": [9.66667, 4, 8, 6.66667], "texture": "#0", "cullface": "south"},
					"up": {"uv": [9.33333, 2.66667, 12, 4.33333], "texture": "#0", "cullface": "south"},
					"down": {"uv": [9.33333, 6.33333, 12, 8], "texture": "#0", "cullface": "south"}
				}
			},
			{
				"name": "drain_top",
				"from": [3.9, 4, 3.9],
				"to": [12.1, 17, 12.1],
				"faces": {
					"north": {"uv": [9.33333, 0.33333, 12, 4.33333], "rotation": 180, "texture": "#0", "cullface": "up"},
					"east": {"uv": [11.66667, 4, 15.66667, 6.66667], "rotation": 90, "texture": "#0", "cullface": "up"},
					"south": {"uv": [9.33333, 6.33333, 12, 10.33333], "texture": "#0", "cullface": "up"},
					"west": {"uv": [5.66667, 4, 9.66667, 6.66667], "rotation": 270, "texture": "#0", "cullface": "up"},
					"up": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "up"}
				}
			},
			{
				"name": "drain_bottom",
				"from": [4, -1, 4],
				"to": [12, 4, 12],
				"faces": {
					"north": {"uv": [9.33333, 6.33333, 12, 7.66667], "rotation": 180, "texture": "#0", "cullface": "down"},
					"east": {"uv": [11.66667, 4, 13.33333, 6.66667], "rotation": 270, "texture": "#0", "cullface": "down"},
					"south": {"uv": [9.33333, 3, 12, 4.33333], "texture": "#0", "cullface": "down"},
					"west": {"uv": [8.33333, 4, 9.66667, 6.66667], "rotation": 90, "texture": "#0", "cullface": "down"},
					"down": {"uv": [9.33333, 4, 12, 6.66667], "texture": "#0", "cullface": "down"}
				}
			}
		],
		"display": {
			"thirdperson_righthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"thirdperson_lefthand": {
				"translation": [0, 1, 0],
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_righthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"firstperson_lefthand": {
				"scale": [0.5, 0.5, 0.5]
			},
			"ground": {
				"scale": [0.5, 0.5, 0.5]
			},
			"gui": {
				"rotation": [30, -135, 0],
				"scale": [0.59, 0.59, 0.59]
			}
		}
	})
	event.create('forgedingears:grout_brick')
	event.create('forgedingears:uncooked_casting_table').tooltip('Cook this in a furnace for a long time').modelJson({
			"credit": "Made with Blockbench",
			"parent": "block/block",
			"textures": {
				"particle": "forgedingears:item/uncooked/uncooked_table_side",
				"side": "forgedingears:item/uncooked/uncooked_table_side",
				"bottom": "forgedingears:item/uncooked/uncooked_table_bottom",
				"top": "forgedingears:item/uncooked/uncooked_table_top"
			},
			"elements": [
				{
					"name": "Table outer",
					"from": [0, 10, 0],
					"to": [16, 16, 16],
					"faces": {
						"north": {"uv": [0, 0, 16, 6], "texture": "#side", "cullface": "north"},
						"east": {"uv": [0, 0, 16, 6], "texture": "#side", "cullface": "east"},
						"south": {"uv": [0, 0, 16, 6], "texture": "#side", "cullface": "south"},
						"west": {"uv": [0, 0, 16, 6], "texture": "#side", "cullface": "west"},
						"down": {"uv": [0, 0, 16, 16], "texture": "#bottom"}
					}
				},
				{
					"name": "Table inner",
					"from": [15, 16, 15],
					"to": [1, 15, 1],
					"faces": {
						"north": {"uv": [15, 1, 1, 0], "texture": "#side", "cullface": "up"},
						"east": {"uv": [15, 1, 1, 0], "texture": "#side", "cullface": "up"},
						"south": {"uv": [15, 1, 1, 0], "texture": "#side", "cullface": "up"},
						"west": {"uv": [15, 1, 1, 0], "texture": "#side", "cullface": "up"},
						"up": {"uv": [15, 15, 1, 1], "texture": "#top", "cullface": "up"}
					}
				},
				{
					"name": "Northwest leg",
					"from": [0, 0, 0],
					"to": [4, 10, 4],
					"faces": {
						"north": {"uv": [12, 6, 16, 16], "texture": "#side", "cullface": "north"},
						"east": {"uv": [12, 6, 16, 16], "texture": "#side"},
						"south": {"uv": [0, 6, 4, 16], "texture": "#side"},
						"west": {"uv": [0, 6, 4, 16], "texture": "#side", "cullface": "west"},
						"down": {"uv": [0, 12, 4, 16], "texture": "#bottom", "cullface": "down"}
					}
				},
				{
					"name": "Northeast leg",
					"from": [12, 0, 0],
					"to": [16, 10, 4],
					"faces": {
						"north": {"uv": [0, 6, 4, 16], "texture": "#side", "cullface": "north"},
						"east": {"uv": [12, 6, 16, 16], "texture": "#side", "cullface": "east"},
						"south": {"uv": [12, 6, 16, 16], "texture": "#side"},
						"west": {"uv": [0, 6, 4, 16], "texture": "#side"},
						"down": {"uv": [12, 12, 16, 16], "texture": "#bottom", "cullface": "down"}
					}
				},
				{
					"name": "Southeast leg",
					"from": [12, 0, 12],
					"to": [16, 10, 16],
					"faces": {
						"north": {"uv": [0, 6, 4, 16], "texture": "#side"},
						"east": {"uv": [0, 6, 4, 16], "texture": "#side", "cullface": "east"},
						"south": {"uv": [12, 6, 16, 16], "texture": "#side", "cullface": "south"},
						"west": {"uv": [12, 6, 16, 16], "texture": "#side"},
						"down": {"uv": [12, 0, 16, 4], "texture": "#bottom", "cullface": "down"}
					}
				},
				{
					"name": "Southwest leg",
					"from": [0, 0, 12],
					"to": [4, 10, 16],
					"faces": {
						"north": {"uv": [12, 6, 16, 16], "texture": "#side"},
						"east": {"uv": [0, 6, 4, 16], "texture": "#side"},
						"south": {"uv": [0, 6, 4, 16], "texture": "#side", "cullface": "south"},
						"west": {"uv": [12, 6, 16, 16], "texture": "#side", "cullface": "west"},
						"down": {"uv": [0, 0, 4, 4], "texture": "#bottom", "cullface": "down"}
					}
				},
				{
					"name": "West top edge",
					"from": [0, 16, 0],
					"to": [1, 16, 16],
					"faces": {
						"up": {"uv": [0, 0, 1, 16], "texture": "#top", "cullface": "up"}
					}
				},
				{
					"name": "East top edge",
					"from": [15, 16, 0],
					"to": [16, 16, 16],
					"faces": {
						"up": {"uv": [15, 0, 16, 16], "texture": "#top", "cullface": "up"}
					}
				},
				{
					"name": "North top edge",
					"from": [1, 16, 0],
					"to": [15, 16, 1],
					"faces": {
						"up": {"uv": [1, 0, 15, 1], "texture": "#top", "cullface": "up"}
					}
				},
				{
					"name": "South top edge",
					"from": [1, 16, 15],
					"to": [15, 16, 16],
					"faces": {
						"up": {"uv": [1, 15, 15, 16], "texture": "#top", "cullface": "up"}
					}
				}
			]
	})
	event.create('forgedingears:uncooked_faucet').tooltip('Cook this in a furnace for a long time').modelJson({
			"credit": "Made with Blockbench",
			"parent": "minecraft:block/block",
			"textures": {
				"particle": "forgedingears:item/uncooked/uncooked_faucet",
				"tex": "forgedingears:item/uncooked/uncooked_faucet"
			},
			"elements": [
				{
					"name": "The bottom platform, facing south with the dark texture side",
					"from": [4, 4, 10],
					"to": [12, 6, 16],
					"faces": {
						"north": {"uv": [4, 9, 12, 11], "texture": "#tex"},
						"east": {"uv": [12, 10, 14, 16], "rotation": 90, "texture": "#tex"},
						"south": {"uv": [4, 11, 12, 9], "texture": "#tex", "cullface": "south"},
						"west": {"uv": [2, 10, 4, 16], "rotation": 270, "texture": "#tex"},
						"up": {"uv": [4, 10, 12, 16], "texture": "#tex"},
						"down": {"uv": [4, 10, 12, 16], "rotation": 180, "texture": "#tex"}
					}
				},
				{
					"name": "Left side from front (east)",
					"from": [10, 6, 10],
					"to": [12, 10, 16],
					"faces": {
						"north": {"uv": [4, 9, 6, 5], "texture": "#tex"},
						"east": {"uv": [8, 10, 12, 16], "rotation": 90, "texture": "#tex"},
						"south": {"uv": [10, 9, 12, 5], "texture": "#tex", "cullface": "south"},
						"west": {"uv": [2, 10, 6, 16], "rotation": 270, "texture": "#tex"},
						"up": {"uv": [13, 10, 15, 16], "texture": "#tex"}
					}
				},
				{
					"name": "Right side from front (west)",
					"from": [4, 6, 10],
					"to": [6, 10, 16],
					"faces": {
						"north": {"uv": [10, 9, 12, 5], "texture": "#tex"},
						"east": {"uv": [2, 10, 6, 16], "rotation": 90, "texture": "#tex"},
						"south": {"uv": [6, 9, 4, 5], "texture": "#tex", "cullface": "south"},
						"west": {"uv": [7, 10, 11, 16], "rotation": 270, "texture": "#tex"},
						"up": {"uv": [1, 10, 3, 16], "texture": "#tex"}
					}
				}
			],
			"display": {
				"thirdperson_righthand": {
					"rotation": [75, 45, 0],
					"translation": [0, 3, 0.5],
					"scale": [0.4, 0.4, 0.4]
				},
				"thirdperson_lefthand": {
					"rotation": [75, 45, 0],
					"translation": [0, 3, 0.5],
					"scale": [0.4, 0.4, 0.4]
				},
				"firstperson_righthand": {
					"rotation": [0, 135, 0],
					"translation": [0, 0.5, 0],
					"scale": [0.5, 0.5, 0.5]
				},
				"firstperson_lefthand": {
					"rotation": [0, 135, 0],
					"translation": [0, 0.5, 0],
					"scale": [0.5, 0.5, 0.5]
				},
				"ground": {
					"translation": [0, 3, -1],
					"scale": [0.25, 0.25, 0.25]
				},
				"gui": {
					"rotation": [30, 225, 0],
					"translation": [3, -1, 0],
					"scale": [0.9375, 0.9375, 0.9375]
				},
				"fixed": {
					"translation": [0, 0, -1],
					"scale": [0.5, 0.5, 0.5]
				}
			}
	})
	event.create('forgedingears:uncooked_heater').tooltip('Cook this in a furnace for a long time').modelJson({
			"credit": "Made with Blockbench",
			"parent": "block/block",
			"textures": {
				"0": "forgedingears:item/uncooked/uncooked_heater",
				"1": "forgedingears:item/uncooked/grout_brick",
				"particle": "forgedingears:item/uncooked/uncooked_heater"
			},
			"elements": [
				{
					"from": [0, 0, 0],
					"to": [16, 16, 16],
					"faces": {
						"north": {"uv": [0, 0, 16, 16], "texture": "#0", "cullface": "north"},
						"east": {"uv": [0, 0, 16, 16], "texture": "#1", "cullface": "north"},
						"south": {"uv": [0, 0, 16, 16], "texture": "#1", "cullface": "north"},
						"west": {"uv": [0, 0, 16, 16], "texture": "#1", "cullface": "north"},
						"up": {"uv": [0, 0, 16, 16], "texture": "#1", "cullface": "north"},
						"down": {"uv": [0, 0, 16, 16], "texture": "#1", "cullface": "north"}
					}
				}
			]
	})
	event.create('forgedingears:uncooked_seared_melter').tooltip('Cook this in a furnace for a long time').modelJson({
			"credit": "Made with Blockbench",
			"parent": "block/block",
			"textures": {
				"0": "forgedingears:item/uncooked/grout_brick",
				"1": "forgedingears:item/uncooked/uncooked_melter_front",
				"2": "forgedingears:item/uncooked/uncooked_melter_side",
				"3": "forgedingears:item/uncooked/uncooked_melter_top",
				"particle": "forgedingears:item/uncooked/grout_brick"
			},
			"elements": [
				{
					"from": [0, 0, 0],
					"to": [16, 16, 16],
					"faces": {
						"north": {"uv": [0, 0, 16, 16], "texture": "#1", "cullface": "north"},
						"east": {"uv": [0, 0, 16, 16], "texture": "#2", "cullface": "north"},
						"south": {"uv": [0, 0, 16, 16], "texture": "#2", "cullface": "north"},
						"west": {"uv": [0, 0, 16, 16], "texture": "#2", "cullface": "north"},
						"up": {"uv": [0, 0, 16, 16], "texture": "#3", "cullface": "north"},
						"down": {"uv": [0, 0, 16, 16], "texture": "#0", "cullface": "north"}
					}
				},
				{
					"from": [15.9, 15.9, 15.9],
					"to": [0.1, 8, 0.1],
					"faces": {
						"north": {"uv": [16, 8, 0, 0], "texture": "#2"},
						"east": {"uv": [16, 0, 0, 8], "texture": "#2"},
						"south": {"uv": [16, 8, 0, 0], "texture": "#1"},
						"west": {"uv": [16, 8, 0, 0], "texture": "#2"},
						"down": {"uv": [16, 16, 0.1, 0.1], "texture": "#3"}
					}
				},
				{
					"from": [0, 8, 0],
					"to": [16, 8, 16],
					"faces": {
						"north": {"uv": [0, 0, 16, 16], "texture": "#0"},
						"up": {"uv": [0, 0, 16, 16], "texture": "#0"},
						"down": {"uv": [0, 0, 16, 16], "texture": "#0"}
					}
				}
			],
			"display": {
				"thirdperson_righthand": {
					"rotation": [90, 0, 0],
					"translation": [-1.75, 0, 0],
					"scale": [0.31055, 0.31055, 0.31055]
				}
			}
	})
})