<template>
	<footer class="footer">
		<!--  -->
		<p>
			Aplikácia je implementovaná cez framework
			<a href="https://vuejs.org">Vue.js</a>
			a dáta sa získavajú z
			<a href="https://api.abalin.net">International&nbsp;nameday&nbsp;API</a>
		</p>
		<p class="author">
			Vytvoril
			<strong>Peter Bobka</strong>
		</p>
		<!--  -->
	</footer>
</template>


<style scoped>
.footer {
	position: relative;
	background-color: rgb(226, 226, 226);
	text-align: center;
	padding: 3em 0 1em 0;
	margin-top: 5em;
}
.footer p {
	margin: 0;
	line-height: 2em;
	padding-bottom: 1em;
}
.footer a {
	background-color: var(--primary-color);
	color: white;
	padding: 0.1em 0.5em;
	border-radius: 0.5em;
	text-decoration: none;
	margin: 0 0.2em;
}

@media screen and (max-width: 950px) {
	.footer {
		padding-top: 2.5em;
		padding-bottom: 0;
		margin-top: 0em;
	}

	.footer p {
		width: 80%;
		padding-bottom: 2.5em;
		margin: auto;
	}
	p.author {
		border-top: 1px solid rgb(204, 204, 204);
		color: rgb(90, 90, 90);
		padding: 0.6em 0;
	}
}
</style>