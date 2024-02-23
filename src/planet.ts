import { Point } from "./point";
import { Obstacle } from "./obstacle";

const FULL_CIRCLE_DEGREES: number = 360;

export class Planet {
    private obstacles: Obstacle[] = [];

    constructor(private readonly radius: number) {}

    addObstacle(obstacle: Obstacle): void {
        this.obstacles.push(obstacle);
    }

    hasObstacleAt(point: Point): boolean {
        return this.obstacles.some(obstacle => obstacle.position.isAtSamePointAs(point));
    }

    wrapAround(point: Point): Point {
        const wrappedLongitude = (point.getLongitude() + FULL_CIRCLE_DEGREES) % FULL_CIRCLE_DEGREES;
        const wrappedLatitude = (point.getLatitude() + FULL_CIRCLE_DEGREES) % FULL_CIRCLE_DEGREES;
        return new Point(wrappedLongitude, wrappedLatitude);
    }

    getObstacles(): Obstacle[] {
        return [...this.obstacles];
    }
}
