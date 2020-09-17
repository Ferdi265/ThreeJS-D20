import * as THREE from 'three';

const set = (ctx, options, key, defaultValue) => {
    if (key in options) {
        ctx[key] = options[key];
    } else if (typeof defaultValue !== undefined) {
        ctx[key] = defaultValue;
    }
}

const drawObject = (ctx, canvas, options) => {
    options = options || {};

    set(ctx, options, 'font', '96px Arial');
    set(ctx, options, 'textAlign', 'center');
    set(ctx, options, 'textBaseline', 'middle');

    set(ctx, options, 'strokeStyle', 'black');
    set(ctx, options, 'fillStyle', 'black');

    if ('fillBackground' in options) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    if ('text' in options) {
        ctx.fillText(options.text, canvas.width / 2, canvas.height / 2);
    }

    if ('draw' in options) {
        options.draw(ctx, canvas.width, canvas.height);
    }
};

export default (options, objects) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    set(canvas, options, 'width', 256);
    set(canvas, options, 'height', 256);

    objects.forEach((object) => drawObject(ctx, canvas, object));

    return new THREE.CanvasTexture(canvas);
};
