import * as THREE from 'three';

export default (object, domElement) => {
    const state = {
        prevX: 0,
        prevY: 0,
        dragging: false
    };

    domElement.addEventListener('mousedown', () => {
        state.dragging = true;
    });
    domElement.addEventListener('mouseup', () => {
        state.dragging = false;
    });
    domElement.addEventListener('mousemove', (e) => {
        const x = e.offsetX;
        const y = e.offsetY;

        if (state.dragging) {
            const prevX = state.prevX;
            const prevY = state.prevY;

            const deltaX = x - prevX;
            const deltaY = y - prevY;

            const quaternion = new THREE.Quaternion()
                .setFromEuler(new THREE.Euler(
                    THREE.MathUtils.degToRad(deltaY),
                    THREE.MathUtils.degToRad(deltaX),
                    0,
                    'XYZ'
                ));

            object.quaternion.multiplyQuaternions(quaternion, object.quaternion);
        }

        state.prevX = x;
        state.prevY = y;
    });
};
