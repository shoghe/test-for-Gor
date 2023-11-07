// const person: {
//     name: string;
//     age: number;
// } = {

enum Position {ADMIN, READ_ONLY, AUTHOR};

// const person : {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number,string];
//     position: EnumType
// }= {
    const person = {
    name: "shogher",
    age: 25,
    hobbies: ['sports','cooking'],
    role: [2, 'author'],
    position: Position.ADMIN,
    
};

    // person.role.push('admin');
    // person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());

}

if (person.position === Position.ADMIN){
    console.log('she is an admin');
}