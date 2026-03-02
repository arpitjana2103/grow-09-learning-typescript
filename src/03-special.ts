let str: string = "Arpit";
str = "";

function fnc(msg: string): never {
    throw new Error(msg);
}

fnc("An errro occured");
