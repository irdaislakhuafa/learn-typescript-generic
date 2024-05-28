describe('without generic', () => {
	class Data {
		constructor(
			public value: any,
		) { }
	}

	it('accept all values', () => {
		const data = new Data("irda")
		expect(data.value).toBe("irda")

		data.value = 10
		expect(data.value).toBe(10)

		data.value = true
		expect(data.value).toBe(true)
	})
})