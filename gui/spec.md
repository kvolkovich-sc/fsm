# Flowcharts drawing library for ReactJS

## Component reference

### ViewportComponent
### Block

**ports**

## Model reference

### IElement
 
**key** - string
**type** - mapping to Schema definition
**kind** - Block, Port or Link
**active** - bool
**focused** - bool
**hovered** - bool

### Block

Extends `IElement`

**x** - number
**y** - number
**ports** 

### Link

Extends `IElement`

### Port

Extends `IElement`

checkIn: func,
checkOut: func

### Viewport

**panX**
**panY**
**scale**
**size**
**allowPanning**
**allowScaling**

### Selection

Properties:

**elements**: [ elements ids ]

### Cursor

Mouse position at viewport

**x** - readonly
**y** - readonly
**lastUpOnElement** - elementId
**lastDownOnElement** - elementId

### Schema

**blocks** - 
**links**

### Value (state)

**document**
**selection**
**viewport** 
