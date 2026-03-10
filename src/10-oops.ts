class Animal {
    protected type: string;
    protected dob: Date;

    constructor(type: string, dob: Date) {
        this.type = type;
        this.dob = dob;
    }

    sleep(): void {
        const namePart = "name" in this ? `name - ${this.name}` : "";
        console.log(`A ${this.type}, ${namePart} is sleeping.`);
    }

    calcAge(): number {
        const today = new Date();

        let age = today.getFullYear() - this.dob.getFullYear();

        const monthDiff = today.getMonth() - this.dob.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.dob.getDate())) {
            age--;
        }

        return age;
    }
}

class Dog extends Animal {
    private _name: string;
    constructor(name: string, dob: Date) {
        super("Dog", dob);
        this._name = name;
    }

    mkSound(): void {
        console.log(`A ${this.type}, name - ${this.name} is barking.`);
    }

    get name(): string {
        return this._name;
    }
}

const dog01 = new Dog("Tom", new Date("2004-03-21"));
dog01.sleep();
dog01.mkSound();
console.log(dog01.name);
console.log(dog01.calcAge());
