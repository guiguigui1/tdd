import {Direction, Rover} from "./rover";

const startLocation = {x: 2,y: 3}

describe.only('Rover',  () => {
    it('should be able to move one step forward when facing north', () => {
        const expectedLocation = {x: 2,y: 2}
        const rover = new Rover(startLocation, Direction.NORTH);
        rover.move('F')
        expect(rover.location()).toEqual(expectedLocation)
    });

    it('should be able to move two step forward when facing north', () => {
        const expectedLocation = {x: 2,y: 1}
        const rover = new Rover(startLocation, Direction.NORTH);
        rover.move('FF')
        expect(rover.location()).toEqual(expectedLocation)
    });

    it('should be able to move one step forward when facing south', () => {
        const expectedLocation = {x: 2,y: 4}
        const rover = new Rover(startLocation, Direction.SOUTH);
        rover.move('F')
        expect(rover.location()).toEqual(expectedLocation)
    });

    it('should be able to move one step forward when facing east', () => {
        const expectedLocation = {x: 3,y: 3}
        const rover = new Rover(startLocation, Direction.EAST);
        rover.move('F')
        expect(rover.location()).toEqual(expectedLocation)
    })
    it('should be able to move one step forward when facing west', () => {
        const expectedLocation = {x: 1,y: 3}
        const rover = new Rover(startLocation, Direction.WEST);
        rover.move('F')
        expect(rover.location()).toEqual(expectedLocation)
    })

    it('should be able to move one step backward when facing south', () => {
        const expectedLocation = {x: 2,y: 2}
        const rover = new Rover(startLocation, Direction.SOUTH);
        rover.move('B')
        expect(rover.location()).toEqual(expectedLocation)
    });

    it('should be able to turn right when facing north', () => {
        const rover = new Rover(startLocation, Direction.NORTH);
        rover.move('R');
        expect(rover.direction).toEqual(Direction.EAST);
    });

    it('should be able to turn right when facing south', () => {
        const rover = new Rover(startLocation, Direction.SOUTH);
        rover.move('R');
        expect(rover.direction).toEqual(Direction.WEST);
    });

    it('should be able to turn right when facing west', () => {
        const rover = new Rover(startLocation, Direction.WEST);
        rover.move('R');
        expect(rover.direction).toEqual(Direction.NORTH);
    });

    it('should be able to turn left when facing west', () => {
        const rover = new Rover(startLocation, Direction.SOUTH);
        rover.move('L');
        expect(rover.direction).toEqual(Direction.EAST);
    });

    it('should be able to turn left when facing north', () => {
        const rover = new Rover(startLocation, Direction.NORTH);
        rover.move('L');
        expect(rover.direction).toEqual(Direction.WEST);
    });

    it('should be able to turn left when facing north', () => {
        const expectedLocation = {x: -1,y: 0}
        const rover = new Rover(startLocation, Direction.NORTH);
        rover.move('LFFFRRRBBBRFBL');
        expect(rover.direction).toEqual(Direction.SOUTH);
        expect(rover.location()).toEqual(expectedLocation);
    });

    it('should not move when an incorrect command is executed', () => {
        const expectedLocation = {x: 2,y: 3}
        const rover = new Rover(startLocation, Direction.SOUTH);
        rover.move('A')
        expect(rover.location()).toEqual(expectedLocation)
    });
});