describe('with generic', () => {
	class GenericData<T> {
		constructor(
			public value: T,
		) { }
	}

	it('must generic', () => {
		const data = new GenericData(10)
		expect(data.value).toBe(10)
		// data.value = true // error

		const data1 = new GenericData("irda")
		expect(data.value).toBe("irda")
	})
})