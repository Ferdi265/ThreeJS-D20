import * as THREE from 'three';
import Canvas from './Canvas.js';
import D20 from './D20';
import DragRotate from './DragRotate';

const canvas = new Canvas();

const ambientLight = new THREE.AmbientLight(0x404040);
const spotLight = new THREE.SpotLight(0xffffff);
const d20 = D20();

spotLight.position.set(0, 0, 5);

DragRotate(d20, canvas.renderer.domElement);

canvas.register();
canvas.camera.position.z = 5;
canvas.scene.add(ambientLight);
canvas.scene.add(spotLight);
canvas.scene.add(d20);
canvas.animate();
