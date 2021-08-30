import Person from './person';
import Team from './team';

const bowman = new Person('1', 'Bowman', 50, 1, 40, 10);
const magician = new Person('2', 'Magician', 65, 2, 50, 15);

const team = new Team();

team.push(bowman, magician);

for (const character of team) {
  // eslint-disable-next-line no-console
  console.log(character);
}
