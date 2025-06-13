import cv2
import numpy as np

# All source images are black and white
# Based on the name, map black to a unique colour and white to a different unique colour
# This will let us get a hacky ID for each pixel
BLACK = np.array([0, 0, 0, 255])
WHITE = np.array([255, 255, 255, 255])
RED = np.array([0, 0, 255, 255])
GREEN = np.array([0, 255, 0, 255])
BLUE = np.array([255, 0, 0, 255])

def map(colour, black_value, white_value, red_value, green_value, blue_value):
    if (colour == BLACK).all():
        return black_value
    if (colour == WHITE).all():
        return white_value
    if (colour == RED).all():
        return red_value
    if (colour == GREEN).all():
        return green_value
    if (colour == BLUE).all():
        return blue_value
    return colour

def transform(name, black_value=BLACK, white_value=WHITE, red_value=RED, green_value=GREEN, blue_value=BLUE):
    img = cv2.imread(name, cv2.IMREAD_UNCHANGED)
    # First use a threshold to force everything to either 0 or 255
    img[img < 128] = 0
    img[img >= 128] = 255
    # Then, do the mapping
    mapped_image = np.array([[ map(colour, black_value, white_value, red_value, green_value, blue_value) for colour in row ] for row in img ])
    cv2.imwrite(name, mapped_image)

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
transform("./public/icons/button_unpressed.png", np.array([2, 3, 2, 255]), np.array([165, 165, 165, 255]), red_value=np.array([0, 0, 209, 255]))
transform("./public/icons/button_pressed.png", np.array([2, 3, 2, 255]), np.array([165, 165, 165, 255]), red_value=np.array([0, 0, 209, 255]))
transform("./public/icons/back.png", np.array([2, 3, 3, 255]), np.array([166, 166, 166, 255]), green_value=np.array([0, 209, 0, 255]))
