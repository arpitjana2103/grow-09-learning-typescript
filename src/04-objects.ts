type UserType = {
    id: string; //               required
    name: string; //             required
    email?: string; //           optional
    readonly createdAt: Date; // readonly can't be reassigned
};

const user01: UserType = {
    id: "01",
    name: "Arpit",
    email: "aj19990321@gmail.com",
    createdAt: new Date(),
};

// Property type be string, and value type be number
// Property name can be anything.
type CountType01 = { [key: string]: number };

const count01: CountType01 = {
    students: 50,
    theachers: 5,
};

// Property type be string , and value type be number
// Property name can be "likes" or "views" or "shares" , other property names are not allowed
type CountType02 = Record<"likes" | "views" | "shares", number>;

const count02: CountType02 = {
    likes: 100,
    views: 120,
    shares: 90,
};
