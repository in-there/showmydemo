import {
    BoxGeometry,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
    Color,
} from 'three';

// 获取容器
const container = document.getElementById('scene-container');

// 创建场景
const scene = new Scene();

// 设置背景色
scene.background = new Color('black');

// 创建相机
const fov = 35; // 视野范围
const aspect = container.clientWidth / container.clientHeight; // 宽高比
const near = 0.1; // 近平面
const far = 100; // 远平面
const camera = new PerspectiveCamera(fov, aspect, near, far);

// 设置相机位置
camera.position.set(0, 0, 10);

// 创建几何体
const geometry = new BoxGeometry(2, 2, 2);

// 创建材质
const material = new MeshBasicMaterial();
//材质颜色
material.color.set('skyblue');
//线框模式
material.wireframe = true;

// 创建网格
const mesh = new Mesh(geometry, material);

// 添加网格到场景
scene.add(mesh);

// 设置网格旋转
mesh.rotation.set(-0.5, -0.1, 0.8);

// 创建渲染器
const renderer = new WebGLRenderer();

// 设置渲染器大小
renderer.setSize(container.clientWidth, container.clientHeight);

// 设置像素比
renderer.setPixelRatio(window.devicePixelRatio);

// 将渲染器添加到容器中
container.appendChild(renderer.domElement);

// 渲染场景
renderer.render(scene, camera);