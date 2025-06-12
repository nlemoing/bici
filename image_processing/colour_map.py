import cv2
import numpy as np

# All source images are black and white
# Based on the name, map black to a unique colour and white to a different unique colour
# This will let us get a hacky ID for each pixel
BLACK = np.array([0, 0, 0, 255])
WHITE = np.array([255, 255, 255, 255])

BUTTON_RED = np.array([0, 0, 209, 255])
BUTTON_GREY = np.array([165, 165, 165, 255])

USED_BLACK_COLOURS = set()
USED_WHITE_COLOURS = set()

def map(colour, black_value, white_value):
    if (colour == BLACK).all():
        return black_value
    if (colour == WHITE).all():
        return white_value
    return colour

def transform(name, black_value, white_value):
    # Check to see if we accidentally re-used any colours
    bs = tuple(black_value)
    if bs in USED_BLACK_COLOURS:
        print(f"ERROR: {name} re-uses black value {bs}")
        exit(1)
    USED_BLACK_COLOURS.add(bs)

    ws = tuple(white_value)
    if ws in USED_WHITE_COLOURS:
        print(f"ERROR: {name} re-uses white value {ws}")
        exit(1)
    USED_WHITE_COLOURS.add(ws)

    img = cv2.imread(name, cv2.IMREAD_UNCHANGED)
    # First use a threshold to force everything to either 0 or 255
    img[img < 128] = 0
    img[img >= 128] = 255
    # Then, do the mapping
    mapped_image = np.array([[ map(colour, black_value, white_value) for colour in row ] for row in img ])
    cv2.imwrite(name, mapped_image)

def transform_buttons(name, black_value):
    img = cv2.imread(name, cv2.IMREAD_UNCHANGED)

    # First use a threshold to force everything to either 0, 128 or 255
    img[img < 128] = 0
    img[img > 128] = 255

    def map_button(colour):
        if colour[3] != 255:
            return np.array([0,0,0,0])
        if (colour == np.array([0,0,255,255])).all():
            return BUTTON_RED
        if (colour == np.array([255,255,255,255])).all():
            return BUTTON_GREY
        return black_value

    mapped_image = np.array([[ map_button(colour) for colour in row ] for row in img ])
    cv2.imwrite(name + ".v2.png", mapped_image)

# Use an encoding which maps black to a unique colour very close to black, and same for white, for each image
transform("./public/bike/frame.png", np.array([0, 0, 1, 255]), np.array([255, 255, 254, 255]))
transform("./public/bike/fork.png", np.array([0, 1, 0, 255]), np.array([255, 254, 255, 255]))
transform("./public/bike/seat.png", np.array([0, 1, 1, 255]), np.array([255, 254, 254, 255]))
transform("./public/bike/stem.png", np.array([1, 0, 0, 255]), np.array([254, 255, 255, 255]))
transform("./public/bike/handlebars.png", np.array([1, 0, 1, 255]), np.array([254, 255, 254, 255]))
transform("./public/bike/headset.png", np.array([1, 1, 0, 255]), np.array([254, 254, 255, 255]))
transform("./public/bike/brake.png", np.array([1, 1, 1, 255]), np.array([254, 254, 254, 255]))

transform("./public/bike/wheel.png", np.array([1, 1, 2, 255]), np.array([254, 254, 253, 255]))
transform("./public/bike/chainring.png", np.array([1, 2, 1, 255]), np.array([254, 253, 254, 255]))
transform("./public/bike/cassette.png", np.array([1, 2, 2, 255]), np.array([254, 253, 253, 255]))
transform("./public/bike/chain.png", np.array([2, 1, 1, 255]), np.array([253, 254, 254, 255]))
transform("./public/bike/derailleur.png", np.array([2, 1, 2, 255]), np.array([253, 254, 253, 255]))
transform("./public/bike/derailleur_hanger.png", np.array([2, 2, 1, 255]), np.array([253, 253, 254, 255]))
transform("./public/bike/crank.png", np.array([2, 2, 2, 255]), np.array([253, 253, 253, 255]))

transform("./public/bike/pedal.png", np.array([2, 2, 3, 255]), np.array([253, 253, 252, 255]))

# These were more finicky and aren't idempotent since it relies on having white at the button base
# which is why we have the v2 suffix
transform_buttons("./public/icons/button_unpressed.png", np.array([10, 10, 10, 255]))
transform_buttons("./public/icons/button_pressed.png", np.array([10, 10, 10, 255]))
