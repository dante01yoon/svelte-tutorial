<script>
	let name = 'world';
	let a = 0;
	let b = 0;
	let yes = true;
	/** @type {string} */
	let answer;
	const options = ['1', '2', '3', '4'];
	/** @type {number}*/
	let scoop;
	let scoops = ['vanilla', 'strawberry', 'cherry', 'chocolate', 'almond'];
	/** @type {string[]} */
	let basket = [];
	/** @type {string[]} */
	let flavors = [];
	/** @type {string} */
	let texts;
</script>

<main>
	<h1>Bindings</h1>
	<section>
		<article>
			<h2>Text inputs</h2>
			<div>
				<input bind:value={name} name={'bind value'} />
				<span>: {name}</span>
			</div>
		</article>
		<article>
			<h2>Number inputs</h2>
			<div>
				<label>
					<div>
						<input type="number" bind:value={a} min="0" max="10" />
						<span>: {a}</span>
					</div>
					<div>
						<input type="range" bind:value={b} min="0" max="100" />
						<span>: {b}</span>
					</div>
				</label>
			</div>
		</article>
		<article>
			<h2>Checkbox inputs</h2>
			<div>
				<input bind:checked={yes} name={'checke box'} type="checkbox" />
				<span>: {yes}</span>
			</div>
		</article>
		<article>
			<h2>Select inputs - single</h2>
			<div>
				<select bind:value={answer} on:change={(e) => (answer = e.currentTarget.value)}>
					{#each options as option (option)}
						<option value={option}>{option}</option>
					{/each}
				</select>
				<span>: {answer}</span>
			</div>
		</article>
		<article>
			<h2>Select inputs - multiple (Press and hold command(MacOS) or control(Window) key )</h2>
			<div>
				<select multiple bind:value={flavors}>
					{#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavor (flavor)}
						<option>{flavor}</option>
					{/each}
				</select>
				<span>: {flavors}</span>
			</div>
		</article>
		<article>
			<h2>Group inputs - radio</h2>
			<div>
				{#each scoops as scoop (scoop)}
					<input type="radio" name="scoops" value={scoop} bind:group={basket} />
				{/each}
				<span>: {basket}</span>
			</div>
		</article>
		<article>
			<h2>Group inputs - checkbox</h2>
			<div>
				{#each scoops as scoop (scoop)}
					<input type="checkbox" name="scoops checkbox" value={scoop} bind:group={basket} />
				{/each}
				<span>: {basket}</span>
			</div>
		</article>
		<article>
			<h2>Textarea input</h2>
			<textarea bind:value={texts} />
		</article>
	</section>
</main>

<style>
	textarea {
		flex: 1;
		resize: none;
	}
</style>
