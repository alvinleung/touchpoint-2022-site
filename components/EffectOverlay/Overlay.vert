attribute vec4 aPosition;
attribute mat4 uMatrix;

void main() {
  gl_Position = aPosition * uMatrix;

}