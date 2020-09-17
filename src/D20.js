import * as THREE from 'three';
import D20Geometry from './D20Geometry';
import D20Materials from './D20Materials';

export default () => {
    const geometry = D20Geometry();
    const materials = D20Materials();

    return new THREE.Mesh(geometry, materials);
};
