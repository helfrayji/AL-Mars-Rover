export class Point {
    constructor(public readonly longitude: number, public readonly latitude: number) {}

    incrementLongitude(amount: number): Point {
        const newLongitude = (this.longitude + amount) % 360;
        return new Point(newLongitude, this.latitude);
    }

    incrementLatitude(amount: number): Point {
        const newLatitude = (this.latitude + amount) % 360;
        return new Point(this.longitude, newLatitude);
    }

    DecrementLongitude(amount: number): Point {
        const newLongitude = (this.longitude - amount) % 360;
        return new Point(newLongitude, this.latitude);
    }

    DecrementLatitude(amount: number): Point {
        const newLatitude = (this.latitude - amount) % 360;
        return new Point(this.longitude, newLatitude);
    }
}
