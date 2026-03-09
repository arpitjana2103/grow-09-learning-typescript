type UserInfo = {
    firstN: string;
    lastN: string;
    age: number;
};

type AccountDetails = {
    accountNumber: number;
    email: string;
};

const user1: UserInfo | AccountDetails = {
    firstN: "Arpit",
    lastN: "Jana",
    age: 27,
};

const user2: UserInfo | AccountDetails = {
    accountNumber: 123456456,
    email: "arpit@gmail.com",
};

// Literal Union Type
type rgb = "red" | "green" | "blue";

const color: rgb = "red";
