<template>
	<header class="header">
		<div class="header-container">
			<!--  -->
			<h1>Kedy má meniny&nbsp;?</h1>

			<p>
				Nájdite meniny rýchlo a jednoducho, či už podľa mena
				alebo podľa dátumu.
			</p>
			<!--  -->
		</div>
	</header>
</template>


<style scoped>
.header {
	width: 100%;
	height: 100vh;
	min-height: 500px;
	max-height: 700px;
	position: relative;
	background-color: var(--primary-color);
	color: white;
}
.header-container {
	width: 100%;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}
.header h1 {
	font-size: 7em;
	font-weight: 900;
	padding: 0 1em;
	margin-top: 0.2em;
	margin-bottom: 0.2em;
	box-sizing: border-box;
}
.header p {
	width: 80%;
	max-width: 800px;
	font-size: 1.2em;
	margin: auto;
}

@media screen and (max-width: 1400px) {
	.header h1 {
		font-size: 6em;
	}
}

@media screen and (max-width: 1050px) {
	.header {
		max-height: 600px;
		min-height: 450px;
	}
	.header h1 {
		font-size: 5em;
	}
	.header p {
		max-width: 550px;
	}
}

@media screen and (max-width: 800px) {
	.header {
		max-height: 500px;
		min-height: 400px;
	}
	.header h1 {
		font-size: 4em;
	}
	.header p {
		max-width: 350px;
		font-size: 1em;
	}
}

@media screen and (max-width: 700px) {
	.header {
		max-height: 400px;
		min-height: 300px;
	}
	.header h1 {
		font-size: 3.5em;
	}
}

@media screen and (max-width: 550px) {
	.header {
		height: auto;
		min-height: auto;
		max-height: auto;
	}
	.header-container {
		position: relative;
		top: 0;
		transform: translateY(0%);
		padding-top: 5em;
		padding-bottom: 4em;
	}
	.header h1 {
		margin-top: 0;
	}
	.header p {
		max-width: 300px;
	}
}
</style>
