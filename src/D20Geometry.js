import * as THREE from 'three';

const indexPermutation = [
    1,
    2,
    3,
    4,
    5,
    10,
    8,
    6,
    14,
    12,
    18,
    17,
    16,
    20,
    19,
    9,
    7,
    15,
    13,
    11
].map((n) => n - 1);

const indexRotation = [
    0,
    0,
    0,
    0,
    0,
    120,
    120,
    120,
    120,
    120,
    120,
    120,
    120,
    120,
    120,
    0,
    0,
    0,
    0,
    0,
].map((n) => THREE.MathUtils.degToRad(n));

const ORIGIN = new THREE.Vector2(0.5, 0.5);
const rotate = (angle, vector, origin) => {
    origin = origin || ORIGIN;

    return new THREE.Vector2(
        Math.cos(angle) * (vector.x - origin.x) - Math.sin(angle) * (vector.y - origin.y) + origin.x,
        Math.sin(angle) * (vector.x - origin.x) + Math.cos(angle) * (vector.y - origin.y) + origin.y
    );
};

export default () => {
    const d20 = new THREE.IcosahedronGeometry();
    const uv = [];

    // center equilateral triangle in texture
    const a = Math.sqrt(3) / 2;
    const minX = 0.5 - a / 2;
    const maxX = 0.5 + a / 2;
    const minY = 0.25;
    const maxY = 1;

    for (let i = 0; i < d20.faces.length; i++) {
        const index = indexPermutation[i];
        const angle = indexRotation[index];
        d20.faces[i].materialIndex = index;

        uv.push([
            rotate(angle, new THREE.Vector2(minX, minY)),
            rotate(angle, new THREE.Vector2(maxX, minY)),
            rotate(angle, new THREE.Vector2(0.5, maxY)),
        ]);
    }

    d20.faceVertexUvs[0] = uv;
    d20.uvsNeedUpdate = true;

    return d20;
};
