<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>
<qgis maxScale="0" simplifyLocal="1" version="3.6.1-Noosa" hasScaleBasedVisibilityFlag="0" simplifyDrawingTol="1" styleCategories="AllStyleCategories" minScale="1e+08" labelsEnabled="0" readOnly="0" simplifyMaxScale="1" simplifyDrawingHints="1" simplifyAlgorithm="0">
  <flags>
    <Identifiable>1</Identifiable>
    <Removable>1</Removable>
    <Searchable>1</Searchable>
  </flags>
  <renderer-v2 type="singleSymbol" symbollevels="0" enableorderby="0" forceraster="0">
    <symbols>
      <symbol type="fill" force_rhr="0" clip_to_extent="1" name="0" alpha="0.317">
        <layer pass="0" enabled="1" class="SimpleFill" locked="0">
          <prop k="border_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="color" v="49,72,46,255"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="35,35,35,255"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0.26"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
          <data_defined_properties>
            <Option type="Map">
              <Option value="" type="QString" name="name"/>
              <Option name="properties"/>
              <Option value="collection" type="QString" name="type"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
    </symbols>
    <rotation/>
    <sizescale/>
  </renderer-v2>
  <customproperties>
    <property key="embeddedWidgets/count" value="0"/>
    <property key="variableNames"/>
    <property key="variableValues"/>
  </customproperties>
  <blendMode>0</blendMode>
  <featureBlendMode>0</featureBlendMode>
  <layerOpacity>1</layerOpacity>
  <SingleCategoryDiagramRenderer diagramType="Histogram" attributeLegend="1">
    <DiagramCategory backgroundColor="#ffffff" width="15" penWidth="0" height="15" sizeScale="3x:0,0,0,0,0,0" lineSizeType="MM" penColor="#000000" backgroundAlpha="255" barWidth="5" lineSizeScale="3x:0,0,0,0,0,0" scaleBasedVisibility="0" minimumSize="0" enabled="0" maxScaleDenominator="1e+08" minScaleDenominator="0" opacity="1" sizeType="MM" rotationOffset="270" labelPlacementMethod="XHeight" diagramOrientation="Up" scaleDependency="Area" penAlpha="255">
      <fontProperties style="" description="Cantarell,10,-1,5,50,0,0,0,0,0"/>
    </DiagramCategory>
  </SingleCategoryDiagramRenderer>
  <DiagramLayerSettings placement="1" linePlacementFlags="18" zIndex="0" dist="0" obstacle="0" priority="0" showAll="1">
    <properties>
      <Option type="Map">
        <Option value="" type="QString" name="name"/>
        <Option name="properties"/>
        <Option value="collection" type="QString" name="type"/>
      </Option>
    </properties>
  </DiagramLayerSettings>
  <geometryOptions removeDuplicateNodes="0" geometryPrecision="0">
    <activeChecks/>
    <checkConfiguration/>
  </geometryOptions>
  <fieldConfiguration>
    <field name="OBJECTID">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field name="DNR_REGION">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field name="DNR_CNTY_C">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field name="COUNTY_NAM">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field name="COUNTY_FIP">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field name="SHAPEAREA">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field name="SHAPELEN">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
  </fieldConfiguration>
  <aliases>
    <alias index="0" name="" field="OBJECTID"/>
    <alias index="1" name="" field="DNR_REGION"/>
    <alias index="2" name="" field="DNR_CNTY_C"/>
    <alias index="3" name="" field="COUNTY_NAM"/>
    <alias index="4" name="" field="COUNTY_FIP"/>
    <alias index="5" name="" field="SHAPEAREA"/>
    <alias index="6" name="" field="SHAPELEN"/>
  </aliases>
  <excludeAttributesWMS/>
  <excludeAttributesWFS/>
  <defaults>
    <default expression="" field="OBJECTID" applyOnUpdate="0"/>
    <default expression="" field="DNR_REGION" applyOnUpdate="0"/>
    <default expression="" field="DNR_CNTY_C" applyOnUpdate="0"/>
    <default expression="" field="COUNTY_NAM" applyOnUpdate="0"/>
    <default expression="" field="COUNTY_FIP" applyOnUpdate="0"/>
    <default expression="" field="SHAPEAREA" applyOnUpdate="0"/>
    <default expression="" field="SHAPELEN" applyOnUpdate="0"/>
  </defaults>
  <constraints>
    <constraint exp_strength="0" notnull_strength="0" field="OBJECTID" constraints="0" unique_strength="0"/>
    <constraint exp_strength="0" notnull_strength="0" field="DNR_REGION" constraints="0" unique_strength="0"/>
    <constraint exp_strength="0" notnull_strength="0" field="DNR_CNTY_C" constraints="0" unique_strength="0"/>
    <constraint exp_strength="0" notnull_strength="0" field="COUNTY_NAM" constraints="0" unique_strength="0"/>
    <constraint exp_strength="0" notnull_strength="0" field="COUNTY_FIP" constraints="0" unique_strength="0"/>
    <constraint exp_strength="0" notnull_strength="0" field="SHAPEAREA" constraints="0" unique_strength="0"/>
    <constraint exp_strength="0" notnull_strength="0" field="SHAPELEN" constraints="0" unique_strength="0"/>
  </constraints>
  <constraintExpressions>
    <constraint field="OBJECTID" desc="" exp=""/>
    <constraint field="DNR_REGION" desc="" exp=""/>
    <constraint field="DNR_CNTY_C" desc="" exp=""/>
    <constraint field="COUNTY_NAM" desc="" exp=""/>
    <constraint field="COUNTY_FIP" desc="" exp=""/>
    <constraint field="SHAPEAREA" desc="" exp=""/>
    <constraint field="SHAPELEN" desc="" exp=""/>
  </constraintExpressions>
  <expressionfields/>
  <attributeactions>
    <defaultAction key="Canvas" value="{00000000-0000-0000-0000-000000000000}"/>
  </attributeactions>
  <attributetableconfig actionWidgetStyle="dropDown" sortOrder="0" sortExpression="">
    <columns>
      <column hidden="1" type="actions" width="-1"/>
      <column hidden="0" type="field" width="-1" name="OBJECTID"/>
      <column hidden="0" type="field" width="-1" name="DNR_REGION"/>
      <column hidden="0" type="field" width="-1" name="DNR_CNTY_C"/>
      <column hidden="0" type="field" width="-1" name="COUNTY_NAM"/>
      <column hidden="0" type="field" width="-1" name="COUNTY_FIP"/>
      <column hidden="0" type="field" width="-1" name="SHAPEAREA"/>
      <column hidden="0" type="field" width="-1" name="SHAPELEN"/>
    </columns>
  </attributetableconfig>
  <conditionalstyles>
    <rowstyles/>
    <fieldstyles/>
  </conditionalstyles>
  <editform tolerant="1"></editform>
  <editforminit/>
  <editforminitcodesource>0</editforminitcodesource>
  <editforminitfilepath></editforminitfilepath>
  <editforminitcode><![CDATA[# -*- coding: utf-8 -*-
"""
QGIS forms can have a Python function that is called when the form is
opened.

Use this function to add extra logic to your forms.

Enter the name of the function in the "Python Init function"
field.
An example follows:
"""
from qgis.PyQt.QtWidgets import QWidget

def my_form_open(dialog, layer, feature):
	geom = feature.geometry()
	control = dialog.findChild(QWidget, "MyLineEdit")
]]></editforminitcode>
  <featformsuppress>0</featformsuppress>
  <editorlayout>generatedlayout</editorlayout>
  <editable>
    <field name="AREA" editable="1"/>
    <field name="COUN" editable="1"/>
    <field name="COUNTY_FIP" editable="1"/>
    <field name="COUNTY_NAM" editable="1"/>
    <field name="CTYONLY_" editable="1"/>
    <field name="CTYONLY_ID" editable="1"/>
    <field name="CTY_ABBR" editable="1"/>
    <field name="CTY_FIPS" editable="1"/>
    <field name="CTY_NAME" editable="1"/>
    <field name="DNR_CNTY_C" editable="1"/>
    <field name="DNR_REGION" editable="1"/>
    <field name="OBJECTID" editable="1"/>
    <field name="PERIMETER" editable="1"/>
    <field name="SHAPEAREA" editable="1"/>
    <field name="SHAPELEN" editable="1"/>
    <field name="Shape_Area" editable="1"/>
    <field name="Shape_Leng" editable="1"/>
  </editable>
  <labelOnTop>
    <field name="AREA" labelOnTop="0"/>
    <field name="COUN" labelOnTop="0"/>
    <field name="COUNTY_FIP" labelOnTop="0"/>
    <field name="COUNTY_NAM" labelOnTop="0"/>
    <field name="CTYONLY_" labelOnTop="0"/>
    <field name="CTYONLY_ID" labelOnTop="0"/>
    <field name="CTY_ABBR" labelOnTop="0"/>
    <field name="CTY_FIPS" labelOnTop="0"/>
    <field name="CTY_NAME" labelOnTop="0"/>
    <field name="DNR_CNTY_C" labelOnTop="0"/>
    <field name="DNR_REGION" labelOnTop="0"/>
    <field name="OBJECTID" labelOnTop="0"/>
    <field name="PERIMETER" labelOnTop="0"/>
    <field name="SHAPEAREA" labelOnTop="0"/>
    <field name="SHAPELEN" labelOnTop="0"/>
    <field name="Shape_Area" labelOnTop="0"/>
    <field name="Shape_Leng" labelOnTop="0"/>
  </labelOnTop>
  <widgets/>
  <previewExpression>CTYONLY_ID</previewExpression>
  <mapTip></mapTip>
  <layerGeometryType>2</layerGeometryType>
</qgis>
