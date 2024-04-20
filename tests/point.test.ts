import { Point } from '../src/domain/point';

describe('Point', () => {
    test('incrementLongitude should correctly increment the longitude by the specified amount', () => {
        // Given
        const initialPoint = new Point(10, 20);
        const amount = 30;

        // When
        const newPoint = initialPoint.incrementLongitude(amount);

        // Then
        expect(newPoint.longitude).toEqual(40);
        expect(newPoint.latitude).toEqual(20);
    });

    test('incrementLatitude should correctly increment the latitude by the specified amount', () => {
        // Given
        const initialPoint = new Point(10, 20);
        const amount = 30;

        // When
        const newPoint = initialPoint.incrementLatitude(amount);

        // Then
        expect(newPoint.longitude).toEqual(10);
        expect(newPoint.latitude).toEqual(50);
    });

    test('DecrementLongitude should correctly decrement the longitude by the specified amount', () => {
        // Given
        const initialPoint = new Point(100, 200);
        const amount = 50;

        // When
        const newPoint = initialPoint.DecrementLongitude(amount);

        // Then
        expect(newPoint.longitude).toEqual(50);
        expect(newPoint.latitude).toEqual(200);
    });

    test('DecrementLatitude should correctly decrement the latitude by the specified amount', () => {
        // Given
        const initialPoint = new Point(100, 200);
        const amount = 70;

        // When
        const newPoint = initialPoint.DecrementLatitude(amount);

        // Then
        expect(newPoint.longitude).toEqual(100);
        expect(newPoint.latitude).toEqual(130);
    });
});
