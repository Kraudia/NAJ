(function (global) {
	var Animal = {
		eat(otherAnimal) {
            if (Object.getPrototypeOf(this) === Cat) {
                if (Object.getPrototypeOf(otherAnimal) === Bird) {
                    return 'Mniam!';
                }
            } else {
                if (Object.getPrototypeOf(this) === Bird) {
                    if (Object.getPrototypeOf(otherAnimal) === Worm) {
                        return 'Mniam!';
                    }
                }
            }
            return 'Blee!';
		}
	};
	var Cat = Object.create(Animal),
        Bird = Object.create(Animal),
        Worm = Object.create(Animal);

	if (!global.UAM) {
		global.UAM = {};
	}

	global.UAM.Cat = Cat;
	global.UAM.Bird = Bird;
	global.UAM.Worm = Worm;

}(window));

/*
	W zadaniu mamy 3 rodzaje zwierząt: koty, ptaki i robaki. Respektując prawa natury koty jedzą ptaki, a ptaki robaki.
	Zaimplementuj obiekty Cat, Bird i Worm tak, aby poniższy kod zwracał prawidłowe rezultaty:

	var cat1 = Object.create(Cat);
	var cat2 = Object.create(Cat);
	var bird = Object.create(Bird);
	var worm = Object.create(Worm);

	cat1.eat(bird); // "Mniam!"
	cat2.eat(bird); // "Mniam!"
	bird.eat(worm); // "Mniam!"
	worm.eat(cat1); // "Blee!"
	cat1.eat(cat2); // "Blee!"

	Dodatkowo wszystkie obiekty mają korzystać ze wspólnej metody eat.
*/


