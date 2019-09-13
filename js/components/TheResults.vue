<template>
	<div class="results">
		<!--  -->
		<transition-group name="list" tag="ul" class="results-list">
			<!--  -->
			<li v-for="result in results" :key="result.name">
				<!--  -->
				<span>{{ `${result.day}.${result.month}.` }}</span>
				<!--  -->
				<strong>{{ result.name }}</strong>
			</li>
			<!--  -->
		</transition-group>
		<!--  -->
	</div>
</template>


<script>
export default {
	props: {
		results: Array
	}
};
</script>


<style scoped>
.results-list {
	width: 80%;
	max-width: 420px;
	padding: 1em;
	padding-top: 0;
	margin: 0 auto;
}
.results-list li {
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	text-align: left;
	list-style: none;
	margin-bottom: 1em;
}
.results-list li span {
	width: 50px;
	display: inline-block;
	background-color: var(--primary-color);
	color: white;
	text-align: center;
	padding: 0.2em 1em;
	margin-right: 1.6em;
	border-radius: 0.5em;
}
.results-list li strong {
	/* width: 75%; */
	padding: 0.2em 0;
}

.list-enter-active,
.list-leave-active {
	transition: all 0.24s;
}
.list-enter,
.list-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>