import sys
sys.path.append('./')
import bpy
from mathutils import Vector
import json
import numpy as np
import constants
import util
import lego_grid
import importlib
importlib.reload(constants)
importlib.reload(util)
importlib.reload(lego_grid)

NAME = 'metro'
POWER_PLANTS = '../power-plants_{}.geojson'.format(NAME)
OUTLINE = '../{}_outline_simplified_bbox.geojson'.format(NAME)
# GLYPH_DIR = '/home/bridger/dev/5609-final/into_3d/glyphs/'
GLYPH_DIR = 'C:/Users/scoot/Desktop/5609-final/into_3d/glyphs/'

minm, maxm = util.bound_box(bpy.context.active_object)
print(maxm)

PRIMARY_SOURCES = [
    'biomass',
    'petroleum',
    'wind',
    'hydroelectric',
    'solar',
    #  'other',
    'nuclear',
    'coal',
    #  'batteries',
    'natural gas',
]

SOURCES_MODELS = {}

for p in PRIMARY_SOURCES:
    bpy.ops.import_mesh.stl(
            filepath=GLYPH_DIR + '{}.stl'.format(p))
    bpy.context.active_object.name = bpy.context.active_object.name.lower()
    SOURCES_MODELS[bpy.context.active_object.name] = bpy.context.active_object
    print('Imported', p)

def calc_primary_sources():
    primary_sources = set()
    for f in features:
        try:
            primary_sources.add(f['properties']['PrimSource'])
        except:
            print('no primary source for', f)

    print('[')
    for p in primary_sources:
        print('\'{}\','.format(p))
    print(']')

with open(POWER_PLANTS) as power_plant_file:
    minm, maxm = util.bound_box(bpy.context.active_object)

    bbox = []
    with open(OUTLINE) as outline_file:
        data = json.load(outline_file)
        bbox = data['bbox']

    data = json.load(power_plant_file)
    features = data['features']

    grid = lego_grid.grid_locations()

    mapped_locations = {}
    for p in PRIMARY_SOURCES:
        for f in filter(lambda feat: feat['properties']['PrimSource'] == p,
                features):
            # it's a point, only one coord
            coord = f['geometry']['coordinates'][0]
            loc = util.map_coord(coord[0], coord[1], bbox)
            loc.z = maxm.z

            min_dist = (maxm - minm).length
            nearest_lego = Vector((0, 0, 0))
            for lego_point in grid:
                dist = (loc - lego_point).length
                if dist < min_dist:
                    min_dist = dist
                    nearest_lego = lego_point
            
            mapped_locations[tuple(nearest_lego)] = p

for loc, source in mapped_locations.items():
    this_glyph = SOURCES_MODELS[source].copy()
    this_glyph.data = SOURCES_MODELS[source].data.copy()
    this_glyph.location = Vector(loc)
    this_glyph.name = source
    bpy.context.scene.objects.link(this_glyph)

for p in PRIMARY_SOURCES:
    util.join_glyphs(p)
