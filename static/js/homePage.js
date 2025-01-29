import * as THREE from 'three';

//3D View Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg') });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000e1d, 1);

camera.position.z = 35;

renderer.render(scene, camera);

//Instantiate Objects
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })

const cube1 = new THREE.Mesh(new THREE.BoxGeometry(8, 8, 8), cubeMaterial);
cube1.position.set(45, 16, -10);

const cube2 = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), cubeMaterial);
cube2.position.set(-12, 16, -8);

const cube3 = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), cubeMaterial);
cube3.position.set(-25, -15, 0);

const cube4 = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), cubeMaterial);
cube4.position.set(20, -10, 7);

const sphere1 = new THREE.Mesh(new THREE.SphereGeometry(.3, 14, 9), sphereMaterial);
sphere1.position.set(-3, -13, 0);

const sphere2 = new THREE.Mesh(new THREE.SphereGeometry(.3, 14, 9), sphereMaterial);
sphere2.position.set(50, -3, -10);

const sphere3 = new THREE.Mesh(new THREE.SphereGeometry(.3, 14, 9), sphereMaterial);
sphere3.position.set(-40, 16, -8);

const sphere4 = new THREE.Mesh(new THREE.SphereGeometry(.3, 14, 9), sphereMaterial);
sphere4.position.set(-50, 10, -8);

const sphere5 = new THREE.Mesh(new THREE.SphereGeometry(.3, 14, 9), sphereMaterial);
sphere5.position.set(18, 18, -8);

scene.add(cube1, cube2, cube3, cube4, sphere1, sphere2, sphere3, sphere4, sphere5);

//Animate function
function animate() {
    requestAnimationFrame(animate);

    cube1.rotation.x += 0.002;

    cube2.rotation.x += -0.001;
    cube2.rotation.y += -0.001;

    cube3.rotation.x += 0.001;
    cube3.rotation.y += 0.001;

    cube4.rotation.x += -0.001;
    cube4.rotation.y += -0.002;


    renderer.render(scene, camera);
}

animate();