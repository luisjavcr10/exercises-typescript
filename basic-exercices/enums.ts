enum Status {
    Pending, // 0
    InProgress, // 1
    Completed // 2
}
console.log(Status.Pending); // Output: 0
console.log(Status.InProgress); // Output: 1
console.log(Status.Completed); // Output: 2

enum ResponseCode {
    Success = 200,
    BadRequest = 400,
    NotFound = 404
}
console.log(ResponseCode.Success); // Output: 200
console.log(ResponseCode.BadRequest); // Output: 400
console.log(ResponseCode.NotFound); // Output: 404

enum Direction {
    North = "NORTH",
    South = "SOUTH",
    East = "EAST",
    West = "WEST"
}
console.log(Direction.North); // Output: "NORTH"
console.log(Direction.West); // Output: "WEST