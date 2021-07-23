import Konva from 'konva';
import store from '../../store/index';

let currentDrawingShape = null;

/**
 * 画shape时可以依据鼠标的移动来确定shape的尺寸，此函数就是实现这个确定尺寸的过程
 * @param startPosition
 * @param endPosition
 * @param shapeTypeId
 * @param layer
 */
function drawShapePreFrame(startPosition, endPosition, shapeTypeId, layer) {
  switch (shapeTypeId) {
    case 1:
      currentDrawingShape = drawRectPreFrame(startPosition, endPosition, currentDrawingShape);
      break;
    case 2:
      currentDrawingShape = drawCirclePreFrame(startPosition, endPosition, currentDrawingShape);
      break;
    case 3:
      currentDrawingShape = drawTrianglePreFrame(startPosition, endPosition, currentDrawingShape);
      break;
    case 4:
      currentDrawingShape = drawLinePreFrame(startPosition, endPosition, currentDrawingShape);
      break;
  }
  layer.add(currentDrawingShape);
}

/**
 * 画矩形
 * @param startPosition 起点坐标
 * @param endPosition 终点坐标
 * @param currentDrawingShape 上一个shape
 * @returns {Rect}
 */
function drawRectPreFrame(startPosition, endPosition, currentDrawingShape) {
  // 清掉上一个矩形
  if (currentDrawingShape) {
    currentDrawingShape.destroy();
  }
  return new Konva.Rect({
    x: startPosition.x,
    y: startPosition.y,
    width: endPosition.x - startPosition.x,
    height: endPosition.y - startPosition.y,
    stroke: '#707070',
    strokeWidth: 1
  });
}

/**
 * 画圆
 * @param startPosition
 * @param endPosition
 * @param currentDrawingShape
 */
function drawCirclePreFrame(startPosition, endPosition, currentDrawingShape) {
  if (currentDrawingShape ) {
    currentDrawingShape.destroy();
  }
  let radius = (endPosition.x - startPosition.x) * Math.cos(45);
  return new Konva.Circle({
    x: startPosition.x + radius,
    y: startPosition.y + radius,
    radius: radius,
    stroke: '#707070',
    strokeWidth: 1
  });
}

/**
 * 画三角形
 * @param startPosition
 * @param endPosition
 * @param currentDrawingShape
 */
function drawTrianglePreFrame(startPosition, endPosition, currentDrawingShape) {
  if (currentDrawingShape) {
    currentDrawingShape.destroy();
  }
  return new Konva.Line({
    // 点的顺序是：顶点，左点，右点
    points: [startPosition.x, endPosition.y, startPosition.x + (endPosition.x - startPosition.x) / 2, startPosition.y, endPosition.x, endPosition.y, startPosition.x, endPosition.y],
    stroke: '#707070',
    strokeWidth: 1
  });
}

/**
 * 画线
 * @param startPosition
 * @param endPosition
 * @param currentDrawingShape
 * @returns {Line<Config>}
 */
function drawLinePreFrame(startPosition, endPosition, currentDrawingShape) {
  if (currentDrawingShape) {
    currentDrawingShape.destroy();
  }
  return new Konva.Line({
    // 点的顺序是：顶点，左点，右点
    points: [startPosition.x, startPosition.y, endPosition.x, endPosition.y],
    stroke: '#707070',
    strokeWidth: 1
  });
}

/**
 * 保存画好的形状到vuex的shapes中
 */
function saveShapeToShapesInfo() {
  // 调用vuex中的action将shape保存到shapes
  store.dispatch('addShapeToShapesInfo', currentDrawingShape)
    .then(() => {
      // 保存好之后，表示该形状已经画好，清空currentDrawingShape，以便下一次可以画出新的形状，而不销毁干刚刚画好的形状
      currentDrawingShape = null;
    });
}

export {drawShapePreFrame, saveShapeToShapesInfo};