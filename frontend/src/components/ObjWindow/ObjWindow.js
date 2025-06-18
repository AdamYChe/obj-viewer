import React, { useEffect, useRef } from 'react';

const loadShader = async (path) => {
    const res = await fetch(process.env.PUBLIC_URL + path);
    return await res.text();
}; 

function ObjWindow() {
    const ref = useRef(null);

    useEffect(() => {
        const glSetup = async () => {
            const canvas = ref.current;
            const gl = canvas.getContext('webgl2');
            if(!gl) {
                console.log("WebGL did not work.");
            }

            const vertShader = gl.createShader(gl.VERTEX_SHADER);
            const vertString = await loadShader('./shaders/ObjWindow/vert.glsl');
            gl.shaderSource(vertShader, vertString);
            gl.compileShader(vertShader);
            if(!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS)) {
                console.error("Vertex didn't compile: ", gl.getShaderInfoLog(vertShader));
            }

            const fragShader = gl.createShader(gl.FRAGMENT_SHADER);
            const fragString = await loadShader('./shaders/ObjWindow/frag.glsl');
            gl.shaderSource(fragShader, fragString);
            gl.compileShader(fragShader);
            if(!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {
                console.error("Frag didn't compile: ", gl.getShaderInfoLog(fragShader));
            }

            const shaderProgram = gl.createProgram();
            gl.attachShader(shaderProgram, vertShader);
            gl.attachShader(shaderProgram, fragShader);

            gl.linkProgram(shaderProgram);
            gl.useProgram(shaderProgram);

            const triangle = [
                1.0, -1.0,      1.0, 0.0, 0.0,
                -1.0, -1.0,     0.0, 1.0, 0.0,
                0.0, 1.0,       0.0, 0.0, 1.0
            ]

            const buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangle), gl.STATIC_DRAW);

            const positionAttrib = gl.getAttribLocation(shaderProgram, 'inPos');
            gl.enableVertexAttribArray(positionAttrib);
            gl.vertexAttribPointer(positionAttrib, 2, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 0)

            const colorAttrib = gl.getAttribLocation(shaderProgram, 'inColor');
            gl.enableVertexAttribArray(colorAttrib);
            gl.vertexAttribPointer(colorAttrib, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);

            gl.clearColor(0.1, 0.1, 0.1, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT)
            gl.drawArrays(gl.TRIANGLES, 0, 3)
        };

        glSetup();
    }, []);

    return (
        <canvas ref={ref}
                width={400}
                height={300}>
        </canvas>
    );
}

export default ObjWindow;