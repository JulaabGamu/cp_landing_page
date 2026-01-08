export { };

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
    export class MeshLineGeometry {
        setPoints(points: THREE.Vector3[]): void;
    }
    export class MeshLineMaterial {
        constructor(params?: Record<string, unknown>);
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            meshLineGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            meshLineMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                color?: string;
                depthTest?: boolean;
                resolution?: [number, number];
                useMap?: boolean;
                map?: THREE.Texture;
                repeat?: [number, number];
                lineWidth?: number;
            };
        }
    }
}
