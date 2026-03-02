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
