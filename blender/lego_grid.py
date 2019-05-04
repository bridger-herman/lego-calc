import bpy
import sys
sys.path.append('./')
import bpy
from mathutils import Vector
import constants
import util
import importlib
importlib.reload(constants)
importlib.reload(util)

minm, maxm = util.bound_box(bpy.context.active_object)
ROWS = round((maxm.y - minm.y) / constants.BRICK_SIZE)
COLS = round((maxm.x - minm.x) / constants.BRICK_SIZE)

def grid_locations():
    grid_locs = []
    for row in range(ROWS):
        for col in range(COLS):
            loc = Vector((
                    col * constants.BRICK_SIZE + constants.BRICK_SIZE / 2.0 + minm.x,
                    row * constants.BRICK_SIZE + constants.BRICK_SIZE / 2.0 + minm.y,
                    maxm.z + constants.STUD_HEIGHT / 2.1
                ))
            grid_locs.append(loc)
    return grid_locs

def main():
    print('Generating {}x{} Lego grid'.format(ROWS, COLS))

    total = ROWS * COLS
    locs = grid_locations()
    for i in range(len(locs)):
        loc = locs[i]
        bpy.ops.mesh.primitive_cylinder_add(vertices=10,
                radius=constants.STUD_WIDTH / 2.0,
                depth=constants.STUD_HEIGHT, location=loc)
        bpy.context.active_object.name = 'stud'
        if i % 10 == 0:
            print('{:.0%}'.format(i / total))

    util.join_glyphs('stud', 's')

if __name__ == "__main__":
    main()