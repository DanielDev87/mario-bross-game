/**
 * Mario Bros Game Constants
 * Contains all game configuration values and constants
 */

// Asset paths
var AUDIOPATH = 'Content/audio/';
var BASEPATH   = 'Content/';
var DIV        = '<div />';
var CLS_FIGURE = 'figure';
var CLS_MATTER = 'matter';

/**
 * Game state constants
 */
var directions = {
	none  : 0,
	left  : 1,
	up    : 2,
	right : 3,
	down  : 4,
};

var mario_states = {
	normal : 0,
	fire  : 1,
};

var size_states = {
	small : 1,
	big   : 2,
};

/**
 * Collision and physics constants
 */
var ground_blocking = {
	none   : 0,
	left   : 1,
	top    : 2,
	right  : 4,
	bottom : 8,
	all    : 15,
};

var collision_type = {
	none       : 0,
	horizontal : 1,
	vertical   : 2,
};

var death_modes = {
	normal : 0,
	shell  : 1,
};

/**
 * Game asset paths
 */
var images = {
	enemies : BASEPATH + 'mario-enemies.png',
	sprites : BASEPATH + 'mario-sprites.png',
	objects : BASEPATH + 'mario-objects.png',
	peach   : BASEPATH + 'mario-peach.png',
};

/**
 * Game physics and gameplay constants
 */
var constants = {
	// Game loop timing
	interval        : 20,
	
	// Physics constants
	bounce          : 15,
	cooldown        : 20,
	gravity         : 2,
	
	// Player settings
	start_lives     : 3,
	max_width       : 400,
	max_height      : 15,
	
	// Movement speeds
	jumping_v       : 27,
	walking_v       : 5,
	
	// Enemy speeds
	mushroom_v      : 3,
	ballmonster_v   : 2,
	spiked_turtle_v : 1.5,
	small_turtle_v  : 3,
	big_turtle_v    : 2,
	shell_v         : 10,
	shell_wait      : 25,
	
	// Power-up speeds
	star_vx         : 4,
	star_vy         : 16,
	bullet_v        : 12,
	
	// Game limits
	max_coins       : 100,
	
	// Special enemy settings
	pipeplant_count : 150,
	pipeplant_v     : 1,
	
	// Power-up durations
	invincible      : 11000,
	invulnerable    : 1000,
	blinkfactor     : 5,
};

var mushroom_mode = {
	mushroom : 0,
	plant    : 1,
};

/**
 * Utility functions
 */
var c2u = function(s) {
	return 'url(' + s + ')';
};

/**
 * Collision detection helper function
 * @param {Object} figure - The first object to check for collision
 * @param {Object} opponent - The second object to check for collision
 * @returns {boolean} - True if objects are colliding
 */
var q2q = function(figure, opponent) {
	if(figure.x > opponent.x + 16)
		return false;		
	else if(figure.x + 16 < opponent.x)
		return false;		
	else if(figure.y + figure.state * 32 - 4 < opponent.y)
		return false;		
	else if(figure.y + 4 > opponent.y + opponent.state * 32)
		return false;
		
	return true;
};

/**
 * Math utility function
 * @param {number} x - The number to get the sign of
 * @returns {number} - 1 for positive, -1 for negative, 0 for zero
 */
Math.sign = function(x) {
	if(x > 0)
		return 1;
	else if(x < 0)
		return -1;
		
	return 0;
};