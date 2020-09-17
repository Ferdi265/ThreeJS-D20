import * as THREE from 'three';
import CanvasTexture from './CanvasTexture';

const arrayWith = (length, fn) => {
    return Array(length)
        .fill(undefined)
        .map((_, idx) => fn(idx));
};

const faceMaterial = (idx) => {
    let labelNum = idx + 1;
    let labelStr = String(labelNum);

    if (labelNum == 6 || labelNum == 9) {
        labelStr += '.';
    }

    return new THREE.MeshLambertMaterial({
        map: CanvasTexture({}, [
            { fillStyle: 'white', fillBackground: true },
            { fillStyle: 'black', text: labelStr }
        ])
    });
};

export default () => {
    return arrayWith(20, faceMaterial);
};
