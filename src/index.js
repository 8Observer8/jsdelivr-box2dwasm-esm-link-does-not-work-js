import { box2d, initBox2D } from "./init-box2d";

async function init() {
    await initBox2D();

    const {
        b2Vec2
    } = box2d;

    const vec = new b2Vec2(1, 2);
    console.log(`vec = (x: ${vec.x}, y: ${vec.y})`);
}

init();
