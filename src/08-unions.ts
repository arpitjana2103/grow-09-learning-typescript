type UserInfo = {
    firstN: string;
    lastN: string;
    age: number;
};

type AccountDetails = {
    accountNumber: number;
    email: string;
};

const user: UserInfo & AccountDetails = {
    firstN: "Arpit",
    lastN: "Jana",
    age: 27,
    email: "aj19990321@gmail.com",
    // accountNumber: 123456,
};
