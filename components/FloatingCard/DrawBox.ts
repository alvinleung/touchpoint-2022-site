import { PhysicsObject } from "./PhysicsObject";

export function drawBox(
  object: PhysicsObject,
  context: CanvasRenderingContext2D
) {
  const dyanmicBody = object.body;
  const dynamicPos = dyanmicBody.GetPosition();

  // console.log(dynamicPos.y);
  context.save();
  {
    context.translate(dynamicPos.x, dynamicPos.y);
    context.rotate(dyanmicBody.GetAngle());

    // draw content
    context.fillRect(
      (-object.width * 2) / 2,
      (-object.height * 2) / 2,
      object.width * 2,
      object.height * 2
    );
  }
  context.restore();
}
