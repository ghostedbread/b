var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

function Block(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.display = function() {
        var blockbox = new THREE.BoxBufferGeometry(5, 5, 5);
        var blockmesh = new THREE.MeshBasicMaterial({color: 0x00ff00});
        var block = new THREE.Mesh(blockbox, blockmesh);
        scene.add(block);
        block.position.x = this.x
        block.position.y = this.y
        block.position.z = this.z

        var edges = new THREE.EdgesGeometry(blockbox);
        var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0xffffff}))
        scene.add(line);
        line.position.x = this.x
        line.position.y = this.y
        line.position.z = this.z
    }
}

let blocks = [];
for (var x = 0; x < 20; x++) {
    for (var z = 0; z < 20; z++) {
        var v;
        blocks.push(new Block(x * 5), v, z)
    }
}

function update() {

}
window.addEventListener("resize", function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})
function render() {
    renderer.render(scene, camera);
}
function loop() {
    requestAnimationFrame(loop);
    update();
    render();
}
loop();