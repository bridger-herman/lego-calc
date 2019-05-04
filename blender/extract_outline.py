import sys
sys.path.append('./')
import bpy
import json
import numpy as np
import constants
import util
import importlib
importlib.reload(constants)
importlib.reload(util)

NAME = 'mn'
OUTLINE = '../{}_outline_simplified_bbox.geojson'.format(NAME)

with open(OUTLINE) as outline_file:
    data = json.load(outline_file)
    coords = data['features'][0]['geometry']['coordinates']
    bbox = data['bbox']

    vertices, edges, faces = [], [], []
    vert_index = 0
    for i in range(len(coords)):
        coords_array = np.array(coords[i])

        print('processing', i, len(coords))

        for x, y in coords_array[0]:
            mapped_coord = util.map_coord(x, y, bbox)
            vertices.append(tuple(mapped_coord))
            edges.append((vert_index, vert_index + 1))
            vert_index += 1

    edges = edges[:-1]

    mesh = bpy.data.meshes.new(NAME)
    obj = bpy.data.objects.new(NAME, mesh)

    bpy.context.scene.objects.link(obj)
    mesh.from_pydata(vertices, edges, faces)
    bpy.context.scene.objects.active = obj

    mesh.update()
    print('finished making mesh')

# POST PROCESSING
# - Limited dissolve
# - Remove doubles
# - Select boundary loop -> Delete vertices
# - Fill ngon
# - Extrude
print('post processing')

#  bpy.ops.object.mode_set(mode='EDIT')
#  bpy.ops.mesh.select_all(action='SELECT')

#  bpy.ops.mesh.dissolve_limited()
#  bpy.ops.mesh.select_all(action='SELECT')
#  bpy.ops.mesh.remove_doubles()
#  bpy.ops.mesh.select_all(action='SELECT')

#  bpy.ops.mesh.region_to_loop()
#  bpy.ops.mesh.delete(type='VERT')
