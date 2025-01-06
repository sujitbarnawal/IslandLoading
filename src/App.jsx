/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./Loader";
import Island from "./Island";

function App() {
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition, rotation;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
      rotation = [0.1, 4.7, 0];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43];
      rotation = [0.1, 4.7, 0];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative flex justify-center items-center">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor='#b1e1ff' groundColor="#000000" intensity={1} />

          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default App;
