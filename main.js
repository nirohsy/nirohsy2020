window.onload = function() {
  const wait = document.getElementById('loading');
  wait.classList.add('loaded');
}

window.addEventListener('load', init);
    function init() {
      // サイズを指定 
      const width = 414;
      const height = 540;

      // レンダラーを作成
      const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#canvas')
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);

      // シーンを作成
      const scene = new THREE.Scene();

      // カメラを作成
      const camera = new THREE.PerspectiveCamera(45, width / height);
      // カメラの初期座標を設定
      camera.position.set(0, 0, 1000);
      const controls = new THREE.OrbitControls(camera, renderer.domElement);
      // 滑らかにカメラコントローラーを制御する
      controls.enableDamping = true;
      controls.dampingFactor = 0.2;

      // マテリアルにテクスチャーを設定
      const material =new THREE.MeshNormalMaterial();
      const geometry = new THREE.TorusGeometry(100, 70, 30, 100);
      const earthMesh = new THREE.Mesh(geometry, material);
       // を作成
          
      scene.add(earthMesh);
      // 星屑を作成します (カメラの動きをわかりやすくするため)
      createStarField();
      function createStarField() {
        // 形状データを作成
        const geometry = new THREE.Geometry();
        for (let i = 0; i < 1000; i++) {
          geometry.vertices.push(
            new THREE.Vector3(
              3000 * (Math.random() - 0.5),
              3000 * (Math.random() - 0.5),
              3000 * (Math.random() - 0.5)
            )
          );
        }
      // マテリアルを作成
      const material = new THREE.PointsMaterial({
        size: 10,
        color: 0xffffff
      });

      // 物体を作成
      const mesh = new THREE.Points(geometry, material);
      scene.add(mesh);
      }

      // 平行光源
      const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);

      // 毎フレーム時に実行されるループイベントです
      function tick() {
      // 地球は常に回転させておく
      earthMesh.rotation.y += 0.00001;

      // カメラコントローラーを更新
      controls.update();

      // レンダリング
      renderer.render(scene, camera);

      requestAnimationFrame(tick);
      }
    }

    ScrollReveal().reveal('.fadein',{
      duration: 800,
      viewFactor: 0.2,
      reset: true
    });
