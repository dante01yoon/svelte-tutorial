<script>
	const links = [
		'logic-key',
		'logic-await',
		'event-handler',
		'binding',
		'store/writable',
		'store/auto-subscribe',
		'store/readable',
		'tweens',
		'springs',
		'transitions',
		'special/self',
		'special/component'
	];
</script>

<title>svelte tutorial</title>

<ol>
	{#each links as link (link)}
		<li>
			<a href={`/${link}`}>{link}</a>
		</li>
	{/each}
</ol>
