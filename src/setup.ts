import {Good} from "./models/Good";
import {Color} from "./models/Color";
import {sequelize} from "./utils/db";

(async () => {
    await Good.sync({ force: true });
    await Color.sync({ force: true });

    await Color.create({
        name: 'green',
    });
    await Color.create({
        name: 'blue',
    });
    await Color.create({
        name: 'red',
    });

    await sequelize.close();

    console.log('synced!');
})();