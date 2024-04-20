import { Point } from "../domain/point";
import { Obstacle } from "../domain/obstacle";

const FULL_CIRCLE_DEGREES: number = 360;

export class Planet {
    private readonly obstacles: Obstacle[] = []; 

    constructor(public readonly radius: number) {}

    addObstacle(obstacle: Obstacle): void {
        this.obstacles.push(obstacle);
    }

    isObstacle(point: Point): boolean {
        return this.obstacles.some(obstacle => obstacle.position.longitude === point.longitude && obstacle.position.latitude === point.latitude);
    }

    wrapAround(point: Point): Point {
        const wrappedLongitude = (point.longitude + FULL_CIRCLE_DEGREES) % FULL_CIRCLE_DEGREES;
        const wrappedLatitude = (point.latitude + FULL_CIRCLE_DEGREES) % FULL_CIRCLE_DEGREES;
        return new Point(wrappedLongitude, wrappedLatitude);
    }

    getObstacles(): Obstacle[] {
        return this.obstacles;
    }
}
