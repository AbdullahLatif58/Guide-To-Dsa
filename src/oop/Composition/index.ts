// Building a class by giving it other objects as dependencies instead of inheriting from those objects.


// Car
//  └── HAS-A → Engine


class Engine {
    start() {
        console.log("Engine started");
    }
}

class Car {
    constructor(private engine: Engine) {}
    drive() {
        this.engine.start();
        console.log("Car driving");
    }
}

const engine = new Engine();
const car = new Car(engine);

car.drive();




class LLMProvider {
    chat() {}
}

class ConversationService {
    constructor(private llm: LLMProvider) {}

    async respond(message: string) {
        return this.llm.chat(message);
    }
}

const ollama = new OllamaProvider();

const conversation = new ConversationService(ollama);

