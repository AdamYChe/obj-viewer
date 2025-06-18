#version 300 es

layout (location = 0) in vec2 inPos;
layout (location = 1) in vec3 inColor;

out vec3 color;

void main() {
    gl_Position = vec4(inPos, 0.0, 1.0);
    color = inColor;
}