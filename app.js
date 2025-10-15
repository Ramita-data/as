// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCE0ZDLVFEUdbNN_pm2QAAiQnRGvwHqooI",
  authDomain: "dreampop-therapy.firebaseapp.com",
  projectId: "dreampop-therapy",
  storageBucket: "dreampop-therapy.firebasestorage.app",
  messagingSenderId: "1033337317445",
  appId: "1:1033337317445:web:a5fc7bd4d0994224349b2c",
  measurementId: "G-1Y860SDEJX"
};
firebase.initializeApp(firebaseConfig);

// Simple Phaser Scene
const config = {
  type: Phaser.AUTO,
  parent: 'phaser-root',
  width: window.innerWidth,
  height: window.innerHeight - 50,
  backgroundColor: '#0b0920',
  scene: {
    preload() {},
    create() {
      this.add.text(20, 20, "Welcome to DreamPop Therapy", { fontSize: "20px", fill: "#8b7cff" });
    },
    update() {}
  },
  scale: { mode: Phaser.Scale.RESIZE, autoCenter: Phaser.Scale.CENTER_BOTH }
};
new Phaser.Game(config);
