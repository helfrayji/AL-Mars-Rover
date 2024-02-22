import { Point } from "./point";
import { Obstacle } from "./obstacle";

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
        const wrappedLongitude = (point.longitude + 360) % 360;
        const wrappedLatitude = (point.latitude + 360) % 360;
        return new Point(wrappedLongitude, wrappedLatitude);
    }

    getObstacles(): Obstacle[] {
        return this.obstacles;
    }
}
