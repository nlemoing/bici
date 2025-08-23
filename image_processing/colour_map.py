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
transform("./public/bike/frame.png", np.array([0, 0, 1, 255]), np.array([255, 255, 254, 255]), red_value=np.array([0, 0, 230, 255]))
transform("./public/bike/fork_left.png", np.array([0, 1, 0, 255]), np.array([255, 254, 255, 255]), red_value=np.array([0, 0, 231, 255]))
transform("./public/bike/fork_right.png", np.array([0, 1, 0, 255]), np.array([255, 254, 255, 255]), red_value=np.array([0, 0, 231, 255]))
transform("./public/bike/seat.png", np.array([0, 1, 1, 255]), np.array([223, 223, 223, 255]))
transform("./public/bike/stem.png", np.array([1, 0, 0, 255]), np.array([254, 255, 255, 255]))
transform("./public/bike/handlebars.png", np.array([1, 0, 1, 255]), np.array([254, 255, 254, 255]))
transform("./public/bike/brake.png", np.array([1, 1, 1, 255]), np.array([254, 254, 254, 255]))

transform("./public/bike/wheel.png", np.array([1, 1, 2, 255]), np.array([254, 254, 253, 255]))
transform("./public/bike/chainring.png", np.array([1, 2, 1, 255]), np.array([254, 253, 254, 255]))
transform("./public/bike/cassette.png", np.array([1, 2, 2, 255]), np.array([254, 253, 253, 255]))
transform("./public/bike/chain.png", np.array([2, 1, 1, 255]), np.array([253, 254, 254, 255]))
transform("./public/bike/rear_derailleur.png", np.array([2, 1, 2, 255]), np.array([253, 254, 253, 255]))
transform("./public/bike/front_derailleur.png", np.array([2, 1, 3, 255]), np.array([224, 224, 224, 255]))
transform("./public/bike/derailleur_hanger.png", np.array([2, 2, 1, 255]), np.array([253, 253, 254, 255]))
transform("./public/bike/crank.png", np.array([2, 2, 2, 255]), np.array([222, 222, 222, 255]))

transform("./public/bike/pedal.png", np.array([2, 2, 3, 255]), np.array([253, 253, 252, 255]))
transform("./public/bike/flat_pedal.png", np.array([2, 2, 4, 255]), np.array([253, 253, 251, 255]))
transform("./public/bike/spd_pedal.png", np.array([2, 2, 5, 255]), np.array([253, 253, 250, 255]))
transform("./public/bike/spd_sl_pedal.png", np.array([2, 2, 6, 255]), np.array([253, 253, 249, 255]))
transform("./public/icons/button_unpressed.png", np.array([2, 3, 2, 255]), np.array([165, 165, 165, 255]), red_value=np.array([0, 0, 209, 255]))
transform("./public/icons/button_pressed.png", np.array([2, 3, 2, 255]), np.array([165, 165, 165, 255]), red_value=np.array([0, 0, 209, 255]))
transform("./public/icons/back.png", np.array([2, 3, 3, 255]), np.array([166, 166, 166, 255]), green_value=np.array([0, 209, 0, 255]))
transform("./public/icons/info.png", np.array([2, 3, 1, 255]), np.array([253, 252, 254, 255]), blue_value=np.array([253, 122, 68, 255]))
transform("./public/bike/spd_cleat.png", np.array([2, 3, 4, 255]), np.array([253, 252, 251, 255]))
transform("./public/bike/spd_sl_cleat.png", np.array([2, 4, 3, 255]), np.array([253, 251, 252, 255]))
transform("./public/bike/mtb_forks.png", np.array([2, 4, 4, 255]), np.array([253, 251, 251, 255]))
transform("./public/bike/road_forks.png", np.array([2, 4, 5, 255]), np.array([253, 251, 250, 255]))
transform("./public/bike/mtb_bars.png", np.array([2, 5, 5, 255]), np.array([253, 250, 250, 255]))
transform("./public/bike/road_bars.png", np.array([2, 5, 6, 255]), np.array([253, 250, 249, 255]))
transform("./public/bike/tri_bars.png", np.array([2, 6, 6, 255]), np.array([253, 249, 249, 255]))

# Brakes prefix with 3
transform("./public/bike/rim_road.png", np.array([3, 0, 0, 255]), np.array([252, 255, 255, 255]))
transform("./public/bike/rim_smooth_stud.png", np.array([3, 0, 0, 255]), np.array([252, 255, 255, 255]))
transform("./public/bike/rim_threaded_stud.png", np.array([3, 0, 0, 255]), np.array([252, 255, 255, 255]))
transform("./public/bike/disc_pad.png", np.array([3, 0, 1, 255]), np.array([252, 255, 254, 255]))
transform("./public/bike/disc_pads.png", np.array([3, 0, 1, 255]), np.array([252, 255, 254, 255]))
transform("./public/bike/disc_rotor.png", np.array([3, 1, 0, 255]), np.array([252, 254, 255, 255]))
transform("./public/bike/disc_rotor_centrelock.png", np.array([3, 1, 0, 255]), np.array([252, 254, 255, 255]))
transform("./public/bike/rim_front_view.png", np.array([3, 1, 1, 255]), np.array([252, 254, 254, 255]))
transform("./public/bike/disc_front_view.png", np.array([3, 0, 2, 255]), np.array([252, 255, 253, 255]))

# Headset prefix with 4
transform("./public/bike/bearing.png", np.array([4, 0, 0, 255]), np.array([251, 255, 255, 255]))
transform("./public/bike/bottom_cup.png", np.array([4, 0, 1, 255]), np.array([251, 255, 254, 255]))
transform("./public/bike/top_cup.png", np.array([4, 0, 1, 255]), np.array([251, 255, 254, 255]))
transform("./public/bike/crown_race.png", np.array([4, 1, 0, 255]), np.array([251, 254, 255, 255]))
transform("./public/bike/pre_load_bolt.png", np.array([4, 1, 1, 255]), np.array([251, 254, 254, 255]))
transform("./public/bike/star_nut.png", np.array([4, 1, 2, 255]), np.array([251, 254, 253, 255]))
transform("./public/bike/top_cap.png", np.array([4, 2, 1, 255]), np.array([221, 221, 221, 255]))
transform("./public/bike/top_cover_assembly.png", np.array([4, 2, 2, 255]), np.array([251, 253, 253, 255]))
