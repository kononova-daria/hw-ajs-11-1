export default class Team {
  push(...characters) {
    for (let i = 0; i < characters.length; i += 1) {
      this[`${characters[i].name}`] = characters[i];
    }
  }

  [Symbol.iterator]() {
    const characters = Object.values(this);
    let current = 0;
    const quantity = characters.length;

    return {
      next() {
        if (current < quantity) {
          const character = characters[current];
          current += 1;

          return {
            done: false,
            value: character,
          };
        }

        return {
          done: true,
        };
      },
    };
  }
}
