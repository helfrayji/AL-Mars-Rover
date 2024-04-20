import { Planet } from '../src/conf/planet';
import { Point } from '../src/domain/point';

describe('Planet', () => {
    test('addObstacle should add the obstacle to the planet', () => {
        const planet = new Planet(100);

        const obstacle = { position: new Point(10, 20) };
        planet.addObstacle(obstacle);

        expect(planet.getObstacles()).toContain(obstacle);
    });

    test('isObstacle should return true if the given point is an obstacle on the planet', () => {
        const planet = new Planet(100);

        const obstacle = { position: new Point(10, 20) };
        planet.addObstacle(obstacle);

        const result = planet.isObstacle(new Point(10, 20));
        expect(result).toBe(true);
    });

    test('isObstacle should return false if the given point is not an obstacle on the planet', () => {
        const planet = new Planet(100);

        const obstacle = { position: new Point(10, 20) };
        planet.addObstacle(obstacle);

        const result = planet.isObstacle(new Point(30, 40));
        expect(result).toBe(false);
    });

    test('wrapAround should correctly wrap the longitude and latitude of the given point', () => {
        const planet = new Planet(100);

        const point = new Point(-10, 400);
        const wrappedPoint = planet.wrapAround(point);
        
        expect(wrappedPoint.longitude).toEqual(350);
        expect(wrappedPoint.latitude).toEqual(40);
    });
});
