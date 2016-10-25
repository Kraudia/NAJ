describe("Aircraft application tests", function() {

	describe('Functional tests', function () {
        
        beforeEach(function() {
        });
        
        it ('Check whether library exist and if it is empty array', function() {
            expect(UAM.library).not.toBe(undefined);
            expect(UAM.library.length).toEqual(0);
        });
	});
});
