import sys
sys.path.append('./')
import constants
import importlib
importlib.reload(constants)
import bpy
from mathutils import Vector, Matrix

def join_glyphs(name, suffix='-glyphs'):
    bpy.ops.object.select_all(action='DESELECT')
    bpy.context.scene.objects.active = bpy.data.objects[name]
    bpy.ops.object.select_pattern(pattern=name + "*")
    bpy.ops.object.convert(target='MESH')
    bpy.ops.object.join()
    bpy.context.active_object.name = name + suffix
    try:
        bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    except:
        pass
    bpy.ops.object.select_all(action='DESELECT')
    bpy.context.scene.objects.active = None

def bound_box(obj):
    coords = [v[:] for v in obj.bound_box]
    return Vector(coords[0]), Vector(coords[6])

def map_coord(x, y, bbox):
    min_x, min_y, max_x, max_y = bbox
    scale = constants.OUTPUT_HEIGHT / (max_y - min_y)
    out_width = scale * (max_x - min_x)

    co = Vector((x, y, 0))
    scale_matrix = Matrix.Scale(scale, 4)
    trans_matrix = Matrix.Translation((-min_x, -min_y, 0))
    tr_sc = scale_matrix * trans_matrix

    trans_to_center = Matrix.Translation((-out_width / 2.0, -constants.OUTPUT_HEIGHT / 2.0, 0.0))
    return trans_to_center * tr_sc * co