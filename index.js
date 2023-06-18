const startGame = (hero, enemy) => {
  while (hero.health > 0 && enemy.health > 0) {
    let num = getRandomNumberInRange(0, 1);
    if (num === 0) {
      hero.heatEnemy(enemy);   
    } else {
      enemy.heatHero(hero);
    }
  }
 
  if (hero.health <= 0) {
    return alert(`${enemy.name} победил! У него осталось ${enemy.health} здоровья`);
  } else if(enemy.health <= 0) {
    return alert(`${hero.name} победил! У него осталось ${hero.health} здоровья`);
  } else {
    return alert(undefined);
  }
}

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const heroPlayer = {
  name: 'Batman',
  health: 100,
  heatEnemy(enemy) {
    enemy.health -= 10;
  }
};
const enemyPlayer = {
  name: 'Joker',
  health: 100,
  heatHero(hero) {
    hero.health -= 10;
  }
};

startGame(heroPlayer, enemyPlayer);




