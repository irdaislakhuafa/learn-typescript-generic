describe('generic multiple', () => {
	class Entry<K, V> {
		constructor(
			public key: K,
			public value: V
		) { }
	}

	class Triple<K, V, T> {
		constructor(
			public first: K,
			public second: V,
			public third: T,
		) { }
	}

	it('learn generic multiple', () => {
		const entry = new Entry<number, string>(1, "irda")
		expect(entry.key).toBe(1)
		expect(entry.value).toBe("irda")

		const triple = new Triple<number, string, boolean>(1, "irda", true)
		expect(triple.first).toBe(1)
		expect(triple.second).toBe("irda")
		expect(triple.third).toBe(true)
	})
})