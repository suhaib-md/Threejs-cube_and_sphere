import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 3, 3, 3 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

cube.position.x = -2;
sphere.position.x = 2;

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);
scene.add(pointLight);
camera.position.z = 10;
const cameraRotationSpeed = 0.005;
const cameraMoveSpeed = 0.1;
let cameraAngle = 0;
function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.02;
	cube.rotation.y += 0.02;

    sphere.rotation.x += 0.02;
	sphere.rotation.y += 0.02;

    cameraAngle += cameraRotationSpeed;
    const cameraX = Math.sin(cameraAngle) * 15;  
    const cameraZ = Math.cos(cameraAngle) * 15;  
    camera.position.set(cameraX, 5, cameraZ);
    camera.lookAt(scene.position);

	renderer.render( scene, camera );
}

animate();