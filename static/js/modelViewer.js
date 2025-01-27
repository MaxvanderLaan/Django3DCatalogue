import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//3D View Setup
const canvas = document.getElementById('bg');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas });

renderer.setClearColor(0xbababa);

camera.position.z = 20;
camera.position.y = 8;

renderer.render(scene, camera);

//Instantiate Object
const loader = new GLTFLoader();
loader.load(modelUrl, function (gltf) {
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
});

// Add Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

// Add Helpers
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);
const controls = new OrbitControls(camera, renderer.domElement);

window.addEventListener('resize', resizeCanvas);

// functions
function resizeCanvas() {
    const width = window.innerWidth * 0.8;
    const height = window.innerHeight * 0.8;

    canvas.width = width * .73;
    canvas.height = height;

    renderer.setSize(canvas.width, canvas.height);

    camera.aspect = canvas.width / canvas.height;
    camera.updateProjectionMatrix();
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

resizeCanvas();
animate();

document.getElementById('downloadBtn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = modelUrl;
    link.download = modelUrl.split('/').pop();
    link.click();
});
