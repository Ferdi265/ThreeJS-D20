import * as THREE from 'three';

export default class Canvas {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
    };

    updateSize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    register() {
        this.updateSize();
        window.addEventListener('resize', this.updateSize.bind(this));
        document.body.appendChild(this.renderer.domElement);
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    animate() {
        this.render();

        window.requestAnimationFrame(this.animate.bind(this));
    }
}
