const directions = new Set<string>(["left", "right", "up", "rightLeft"]);

directions.add("down").add("straight").add("rightLeft");

directions.add("hardLeft");

const isAvaiable = directions.has("rightLeft");
const sizeCount = directions.size;
// directions.clear();

for (let sizeCount of directions) {
  // console.log(sizeCount);     //Prints 1 2 3 4 5 6
}

// directions.forEach(val => console.log(val));

// console.log(sizeCount);
class SetWithContentEquality<T> {
    private items: T[] = [];
    private getKey: (item: T) => string;

    constructor(getKey: (item: T) => string) {
        this.getKey = getKey;
    }

    add(item: T): void {
        const key = this.getKey(item);
        if (!this.items.some(existing => this.getKey(existing) === key)) {
            this.items.push(item);
        }
    }

    has(item: T): boolean {
        return this.items.some(existing => this.getKey(existing) === this.getKey(item));
    }

    values(): T[] {
        return [...this.items];
    }
}

type Person = Record<string, string>;
const personSet = new Set<Person>();

const john: Person = {
  name: "John",
};
const johnDuplicate: Person = {
  name: "John",
};

personSet.add(john);
personSet.add(johnDuplicate);

const personSetting = new SetWithContentEquality<Person>(person => person.name);


const johny: Person = {
    name: "Johny",
  };
  const johnDuplicatte: Person = {
    name: "Johny",
  };
  
  personSetting.add(john);
  personSetting.add(johnDuplicate);


console.log(personSetting.values());



