import Earth from '../ui/globe';

export default function Globe1() {
  return (
    <>
      <div className="bg-background flex flex-col items-center justify-center overflow-hidden">
        <article className="border-border relative mx-auto my-8 max-w-[500px] rounded-xl border p-5 text-center">
          <div className="relative z-10">
            <h1 className="text-7xl leading-[100%] font-semibold tracking-tighter mb-8">
            Tech that sells itself
            </h1>
            {/* Normalized RGB values i.e (RGB or color / 255) */}
            <div className="h-[400px] w-full">
              <Earth
                baseColor={[1, 0, 0.3]}
                markerColor={[1, 0, 0.33]}
                glowColor={[1, 0, 0.3]}
                scale={1.1}
                theta={0.25}
                dark={1}
                diffuse={1.2}
                mapSamples={40000}
                mapBrightness={6}
              />
            </div>
          </div>
        </article>
      </div>
    </>
  );
} 