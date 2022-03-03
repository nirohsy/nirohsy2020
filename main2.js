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
 

const loader = new GLTFLoader();

loader.load( 'AR-allItem1.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
	 // カメラコントローラーを更新
      controls.update();

      // レンダリング
      renderer.render(scene, camera);
 }

    ScrollReveal().reveal('.fadein',{
      duration: 800,
      viewFactor: 0.2,
      reset: true
    });
