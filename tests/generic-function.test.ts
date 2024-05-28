describe('generic function', () => {
	function create<T>(value: T): T {
		return value
	}

	it('learn generic function', () => {
		const result = create("irda")
		expect(result).toBe("irda")

		const result2 = create<number>(10)
		expect(result2).toBe(10)
	})
})