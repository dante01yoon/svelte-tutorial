<script>
	const links = ['logic-key', 'logic-await', 'event-handler', 'binding', 'store/writable'];
</script>

<title>svelte tutorial</title>

<ol>
	{#each links as link (link)}
		<li>
			<a href={`/${link}`}>{link}</a>
		</li>
	{/each}
</ol>
