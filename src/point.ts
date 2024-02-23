export class Point {
    constructor(private readonly longitude: number, private readonly latitude: number) {}

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

    getLongitude(): number {
        return this.longitude;
    }

    getLatitude(): number {
        return this.latitude;
    }

    isAtSamePointAs(otherPoint: Point): boolean {
        return this.longitude === otherPoint.getLongitude() && this.latitude === otherPoint.getLatitude();
    }
}
