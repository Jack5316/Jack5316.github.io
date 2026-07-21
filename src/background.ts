import * as THREE from "three";

/**
 * Animated particle wave field with mouse parallax.
 * A grid of points displaced by layered sine waves, rendered
 * with additive blending in cyan/violet tones.
 */
export function initBackground(canvas: HTMLCanvasElement): void {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05060a, 0.0008);

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    2000
  );
  camera.position.set(0, 120, 420);

  // --- Particle grid ---
  const COLS = 180;
  const ROWS = 100;
  const SEP = 22;
  const count = COLS * ROWS;

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const cyan = new THREE.Color(0x22d3ee);
  const violet = new THREE.Color(0x8b5cf6);
  const fuchsia = new THREE.Color(0xe879f9);

  let i = 0;
  for (let x = 0; x < COLS; x++) {
    for (let z = 0; z < ROWS; z++) {
      positions[i * 3] = (x - COLS / 2) * SEP;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = (z - ROWS / 2) * SEP;

      const t = x / COLS;
      const c = t < 0.5
        ? cyan.clone().lerp(violet, t * 2)
        : violet.clone().lerp(fuchsia, (t - 0.5) * 2);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
      i++;
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  // Soft round sprite for each particle
  const spriteCanvas = document.createElement("canvas");
  spriteCanvas.width = spriteCanvas.height = 32;
  const ctx = spriteCanvas.getContext("2d")!;
  const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.4, "rgba(255,255,255,0.4)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 32, 32);
  const sprite = new THREE.CanvasTexture(spriteCanvas);

  const material = new THREE.PointsMaterial({
    size: 7.5,
    map: sprite,
    vertexColors: true,
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // --- Mouse parallax ---
  let targetX = 0;
  let targetY = 0;
  let mouseX = 0;
  let mouseY = 0;
  window.addEventListener("pointermove", (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // --- Scroll: sink the field as you scroll down ---
  let scrollProgress = 0;
  window.addEventListener("scroll", () => {
    scrollProgress = Math.min(window.scrollY / window.innerHeight, 1);
  }, { passive: true });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const posAttr = geometry.attributes.position as THREE.BufferAttribute;
  const clock = new THREE.Clock();

  function animate() {
    const t = clock.getElapsedTime() * (reducedMotion ? 0.15 : 0.6);

    let idx = 0;
    for (let x = 0; x < COLS; x++) {
      for (let z = 0; z < ROWS; z++) {
        const px = posAttr.getX(idx);
        const pz = posAttr.getZ(idx);
        const y =
          Math.sin(px * 0.004 + t) * 34 +
          Math.cos(pz * 0.006 + t * 0.8) * 28 +
          Math.sin((px + pz) * 0.002 + t * 0.5) * 20;
        posAttr.setY(idx, y);
        idx++;
      }
    }
    posAttr.needsUpdate = true;

    mouseX += (targetX - mouseX) * 0.04;
    mouseY += (targetY - mouseY) * 0.04;

    camera.position.x = 420 * Math.sin(mouseX * 0.25);
    camera.position.y = 120 + mouseY * -40 - scrollProgress * 160;
    camera.position.z = 420 - scrollProgress * 120;
    camera.lookAt(0, -scrollProgress * 100, 0);

    material.opacity = 0.95 * (1 - scrollProgress * 0.75);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
}
