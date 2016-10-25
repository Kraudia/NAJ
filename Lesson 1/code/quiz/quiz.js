describe('Odgadniej wartoœci zmiennych', function () {
	it('Pytanie 1', function () {
		var a;

		expect(a).toBe(a); //<
	});

	it('Pytanie 2', function () {
		var a = 1, b = "2";

		expect(a + b).toBe("12"); //<
	});

	it('Pytanie 3', function () {
		var a = "a" * 2, b = 1;

		if (a) {
			b = 3;
		}
        
		expect(b).toBe(1); //<
	});

	it('Pytanie 4', function () {
		expect(typeof null).toBe("object"); //<
		expect(typeof 3).toBe("number"); //<
	});

	it('Pytanie 5', function () {
		if (true) {
			var a = 1;
		}

		expect(a).toBe(1); //<
	});

	it('Pytanie 6', function () {
		var arr = [1, 2, 3, undefined, undefined];
		expect(arr.length).toBe(5); //<
	});

	it('Pytanie 7', function () {
		var arr = [1];
		arr[99] = 2;
		expect(arr.length).toBe(100); //<
	});


	it('Pytanie 8', function () {
		var a, obj = {};

		obj[a] = 12;

		expect(Object.keys(obj)[0]).toBe("undefined"); //<
	});

	it('Pytanie 9', function () {
		var foo = 1;

		var bar = function () {
			var foo;
            
			expect(foo).toBe(undefined); //<

			foo = 3;
			b = 4;
			return foo + 2;
		};

		expect(foo).toBe(1); //<
		bar = bar();

		expect(b).toBe(4); //<
		expect(bar).toBe(5); //<
	});

	it('Pytanie 10', function () {
		var err = false, result;

		result = 2 * "5";
		if (result === NaN) {
			err = true;
		}
		expect(err).toBe(false); //<
	});

	it('Pytanie 11', function () {
		expect(false || true || false).toBe(true); //<
	});

	it('Pytanie 12', function () {
		expect(false || "" || null || "0" || "test" || NaN).toBe("0"); //<
	});

	it('Pytanie 13', function () {
		expect((true && ("t" + false) && {} && (1 - 1)) || ([undefined].length)).toBe(1); //<
	});
});