import { Flex, Heading } from "@radix-ui/themes";
import { Ps5 } from "../components/3D/Ps5";
import { Canvas } from "@react-three/fiber";
import { Mice } from "../components/3D/Mice";
import { VR } from "../components/3D/VR";
import { Float, PresentationControls } from "@react-three/drei";
import { Unity3D } from "../components/3D/Unity";

export const EventComponent = ({ title, type }) => {
  return (
    <Flex
      style={{
        backgroundColor: "rgb(0 0 0 / 50%)",
        borderRadius: "5%",
        borderBottomRightRadius: "20%",
        borderTopLeftRadius: "20%",
        border: "hsla(267, 100%, 63%, 0.3) 3px ridge",
        padding: "1.5rem 1rem",
        width: "90%",
        maxWidth: "500px",
      }}
      justify="between"
      align="center"
      grow="1"
    >
      <div
        style={{
          backgroundColor: "hsla(240, 63%, 13%, 1)",
          padding: "20px",
          borderBottom: "hsla(267, 100%, 63%, 0.3) 4px ridge",
          borderRight: "hsla(267, 100%, 63%, 0.3) 3px ridge",
          borderBottomRightRadius: "30%",
          flex: 1,
        }}
      >
        <Heading
          size={{
            initial: "3",
            sm: "4",
            md: "7",
            xl: "9",
          }}
        >
          {title}
        </Heading>
      </div>
      <div style={{ flex: 2, minWidth: "200px" }}>
        <Canvas>
          <ambientLight intensity={1} />
          <PresentationControls>
            <pointLight intensity={7} position={[1, 2, 1]} />
            <Float speed={3} rotationIntensity={2}>
              {type == "PS5" && <Ps5 />}
              {type == "PC" && <Mice />}
              {type == "VR" && <VR />}
              {type == "Unity" && <Unity3D />}
            </Float>
          </PresentationControls>
        </Canvas>
      </div>
    </Flex>
  );
};
