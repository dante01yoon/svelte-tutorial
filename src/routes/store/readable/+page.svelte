<script>
	import { elapsed, time } from '~/store';

	const formatter = new Intl.DateTimeFormat('ko', {
		hour12: false,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<h1>readable store</h1>

<div>
	Current Time is {formatter.format($time)}
</div>
<div>
	this page has been open for {$elapsed} seconds
</div>
