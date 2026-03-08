// never : function will never return anything
function fnc(msg: string): never {
    throw new Error(msg);
}

// void : function doesn't return a useful value
function log(msg: string) {
    console.log(msg);
}

// ** Never Every use 'Any' as return type
const valueAny: any = JSON.parse;

// Fix function arg values via types
type argType = "up" | "down";
function func(arg: argType): void {
    console.log(arg);
}

func("up");

const arg01 = "up";
func(arg01);

let arg02: "up" | "down" = "down";
func(arg02);

let arg03: argType = "up";
func(arg03);

type Admin = { role: "admin"; permissions: string[] };
type User = { role: "user"; email: string };

function handle(account: Admin | User) {
    if ("permissions" in account) {
        account.permissions; // ✅ Admin
    } else {
        account.email; // ✅ User
    }
}
