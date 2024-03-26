import { Point } from "./point";

export interface PlanetInterface {
    Normaliser(point: Point): Point;
    EstLibre(position: Point): boolean;
    isObstacle(point: Point): boolean;
}
