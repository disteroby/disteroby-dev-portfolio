import { Grid } from "@react-three/drei";

export default function HeroGrid() {
    return (
        <>
            <Grid
                renderOrder={-1}
                position={[0, -1.1, -0.475]}
                infiniteGrid
                cellSize={0.5}
                cellThickness={0.75}
                sectionSize={2.5}
                sectionThickness={1.5}
                sectionColor={"#5c6365"}
                cellColor={"#7b7d7e"}
                fadeDistance={40}
                fadeStrength={5}
            />
            <Grid
                rotation-x={Math.PI / 2}
                renderOrder={-1}
                position={[0, -3.25, -50]}
                infiniteGrid
                cellSize={6.5 / 5}
                cellThickness={0.75}
                sectionSize={6.5}
                sectionThickness={1}
                sectionColor={"#3b3e3f"}
                cellColor={"#414343"}
                fadeDistance={200}
                fadeStrength={10}
            />
        </>
    );
}
